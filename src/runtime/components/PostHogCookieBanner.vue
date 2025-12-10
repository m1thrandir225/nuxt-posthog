<template>
  <Transition name="cookie-banner">
    <div v-if="isConsentPending()" class="posthog-cookie-banner" role="dialog" aria-label="Cookie Consent">
      <div class="posthog-cookie-banner__content">
        <p class="posthog-cookie-banner__message">
          {{ message }}
        </p>
        <div class="posthog-cookie-banner__actions">
          <button
            type="button"
            class="posthog-cookie-banner__button posthog-cookie-banner__button--accept"
            @click="handleAccept"
          >
            {{ acceptLabel }}
          </button>
          <button
            type="button"
            class="posthog-cookie-banner__button posthog-cookie-banner__button--reject"
            @click="handleReject"
          >
            {{ rejectLabel }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import usePostHogConsent from '../composables/usePostHogConsent';

interface Props {
  message?: string;
  acceptLabel?: string;
  rejectLabel?: string;
}

withDefaults(defineProps<Props>(), {
  message: 'We use cookies to analyze site usage and improve your experience.',
  acceptLabel: 'Accept',
  rejectLabel: 'Reject',
});

const { isConsentPending, optIn, optOut } = usePostHogConsent();

const handleAccept = () => {
  optIn();
};

const handleReject = () => {
  optOut();
};
</script>

<style scoped>
.posthog-cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-shadow:
    0 -4px 6px -1px rgba(0, 0, 0, 0.1),
    0 -2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
}

@media (min-width: 640px) {
  .posthog-cookie-banner {
    padding: 1.5rem;
  }
}

.posthog-cookie-banner__content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 640px) {
  .posthog-cookie-banner__content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.posthog-cookie-banner__message {
  margin: 0;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
}

@media (min-width: 640px) {
  .posthog-cookie-banner__message {
    text-align: left;
    flex: 1;
  }
}

.posthog-cookie-banner__actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.posthog-cookie-banner__button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.posthog-cookie-banner__button--accept {
  background-color: #6366f1;
  color: #ffffff;
}

.posthog-cookie-banner__button--accept:hover {
  background-color: #4f46e5;
}

.posthog-cookie-banner__button--reject {
  background-color: #ffffff;
  color: #374151;
  border-color: #d1d5db;
}

.posthog-cookie-banner__button--reject:hover {
  background-color: #f9fafb;
}

/* Transition animations */
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>

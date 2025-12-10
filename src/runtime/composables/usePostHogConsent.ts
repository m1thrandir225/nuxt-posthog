import { type PostHog, posthog } from 'posthog-js';

export type ConsentStatus = 'pending' | 'granted' | 'denied';

export default () => {
  /**
   * Get the current consent status
   * @returns 'pending' | 'granted' | 'denied'
   */
  const getConsentStatus = (): ConsentStatus => {
    if (typeof window === 'undefined') {
      return 'denied';
    }

    if (typeof (posthog as PostHog).get_explicit_consent_status === 'function') {
      return (posthog as PostHog).get_explicit_consent_status() as ConsentStatus;
    }

    // Fallback: if cookieless mode is not 'on_reject', assume granted
    return 'granted';
  };

  /**
   * Check if consent is pending
   */
  const isConsentPending = (): boolean => {
    return getConsentStatus() === 'pending';
  };

  /**
   * Check if consent has been granted
   */
  const hasConsent = (): boolean => {
    return getConsentStatus() === 'granted';
  };

  /**
   * Check if consent has been denied
   */
  const isConsentDenied = (): boolean => {
    return getConsentStatus() === 'denied';
  };

  /**
   * Opt in to tracking (grant consent)
   */
  const optIn = (): void => {
    if (typeof window === 'undefined') {
      return;
    }

    if (typeof (posthog as PostHog).opt_in_capturing === 'function') {
      (posthog as PostHog).opt_in_capturing();
    }
  };

  /**
   * Opt out of tracking (deny consent)
   */
  const optOut = (): void => {
    if (typeof window === 'undefined') {
      return;
    }

    // PostHog's consent methods are on the global posthog object
    if (typeof (posthog as PostHog).opt_out_capturing === 'function') {
      (posthog as PostHog).opt_out_capturing();
    }
  };

  return {
    getConsentStatus,
    isConsentPending,
    hasConsent,
    isConsentDenied,
    optIn,
    optOut,
  };
};

---
seo:
  title: Nuxt PostHog
  description: Integrate PostHog into your Nuxt application
---

::u-page-hero
---
orientation: horizontal
---
  :::prose-pre
  ---
  code: npx nuxi init -t github:nuxt-ui-pro/docs
  filename: app.vue
  ---
  ```vue
  <!-- Easily capture events using Vue directives -->
  <button v-posthog-capture="'cta_clicked'">
    Get Started
  </button>

  <!-- Hide content behind feature flags -->
  <PostHogFeatureFlag name="new_feature">
    Content under feature flag
  </PostHogFeatureFlag>
  ```
  :::

#title
Nuxt [PostHog]{.text-primary}

#description
Integrate PostHog into your Nuxt application with minimal effort and maximum flexibility ✨

#links
  :::u-button
  ---
  size: xl
  to: /getting-started
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  target: _blank
  to: https://github.com/mitjans/nuxt-posthog
  variant: subtle
  ---
  Star on Github
  :::
::

::u-page-section
#title
Features

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://ui.nuxt.com
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Documentation built using Nuxt UI
  :::

#features
  :::u-page-feature
  ---
  icon: i-simple-icons-nuxtdotjs
  target: _blank
  to: https://nuxt.com
  ---
  #title
  Nuxt 3 ready

  #description
  You can start using this module in your Nuxt 3 application.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-cog-6-tooth
  target: _blank
  ---
  #title
  Zero Configuration

  #description
  Start right away by just adding your PostHog API key.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-sparkles
  target: _blank
  ---
  #title
  Vue Composables

  #description
  Offers a set of Vue composables to easily integrate PostHog into your application.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-bolt
  target: _blank
  ---
  #title
  Vue Directives

  #description
  Use Vue directives to easily capture PostHog events.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-server
  target: _blank
  ---
  #title
  SSR in mind

  #description
  This module is SSR friendly, making it work with server rendered applications.
  :::

  :::u-page-feature
  ---
  icon: i-heroicons-rocket-launch
  target: _blank
  ---
  #title
  More to come...

  #description
  New features will be added in the future. Stay tuned!
  :::
::

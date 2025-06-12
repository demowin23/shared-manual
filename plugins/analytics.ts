export default defineNuxtPlugin((nuxtApp) => {
  const { gtag } = useRuntimeConfig().public;

  function initGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtag.id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', gtag.id, {
      send_page_view: false // We'll send page views manually
    });

    // Track page views
    nuxtApp.hook('page:finish', () => {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    });

    // Track errors
    window.addEventListener('error', (event) => {
      gtag('event', 'exception', {
        description: event.message,
        fatal: false
      });
    });
  }

  // Only run on client-side and in production
  if (process.client && process.env.NODE_ENV === 'production') {
    nuxtApp.hook('app:mounted', () => {
      initGoogleAnalytics();
    });
  }
}); 
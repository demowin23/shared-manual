interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Track FCP
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = {
        name: 'FCP',
        value: entry.startTime,
        rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor'
      };
      sendToAnalytics(metric);
    }
  }).observe({ type: 'paint', buffered: true });

  // Track LCP
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = {
        name: 'LCP',
        value: entry.startTime,
        rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor'
      };
      sendToAnalytics(metric);
    }
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  // Track FID
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = {
        name: 'FID',
        value: entry.processingStart - entry.startTime,
        rating: entry.duration < 100 ? 'good' : entry.duration < 300 ? 'needs-improvement' : 'poor'
      };
      sendToAnalytics(metric);
    }
  }).observe({ type: 'first-input', buffered: true });

  // Track CLS
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        const metric = {
          name: 'CLS',
          value: clsValue,
          rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
        };
        sendToAnalytics(metric);
      }
    }
  }).observe({ type: 'layout-shift', buffered: true });
}

function sendToAnalytics(metric: {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}) {
  // Send to Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      metric_rating: metric.rating,
      non_interaction: true,
    });
  }
}

export function trackUserEngagement() {
  if (typeof window === 'undefined') return;

  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
    );
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        window.gtag?.('event', 'scroll_depth', {
          event_category: 'User Engagement',
          event_label: `Scrolled ${maxScroll}%`,
          non_interaction: false
        });
      }
    }
  });

  // Track time on page
  const startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    window.gtag?.('event', 'time_on_page', {
      event_category: 'User Engagement',
      event_label: `Time spent: ${timeSpent}s`,
      value: timeSpent,
      non_interaction: false
    });
  });
} 
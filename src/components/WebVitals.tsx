'use client';

import { useReportWebVitals } from 'next/web-vitals';

const ENDPOINT = '/api/vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      rating: metric.rating,
      navigationType: metric.navigationType,
      url: typeof window !== 'undefined' ? window.location.pathname : undefined,
    });

    if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
      const sent = navigator.sendBeacon(
        ENDPOINT,
        new Blob([body], { type: 'application/json' }),
      );
      if (sent) return;
    }

    void fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  });

  return null;
}

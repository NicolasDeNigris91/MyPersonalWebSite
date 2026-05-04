import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    short_name: 'NPDN',
    description:
      'Portfolio de Nicolas Pilegi De Nigris. Software developer baseado em São Paulo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    orientation: 'portrait',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}

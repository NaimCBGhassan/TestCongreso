// metadata.ts

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.congresohumanista.com"),
  title: "Congreso de Educación Humanista - Escuelas Pías",
  description: "Congreso de Educación Humanista - Escuelas Pías",
  alternates: {
    canonical: "https://www.congresohumanista.com",
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

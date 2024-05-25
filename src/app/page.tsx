import Inscription from "@/components/sections/inscription";
import Objectives from "@/components/sections/objectives";
import Chronogram from "@/components/sections/chronogram";
import Contact from "@/components/sections/contact";
import Themes from "@/components/sections/themes";
import Footer from "@/components/widgets/footer";
import Hero from "@/components/sections/hero";

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.congresohumanista.com"),
  title: "Congreso de Educación Humanista - Escuelas Pías",
  description: "Participa en nuestro congreso y reflexiona sobre la auténtica educación con raíces en la tradición occidental y cristiana. Descubre materiales y estrecha lazos con otros grupos educativos.",
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
  keywords : [
    'congreso de educación humanista',
    'educación cristiana',
    'grupos eclesiales y sociales',
    'lazos educativos y sociales',
    'eventos educativos cristianos',
    'propuesta educativa cristiana',
    'materiales bibliograficos de educación'
  ]
};


export default function Home() {

  return (
    <main>
      <Hero />
      <Objectives />
      <Themes />
      <Chronogram />
      <Inscription />
      <div className="relative">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

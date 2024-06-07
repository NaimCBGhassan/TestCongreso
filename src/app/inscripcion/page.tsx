import { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.congresohumanista.com"),
  title: "Congreso de Educación Humanista - Escuelas Pías",
  description:
    "Participa en nuestro congreso y reflexiona sobre la auténtica educación con raíces en la tradición occidental y cristiana. Descubre materiales y estrecha lazos con otros grupos educativos.",
  alternates: {
    canonical: "https://www.congresohumanista.com",
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "congreso de educación humanista",
    "educación cristiana",
    "grupos eclesiales y sociales",
    "lazos educativos y sociales",
    "eventos educativos cristianos",
    "propuesta educativa cristiana",
    "materiales bibliograficos de educación",
  ],
};

export default function Home() {
  return (
    <main>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScfstxio71vaqcCan7F3NGcG28xZJ7u5LCozh3YJM4yVWmw_g/viewform?embedded=true"
        style={{ width: "100%", height: "100%", minHeight: "100vh" }}
        className="pt-24"
      >
        Cargando…
      </iframe>
      <div className="-top4 absolute left-0 top-0 -z-10 h-screen w-full">
        <img
          alt="background hero"
          className="hidden h-full w-full object-cover  object-center lg:block"
          draggable={false}
          width="1440"
          height="800"
          src="/assets/backgrounds/background-hero.webp"
        />
        <img
          alt="background hero "
          className="block h-full w-full object-cover  object-center lg:hidden"
          draggable={false}
          width="420"
          height="720"
          src="/assets/backgrounds/background-hero-mobile.webp"
        />
      </div>
    </main>
  );
}

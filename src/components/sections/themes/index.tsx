"use client";

import { themes } from "@/consts/themes";
import DropdownCard from "./dropdown-card";
import Title from "@/components/ui/title";
import ThemeCard from "./theme-card";
import { useState } from "react";

export default function Themes() {
  const [themeSelect, setThemeSelect] = useState<number | null>(null);

  const onOpen = (id: number) => {
    setThemeSelect(id === themeSelect ? null : id);
  };
  const onClose = () => setThemeSelect(null);

  return (
    <section
      id="tematicas"
      className="relative grid min-h-screen grid-cols-1 lg:grid-cols-3"
    >
      <div className="absolute left-10 top-12 z-20   2xl:left-28">
        <Title title="Temáticas a" active="desarrollar" />
      </div>
      {themes.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          onOpen={onOpen}
          onClose={onClose}
        >
          <DropdownCard
            isOpen={themeSelect === theme.id}
            list={theme.list}
            title={theme.description}
            onClose={onClose}
          />
        </ThemeCard>
      ))}
    </section>
  );
}

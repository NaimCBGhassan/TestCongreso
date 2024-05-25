import IconChevronDown from "@/components/icons/icon-chevron-down";
import { Alegreya } from "next/font/google";
import Button from "@/components/ui/button";

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["500"],
});

interface ThemeCardProps {
  theme: {
    id: number;
    description: string;
    image: string;
    isOpen: boolean;
    list: string[];
  };
  children: React.ReactNode;
  onOpen: (id: number) => void;
  onClose: () => void;
}

export default function ThemeCard({
  theme,
  children,
  onOpen,
  onClose,
}: ThemeCardProps) {
  return (
    <article className="relative h-screen w-full" onClick={onClose}>
      <img
        src={theme.image}
        alt="image"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute left-1/2 top-1/2 flex h-72 w-80  -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-3 rounded-3xl bg-primary/50 px-4 text-white">
        <p
          className={`${alegreya.className} mb-4 w-[12.6rem] text-center text-lg font-medium `}
        >
          {theme.description}
        </p>
        <Button onClick={() => onOpen(theme.id)} className="px-10 py-1">
          <IconChevronDown />
        </Button>
      </div>

      {children}
    </article>
  );
}

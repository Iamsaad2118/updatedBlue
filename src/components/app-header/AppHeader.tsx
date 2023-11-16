import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "../container/Container";
import { AppHeaderNav } from "./AppHeaderNav";
import { AppHeaderLink } from "./AppHeaderLink";

export type AppHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function AppHeader({ children, className }: AppHeaderProps) {
  return (
    <div
      className={twMerge(
        "static lg:sticky top-0 z-50 w-full border-b-4 border-b-accent",
        className,
      )}
    >
      <div className="hidden lg:block h-6 bg-accent"></div>
      <div className="w-full py-4 bg-primary text-white">
        <Container>
          <header className="h-auto lg:h-20 flex flex-col lg:flex-row items-center justify-between gap-4">
            {children}
          </header>
        </Container>
      </div>
    </div>
  );
}

AppHeader.Nav = AppHeaderNav;
AppHeader.Link = AppHeaderLink;

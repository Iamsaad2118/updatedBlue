import { ReactNode } from "react";
import { Container } from "../container/Container";
import { AppHeaderNav } from "./AppHeaderNav";
import { AppHeaderLink } from "./AppHeaderLink";
import { twMerge } from "tailwind-merge";

export type AppHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function AppHeader({ children, className }: AppHeaderProps) {
  return (
    <div
      className={twMerge(
        "sticky top-0 z-50 w-full border-b-4 border-b-accent",
        className,
      )}
    >
      <div className="hidden lg:block h-6 bg-accent"></div>
      <div className="w-full py-4 bg-primary text-white">
        <Container>
          <header className="h-20 flex items-center justify-between">
            {children}
          </header>
        </Container>
      </div>
    </div>
  );
}

AppHeader.Nav = AppHeaderNav;
AppHeader.Link = AppHeaderLink;

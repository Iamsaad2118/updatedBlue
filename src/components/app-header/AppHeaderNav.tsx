import { ReactNode } from "react";

type AppHeaderNavProps = {
  children: ReactNode;
  className?: string;
};

export function AppHeaderNav({ children, className }: AppHeaderNavProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center">{children}</ul>
    </nav>
  );
}

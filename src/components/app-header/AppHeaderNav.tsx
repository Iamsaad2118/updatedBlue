"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AppHeaderLink } from "./AppHeaderLink";
import { CaretDown } from "../icons";
import Link from "next/link";
import { PropsWithChildren } from "react";

type AppHeaderNavProps = {
  className?: string;
};

export function AppHeaderNav({ className }: AppHeaderNavProps) {
  return (
    <NavigationMenu.Root className={className}>
      <NavigationMenu.List className="flex items-center gap-6">
        <AppHeaderLink href="/">Home</AppHeaderLink>
        <AppHeaderLink href="/#save">Save Gary</AppHeaderLink>
        <AppHeaderLink href="/#token">Tokenomics</AppHeaderLink>
        <AppHeaderLink href="/#road">Road Map</AppHeaderLink>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="flex items-center gap-2">
            Gary Can Be Serious
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-16 left-0 bg-white text-text shadow-md">
            <ul className="flex flex-col w-max">
              <NavListItem href="/litepaper">Litepaper</NavListItem>
              <NavListItem href="/trading-control">Trading Control</NavListItem>
              <NavListItem href="legal">Legal</NavListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <a
            href="https://twitter.com/hamacaDAO"
            target="_blank"
            rel="noopener"
          >
            Message Gary
          </a>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function NavListItem({ href, children }: PropsWithChildren & { href: string }) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className="block p-4 hover:bg-secondary hover:text-white transition-colors"
        >
          {children}
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}

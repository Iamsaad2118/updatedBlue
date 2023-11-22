"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AppHeaderLink } from "./AppHeaderLink";
import { CaretDown, Discord, XTwitter } from "../icons";
import { Button } from "../button/Button";

type AppHeaderNavProps = {
  className?: string;
};

export function AppHeaderNav({ className }: AppHeaderNavProps) {
  return (
    <NavigationMenu.Root className={className}>
      <NavigationMenu.List className="flex flex-col lg:flex-row items-center">
        <AppHeaderLink href="/">Home</AppHeaderLink>
        <AppHeaderLink href="/#save">Save Gary</AppHeaderLink>
        <AppHeaderLink href="/#token">Tokenomics</AppHeaderLink>
        <AppHeaderLink href="/#road">Road Map</AppHeaderLink>
        <NavigationMenu.Item className="relative p-2 md:p-4">
          <NavigationMenu.Trigger className="flex items-center gap-2">
            Gary Can Be Serious
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="static lg:absolute top-8 md:top-16 left-0 bg-white text-text shadow-md rounded-md overflow-hidden">
            <ul className="flex flex-col w-max">
              <NavListItem href="/litepaper">Litepaper</NavListItem>
              <NavListItem href="/trading-control">Trading Control</NavListItem>
              <NavListItem href="legal">Legal</NavListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative p-2 md:p-4">
          <a
            href="https://twitter.com/hamacaDAO"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2"
          >
            <span>Message Gary</span>
            <XTwitter />
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative p-2 md:p-4">
          <div>
            <a
              href="https://discord.com/invite/aDXHy4D8vw"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Join our Discord</span>
              <Discord />
            </a>
          </div>
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

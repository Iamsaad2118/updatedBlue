"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AppHeaderLink } from "./AppHeaderLink";
import { CaretDown } from "../icons";
import Link from "next/link";

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
          <NavigationMenu.Content className="absolute top-12 left-0 bg-white text-text">
            <ul className="p-6 space-y-6">
              <li>
                <Link href="/litepaper">Litepaper</Link>
              </li>
              <li>
                <Link href="/trading-control">Trading Control</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
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

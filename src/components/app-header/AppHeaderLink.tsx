"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link, { LinkProps } from "next/link";
import { useParams, usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function AppHeaderLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  const [isActive, setIsActive] = useState(false);

  const { href } = props;
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    setIsActive(href === `${pathname}${window.location.hash}`);
  }, [href, pathname, params]);

  return (
    <NavigationMenu.Item
      className={twMerge("p-4 m-2", isActive ? "border-b-4 border-accent" : "")}
    >
      <Link {...props}>{children}</Link>
    </NavigationMenu.Item>
  );
}

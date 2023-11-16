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
      className={twMerge(
        "relative flex justify-center p-0 md:p-4 m-2",
        isActive
          ? "before:absolute before:bottom-0 before:w-full before:h-1 before:bg-accent"
          : "",
      )}
    >
      <Link {...props}>{children}</Link>
    </NavigationMenu.Item>
  );
}

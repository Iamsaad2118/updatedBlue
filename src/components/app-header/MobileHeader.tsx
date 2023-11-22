"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AppHeader } from "./AppHeader";
import { Heading } from "../typography/Heading";
import { Button } from "../button/Button";
import { Bars, Discord, Xmark } from "../icons";

export function MobileHeader({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <AppHeader className={className}>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Hamaca logo"
              width={100}
              height={100}
              className="w-auto"
            />
          </Link>
        </div>
        <Heading tag="h2" className="text-center">
          Welcome to Hamaca.io
        </Heading>
        <div>
          <a href="https://discord.com/invite/aDXHy4D8vw" target="_blank">
            <Button
              variant="secondary"
              className="flex items-center gap-2 text-accent"
            >
              <span>Join Our Discord</span>
              <Discord />
            </Button>
          </a>
        </div>
        <Button
          onClick={() => setOpen(!open)}
          className="text-xl"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <Xmark /> : <Bars />}
        </Button>
        {open && (
          <AppHeader.Nav className="bg-white text-text p-4 rounded-md" />
        )}
      </div>
    </AppHeader>
  );
}

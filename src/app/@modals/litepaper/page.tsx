"use client";

import { usePathname, useRouter } from "next/navigation";
import { LitepaperModal } from "./LitepaperModal";
import React from "react";

export default function Litepaper() {
  const route = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  React.useLayoutEffect(() => {
    if (pathname === "/litepaper") {
      setOpen(true);
    }
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);

    route.push("/");
  };

  return <LitepaperModal open={open} onClose={handleClose} />;
}

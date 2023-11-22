"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LegalModal } from "./LegalModal";

export default function Legal() {
  const route = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  React.useLayoutEffect(() => {
    if (pathname === "/legal") {
      setOpen(true);
    }
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);

    route.push("/");
  };

  return <LegalModal open={open} onClose={handleClose} />;
}

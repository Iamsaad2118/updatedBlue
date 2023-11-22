"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { TradingControlModal } from "./TradingControlModal";

export default function TradingControl() {
  const route = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  React.useLayoutEffect(() => {
    if (pathname === "/trading-control") {
      setOpen(true);
    }
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);

    route.push("/");
  };

  return <TradingControlModal open={open} onClose={handleClose} />;
}

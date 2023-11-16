import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Decorator, Snail } from "../svg";
import { useInView } from "react-intersection-observer";

export type ModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  hasLogo?: boolean;
  hasDecorator?: boolean;
  className?: string;
};

export function Modal({
  open,
  onClose,
  children,
  title,
  description,
  hasLogo,
  hasDecorator,
  className,
}: ModalProps) {
  const [hasRevealed, setHasRevealed] = React.useState(false);

  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      setHasRevealed(true);
    }
  }, [inView]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          setHasRevealed(false);
          onClose();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-50 inset-0 bg-black opacity-60" />
        <Dialog.Content
          className={twMerge(
            "fixed z-50 top-1/2 left-1/2 bg-accent text-white",
            "-translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/20",
            "w-[85vw] max-h-[75vh] overflow-auto",
            className,
          )}
        >
          <div className="relative flex flex-col gap-4 items-center p-6">
            {hasDecorator && (
              <div className="absolute top-4 w-full overflow-hidden">
                <Decorator className="h-[350px] translate-x-[-30%]" />
              </div>
            )}
            {hasDecorator && (
              <div className="absolute bottom-0 w-full overflow-hidden rotate-180">
                <Decorator className="h-[350px] translate-x-[-30%]" />
              </div>
            )}
            {hasLogo && (
              <Image
                src="/logo.jpeg"
                alt="Hamaca logo"
                width={120}
                height={120}
                className="relative"
              />
            )}
            {title && (
              <Dialog.Title className="relative text-2xl font-bold">
                {title}
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description className="relative">
                {description}
              </Dialog.Description>
            )}
            <div className="relative">{children}</div>
            <div ref={ref} className="relative self-end">
              <div
                className={
                  hasRevealed
                    ? "opacity-1 transition-opacity delay-[3s] animate-slide-in-from-left animation-delay-[3s]"
                    : "opacity-0"
                }
              >
                <Snail width={300} height={300} />
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

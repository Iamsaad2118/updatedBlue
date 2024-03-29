import React, { PropsWithChildren, RefObject } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import * as Dialog from "@radix-ui/react-dialog";
import { useInView } from "react-intersection-observer";
import { Decorator } from "../svg";
import { Button } from "../button/Button";
import { Xmark } from "../icons";

export type ModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  hasLogo?: boolean;
  hasDecorator?: boolean;
  className?: string;
  triggerButton?: React.ReactNode;
  restoreFocusElement?: RefObject<HTMLButtonElement>;
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
  triggerButton,
  restoreFocusElement,
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
      {triggerButton && (
        <Dialog.Trigger ref={restoreFocusElement} asChild>
          {triggerButton}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay
          className={twMerge(
            "fixed z-50 inset-0 bg-black opacity-80",
            open ? "animate-fade-in" : "animate-fade-out",
          )}
        />
        <Dialog.Content
          className={twMerge(
            "fixed isolate z-50 top-1/2 left-1/2 bg-accent text-white",
            "-translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/20",
            "w-[85vw] max-h-[75vh] overflow-auto",
            className,
            open
              ? "motion-safe:animate-zoom-in"
              : "motion-safe:animate-zoom-out",
          )}
          onCloseAutoFocus={() => {
            restoreFocusElement?.current?.focus();
          }}
        >
          <Dialog.Close asChild>
            <Button
              aria-label="Close"
              className="absolute z-10 top-0 right-0 bg-transparent hover:opacity-70"
            >
              <Xmark />
            </Button>
          </Dialog.Close>
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
                <Image
                  src="/snail.png"
                  alt="Snail"
                  width={240}
                  height={240}
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

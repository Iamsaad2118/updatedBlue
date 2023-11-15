import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "../typography/Heading";

export type ModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  withLogo?: boolean;
  className?: string;
};

export function Modal({
  open,
  onClose,
  children,
  title,
  description,
  withLogo,
  className,
}: ModalProps) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-50 inset-0 bg-black opacity-60" />
        <Dialog.Content
          className={twMerge(
            "fixed z-50 top-1/2 left-1/2 bg-accent py-8 px-10 text-white",
            "-translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/20",
            "w-[85vw] max-h-[85vh] overflow-auto",
            className,
          )}
        >
          <div className="flex flex-col gap-2 items-center">
            {withLogo && (
              <Image
                src="/logo.jpeg"
                alt="Hamaca logo"
                width={120}
                height={120}
              />
            )}
            {title && (
              <Dialog.Title className="text-2xl font-bold">
                <Heading tag="h2">{title}</Heading>
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description>
                <Heading tag="h3">{description}</Heading>
              </Dialog.Description>
            )}
          </div>
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

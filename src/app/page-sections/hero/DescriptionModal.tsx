import Link from "next/link";
import { Modal } from "@/components/modal/Modal";
import React from "react";
import { Button } from "@/components/button/Button";

export function DescriptionModal() {
  const [open, setOpen] = React.useState(false);

  const triggerBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className="md:w-[600px]"
      triggerButton={
        <Button
          className="text-lg hover:bg-accent focus:bg-accent transition-colors animate-grow-and-shrink"
          onClick={() => setOpen(true)}
        >
          Learn Here
        </Button>
      }
      restoreFocusElement={triggerBtnRef}
    >
      <div className="p-6">
        <p className="text-lg mb-6">
          At the heart of Gary the Snail is a playful and whimsical spirit,
          embodying the essence of a MemeCoin. However, as funds begin to
          accumulate, our vision extends beyond just memes. Our aspiration is to
          contribute to the Hamaca project, fostering sustainable tourism and
          environmental conservation. Please note that purchasing Gary the Snail
          tokens is not an investment and should not be viewed as such. There
          are no guaranteed returns and this is not an investment contract. Our
          aim is to underpromise and overdeliver, evolving from a MemeCoin into
          a token with a meaningful impact, while maintaining a light-hearted
          community spirit. Your involvement in Gary the Snail is a step towards
          making a difference in a fun and unique way!
        </p>
        <Link
          href="/litepaper"
          onClick={() => setOpen(false)}
          className="bg-primary px-6 py-2 rounded-md"
        >
          Read Lite Paper
        </Link>
      </div>
    </Modal>
  );
}

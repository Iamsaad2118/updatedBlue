import React from "react";
import { Modal, ModalProps } from "@/components/modal/Modal";

type LegalModalProps = Pick<ModalProps, "open" | "onClose">;

export function LegalModal({ open, onClose }: LegalModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Legal" className="md:w-[600px]">
      <div className="p-6">
        <p className="text-lg">
          As the treasury burgeons with the mellifluous clink of newfound
          resources, our roadmap unfurls, becoming as exhilarating as a tempest
          in a teacup! I, Gary, am primed to roll up the sleeves and delve into
          the legal brass tacks. And who else to escort us through this
          labyrinth than the legal virtuosos at the BSL Group? Their adeptness
          in unraveling the Gordian knots of legal intricacies is precisely the
          elixir our venture necessitates. As we gambol forward on this
          expedition, the aegis of the BSL Group ensures we shan’t be mere
          adventurers in the legal wilderness, but sagacious navigators with a
          sterling compass in hand. This alliance isn’t merely a plume in our
          cap, but a monumental stride towards ensuring we are ensconced in
          legal surety. So, remain agog and all ears as we embark upon this
          auspicious alliance!
        </p>
      </div>
    </Modal>
  );
}

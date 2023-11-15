import React from "react";
import { Modal, ModalProps } from "@/components/modal/Modal";

type TradingControlModalProps = Pick<ModalProps, "open" | "onClose">;

export function TradingControlModal({
  open,
  onClose,
}: TradingControlModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Trading Control Through Liquidity Pools"
      withLogo={true}
    >
      <div className="text-lg">
        <p>
          Our smart contract is designed with a phased liquidity approach to
          ensure a fair and orderly distribution of our tokens. We employ a
          function called setRule within our smart contract to manage the
          trading permissions during different phases of liquidity provisioning.
          Here’s how it works:
        </p>
        <p>
          <strong>Phased Liquidity Provisioning:</strong>
          <br />
          Our token distribution is carried out in four distinct phases. In each
          phase, a dedicated Uniswap V3 liquidity pool is created. The setRule
          function is invoked to specify the liquidity pool for each phase,
          which restricts trading to that particular pool.
        </p>
        <p>
          <strong>Trading Restrictions:</strong>
          <br />
          To prevent excessive accumulation and to promote fair distribution, a
          maximum holding amount restriction is enforced throughout all phases.
          No address, except for the contract creator, can hold more than 5% of
          the total token supply at any given time.
        </p>
        <p>
          <strong>Post Funding Phases – Enabling Broader Trading:</strong>
          <br />
          Upon completion of all funding phases, the setRule function is invoked
          once more to enable broader trading across all decentralized exchanges
          (DEXs), while still maintaining the maximum holding amount
          restriction.
        </p>
        <p>
          <strong>Ensuring Contract Integrity:</strong>
          <br />
          Our smart contract has been meticulously crafted to ensure it operates
          as intended. We have conducted thorough testing in a controlled
          environment and consulted with seasoned smart contract developers to
          verify its functionality and security. Moreover, clear documentation
          accompanies our smart contract to provide a comprehensive
          understanding of its workings.&nbsp;
        </p>
      </div>
    </Modal>
  );
}

import React from "react";
import { Modal, ModalProps } from "@/components/modal/Modal";

type LitepaperModalProps = Pick<ModalProps, "open" | "onClose">;

export function LitepaperModal({ open, onClose }: LitepaperModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hamaca Litepaper"
      description="Hamaca Project Litepaper"
      withLogo={true}
    >
      <div className="p-6 text-lg">
        <ol className="list-decimal p-6">
          <li>
            <strong>Introduction:</strong> <br />
            Embark on the Hamaca journey, a pioneering venture intertwining
            sustainable tourism, environmental preservation, and community
            engagement. The quest commences at the ‘Gary’s Mansion Phase,’ the
            milestone of raising approximately $51 million, setting the
            foundation for this avant-garde ecosystem.
          </li>
          <li>
            <strong>Blockchain Ecosystem:</strong> <br />
            Central to Hamaca is a blockchain ecosystem fostering transparency,
            decentralization, and community governance. The Hamaca ERC-20 token
            on ETHEREUM (HAMA) serves as the cornerstone for engagement, while
            the later airdrop of Non-Fungible Tokens (NFTs) will symbolize
            stewardship towards environmental conservation and may grant
            rewards.
          </li>
          <li>
            <strong>Not an Investment Contract:</strong> <br />
            It is imperative to delineate that participation in Hamaca is a
            communal and ecological endeavour, not an investment contract. The
            ethos of Hamaca is rooted in collective action towards sustainable
            tourism and environmental stewardship. HAMA currently considered a
            meme coin.
          </li>
          <li>
            <strong>The Hamaca Foundation:</strong>
            <br />
            Early on, the establishment of the Hamaca Foundation is envisaged to
            provide tax receipts to initial IDO participants retaining their
            tokens, facilitating tax deductions against their benevolent
            “donation.” Upon securing the necessary funds, we intend to enlist
            the services of BSL Group, a distinguished firm specializing in
            legal departments for start-ups, for the formulation of our
            foundation and for enduring legal counsel as we progress through the
            regulatory milieu and further our project’s ambitions.
          </li>
          <li>
            <strong>Community Governance via DAO:</strong>
            <br />
            Hamaca envisions a Decentralized Autonomous Organization (DAO) for
            democratic governance, allowing community members to partake in
            pivotal decision-making processes, embodying a self-governed,
            transparent community. The proposed governance; Archyum Theory,
            which melds Futarchy and Quantum theory intentions to foster a
            conscious and intentional approach to governance. This innovative
            model envisions a paradigm shift in decision-making, potentially
            leading to more ethical, inclusive and effective policy outcomes,
            thus synergizing well with the democratic ethos of the DAO.
          </li>
          <li>
            <strong>Sustainable Tourism and Environmental Stewardship:</strong>
            <br />
            Hamaca unveils a multifaceted strategy to create eco-friendly
            infrastructures for sustainable tourism while preserving 80% of the
            land for environmental conservation and education. This encompasses
            a tri-fold waste management approach, establishment of diverse
            nature trails, and identification and development of natural
            landmarks. Educational programs aimed at nurturing environmental
            consciousness among visitors and the community complement these
            initiatives.
          </li>
          <li>
            <strong>Tokenomics and Fundraising:</strong>
            <br />
            The fundraising odyssey is orchestrated around a tiered token
            offering mechanism. The Initial Decentralized Exchange Offering
            (IDO) serves as the conduit for offering 80% of Hamaca tokens to the
            community. The funds amassed will be earmarked for property
            acquisition and development, infrastructure establishment, and the
            implementation of sustainable&nbsp;eco-tourism accommodations.
          </li>
          <li>
            <strong>Sustainable Ecosystem:</strong> <br />
            Hamaca champions sustainability, endorsing eco-friendly practices
            and renewable energy utilization. Economic growth in nearby
            communities is encouraged through local collaborations and a
            complete twin based metaverse of the entire eco-system is
            envisioned.
          </li>
          <li>
            <strong>Marketing and Awareness:</strong> <br />A robust marketing
            strategy encompassing online and offline channels, strategic
            partnerships are envisaged to galvanize support and engagement for
            the project.
          </li>
        </ol>
        <p>
          <strong>Conclusion:</strong> <br />
          The Hamaca Project unfolds a robust, community-centric blueprint
          intertwining sustainable tourism and environmental conservation.
          Leveraging innovative blockchain technology, it fosters a democratic
          governance model and environmental stewardship, aspiring to pioneer a
          new paradigm in sustainable tourism and conservation. Through a
          meticulous fundraising strategy, legal structuring, and engaging
          marketing endeavors, Hamaca endeavors to build an eco-conscious
          community, underpinning its ambitions with a solid foundation laid
          down at the ‘Gary’s Mansion Phase.’ The synergies between the
          blockchain ecosystem, community governance, and sustainability
          initiatives underscore Hamaca’s potential to create a meaningful and
          enduring impact.
        </p>
        <p>
          *BSL Group :{" "}
          <a
            className="text-primary"
            href="https://bsl.group/"
            target="_blank"
            rel="noopener"
          >
            https://bsl.group/
          </a>
        </p>
        <p>
          *HAMACA Token Symbol : HAMA contract :{" "}
          <a
            className="text-primary"
            href="https://etherscan.io/token/0x14A933E66db326db730a0189451b48951353A658"
            target="_blank"
            rel="noopener"
          >
            https://etherscan.io/token/0x14A933E66db326db730a0189451b48951353A658
          </a>
        </p>
      </div>
    </Modal>
  );
}

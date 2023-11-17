import React from "react";
import { Modal, ModalProps } from "@/components/modal/Modal";
import { Heading } from "@/components/typography/Heading";
import { FilePdf } from "@/components/icons";

type LitepaperModalProps = Pick<ModalProps, "open" | "onClose">;

export function LitepaperModal({ open, onClose }: LitepaperModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hamaca Litepaper"
      description="Hamaca Project Litepaper"
      hasLogo={true}
      hasDecorator={true}
    >
      <div className="p-6 text-md lg:text-lg">
        <ol className="list-decimal">
          <li>
            <Heading tag="h4">Introduction:</Heading>
            <p>
              Embark on the Hamaca journey, a pioneering venture intertwining
              sustainable tourism, environmental preservation, and community
              engagement. The quest commences at the ‘Gary’s Mansion Phase,’ the
              milestone of raising approximately $51 million, setting the
              foundation for this avant-garde ecosystem.
            </p>
          </li>
          <li>
            <Heading tag="h4">Blockchain Ecosystem:</Heading>
            <p>
              Central to Hamaca is a blockchain ecosystem fostering
              transparency, decentralization, and community governance. The
              Hamaca ERC-20 token on ETHEREUM (HAMA) serves as the cornerstone
              for engagement, while the later airdrop of Non-Fungible Tokens
              (NFTs) will symbolize stewardship towards environmental
              conservation and may grant rewards.
            </p>
          </li>
          <li>
            <Heading tag="h4">Not an Investment Contract:</Heading>
            <p>
              It is imperative to delineate that participation in Hamaca is a
              communal and ecological endeavour, not an investment contract. The
              ethos of Hamaca is rooted in collective action towards sustainable
              tourism and environmental stewardship. HAMA currently considered a
              meme coin.
            </p>
          </li>
          <li>
            <Heading tag="h4">The Hamaca Foundation:</Heading>
            <p>
              Early on, the establishment of the Hamaca Foundation is envisaged
              to provide tax receipts to initial IDO participants retaining
              their tokens, facilitating tax deductions against their benevolent
              “donation.” Upon securing the necessary funds, we intend to enlist
              the services of BSL Group, a distinguished firm specializing in
              legal departments for start-ups, for the formulation of our
              foundation and for enduring legal counsel as we progress through
              the regulatory milieu and further our project’s ambitions.
            </p>
          </li>
          <li>
            <Heading tag="h4">Community Governance via DAO:</Heading>
            <p>
              Hamaca envisions a Decentralized Autonomous Organization (DAO) for
              democratic governance, allowing community members to partake in
              pivotal decision-making processes, embodying a self-governed,
              transparent community. The proposed governance; Archyum Theory,
              which melds Futarchy and Quantum theory intentions to foster a
              conscious and intentional approach to governance. This innovative
              model envisions a paradigm shift in decision-making, potentially
              leading to more ethical, inclusive and effective policy outcomes,
              thus synergizing well with the democratic ethos of the DAO.
            </p>
          </li>
          <li>
            <Heading tag="h4">
              Sustainable Tourism and Environmental Stewardship:
            </Heading>
            <p>
              Hamaca unveils a multifaceted strategy to create eco-friendly
              infrastructures for sustainable tourism while preserving 80% of
              the land for environmental conservation and education. This
              encompasses a tri-fold waste management approach, establishment of
              diverse nature trails, and identification and development of
              natural landmarks. Educational programs aimed at nurturing
              environmental consciousness among visitors and the community
              complement these initiatives.
            </p>
          </li>
          <li>
            <Heading tag="h4">Tokenomics and Fundraising:</Heading>
            <p>
              The fundraising odyssey is orchestrated around a tiered token
              offering mechanism. The Initial Decentralized Exchange Offering
              (IDO) serves as the conduit for offering 80% of Hamaca tokens to
              the community. The funds amassed will be earmarked for property
              acquisition and development, infrastructure establishment, and the
              implementation of sustainable&nbsp;eco-tourism accommodations.
            </p>
          </li>
          <li>
            <Heading tag="h4">Sustainable Ecosystem:</Heading>
            <p>
              Hamaca champions sustainability, endorsing eco-friendly practices
              and renewable energy utilization. Economic growth in nearby
              communities is encouraged through local collaborations and a
              complete twin based metaverse of the entire eco-system is
              envisioned.
            </p>
          </li>
          <li>
            <Heading tag="h4">Marketing and Awareness:</Heading>A robust
            <p>
              marketing strategy encompassing online and offline channels,
              strategic partnerships are envisaged to galvanize support and
              engagement for the project.
            </p>
          </li>
        </ol>
        <div className="space-y-4">
          <Heading tag="h4">Conclusion:</Heading>
          <p>
            The Hamaca Project unfolds a robust, community-centric blueprint
            intertwining sustainable tourism and environmental conservation.
            Leveraging innovative blockchain technology, it fosters a democratic
            governance model and environmental stewardship, aspiring to pioneer
            a new paradigm in sustainable tourism and conservation. Through a
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
          <div style={{ wordBreak: "break-word" }}>
            <p>*HAMACA Token Symbol : HAMA contract : </p>
            <a
              className="text-primary"
              href="https://etherscan.io/token/0x14A933E66db326db730a0189451b48951353A658"
              target="_blank"
              rel="noopener"
            >
              https://etherscan.io/token/0x14A933E66db326db730a0189451b48951353A658
            </a>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/hamaca-litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md"
          >
            <FilePdf />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </Modal>
  );
}

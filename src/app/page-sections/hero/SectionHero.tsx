import { Container } from "@/components/container/Container";
import { Snail } from "@/components/svg";
import { Heading } from "@/components/typography/Heading";

export function SectionHero() {
  return (
    <section className="min-h-[calc(100vh-30rem)] mb-20 border-b-8 border-b-primary">
      <Container>
        <div className="flex flex-col">
          <div className="flex mt-auto">
            <div className="flex-1">
              <div className="flex flex-col gap-4 text-white">
                <Heading tag="h1">
                  Gary introduces you the first meme coin with a meaning ! What
                  does that meme ?!
                </Heading>
                <div className="self-end">
                  <Snail
                    width={300}
                    height={300}
                    className="transform scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
            <div>
              {/* TODO: Uniswap Widget */}
              <div className="w-96 h-[36rem] bg-white"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

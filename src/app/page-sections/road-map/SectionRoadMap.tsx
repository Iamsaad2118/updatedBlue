import { Heading } from "@/components/typography/Heading";
import { Container } from "@/components/container/Container";
import { Timeline } from "./Timeline";

export function SectionRoadMap() {
  return (
    <section id="road" className="py-16">
      <Container>
        <div className="flex flex-col gap-8 items-center">
          <Heading tag="h2" className="text-white">
            Gary’s Meme-tacular Liquidity Pool Party 🐌🌊💰
          </Heading>
          <div className="space-y-4 text-white text-center">
            <p>
              Alright, folks, gather around because Gary’s got another grand
              announcement! His vision? Think of it as a diving competition, but
              instead of Olympic swimmers, we’ve got Liquidity Pools. And
              instead of water, there’s… well, a lot of tokens.
            </p>
            <p>
              Drumroll …Introducing, Gary’s 4-Step “Pool-tastic” Liquidity Leap!
            </p>
          </div>
          <Timeline />
          <div className="space-y-4 text-white text-center">
            <p>
              And now, the plot twist: As soon as our hero Gary raises a cool 51
              million USDT, he’s going to shut down that last pool. That’s
              right! Party’s over, no more diving! And any remaining tokens?
              They’re getting burned. But don’t fret, Gary’s being super
              careful. He’s making sure not to toast his precious lettuce stash
              while at it. 🥬🔥
            </p>
            <p>
              Join Gary on this splashing adventure and let’s help him make
              waves in the world of crypto! 🐌💦🎉
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

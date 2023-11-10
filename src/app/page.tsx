import { Heading } from "@/components/typography/Heading";
import { Container } from "@/components/container/Container";
import { Snail } from "@/components/svg";
import { ImageComparison } from "./page-sections/ImageComparison";

export default function Home() {
  return (
    <main className="py-24 bg-neutral-800">
      <Container>
        <section className="min-h-[calc(100vh-30rem)] mb-20 border-b-8 border-b-orange-600">
          <div className="flex flex-col">
            <div className="flex mt-auto">
              <div className="flex-1">
                <div className="flex flex-col gap-4 text-white">
                  <Heading tag="h1">
                    Gary introduces you the first meme coin with a meaning !
                    What does that meme ?!
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
        </section>
        <section id="save" className="mb-40">
          <div className="flex gap-4">
            <div className="flex-1 h-[550px] overflow-y-scroll text-white">
              <Heading tag="h3" className="sticky top-0 bg-neutral-800 pb-6">
                Save Gary the Snail{"'"}s Mansion
              </Heading>
              <div className="space-y-4 p-2">
                <p>
                  Alright, alright, gather around folks, because Gary the Snail
                  has a meme-tastic story to share! You remember Gary, right?
                  Not the one from SpongeBob or from the SEC, the one from that
                  show that you only watch at 3 a.m. ? That’s right! 🐌
                </p>
                <p>
                  Gary has been touring the world (at a pace only a snail would
                  understand) and stumbled upon this magical place called
                  Bacalar. Imagine this: A snail dream home nestled in the heart
                  of the Riviera Maya. We’re talking about the kind of home
                  you’d see on “MTV Snail Cribs” (if that was a thing).
                </p>
                <p>
                  Now, here’s where it gets wild. Gary’s dream home isn’t just
                  any pad. It’s the epicenter of all things green, techy, and
                  wanderlust-y! Like if Captain Planet decided to throw a rave
                  with Elon Musk in the middle of paradise. Yep, that’s Hamaca
                  for you. 💃🕺
                </p>
                <p>
                  Gary’s thinking, “With the power of blockchain (whatever that
                  means, he’s a snail after all), I can turn my crib into a
                  beacon of hope, saving the Riviera Maya while throwing the
                  biggest snail parties EVER!” And what does Gary want in
                  return? A mere 51 million dollars. You know, just a tiny
                  amount to preserve his crib, the plants, the animals, and of
                  course, his uber-slow wifi connection.
                </p>
                <p>
                  “Snail token? What’s that?” you ask? Gary has introduced
                  Hamaca tokens. These aren’t your average tokens that get lost
                  in the couch. These are the golden tickets that make Willy
                  Wonka’s look like expired coupons. With these tokens, you’re
                  not just supporting nature; you’re part of Gary’s elite club –
                  where members get access to the world’s largest hammock,
                  real-time snail races (brace yourself, they’re intense), and
                  even an invitation to Gary’s annual slow-motion rave.
                </p>
                <p>
                  And here’s the meme magic: when Gary gets 51 million, your
                  Hamaca token’s will make you get a NFT’s. That’s right,
                  Non-Fungible Tokens, or as Gary likes to call it, “Never Fast
                  Turtles” (he’s still working on his tech lingo).
                </p>
                <p>
                  But Hamaca isn’t just about Gary and his slow-paced
                  adventures. Nope! It’s a whole universe – physically and
                  virtually; a twin-based reality/metaverse if you will. Here
                  you can immerse yourself in the wonders of the Riviera Maya.
                  Dive deep (not too deep, you don’t want to find Nemo) into its
                  eco-beauty, all through the eyes of Gary’s many other jungle
                  pals performing in front of real-time cameras.
                </p>
                <p>
                  Finally, for those of you with a green thumb (or shell),
                  Hamaca is an eco-utopia. It’s where the snails rule, the trees
                  sway, and humans come to play, learn, and, most importantly,
                  preserve. So, are you ready to help Gary keep his crib and
                  make the Riviera Maya the most snail-tastic place on earth?
                </p>
                <p>
                  In a (snail) shell: Gary’s Hamaca is the ultimate blend of
                  slow living, fast tech, and endless eco-fun. And all he needs
                  is 51 million dollars. Who’s in? 🐌🌴
                </p>
              </div>
            </div>
            <div className="flex-1 h-[550px]">
              <ImageComparison
                normalImageProps={{
                  src: "/save-gary.jpeg",
                  alt: "Save Gary",
                }}
                blurredImageProps={{
                  src: "/save-gary-blurred.png",
                  alt: "Save Gary blurred",
                }}
              />
            </div>
          </div>
        </section>
        <section id="token" className="mb-40">
          <div className="flex gap-4">
            <div className="flex-1 h-[550px]">
              <ImageComparison
                normalImageProps={{
                  src: "/token.jpeg",
                  alt: "Token",
                }}
                blurredImageProps={{
                  src: "/token-blurred.png",
                  alt: "Token blurred",
                }}
              />
            </div>
            <div className="flex-1 h-[550px] overflow-y-scroll text-white">
              <Heading tag="h3" className="sticky top-0 bg-neutral-800 pb-6">
                Gary{"'"}s Meme-tacular Tokenomics Reveal! 🐌🪙💡
              </Heading>
              <div className="space-y-4 p-2">
                <p>
                  Alright, you savvy future snail-coin billionaires, brace your
                  antennae because here comes the lowdown on Gary’s tokenomics.
                  You know, the stuff that makes sense to people who understand
                  how to set the time on a microwave.
                </p>
                <p>
                  First off, we got a whopping 21 billion tokens in supply. Why
                  21 billion? Well, Gary tried to count higher, but after 21… he
                  got distracted by lettuce. 🥬
                </p>
                <p>
                  Now, to the founders! And because Gary’s got two beautifully
                  bulbous eyes, he thought, “Hey, let’s keep the math simple.”
                  So each founder gets 5%. One for each Gary-eye! 👁👁 Makes
                  sense, right? But here’s the twist: founders won’t be selling
                  more than 10% of their allocation each year. Why? Well, Gary
                  figured that acquiring his dream mansion and setting up all
                  the physical and techy infrastructures is kind of like him
                  running a marathon. It’ll take about 10 years, give or take a
                  few snail naps.
                </p>
                <p>
                  Then there’s 5% set aside for Gary’s Marketing and Fan Club.
                  Why? Because every snail needs a good PR team to stop being
                  mistaken for a sluggish garden pest and start being seen as
                  the blockchain mogul he truly is!
                </p>
                <p>
                  Now, for the tech team, another 5% is sliced off the lettuce.
                  These guys have to write fancy stuff like smart contracts,
                  develop a Twin-based Metaverse on spatial.io (which, between
                  you and me, Gary thinks is a fancy sandwich), and a bunch of
                  other technobabble. Not to forget getting Gary up to speed
                  with Starlink’s internet. Because how else is Gary going to
                  stream his favorite soap operas in ultra-slow-mo HD?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="road">Road Map</section>
      </Container>
    </main>
  );
}

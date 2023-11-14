import { Heading } from "@/components/typography/Heading";
import { ImageComparison } from "../ImageComparison";
import { Container } from "@/components/container/Container";

export function SectionSave() {
  return (
    <section id="save" className="mb-40">
      <Container>
        <div className="flex gap-4">
          <div className="flex-1 h-[550px] overflow-y-scroll text-white">
            <Heading tag="h2" className="sticky top-0 bg-dark pb-6">
              Save Gary the Snail{"'"}s Mansion
            </Heading>
            <div className="space-y-4 p-2">
              <p>
                Alright, alright, gather around folks, because Gary the Snail
                has a meme-tastic story to share! You remember Gary, right? Not
                the one from SpongeBob or from the SEC, the one from that show
                that you only watch at 3 a.m. ? That’s right! 🐌
              </p>
              <p>
                Gary has been touring the world (at a pace only a snail would
                understand) and stumbled upon this magical place called Bacalar.
                Imagine this: A snail dream home nestled in the heart of the
                Riviera Maya. We’re talking about the kind of home you’d see on
                “MTV Snail Cribs” (if that was a thing).
              </p>
              <p>
                Now, here’s where it gets wild. Gary’s dream home isn’t just any
                pad. It’s the epicenter of all things green, techy, and
                wanderlust-y! Like if Captain Planet decided to throw a rave
                with Elon Musk in the middle of paradise. Yep, that’s Hamaca for
                you. 💃🕺
              </p>
              <p>
                Gary’s thinking, “With the power of blockchain (whatever that
                means, he’s a snail after all), I can turn my crib into a beacon
                of hope, saving the Riviera Maya while throwing the biggest
                snail parties EVER!” And what does Gary want in return? A mere
                51 million dollars. You know, just a tiny amount to preserve his
                crib, the plants, the animals, and of course, his uber-slow wifi
                connection.
              </p>
              <p>
                “Snail token? What’s that?” you ask? Gary has introduced Hamaca
                tokens. These aren’t your average tokens that get lost in the
                couch. These are the golden tickets that make Willy Wonka’s look
                like expired coupons. With these tokens, you’re not just
                supporting nature; you’re part of Gary’s elite club – where
                members get access to the world’s largest hammock, real-time
                snail races (brace yourself, they’re intense), and even an
                invitation to Gary’s annual slow-motion rave.
              </p>
              <p>
                And here’s the meme magic: when Gary gets 51 million, your
                Hamaca token’s will make you get a NFT’s. That’s right,
                Non-Fungible Tokens, or as Gary likes to call it, “Never Fast
                Turtles” (he’s still working on his tech lingo).
              </p>
              <p>
                But Hamaca isn’t just about Gary and his slow-paced adventures.
                Nope! It’s a whole universe – physically and virtually; a
                twin-based reality/metaverse if you will. Here you can immerse
                yourself in the wonders of the Riviera Maya. Dive deep (not too
                deep, you don’t want to find Nemo) into its eco-beauty, all
                through the eyes of Gary’s many other jungle pals performing in
                front of real-time cameras.
              </p>
              <p>
                Finally, for those of you with a green thumb (or shell), Hamaca
                is an eco-utopia. It’s where the snails rule, the trees sway,
                and humans come to play, learn, and, most importantly, preserve.
                So, are you ready to help Gary keep his crib and make the
                Riviera Maya the most snail-tastic place on earth?
              </p>
              <p>
                In a (snail) shell: Gary’s Hamaca is the ultimate blend of slow
                living, fast tech, and endless eco-fun. And all he needs is 51
                million dollars. Who’s in? 🐌🌴
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
      </Container>
    </section>
  );
}

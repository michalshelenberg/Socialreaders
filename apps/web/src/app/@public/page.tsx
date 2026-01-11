import { ButtonLink, Heading, Text } from "@/components/atoms";
import { Container } from "@/components/layout";
import { Marquee } from "@/components/molecules";
import { FeatureSection } from "@/features/homepage/componens";
import { Gem } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Container>
        <div
          className="min-h-[calc(100dvh-200px)] w-full overflow-hidden rounded-t-3xl rounded-b-3xl bg-[#F6F2EA]"
          style={{ viewTransitionName: "main-container" }}
        >
          <section className="my-16">
            <div className="grid-auto">
              <div className="col-[2/12] lg:col-[3/7] 2xl:col-[4/7]">
                <Heading variant="lg">
                  Build Your Library <br />
                  Borrow From Others
                </Heading>
              </div>

              <div className="col-[2/12] flex flex-col items-start gap-8 lg:col-[7/11] 2xl:col-[7/10]">
                <Text as="p" size="md">
                  Socialreaders lets you add custom titles—even those missing
                  from our database. You can also borrow books directly from
                  fellow readers in the community.
                </Text>
                <ButtonLink href={"/sign-up"} variant="primary">
                  Create a Free Account
                </ButtonLink>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <Marquee
              images={[
                {
                  src: "/images/homepage/twenty-thousand-leagues-under-the-sea@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/krakatit@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/javascript-the-definitive-guide@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/druha-nadace@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/just-kids@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/mindfuck@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/permanent-record@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
                {
                  src: "/images/homepage/sapiens@2x.jpg",
                  alt: "",
                  width: 278,
                  height: 418,
                },
              ]}
            />
          </section>

          <FeatureSection
            image={{
              src: "https://via.assets.so/img.jpg?w=400&h=300&bg=e5e7eb&f=png",
              alt: "Feature Section 1",
            }}
            icon={<Gem />}
            title="Feature Section 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              aut, impedit cupiditate inventore, quaerat eum sit ipsa eveniet
              est nisi accusantium perspiciatis itaque sequi error quo delectus
              iusto repudiandae optio!"
          />

          <FeatureSection
            image={{
              src: "https://via.assets.so/img.jpg?w=400&h=300&bg=e5e7eb&f=png",
              alt: "Feature Section 1",
            }}
            icon={<Gem />}
            title="Feature Section 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              aut, impedit cupiditate inventore, quaerat eum sit ipsa eveniet
              est nisi accusantium perspiciatis itaque sequi error quo delectus
              iusto repudiandae optio!"
            inverted
          />
        </div>
      </Container>
    </main>
  );
}

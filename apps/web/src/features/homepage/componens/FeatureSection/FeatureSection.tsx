import { Heading, Text } from "@/components/atoms";
import clsx from "clsx";
import Image from "next/image";
import { FeatureSectionProps } from "./FeatureSection.types";

export function FeatureSection(props: FeatureSectionProps) {
  const { image, icon, title, description, inverted = false } = props;

  return (
    <section className="mb-16">
      <div className="grid-auto">
        <div className="col-[2/12]">
          <div
            className={clsx(
              "flex flex-col gap-0 lg:flex-row lg:gap-8",
              inverted && "lg:flex-row-reverse",
            )}
          >
            <div className="flex-1">
              <Image
                {...image}
                alt={image.alt ?? ""}
                width={300}
                height={400}
                className="aspect-4/3 h-auto w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className={clsx("pt-16", inverted ? "lg:pr-8" : "lg:pl-8")}>
                <div className="mb-8 flex size-12 items-center justify-center rounded-md bg-[#143334] text-white">
                  {icon}
                </div>
                <Heading variant="md" className="mb-4">
                  {title}
                </Heading>
                <Text>{description}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

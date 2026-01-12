import { Container } from "@/components/layout";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Marquee } from "./Marquee";

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Marquee> = {
  title: "Organisms/Marquee",
  component: Marquee,
  parameters: {
    layout: "fullscreen",
  },
};

export const MarqueeDefault: Story = {
  args: {
    images: [
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
    ],
  },
  render: (args) => (
    <Container>
      <Marquee {...args} />
    </Container>
  ),
};

export default meta;

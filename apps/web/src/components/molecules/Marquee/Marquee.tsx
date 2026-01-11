import { classNames } from "@/utils/classNames";
import Image from "next/image";
import styles from "./Marquee.module.scss";
import type { MarqueeProps } from "./Marquee.types";

const cn = classNames(styles);

const ITEM_SPEED = "2.5s";
const INITIALLY_VISIBLE_ITEMS = 8;

export function Marquee(props: MarqueeProps) {
  const { images, className, ...restProps } = props;

  const logosWithDuplications = [...images, ...images];

  return (
    <div {...restProps} className={cn("marquee", className)}>
      <div className={styles.marquee__images}>
        <div
          className={styles.marquee__images_inner}
          style={
            {
              "--item-count": logosWithDuplications.length,
              "--item-speed": ITEM_SPEED,
            } as React.CSSProperties
          }
        >
          {logosWithDuplications.map((logo, index) => (
            <div key={index} className={styles.marquee__item}>
              <Image
                className={styles.marquee__item_image}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading={index < INITIALLY_VISIBLE_ITEMS ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

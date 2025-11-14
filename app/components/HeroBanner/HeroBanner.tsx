"use client";

import { HeroBannerProps } from "../../types/types";
import Button from "../Button";
import Container from "../Container";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({
  headline,
  headlineHighlight,
  subheadline,
  description,
  ctaButton,
  className = "",
}: HeroBannerProps) {
  return (
    <section
      className={`${styles.heroBackground} relative flex items-center justify-center sectionPadding overflow-hidden ${className}`}
    >
      {/* Content */}
      <Container maxWidth="2xl" className={`${styles.content} relative z-10`}>
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-[48rem]">
            <span className="text-white">{headline}</span>
            {headlineHighlight && (
              <>
                <span className="text-[#0fdac2]">{headlineHighlight}</span>
              </>
            )}
            {subheadline && (
              <>
                <span className="text-white">{subheadline}</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <Button
              href={ctaButton.href}
              variant={ctaButton.variant || "secondary"}
              size="lg"
              icon="→"
              iconPosition="right"
            >
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}


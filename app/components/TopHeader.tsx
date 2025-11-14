"use client";

import { TOP_BANNER } from "../constants";
import Container from "./Container";
import Button from "./Button";

export default function TopHeader() {
  if (!TOP_BANNER.show) return null;

  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center w-full py-2 bg-transparent backdrop-blur-sm">
      <Container maxWidth="2xl" className="px-0">
        <div className="flex items-center justify-between w-full rounded-full px-4 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2 flex-1 justify-center">
            <span className="text-2xl">{TOP_BANNER.emoji}</span>
            <p className="text-white text-sm md:text-base font-medium ">
              {TOP_BANNER.text}
            </p>
          <Button
            href={TOP_BANNER.buttonLink}
            variant="secondary"
            size="md"
            icon="→"
            iconPosition="right"
            className="whitespace-nowrap ml-2"
          >
            {TOP_BANNER.buttonText.replace(" →", "")}
          </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}


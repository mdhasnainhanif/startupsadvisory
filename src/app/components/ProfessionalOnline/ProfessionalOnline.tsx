"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import VideoPopup from "../VideoPopup/VideoPopup";
import styles from "./ProfessionalOnline.module.css";

const ProfessionalOnline = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const contentBars = [
    { label: "Content", progress: 85, color: "purple" },
    { label: "Content", progress: 70, color: "teal" },
    { label: "Content", progress: 90, color: "purple" },
    { label: "Content", progress: 65, color: "teal" },
    { label: "Content", progress: 80, color: "purple" },
    { label: "Content", progress: 75, color: "teal" },
    { label: "Content", progress: 88, color: "purple" },
  ];

  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="text-white">Local </span>
                <span className="text-[#0fdac2]">Businesses </span>
                <span className="text-white">Struggle to Stay Visible</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                You're great at what you do, but your marketing falls behind. Agencies cost
                a fortune. Freelancers disappear.
              </p>

              {/* Content Bars */}
              <div className="space-y-4">
                {contentBars.map((bar, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm font-medium">
                        {bar.label} :
                      </span>
                    </div>
                    <div className="w-full h-3 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${bar.color === "purple"
                          ? "bg-[#643bff]"
                          : "bg-[#0fdac2]"
                          }`}
                        style={{ width: `${bar.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Video Player */}
            <div className="relative z-10 bg-[#643bff] p-[1rem] border rounded-xl max-w-[35rem] mx-auto">
              <div className="relative group cursor-pointer" onClick={() => setIsPopupOpen(true)}>
                {/* Video Thumbnail Container */}
                <div className={`${styles.videoCard} relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-[#643bff]/60`}>
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] flex items-center relative overflow-hidden">
                    {/* Person Image - Left Side */}
                    <div className="absolute left-0 top-0 bottom-0 w-[12rem] md:w-[14rem] lg:w-[22rem]">
                      <Image
                        src="/assets/images/person-img.webp"
                        alt="Person"
                        fill
                        className="object-center w-100 max-w-[10rem]"
                        priority
                        sizes="(max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#020016]/60 to-transparent" />
                    </div>

                    {/* Overlay Text - Right Side */}
                    <div className="absolute right-0 top-0 bottom-0 left-[12rem] md:left-[14rem] lg:left-[20rem] flex items-center px-4 md:px-6 lg:px-8">
                      <p className="text-white/90 text-xs md:text-sm lg:text-base font-medium leading-relaxed drop-shadow-lg">
                        Your Smart Marketing AI Team op de e a behind -the-scenes planning promotions, creating visuals.
                      </p>
                    </div>
                  </div>

                  {/* Play Button - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 md:w-20 md:h-20 bg-[#643bff] rounded-full flex items-center justify-center shadow-lg shadow-[#643bff]/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#643bff]/70 z-10 pointer-events-auto">
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Heading */}
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-extrabold mt-8 text-center lg:text-center leading-tight">
                <span className="text-white">The Simple Way to Look </span>
                <span className="text-[#0fdac2]">Professional </span>
                <span className="text-white">Online</span>
              </h3>
            </div>
          </div>
        </Container>

        {/* Background Decorative Elements */}
        <div className={styles.backgroundDecoration} />
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Professional Online Video"
        size="lg"
      />
    </>
  );
};

export default ProfessionalOnline;


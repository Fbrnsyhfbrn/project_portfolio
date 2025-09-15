"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlareCard } from "@/components/ui/glare-card";
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [

  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <main className="min-h-screen m-auto px-8 py-10" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <section className="md:w-1/2 justify-center items-center lg:py-10">
          <h2 className="text-3xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="10">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4" data-aos="fade-up"  data-aos-delay="30">
            Hi! I&apos;m Hanafi Febriansyah, a passionate web developer who loves creating beautiful
          </p>
          <p className="text-gray-300 leading-relaxed mb-4" data-aos="fade-up"  data-aos-delay="50">
            and functional user experiences. I enjoy working with React, Next.js, and Tailwind CSS
            to build fast and responsive websites.
          </p>
          <p className="text-gray-300 leading-relaxed" data-aos="fade-up"  data-aos-delay="60">
            If I am not coding, then I will take my time to explore in other things such as rooting, walking, trying new systems without coding, looking for cooler designs.
          </p>
          <div className="py-5" data-aos="fade-up"  data-aos-delay="80">

          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
          </div>
        </section>

        <section className="md:w-1/2 flex items-center justify-center" >
         <div data-aos="fade-up-left" data-aos-delay="10">
<GlareCard coverImage="./han.jpeg" className="flex flex-col">
  {null}
</GlareCard>

         </div>
        </section>
      </div>
    </main>
  );
}

"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import { TbBrandTabler } from "react-icons/tb";

export function Akhir() {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
      });
    }, []);
  return (
    <footer data-aos="fade-up" data-aos-delay="20" className="relative py-20 flex flex-col items-center  md:py-40">
      <div className="w-full h-[1px] bg-white/30 mb-5"></div>
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="space-y-8">
                <li>
                  <a href="#home" data-aos="fade-up-right" data-aos-delay="10"className="hover:text-purple-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" data-aos="fade-up-right" data-aos-delay="20" className="hover:text-purple-500 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#history" data-aos="fade-up-right" data-aos-delay="30" className="hover:text-purple-500 transition">
                    History
                  </a>
                </li>
                <li>
                  <a href="#showcase" data-aos="fade-up-right" data-aos-delay="40" className="hover:text-purple-500 transition">
                    Showcase
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-10/12 m-auto mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300" data-aos="fade-up-left" data-aos-delay="20">
                We change the way UI component libraries are used
              </span>

              {/* Library icons */}
              <div className="flex gap-6 text-3xl text-gray-300" data-aos="fade-up-left" data-aos-delay="20">
                <SiNextdotjs className="hover:text-white transition" title="Next.js" />
                <SiReact className="hover:text-sky-400 transition" title="React" />
                <SiTailwindcss className="hover:text-sky-300 transition" title="Tailwind CSS" />
                <SiFramer className="hover:text-pink-400 transition" title="Framer Motion" />
                <TbBrandTabler className="hover:text-indigo-400 transition"title="Tabler Icons" />
                <SiJavascript className="hover:text-yellow-400 transition" title="JavaScript" />
              </div>

              <span className="block text-gray-300" data-aos="fade-up-left" data-aos-delay="20">
                H. Febriansyah &copy; {new Date().getFullYear()}
              </span>

              <span className="flex justify-between text-white" >
                <a href="#" className="font-semibold hover:text-purple-500 transition" data-aos="fade-up" data-aos-delay="20">
                  Terms of Use
                </a>
                <a href="#" className="font-semibold hover:text-purple-500 transition" data-aos="fade-up" data-aos-delay="40">
                  Privacy Policy
                </a>
              </span>

              <span className="block text-gray-300" data-aos="fade-up" data-aos-delay="20">
                Need help?{" "}
                <a href="mailto:hanafifebrian87@gmail.com" className="font-semibold text-white hover:text-purple-500 transition">
                  Contact Me
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

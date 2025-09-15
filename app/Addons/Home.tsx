import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Home() {
  return (
    <div id="home" className="min-h-[20px] md:min-h-screen md:max-w-full items-center justify-center  md:py-32 lg:py-20 ">
      <TextHoverEffect names={["PORTOFOLIO","HANAFI FEBRIANSYAH","I AM ","SOFTWARE DEVELOPMENT","ANIMATOR","RIGGING"]} />
    </div>
  );
}

"use client";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function History() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div >
      <TracingBeam className="px-10 max-w-full md:max-w-3xl">
      <div id="history"><h1 data-aos="fade-right" className=" pb-20 text-6xl font-bold">History</h1></div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 data-aos="fade-up" data-aos-delay="10" className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p data-aos="fade-up" data-aos-delay="20" className="text-xl mb-4">
              {item.title}
            </p>

            <div data-aos="fade-up" data-aos-delay="30" className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>

  );
}

const dummyContent = [
  {
    title: "Beginning of interest",
    description: (
      <>
        <p>
        The beginning of my interest in this field has been around since I was still at the age of 7, I used to use a computer for the first time a computer, after the age of 8 years I started using a computer with Windows 7 operation and I only looked for pictures of birds,
        </p>
        <p>
        Then at the age of 13 years I have learned to use my cellphone, in the past the first cellphone I used was AsiAphone, then after that I began to really like when me and my friend wanted to root the HP Advan, I used to use the application with the name King Root and Game Guardian
        </p>
        <p>
        And since then I began to deepen the knowledge of this computing, especially in the software section, and my dreams have been realized when I was in high school with the Department of Software Engineering, I first worked on my project using HTML and CSS, assisted by Tailwind Framework, and I was one of the most reliable students during this lesson.
        </p>
      </>
    ),
    badge: "Student",
    image:
      "https://unifyed.com/wp-content/uploads/2021/02/Student-Information-System-Help-Institutions.jpg",
  },
  {
    title: "Early start to stop coding",
    description: (
      <>
        <p>
          My interest in big coding, and I really follow this, but everything began to be chaotic since I joined one of the institutions or we called a class course, I used to choose programming and I followed this, but when I started the internship I was transferred to the animation first, the fortune was fortunate to go smooth Rigging, that&apos;s where the situation began to chaotic.
        </p>
        <p>
          I was always given an illogical and reasonable jobs because I thought that the jobs could be done for 1 week but they asked for 2 days with double jobs and irregular work, I knew this was a weakness, but I also knew this violated the norms of the work itself, after that I returned from the internship and I did a separation, after the separation happened I returned to that place because in that time I did not have any other option Same with before, I was exhausted with what I was doing, because each of them had to complete at least 20 projects in a month and if totaled I did 40 projects a month from animation and rigging,
        </p>
        <p>
           and the bastard when I could do this cave in the switch to other things with the same target, namely rigging + animation (eye banner).And after that a total of 60 projects a month with a salary of 2.2 million only in Semarang. even though the minimum wage in Semarang is 3.4 million a month per 2025
        </p>
      </>
    ),
    badge: "After graduating",
    image:
      "https://atlanticdryice.com/wp-content/uploads/2024/01/Acara-perpisahan.webp",
  },
  {
    title: "Once finished being a corporate boy",
    description: (
      <>
        <p>
        After I realized that the community or course was full of scoundrels and hypocrites, I left at the end of the month and received another 2.2 million rupiah in salary. I then returned to my original path of coding and rooting. After that, I was finally able to tinker with my phone and customize it with the ROM of my choice. I chose Halcyon OS because it&apos;s lighter and more minimalist. Additionally, I also tried installing Hackintosh on a non-Apple laptop. After that, I went back to learning various other languages, including JavaScript, TypeScript, Go, and their respective frameworks. Additionally, I revived my repository, but it was banned, so I recreated it with content focused on low-level kernel and QML for customizing my Hyperland, though it still uses someone else&apos;s foundation.
        </p>
      </>
    ),
    badge: "Free from bastards and hypocrites",
    image:
      "https://img.freepik.com/fotos-premium/hombre-encuentra-campo-natural-liberandose-cadenas-que-simbolizan-liberacion-triunfo_871349-65318.jpg",
  },
];

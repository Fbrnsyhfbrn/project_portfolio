"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export function Mproject() {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
      });
    }, []);
  return (

    <div className="max-w-full max-h-full py-40" id="showcase">
    <div className="w-full mb-8 ">
        <h1 className="text-6xl font-bold text-center" data-aos="fade-up" data-aos-delay="20">Showcase</h1>
    </div>

    <div className="flex flex-wrap max-w-full justify-center items-center">
        <div className="flex flex-wrap max-w-6xl justify-center item-center">
            <div className="max-w-6xl items-center justify-center flex flex-wrap">
                <div className="m-5 md:max-w-2xl" data-aos="fade-left" data-aos-delay="10" >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                          <CardItem
                            translateZ="50" data-aos="fade-up" data-aos-delay="10"
                            className="text-xl uppercase font-bold text-neutral-600 dark:text-white"
                          >
                            my first portfolio
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60" data-aos="fade-up" data-aos-delay="20"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                            This is the first portofolio I worked when I was still a student
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4" data-aos="fade-up" data-aos-delay="30">
                            <img
                              src="./porto1.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <div className="flex justify-between items-center mt-20">
                            <CardItem
                              translateZ={20}
                              as="a"
                              href="https://hanafifebriansyah.vercel.app/" data-aos="fade-up" data-aos-delay="40"
                              target="__blank"
                              className="px-4 py-2 dark:bg-white bg-black rounded-full text-xs font-normal text-white dark:text-black"
                            >
                              View More →
                            </CardItem>
                          </div>
    
    
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div className="max-w-6xl items-center justify-center flex flex-wrap">
                <div className="m-5 md:max-w-2xl" data-aos="fade-right" data-aos-delay="10" >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                          <CardItem
                            translateZ="50" data-aos="fade-up" data-aos-delay="10"
                            className="text-xl uppercase font-bold text-neutral-600 dark:text-white"
                          >
                            first web coding
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60" data-aos="fade-up" data-aos-delay="20"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                            The first results of learning my coding
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4" data-aos="fade-up" data-aos-delay="30">
                            <img
                              src="./porto2.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <div className="flex justify-between items-center mt-20">
                            <CardItem
                              translateZ={20}
                              as="a"
                              href="https://naxzystudio.vercel.app/" data-aos="fade-up" data-aos-delay="40"
                              target="__blank"
                              className="px-4 py-2 dark:bg-white bg-black rounded-full text-xs font-normal text-white dark:text-black"
                            >
                              View More →
                            </CardItem>
                          </div>
    
    
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div className="max-w-6xl items-center justify-center flex flex-wrap">
                <div className="m-5 md:max-w-2xl" data-aos="fade-right" data-aos-delay="10" >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                          <CardItem
                            translateZ="50" data-aos="fade-up" data-aos-delay="10"
                            className="text-xl uppercase font-bold text-neutral-600 dark:text-white"
                          >
                            pesyo
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60" data-aos="fade-up" data-aos-delay="20"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                            This web cloning from PESYO is a request from the hypocritical
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4" data-aos="fade-up" data-aos-delay="30">
                            <img
                              src="./porto3.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <div className="flex justify-between items-center mt-20">
                            <CardItem
                              translateZ={20}
                              as="a"
                              href="https://hanafifebrian.vercel.app/" data-aos="fade-up" data-aos-delay="40"
                              target="__blank"
                              className="px-4 py-2 dark:bg-white bg-black rounded-full text-xs font-normal text-white dark:text-black"
                            >
                              View More →
                            </CardItem>
                          </div>


                        </CardBody>
                    </CardContainer>
                </div>
            </div>
            <div className="max-w-6xl items-center justify-center flex flex-wrap">
                <div className="m-5 md:max-w-2xl" data-aos="fade-left" data-aos-delay="10" >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                          <CardItem
                            translateZ="50" data-aos="fade-up" data-aos-delay="10"
                            className="text-xl uppercase font-bold text-neutral-600 dark:text-white"
                          >
                            nekro
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60" data-aos="fade-up" data-aos-delay="20"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                          >
                            One of the clone web that makes my account blocked because of this copyright web cloning at the request of the hypocritical
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4" data-aos="fade-up" data-aos-delay="30">
                            <img
                              src="./porto4.png"
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <div className="flex justify-between items-center mt-20">
                            <CardItem
                              translateZ={20}
                              as="a"
                              href="https://hanafilandingpage7.vercel.app/" data-aos="fade-up" data-aos-delay="40"
                              target="__blank"
                              className="px-4 py-2 dark:bg-white bg-black rounded-full text-xs font-normal text-white dark:text-black"
                            >
                              View More →
                            </CardItem>
                          </div>


                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </div>
    </div>
    </div>

  );
}

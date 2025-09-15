"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";

export default function CntactSt() {
      useEffect(() => {
      AOS.init({
        duration: 1000, 
      });
    }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Message");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:hanafifebrian87@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="c" className="relative h-screen">
      <div className="mx-auto max-w-[1200px]">
        <div data-aos="fade-up-right" data-aos-delay="10" className="absolute inset-0 bg-gray-300 max-w-[900px] lg:max-h-[450px] lg:mt-44 lg:rounded-xl mx-auto lg:overflow-hidden">
          <iframe
            className="w-full h-full lg:rounded-xl"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63315.94686164635!2d110.45588560716101!3d-7.3261665942155405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a787e692c9c69%3A0xf6a53e23a0c4462c!2sSalatiga%2C%20Kota%20Salatiga%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1757856375596!5m2!1sid!2sid"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex" data-aos="fade-up-left" data-aos-delay="10">
          <form
            onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="10"
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-20 lg:mt-10 md:mt-0 relative z-10 shadow-md"
          >
            <h2 data-aos="fade-up" data-aos-delay="20" className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p data-aos="fade-up" data-aos-delay="30" className="leading-relaxed mb-5 text-gray-600">
              Kirim pesan langsung ke email saya.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                data-aos="fade-up" data-aos-delay="40"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                data-aos="fade-up" data-aos-delay="40"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                data-aos="fade-up" data-aos-delay="50"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
              data-aos="fade-up" data-aos-delay="50"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit" data-aos="fade-up" data-aos-delay="50"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Kirim
            </button>
            <p className="text-xs text-gray-500 mt-3"data-aos="fade-up" data-aos-delay="50">
              Pesan akan terbuka di aplikasi email default kamu.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

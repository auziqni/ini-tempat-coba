"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "sec-satu",
        "sec-dua",
        "sec-tiga",
        "sec-tiga",
        "sec-empat",
        "sec-lima" /* tambahkan section lainnya */,
      ];
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Menyesuaikan offset untuk navbar
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //scroll to section
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <main className=" flex flex-col">
      <nav className="top-0 sticky bg-slate-300 h-16 w-screen flex items-center justify-center">
        <ul className=" flex gap-3 ">
          {/* <li>satu</li> */}
          <li>
            <button
              onClick={() => scrolltoHash("sec-satu")}
              className={twMerge(
                "",
                activeSection === "sec-satu" ? "text-blue-500" : ""
              )}
            >
              satu
            </button>
          </li>
          <li>
            <button
              onClick={() => scrolltoHash("sec-dua")}
              className={twMerge(
                "",
                activeSection === "sec-dua" ? "text-blue-500" : ""
              )}
            >
              dua
            </button>
          </li>
          <li>
            <button
              onClick={() => scrolltoHash("sec-tiga")}
              className={twMerge(
                "",
                activeSection === "sec-tiga" ? "text-blue-500" : ""
              )}
            >
              tiga
            </button>
          </li>
          <li>
            <button
              onClick={() => scrolltoHash("sec-empat")}
              className={twMerge(
                "",
                activeSection === "sec-empat" ? "text-blue-500" : ""
              )}
            >
              empat
            </button>
          </li>
          <li>
            <button
              onClick={() => scrolltoHash("sec-lima")}
              className={twMerge(
                "",
                activeSection === "sec-lima" ? "text-blue-500" : ""
              )}
            >
              lima
            </button>
          </li>
          <li>{activeSection}</li>
        </ul>
      </nav>
      <section id="sec-satu" className="w-screen h-screen bg-red-200">
        satu
      </section>
      <section id="sec-dua" className="w-screen h-screen bg-green-200">
        dua
      </section>
      <section id="sec-tiga" className="w-screen h-screen bg-blue-200">
        tiga
      </section>
      <section
        id="sec-tempat"
        className="w-screen h-screen bg-slate-900 text-white"
      >
        ini sec tanpa nama
      </section>
      <section id="sec-empat" className="w-screen h-screen bg-yellow-200">
        empat
      </section>
      <section id="sec-lima" className="w-screen h-screen bg-purple-200">
        lima
      </section>
    </main>
  );
}

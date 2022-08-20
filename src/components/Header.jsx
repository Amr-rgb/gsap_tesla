import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TeslaLogo } from "./TeslaLogo";

gsap.registerPlugin(ScrollTrigger);

export const Header = ({ timeline }) => {
  let menu = useRef(null);
  let logo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);

  useEffect(() => {
    timeline
      .to(
        logo,
        {
          autoAlpha: 1,
          y: "0",
        },
        "+=.5"
      )
      .to(
        [link1, link2, link3],
        {
          duration: 0.5,
          autoAlpha: 1,
          y: "0",
          stagger: 0.3,
        },
        "+=.3"
      )
      .to(link4, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
      });
  }, []);

  return (
    <div
      ref={(el) => (menu = el)}
      className="menu py-8 flex items-center justify-between"
    >
      <div className="opacity-0 translate-y-[30px]" ref={(el) => (logo = el)}>
        <TeslaLogo className="w-40 lg:w-[223px]" />
      </div>

      <nav>
        <ul className="flex items-center space-x-4 uppercase text-sm lg:text-base">
          <li
            className="opacity-0 translate-y-[30px]"
            ref={(el) => (link1 = el)}
          >
            <a href="/">Home</a>
          </li>
          <li
            className="opacity-0 translate-y-[30px]"
            ref={(el) => (link2 = el)}
          >
            <a href="/">Buy</a>
          </li>
          <li
            className="opacity-0 translate-y-[30px]"
            ref={(el) => (link3 = el)}
          >
            <a href="/">Blog</a>
          </li>
          <li
            className="opacity-0 translate-y-[30px]"
            ref={(el) => (link4 = el)}
          >
            <a
              href="/"
              className="hidden sm:inline ml-6 py-2 px-4 bg-black text-white"
            >
              Take A Ride
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

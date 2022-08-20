import { useEffect, useRef } from "react";
import { TeslaLogo } from "./TeslaLogo";

export const Main = ({ timeline }) => {
  let h1 = useRef(null);
  let img = useRef(null);
  let logo = useRef(null);

  useEffect(() => {
    timeline
      .to(
        h1,
        {
          duration: 0.5,
          autoAlpha: 1,
          y: 0,
        },
        "-=.3"
      )
      .to(
        [logo, img],
        {
          duration: 0.5,
          autoAlpha: 1,
          y: 0,
          stagger: 0.3,
        },
        "-=.3"
      );
  }, []);

  return (
    <div className="wrap flex flex-col items-center">
      <h1
        ref={(el) => (h1 = el)}
        className="opacity-0 translate-y-[100px] text-2xl text-center"
      >
        The Greatest <span className="text-4xl font-bold">Ride</span>
        <br /> Ever
      </h1>

      <div className="mt-10 relative">
        <img
          className="opacity-0 translate-y-[100px]"
          ref={(el) => (img = el)}
          src="/car1.png"
          alt="car"
        />
        <div
          ref={(el) => (logo = el)}
          className="opacity-0 translate-y-[100px] -z-10 absolute top-[15%] left-1/2 -translate-x-1/2"
        >
          <TeslaLogo className=" w-[75vw] fill-[#E8E8E8]" />
        </div>
      </div>
    </div>
  );
};

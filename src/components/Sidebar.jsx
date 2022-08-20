import { useEffect, useRef } from "react";

export const Sidebar = ({ timeline }) => {
  const listItems = useRef([]);
  let line = useRef(null);
  let num = useRef(null);
  const cars = ["1", "2", "3"];

  useEffect(() => {
    timeline
      .to(listItems.current, {
        duration: 0.3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
      })
      .to(line, {
        duration: 0.3,
        autoAlpha: 1,
        x: 0,
      })
      .to(
        num,
        {
          duration: 0.3,
          autoAlpha: 1,
        },
        "+=.2"
      );
  }, []);

  return (
    <div className="sidebar flex flex-col md:flex-row items-center md:space-x-14">
      <ul className="w-full md:w-auto flex justify-center md:justify-start space-x-2 z-10">
        {cars.map((car) => (
          <li
            key={car}
            ref={(e) => listItems.current.push(e)}
            className="opacity-0 translate-y-[30px] cursor-pointer w-40 py-4 rounded-[18px] bg-[#E8E8E8]"
            value={`0${car}`}
          >
            <img src={`/car${car}.png`} alt="car" />
          </li>
        ))}
      </ul>

      <div className="max-w-md md:max-w-none w-full pb-8 md:py-8 overflow-hidden">
        <div
          ref={(el) => (line = el)}
          className="opacity-0 -translate-x-full w-full mt-8 md:flex-1 md:mt-0 h-1 bg-black relative"
        >
          <div
            ref={(el) => (num = el)}
            className="opacity-0 m-0 z-0 p-6 bg-white text-2xl font-prata absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            01
          </div>
        </div>
      </div>
    </div>
  );
};

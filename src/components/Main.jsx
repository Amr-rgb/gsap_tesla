import { TeslaLogo } from "./TeslaLogo";

export const Main = () => {
  return (
    <div className="wrap flex flex-col items-center">
      <h1 className="text-2xl text-center">
        The Greatest <span className="text-4xl font-bold">Ride</span>
        <br /> Ever
      </h1>

      <div className="mt-10 relative">
        <img src="/car1.png" alt="car" />
        <TeslaLogo className="-z-10 w-[75vw] fill-[#E8E8E8] absolute top-[15%] left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
};

import { TeslaLogo } from "./TeslaLogo";

export const Header = () => {
  return (
    <div className="menu py-8 flex items-center justify-between">
      <TeslaLogo className="w-40 lg:w-[223px]" />

      <nav>
        <ul className="flex items-center space-x-4 uppercase text-sm lg:text-base">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Buy</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
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

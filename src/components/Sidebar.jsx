export const Sidebar = () => {
  const cars = ["1", "2", "3"];

  return (
    <div className="sidebar flex flex-col sm:flex-row items-center sm:space-x-14">
      <ul className="w-full sm:w-auto flex justify-center sm:justify-start space-x-2 z-10">
        {cars.map((car) => (
          <li
            key={car}
            className="cursor-pointer w-40 py-4 rounded-[18px] bg-[#E8E8E8]"
            value={`0${car}`}
          >
            <img src={`/car${car}.png`} alt="car" />
          </li>
        ))}
      </ul>

      <div className="w-full mt-8 sm:flex-1 sm:mt-0 h-1 bg-black relative">
        <div className="m-0 z-0 p-6 bg-white text-2xl font-prata absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          01
        </div>
      </div>
    </div>
  );
};

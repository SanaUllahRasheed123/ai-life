import { FaEdit } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

export default function Services() {
  return (
    <div className="max-w-[1300px] mx-auto text-white py-6 my-10">
      <div className="font-semibold font-Mulish py-5">
        <h3 className="text-xl">
          OUR SERVICES----- <span className=""></span>
        </h3>
        <h2 className="text-3xl">
          Automatically Generate High-Quality <br /> Content For{" "}
          <span className="text-[#ffe06f]">30+ Use-Cases</span>{" "}
        </h2>
      </div>

      {/* services section */}

      <div className="grid grid-cols-3  text-white gap-10   max-w-[1300px] mx-auto">
        <div className=" group items-center justify-center h-auto hover:translate-y-3 w-[320px] duration-300 hover:duration-200 bg-[#151a32]  shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double space-y-10 mx-4 hover:bg-yellow-300">
          <div className=" flex items-center justify-center group-hover:text-black">
            <FaEdit className="text-5xl items-center justify-center text-yellow-300 group-hover:text-black " />
          </div>

          <h1 className="text-3xl font-bold text-center group-hover:text-black  ">
            Blog Writing
          </h1>
          <p className="text-center text-2xl text-[#acacd0] group-hover:text-black  justify-center px-4">
            It is a long established <br /> fact that reader will <br /> be
            distracted readable <br /> content of a page when.
          </p>
          <div className="flex items-center justify-center ">
            <button className="p-4 px-[20%] bg-black items-center justify-center rounded-t-2xl text-2xl">
              Read More
            </button>
          </div>
        </div>

        <div className=" group items-center justify-center h-auto hover:translate-y-3 w-[320px] duration-300 hover:duration-200 bg-[#151a32]  shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double space-y-10 mx-4 hover:bg-yellow-300">
          <div className=" flex items-center justify-center group-hover:text-black">
            <FaEdit className="text-5xl items-center justify-center text-yellow-300 group-hover:text-black " />
          </div>

          <h1 className="text-3xl font-bold text-center group-hover:text-black  ">
            Blog Writing
          </h1>
          <p className="text-center text-2xl text-[#acacd0] group-hover:text-black  justify-center px-4">
            It is a long established <br /> fact that reader will <br /> be
            distracted readable <br /> content of a page when.
          </p>
          <div className="flex items-center justify-center ">
            <button className="p-4 px-[20%] bg-black items-center justify-center rounded-t-2xl text-2xl">
              Read More
            </button>
          </div>
        </div>

        <div className=" group items-center justify-center h-auto hover:translate-y-3 w-[320px] duration-300 hover:duration-200 bg-[#151a32]  shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double space-y-10 mx-4 hover:bg-yellow-300">
          <div className=" flex items-center justify-center group-hover:text-black">
            <FaEdit className="text-5xl items-center justify-center text-yellow-300 group-hover:text-black " />
          </div>

          <h1 className="text-3xl font-bold text-center group-hover:text-black  ">
            Blog Writing
          </h1>
          <p className="text-center text-2xl text-[#acacd0] group-hover:text-black  justify-center px-4">
            It is a long established <br /> fact that reader will <br /> be
            distracted readable <br /> content of a page when.
          </p>
          <div className="flex items-center justify-center ">
            <button className="p-4 px-[20%] bg-black items-center justify-center rounded-t-2xl text-2xl">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

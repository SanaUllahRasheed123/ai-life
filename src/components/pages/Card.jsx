import { IoIosContact } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

export default function Card() {
  return (
    <>
      <div className="my-10">
        <div className="grid grid-cols-3  text-white gap-10   max-w-[1300px] mx-auto">
          <div className=" group items-center justify-center hover:scale-105 duration-300 hover:duration-200 bg-[#151a32] h-[300px] shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double hover:border-x-2 hover:border-y-0 border-y-2 space-y-2">
            <div className=" flex items-center justify-center group-hover:text-blue-700">
              <IoIosContact className="text-5xl items-center justify-center " />
            </div>

            <h1 className="text-3xl font-bold text-center ">6,000,000+</h1>
            <p className="text-center text-2xl text-[#acacd0]">
              Happy copywriters, marketers <br /> & entrepreneurs
            </p>
          </div>

          <div className=" group items-center justify-center hover:scale-105 duration-300 hover:duration-200 bg-[#151a32] h-[300px] shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double hover:border-x-2 hover:border-y-0 border-y-2 space-y-2">
            <div className=" flex items-center justify-center group-hover:text-blue-700">
              <FaEdit className="text-5xl items-center justify-center " />
            </div>

            <h1 className="text-3xl font-bold text-center ">4.8/5 Reviews</h1>
            <p className="text-center text-2xl text-[#acacd0]">
              Satisfaction rating from 1300+ <br /> reviews on TrustPilot, G2 &
              more.
            </p>
          </div>

          <div className=" group items-center justify-center hover:scale-105 duration-300 hover:duration-200 bg-[#151a32] h-[300px] shadow-md rounded-md pt-10 hover:transition-all hover:ease-in  ease-in-out hover:border-double hover:border-x-2 hover:border-y-0 border-y-2 space-y-2">
            <div className=" flex items-center justify-center group-hover:text-blue-700">
              <HiOutlineCurrencyDollar className="text-5xl items-center justify-center " />
            </div>

            <h1 className="text-3xl font-bold text-center ">6,000,000+</h1>
            <p className="text-center text-2xl text-[#acacd0]">
              and $700 million+ saved in <br /> content writing so far
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

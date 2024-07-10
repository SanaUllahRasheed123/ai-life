import big from "../../assets/big.jpg";
export default function Content() {
  return (
    <div className=" max-w-[1300px] mx-auto  py-3 bg-[#0e1123]">
      <div className="grid grid-cols-2">
        <div className="space-y-5 ">
          <h1 className="text-6xl text-white font-bold">
            Generate Killer Content In Minutes Not Hour{" "}
            <span className="text-yellow-400">Effortlessly & Faster</span>
          </h1>
          <p className="text-xl text-[#acacd0] ">
            From blogs to emails to ad copies, auto-generate catchy, original,
            and high-converting copies in popular tones & languages in just a
            few seconds. Just pick a use case, enter some context, and boom.
            your copy is ready! Get Start Now.
          </p>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 17 17"
              className="text-white  rounded-full  bg-yellow-300  text-xl"
            >
              <path d="M15.418 1.774L6.585 15.259l-4.918-4.386.666-.746 4.051 3.614 8.198-12.515.836.548z"></path>
            </svg>
            <p className="text-[#acacd0] text-xl">
              <span className="underline">Language AI</span> to generate unique
              content
            </p>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 17 17"
              className="text-white  rounded-full  bg-yellow-300  text-xl"
            >
              <path d="M15.418 1.774L6.585 15.259l-4.918-4.386.666-.746 4.051 3.614 8.198-12.515.836.548z"></path>
            </svg>
            <p className="text-[#acacd0] text-xl">
              <span className="underline">30+ use cases</span> template for your
              needs
            </p>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 17 17"
              className="text-white  rounded-full  bg-yellow-300  text-xl"
            >
              <path d="M15.418 1.774L6.585 15.259l-4.918-4.386.666-.746 4.051 3.614 8.198-12.515.836.548z"></path>
            </svg>
            <p className="text-[#acacd0] text-xl">
              Scientific <span className="underline">copywriging formulas</span>{" "}
              to provide best quality
            </p>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 17 17"
              className="text-white  rounded-full  bg-yellow-300  text-xl"
            >
              <path d="M15.418 1.774L6.585 15.259l-4.918-4.386.666-.746 4.051 3.614 8.198-12.515.836.548z"></path>
            </svg>
            <p className="text-[#acacd0] text-xl">
              Choose from <span className="underline">120+ Languages</span> to
              writen content
            </p>
          </div>
          <div className="">
            <button className="btn mt-[150px]">Try for Free</button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-[60px] right-5 bg-yellow-300">
            <h1 className="font-bold text-2xl py-9 px-10 text-black ">
              20 Years Of Experience From 2002{" "}
            </h1>
          </div>

          <img src={big} alt="" className=" duration-300" />
        </div>
      </div>
    </div>
  );
}

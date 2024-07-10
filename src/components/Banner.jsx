import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#0e1123] w-full py-[50px]  text-white">
      <div className="max-w-[1300px] my-[100px] mx-auto text-center  space-y-2 ">
        <h2 className="text-[70px] p-[24px] font-bold mb-7">
          Get Quality & 10x Faster Way To{" "}
          <span>
            Write{"   "}
            <ReactTyped
              className="pl-2 text-[#ffe06f]  hollow-text"
              strings={[
                " Blog Posts",
                " Emails",
                " Product Descriptions",
                "Profile Bio",
                "Testimonials",
                "Content Writer",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </span>
        </h2>
        <p className="text-[#acacd0] text-xl  text-[18px] w-[60%] mx-auto py-6">
          Ai Gen is an AI writing assistant that helps you create high-quality
          content, in just a few seconds, at a fraction of the cost!
        </p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;

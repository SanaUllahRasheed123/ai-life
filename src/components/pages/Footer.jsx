import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div>
      <div className="bg-[#3f3eed] w-full py-[50px]  text-white">
        <div className="max-w-[1300px] my-[30px] mx-auto    ">
          <div className="grid grid-cols-5 gap-5">
            <div className="">
              <img src={logo} alt="" className="mb-9" />
              <p className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim.
              </p>
            </div>
            <div className=" font-[Mulish]">
              <h4 className="text-3xl font-bold">Usecases</h4>
              <ul className="cursor-pointer py-3 text-2xl hover:transition-all hover:ease-in-out hover:duration-300 mt-6 space-y-3  ">
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Creative Writing
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Social Media Ads
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -For Emails
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Text Editing
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Blog Writing
                </li>
              </ul>
            </div>

            <div className=" font-[Mulish]">
              <h4 className="text-3xl font-bold">Usecases</h4>
              <ul className="cursor-pointer py-3  text-2xl hover:transition-all hover:ease-in-out hover:duration-300 mt-6 space-y-3  ">
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Creative Writing
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Social Media Ads
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -For Emails
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Text Editing
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Blog Writing
                </li>
              </ul>
            </div>

            <div className=" font-[Mulish]">
              <h4 className="text-3xl font-bold">Company </h4>
              <ul className="cursor-pointer py-3  text-2xl hover:transition-all hover:ease-in-out hover:duration-300 mt-6 space-y-3  ">
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -About Us
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Knowledge Base
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Affiliate Program
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Community
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Market API
                </li>
              </ul>
            </div>

            <div className=" font-[Mulish]">
              <h4 className="text-3xl font-bold">Connect With Us</h4>
              <ul className="cursor-pointer py-3  text-2xl hover:transition-all hover:ease-in-out hover:duration-300 mt-6 space-y-3  ">
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Chat Now
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -LinkedIn
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Facebook
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Twitter
                </li>
                <li className="hover:text-yellow-300 hover:translate-x-4 duration-300 transition">
                  -Instagram
                </li>
              </ul>
            </div>
          </div>
          <div className="py-9">
            <h1 className="border border-t-0 border-cyan-300 "></h1>
          </div>
          <div className="flex items-center justify-between text-xl">
            <div>
              <h3 className="">© 2023. All Rights Reserved.</h3>
            </div>
            <ul className="flex gap-6 cursor-pointer hover:duration-300 hover:transition-all hover:ease-in-out">
              <li className="hover:text-yellow-300 hover:underline hover:translate-x-4 duration-300 transition">
                Terms of use
              </li>
              <li className="hover:text-yellow-300 hover:underline hover:translate-x-4 duration-300 transition">
                Privacy Policy
              </li>
              <li className="hover:text-yellow-300 hover:underline hover:translate-x-4 duration-300 transition">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// py-5 mx-auto max-w-[1300px]

import logo from "../assets/logo-3.png";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className=" max-w-[1300px] mx-auto  py-3 bg-[#0e1123] flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="text-white flex gap-6 cursor-pointer text-[20px]">
        <li>Home</li>
        <li className="dropdown-item">
          <a href="#" className="flex items-center">
            Pages
            <span>
              <FiChevronDown />
            </span>
          </a>
          <ul className=" hidden hover:bg-black-400 hover:border-t-2 hover:border-yellow-300 dropdown-menu">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Signup</li>
            <li>SignIn</li>
            <li>Our Team</li>
            <li>404 Page</li>
          </ul>
        </li>
        <li>Pricing</li>
        <li className="dropdown-item">
          <a href="#" className="flex items-center ">
            Use Cases
            <span>
              <FiChevronDown />
            </span>
          </a>
          <ul className=" hidden hover:bg-black-400 hover:border-t-2 hover:border-yellow-300 dropdown-menu">
            <li>Use Case</li>
            <li>UseCase Deatails</li>
          </ul>
        </li>
        <li className="dropdown-item">
          <a href="#" className="flex items-center">
            Blog List
            <span>
              <FiChevronDown />
            </span>
          </a>
          <ul className=" hidden hover:bg-black-400 hover:border-t-2 hover:border-yellow-300 dropdown-menu hover:text-yellow-200">
            <li>Single Blog</li>
            <li>Blog List</li>
          </ul>
        </li>
        <li>Contact</li>
        <li></li>
      </ul>

      <button className="btn">Try for Free</button>
    </div>
  );
}

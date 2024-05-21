import logo from "../assets/motionarteffect-img2.png";

const NavBar = () => {
  return (
    <nav className=" bg-[#262626] w-full z-30 top-0 start-0 ">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-2 bg-[#262626]">
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*1pk8jh1*_ga*NDE3Njg2NjMxLjE3MTU5MjU3NzM.*_ga_ZKBVC1X78F*MTcxNjEzNjc3My40LjAuMTcxNjEzNjc3My4wLjAuMA..&_ga=2.195509226.775223741.1716136770-1496067010.1715925657" className="flex items-center space-x-3 rtl:space-x-reverse bg-[#262626]">
          <img src={logo} className="h-8 bg-[#262626]" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white bg-[#262626]">envato<span className="bg-[#262626] font-extralight text-[#82B440]">market</span></span>
        </a>
        <div className="flex mr-4 bg-[#262626]">
          <button type="button" className="text-white bg-[#82B440] hover:bg-[#648a38] hover:border-[#648a38]  font-medium rounded-md text-sm px-4 py-2 text-center ">Buy now</button>

        </div>

      </div>
    </nav>
  );
}

export default NavBar;





import { useState } from "react";
// import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from "react-icons/rx"
import {TbShoppingBag} from "react-icons/tb"

const ROUTES = ["home", "about", "services", "pricing", "contact"];

export default function Nav() {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/************************ {logo} ************************/}

      <a href="#" className="border ">
        <h4 className="h-20 w-20">logo</h4>
        {/* <NikeLogo className="h-20 w-20"/> */}
      </a>

      {/******************** burger button ********************/}

      <button onClick={()=> setMobileMenuActive(!mobileMenuActive)}  className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25} />
          </button>
          
        {/* MENU LIST */}
          <div className={`${mobileMenuActive? "block":"hidden"} lg:block w-full lg:w-auto`}>
              <ul className="flex flex-col lg:flex-row lg:gap-6 bg-gray-200 lg:bg-transparent text-lg capitalize border border-gray-200 lg:border-none rounded-lg p-4">
                  
                  {ROUTES.map((route, i) => {
                      return (
                        <li className={`rounded py-2 px-3 cursor-pointer 
                          ${i === 0
                            ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                            : "hover:bg-gray-100"}
                            
                          ${(i === 3 || i === 4) && "lg:text-white"} lg:hover:bg-transparent lg:hover:text-blue-500`}
                          key={route}>
                              {route}
                          </li>)
                  })}

              </ul>
          </div>
          {/* CART BUTTON */}
          <div className="fixed bottom-4 left-4 lg:static lg:mr-8">
          <div className="p-3 rounded-full bg-white shadow-md text-lg">
              <TbShoppingBag />
          </div>
          </div>
    </nav>
  );
}

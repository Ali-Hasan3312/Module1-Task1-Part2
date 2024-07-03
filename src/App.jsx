import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { PiTrademarkRegistered } from "react-icons/pi";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  return (
 <>
 <nav className=" mx-12 my-5"> 
  <div className="flex items-center">
 <div className="h-8 w-28 ml-12">
 <img src="https://www.dvago.pk/assets/dvago-logo.svg" alt="" />
 </div>
 <div className="flex border border-gray-700 border-opacity-15 rounded-lg items-center justify-center ml-52 w-[270px] py-2 px-3">
  <CiSearch className=" text-xl"/>
  <input className=" outline-none ml-2 border-none w-60 text-[12px]" type="text" placeholder="Search for Medicines & more..."/>
 </div>
 <div className="flex border relative border-gray-700 border-opacity-15 rounded-lg items-center justify-center ml-5 w-[270px] py-2 px-2">
 <IoLocationOutline className=" -ml-16 text-lg text-lime-700"/>
 <span className=" text-[11px] ml-2 font-medium mr-16 tracking-tighter">No Address Selected</span>
 <FaChevronRight className=" absolute right-2 text-lg text-lime-600"/>
 </div>
 <div className=" ml-5 flex items-center justify-center py-1 rounded-lg bg-lime-600 text-white px-4">
 <PiTrademarkRegistered className=" mr-2"/>
 <span className=" tracking-tighter">Instant Order</span>
 </div>
 <div className=" ml-5 flex items-center justify-between relative h-9 text-lg rounded-lg bg-lime-600 text-white px-12">
 <FiUser className=" absolute left-5 text-[22px]"/>
 <FiShoppingCart className=" absolute text-[20px] right-5"/>
 </div>
</div>
<div className="flex items-center mt-5">
  <div className="flex items-center ml-16">
    <span className=" text-sm">Medicine</span>
    <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-6">
    <span className=" text-sm">Baby & Mother Care</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-7">
    <span className=" text-sm">Nutritions & Supplements</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-7">
    <span className=" text-sm">Foods & Beverages</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-7">
    <span className=" text-sm">Devices & Support</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-7">
    <span className=" text-sm">Personal Care</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
  <div className="flex items-center ml-7">
    <span className=" text-sm">OTC And Health Need</span>
     <IoIosArrowDown className=" text-xl text-green-700 ml-1"/>
  </div>
</div>
 </nav>
 
 </>
  )
}

export default App

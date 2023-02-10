import {
    AiFillTag,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'
import {BsFillSaveFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'

import { useState } from "react";



const Navbar = () => {
    const[nav, setNav]=useState(true)
  return (
    <div className="max-w-[1240px] mx-auto flex justify-between items-center  p-4">
      {/* Left Side */}
      <div className="flex justify-center items-center">
        <div>
          <AiOutlineMenu size={20} className="cursor-pointer" onClick={()=>{setNav(!nav)}}/>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl inline-flex px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>
        <div className="hidden md:flex text-14px justify-between items-center bg-gray-200 px-1  py-1 w-fit rounded-full">
          <p className="bg-black text-white text-xs md:text-lg rounded-full mr-1 px-2 ">
            Delivery
          </p>
          <p className="text-black ml-1 text-xs md:text-lg">Pickup</p>
        </div>
      </div>
      {/* Middle Search */}
      <form className="flex justify-evenly items-center rounded-full w-[200px] sm:w-[300px] lg:w-[400px] px-2 bg-gray-200  ">
        <AiOutlineSearch size={25} />
        <input
          className="p-2 w-full focus:outline-none bg-transparent "
          type="text"
          placeholder="Search foods..."
        />
      </form>
      {/* Cart Button */}
      <div>
        <button className=" flex justify-between items-center text-white px-4 py-1 rounded-full  bg-black ">
          <AiOutlineShoppingCart size={20} />
          <p>Cart</p>
        </button>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={!nav ? "bg-black/50 w-full h-screen z-10 fixed top-0 left-0 duration-300 ease-in ":""}>
        {/* Side Menu */}
        <div className={!nav ? "bg-white h-full w-[30%] flex flex-col fixed top-0 left-0 duration-300 ease-in": "fixed top-0  left-[-100%]"}>
          <div className="flex justify-between p-2">
            <p>
              Best <span className="font-bold">Eats</span>
            </p>
            <div>
              <RxCross2 size={20} className="cursor-pointer"  onClick={()=>{setNav(!nav)}}/>
            </div>
          </div>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xs md:text-lg py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xs md:text-lg py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xs md:text-lg py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xs md:text-lg py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xs md:text-lg py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xs md:text-lg py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xs md:text-lg py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

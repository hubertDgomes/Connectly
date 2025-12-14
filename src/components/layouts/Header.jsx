import React from 'react'
import Container from '../Container'
import Images from '../Images'
import logo from '../../assets/trans-logo.png'
import { GoHome } from "react-icons/go";
import { CiHashtag } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 bg-[#FCF9EA] z-50">
        <div className="">
          <Images className={"w-32.5 ml-2"} src={logo} />
        </div>
        <div className="">
          <input type="text" placeholder='Search Connectly' className='font-Arimo placeholder:font-Arimo font-semibold p-3 border border-black w-[600px] rounded-[50px] focus:outline-0' />
        </div>
        <div className="flex justify-between items-center text-[30px] gap-5 mr-3">
          <button><GoHome /></button>
          <button><CiHashtag /></button>
          <button><FaRegMessage /></button>
          <button><IoMdNotificationsOutline /></button>
          <button><RxAvatar /></button>
        </div>
      </div>
    </>
  )
}

export default Header

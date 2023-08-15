'use client'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation';
import burger from './assets/burger.svg'
import cross from './assets/cross.svg'
import { useState } from "react";
function Header() {
  const pathname = usePathname()
  const [menu, SetMenu] = useState(false)
  return (
    <header className='header'>
      <div className='container_main container'>
        <div className='logo'>
          <Link href="/"><img src="https://i.pinimg.com/originals/7b/28/98/7b2898990ae6ce6d6b277113d51b14e8.png"
            className="md:h-12 h-10 md:mr-3 rounded-md"
            alt="News Logo"></img></Link>
        </div>
        <div className="links text-white hidden tablet:block">
          <Link href="/" className={`md:mx-3.5 mx-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/" ? "text-rose-500" : "text-white"}`}>
            Home</Link>
          <Link href="/search" className={`md:mx-3.5 mx-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/search" ? "text-rose-500" : "text-white"}`}>
            Search</Link>
          <Link href="/business" className={`md:mx-3.5 mx-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/business" ? "text-rose-500" : "text-white"}`}>
            Business</Link>
          <Link href="/tech" className={`md:mx-3.5 mx-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/tech" ? "text-rose-500" : "text-white"}`}>
            Tech</Link>
          <Link href="/sports" className={`md:mx-3.5 mx-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/sports" ? "text-rose-500" : "text-white"}`}>
            Sports</Link>
        </div>
        <div onClick={() => SetMenu(!menu)} className="hide relative">
          <Image
            className="cursor-pointer"
            src={menu ? cross : burger}
            alt="hameburger"
            width={35}
            height={35}
          ></Image>
          {
            menu && (
              <div className="menuBar absolute flex flex-col right-1/2 px-12">
                <Link href="/" className={` m-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/" ? "text-rose-500" : "text-white"}`}>
                  Home</Link>
                <Link href="/search" className={` m-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/search" ? "text-rose-500" : "text-white"}`}>
                  Search</Link>
                <Link href="/business" className={` m-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/business" ? "text-rose-500" : "text-white"}`}>
                  Business</Link>
                <Link href="/tech" className={` m-2 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/tech" ? "text-rose-500" : "text-white"}`}>
                  Tech</Link>
                <Link href="/sports" className={` m-2 mb-5 underline-offset-[10px] hover:underline hover:decoration-rose-500 hover:text-rose-500 ${pathname == "/sports" ? "text-rose-500" : "text-white"}`}>
                  Sports</Link>
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header

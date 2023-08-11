'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
function Header() {
  const pathname = usePathname()

  return (
    <header className='header bg-gray-200'>
      <div className='container_main container'>
        <div className='logo'>
          <Link href="/"><img src="https://i.pinimg.com/originals/7b/28/98/7b2898990ae6ce6d6b277113d51b14e8.png"
            className="md:h-12 h-10 md:mr-3 rounded-md"
            alt="News Logo"></img></Link>
        </div>
        <div className="links text-white">
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
      </div>
    </header>
  )
}

export default Header

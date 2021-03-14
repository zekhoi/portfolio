import { useState } from "react"
import Link from 'next/link'
export default function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const [navBackground, setNavBackground] = useState(false)
    const changeBackground = () => {
        if(window.scrollY <= 96){
            setNavBackground(true)
        }else{
            setNavBackground(false)
        }
    }
    
    const componentDidMount = () => {
        window.addEventListener('scroll', changeBackground);
    }
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 py-2 ${navBackground ? "bg-transparent text-black" : "bg-two text-white"} ${click ? "shadow" : ""} `}>
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between p-2 items-center">
                        <a className={`font-bold text-3xl text-white1 ${navBackground ? "text-two" : "text-white"}`}>KKS</a>
                        <button className={`px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden ${navBackground ? "text-black" : "text-white"}`} onClick={handleClick}>
                            {click ? <i class="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                        </button>
                    </div>

                    <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 font-medium text-center md:text-left ${click ? "flex" : "hidden"}`}  id="navbar-collapse">
                        <a href="#home" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Home</a>
                        <a href="#about" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">About</a>
                        <a href="#interests" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Interest</a>
                        <a href="#skills" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Skills</a>
                        <a href="#activities" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Activities</a>
                        <a href="#projects" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Projects</a>
                        <Link href="/blog">
                            <a href="#projects" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Blog</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

import { useEffect, useState } from "react"
import Link from 'next/link'
export default function Navbar() {

    const [click, setClick] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
    }
    
    const changeBackground = () => {
        if(window.scrollY <= 96){
            setNavBackground(true)
        }else{
            setNavBackground(false)
        }
    }
    
    const componentDidMount = () => {
        useEffect(() => {
            ReactDOM.render(window.addEventListener('scroll', changeBackground));
            }, [])
    }
    const componentWillUnmount = () => {
        window.removeEventListener('scroll', changeBackground);
    }
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 py-2 ${navBackground ? "bg-white text-black" : "bg-one text-black"} ${click ? "shadow" : ""} `}>
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between p-2 items-center">
                        <a className={`font-bold text-3xl text-white1 ${navBackground ? "text-one" : "text-black"}`}>KKS</a>
                        <button className={`px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden ${navBackground ? "text-black" : "text-black"}`} onClick={handleClick}>
                            {click ? <i className="lni lni-close"></i> : <i className="lni lni-menu"></i>}
                        </button>
                    </div>

                    <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 font-medium text-center md:text-left ${click ? "flex" : "hidden"}`}  id="navbar-collapse">
                        <Link href="/#home">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Home</a>
                        </Link>
                        <Link href="/#about">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">About</a>
                        </Link>
                        <Link href="/#interests">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Interest</a>
                        </Link>
                        <Link href="/#skills">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Skills</a>
                        </Link>
                        <Link href="/#activities">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Activities</a>
                        </Link>
                        <Link href="/#projects">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Projects</a>
                        </Link>
                        <Link href="/blog">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Blog</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

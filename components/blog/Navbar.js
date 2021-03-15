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
        useEffect(() => {
            ReactDOM.render(window.addEventListener('scroll', changeBackground));
            }, [])
    }
    
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 py-2 ${navBackground ? "bg-white text-black" : "bg-one text-black shadow"}`}>
                <div className="container px-4 mx-auto md:flex items-center md:w-3/5 w-auto">

                    <div className="flex justify-between p-2 items-center">
                        <Link href="/">
                            <a className={`font-bold text-3xl text-white1 ${navBackground ? "text-one" : "text-black"}`}>KKS</a>
                        </Link>
                        <button className={`px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden ${navBackground ? "text-black" : "text-black"}`} onClick={handleClick}>
                            {click ? <i className="lni lni-close"></i> : <i class="lni lni-menu"></i>}
                        </button>
                    </div>

                    <div className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 font-medium text-center md:text-left ${click ? "flex" : "hidden"}`}  id="navbar-collapse">
                        <a href="/#home" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Home</a>
                        <a href="/#about" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">About</a>
                        <a href="/#interests" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Interest</a>
                        <a href="/#skills" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Skills</a>
                        <a href="/#activities" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Activities</a>
                        <a href="/#projects" className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Projects</a>
                        <Link href="/blog">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Blog</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

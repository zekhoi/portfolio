import { useEffect, useState } from "react"
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';

export default function Navbar() {

    const [click, setClick] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
    }
    
    
    useEffect(() => {

        const changeBackground = () => {
            if(window.scrollY <= 96){
                setNavBackground(true)
            }else{
                setNavBackground(false)
            }
        }
        changeBackground()

        window.addEventListener('scroll', changeBackground);


        return () => {
            window.removeEventListener('scroll', changeBackground);
        }

    }, [])

    return (
        <div>
            <Fade top>
            <nav className={`fixed w-full z-10 top-0 ${navBackground ? "bg-white text-one" : "bg-two text-white"} ${click ? "shadow" : ""} `}>
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between p-2 items-center">
                        <a href="/" className={`font-bold text-3xl text-white1 ${navBackground ? "text-one" : "text-white"}`}>KKS</a>
                        <button className={`px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden ${navBackground ? "text-black" : "text-white"}`} onClick={handleClick}>
                            {click ? <i className="lni lni-close"></i> : <i className="lni lni-menu"></i>}
                        </button>
                    </div>

                    <div className={`md:flex flex-col md:flex-row md:ml-auto py-2 md:mt-0 font-medium text-center md:text-left ${click ? "flex" : "hidden"}`}  id="navbar-collapse">
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="home" spy={true} smooth={true} duration={500}>
                            Home
                        </Link>
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="about" spy={true} smooth={true} duration={500}>
                            About
                        </Link>
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="interests" spy={true} smooth={true} duration={500}>
                            Interests
                        </Link>
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="skills" spy={true} smooth={true} duration={500}>
                            Skills
                        </Link>
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="projects" spy={true} smooth={true} duration={500}>
                            Projects
                        </Link>
                        <Link className={`cursor-pointer	p-2 lg:px-4 md:mx-2 rounded  ${navBackground ? "hover:bg-two hover:text-white" : "hover:bg-white hover:text-two"} transition-colors duration-300`} to="activities" spy={true} smooth={true} duration={500}>
                            Activities
                        </Link>
                    </div>
                </div>
            </nav>
            </Fade>
        </div>
    )
}

import { useState } from "react"
import Link from 'next/link'
export default function Navbar() {
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
            <nav className={`fixed w-full z-10 top-0 py-2 ${navBackground ? "bg-transparent text-black" : "bg-one text-black shadow"}`}>
                <div className="container px-4 mx-auto flex items-center md:w-3/5 w-auto">

                    <div className="flex justify-between p-2 items-center">
                        <Link href="/">
                            <a className={`font-bold text-3xl text-white1 ${navBackground ? "text-one" : "text-black"}`}>KKS</a>
                        </Link>
                    </div>

                    <div className="ml-auto md:mt-0 font-medium text-center flex"  id="navbar-collapse">
                        <Link href="/blog">
                            <a className="p-2 lg:px-4 md:mx-2 rounded hover:bg-black hover:text-white transition-colors duration-300">Back</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

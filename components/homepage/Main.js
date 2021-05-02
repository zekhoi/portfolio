import { useState } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Link as Go} from 'react-scroll'
import Fade from 'react-reveal/Fade';

export default function Main() {
    const [Modal, setModal] = useState(false)

    return (
        <div>
            <div id="home">
                <div className="flex bg-white min-h-screen min-w-full justify-center items-center pt-20">
                    <div className="container px-8 mx-auto">
                        <div className="flex flex-col mx-auto">
                            <Fade top>
                            <div className="text-center mb-3">
                                <Image src="/profile.png" className="rounded-full" alt="Khoironi Kurnia Syah" width={150} height={150} />
                            </div>
                            </Fade>

                            <div className="text-center my-auto text-one">

                                <Fade top>
                                <h1 className="text-3xl font-medium uppercase">Khoironi Kurnia Syah</h1>
                                </Fade>

                                <Fade bottom>
                                <h2 className="text-xl my-5">Full-Stack Developer</h2>
                                <div className="flex flex-row justify-center space-x-4 text-xl">

                                    <Link href="https://github.com/zekhoi">
                                        <i className="lni lni-github-original cursor-pointer"/>
                                    </Link>
                                    
                                    <Link href="https://www.linkedin.com/in/khoironiks/">
                                        <i className="lni lni-linkedin-original cursor-pointer"/>
                                    </Link>
                                    
                                    <Link href="https://www.behance.net/zekhoi">
                                        <i className="lni lni-behance-original cursor-pointer"/>
                                    </Link>
                                    
                                </div>
                                <button className="text-white border border-solid rounded-full bg-two border-two hover:bg-white hover:text-two active:bg-white font-semibold px-8 py-2 rounded outline-none focus:outline-none my-5" type="button" style={{ transition: "all .15s ease" }} onClick={() => setModal(true)}>
                                    Hire Me
                                </button>
                                <div className="my-3">
                                    <h5 className="text-sm my-2">Scroll Down</h5>

                                    <Go to="about" spy={true} smooth={true} duration={1000}>
                                    <button className="bg-transparent focus:outline-none text-2xl animate-bounce mt-3"><i className="lni lni-scroll-down"></i></button>
                                    </Go>
                                </div>
                                </Fade>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {Modal ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid">
                            <h3 className="text-2xl font-semibold">
                                Contact Me
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <ul className="list-none space-y-3">
                                <li><i className="lni lni-envelope mr-2"/>khoironidev@gmail.com</li>
                                <li><i className="lni lni-phone mr-2"/>+6285158132107 / +628986393031</li>
                                <li><i className="lni lni-telegram-original mr-2"/>@zekhoi</li>
                            </ul>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid">
                        <button
                            className="text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 border border-red-500 active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none" type="button" onClick={() => setModal(false)}>
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </div>
        
    )
}


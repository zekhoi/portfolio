import Image from 'next/image'
import Link from 'next/link'
import { Link as Go} from 'react-scroll'
import Fade from 'react-reveal/Fade';

export default function Main() {
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
                                <h2 className="text-xl font-normal my-5">Full-Stack Developer</h2>
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
                                <Link href="https://www.linkedin.com/in/khoironiks/">
                                    <button className="text-white border border-solid rounded-full bg-two border-two hover:bg-white hover:text-two active:bg-white font-semibold px-8 py-2 rounded outline-none focus:outline-none my-5" type="button" style={{ transition: "all .15s ease" }}>
                                        Hire Me
                                    </button>
                                </Link>
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
        </div>
    )
}


import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
    return (
        <div>
            <div id="home">
                <div className="flex bg-white min-h-screen min-w-full justify-center items-center mt-20">
                    <div className="container px-8 mx-auto">
                        <div className="flex flex-col mx-auto">
                            <div className="text-center">
                                <Image src="/profile.png" className="rounded-full" alt="Khoironi Kurnia Syah" width={150} height={150} />
                            </div>

                            <div className="text-center my-auto text-one">
                                <h1 className="text-3xl font-medium uppercase">Khoironi Kurnia Syah</h1>
                                <h2 className="text-xl font-normal my-5">Full-Stack Developer</h2>
                                <div className="flex flex-row justify-center space-x-3 text-xl">
                                    <div className=""><i className="lni lni-github-original cursor-pointer"></i></div>
                                    <div className=""><i className="lni lni-behance-original cursor-pointer"></i></div>
                                    <div className=""><i className="lni lni-dribbble cursor-pointer"></i></div>
                                    <div className=""><i className="lni lni-instagram cursor-pointer"></i></div>
                                    <div className=""><i className="lni lni-twitter-original cursor-pointer"></i></div>
                                    <div className=""><i className="lni lni-facebook-original cursor-pointer"></i></div>
                                </div>
                                <Link href="https://www.linkedin.com/in/khoironiks/">
                                    <button className="text-white border border-solid rounded-full bg-two border-two hover:bg-white hover:text-two active:bg-white font-semibold px-8 py-2 rounded outline-none focus:outline-none my-5" type="button" style={{ transition: "all .15s ease" }}>
                                        Hire Me
                                    </button>
                                </Link>
                                <div className="my-3">
                                    <h5 className="text-sm my-2">Scroll Down</h5>
                                    <button className="bg-transparent focus:outline-none text-2xl animate-bounce"><i className="lni lni-scroll-down"></i></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


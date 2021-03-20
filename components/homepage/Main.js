import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
    return (
        <div>
            <div id="home">
                <div className="bg-white py-24">
                    <div className="container px-8 mx-auto">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto">
                            <div className="text-center md:text-left my-auto">
                                <h5 className="text-md md:text-xl font-bold">Hello, I am</h5>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium uppercase"><span class="text-black">Khoironi</span> Kurnia Syah</h1>
                                <h3 className="text-xl md:text-2xl font-medium mb-2">Full-Stack Developer</h3>
                                <Link href="https://www.linkedin.com/in/khoironiks/">
                                    <button className="text-white border border-solid bg-black border-black hover:bg-white hover:text-black active:bg-white font-bold uppercase px-3 py-2 md:px-5 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                            <div className="text-center md:text-right">
                                <Image src="/coding.svg" alt="Coding Addict" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <div className="bg-one" id="about">
                <div className="container px-8 mx-auto py-4">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto">
                        <div className="max-w-d h-auto p-4">
                            <Image src="/happy.svg" alt="Happy Coding" width={500} height={500} />
                        </div>
                        <div className="max-w-d h-auto p-4 my-auto">
                            <h2 className="text-2xl md:text-2xl font-medium py-2">About Me</h2>
                            <h3 className="font-sans font-medium text-xl text-gray-700">Full-Stack Developer</h3>
                            <h5 className="font-sans mb-8 mt-4 text-gray-700">
                            Responsible for front-end and back-end web development. Understand several how to work with several languages and databases including PHP, HTML, CSS, JavaScript and everything in between.
                            </h5>
                            <Link href="https://www.linkedin.com/in/khoironiks/">
                                <button className="text-white bg-black border border-solid border-black hover:bg-white hover:text-black active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                    Contact Me
                                </button>
                            </Link>
                            <Link href="https://www.instalgram.com/zekhoi">
                                <button className="text-white bg-black border border-solid border-black hover:bg-white hover:text-black active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                    Download CV
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


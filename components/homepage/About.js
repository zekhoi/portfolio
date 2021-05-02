import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div>
            <div id="about">
                <div className="bg-one">
                    <div className="container px-8 mx-auto py-4">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto">
                            <Fade left>
                            <div className="max-w-md h-auto p-4">
                                <Image src="/images/svg/profile.svg" alt="About Me" width={500} height={500} />
                            </div>
                            </Fade>

                            <Fade right>
                            <div className="max-w-md h-auto p-4 my-auto text-white">
                                <h2 className="text-2xl md:text-2xl font-medium py-2">About Me</h2>
                                <h4 className="font-sans mb-8 mt-2">
                                    Hi, my name is Khoironi Kurnia Syah, currently still studying Mathematics at Lambung Mangkurat University. I really love solving problems, especially those related to website, data, and security. Fast learner and always doing a new thing.
                                </h4>
                                <Link href="https://resume.io/r/iuDuhDJJn">
                                    <button className="text-white bg-two hover:bg-white hover:text-two hover:border-two border border-two active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Download CV
                                    </button>
                                </Link>
                            </div>
                            </Fade>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


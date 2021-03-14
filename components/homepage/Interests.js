import Image from 'next/image'
import Link from 'next/link'

export default function Interests() {
    return (
        <div>
            <div id="interests">
                <div className="container px-8 mx-auto py-4">
                    <h3 className="text-xl text-center md:text-2xl font-medium py-2">Interests</h3>
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto">
                        <div className="max-w-80 overflow-hidden rounded shadow transform transition duration-500 hover:scale-110 hover:shadow-2xl m-2">
                            <div className="p-6">
                                <div class="max-w-max max-h-max shadow-md rounded-lg bg-one p-3 pb-2">
                                    <Image className="object-cover" src="/images/svg/data-science.svg" alt="Data Science" width={50} height={50} />
                                </div>
                                <h4 className="my-3 text-xl font-semibold tracking-tight text-gray-800">Data Science</h4>
                                <p className="text-black my-1">Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions.</p>
                                <Link href="https://en.wikipedia.org/wiki/Data_science">
                                    <button className="mt-3 text-white bg-one border border-one hover:bg-white hover:text-one active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-80 overflow-hidden rounded shadow transform transition duration-500 hover:scale-110 hover:shadow-2xl m-2">
                            <div className="p-6">
                                <div class="max-w-max max-h-max shadow-md rounded-lg bg-two p-3 pb-2">
                                    <Image className="object-cover" src="/images/svg/web-development.svg" alt="Web Development" width={50} height={50} />
                                </div>
                                <h4 className="my-3 text-xl font-semibold tracking-tight text-gray-800">Web Development</h4>
                                <p className="text-black my-1">Web development is the building and maintenance of websites, the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                                <Link href="https://en.wikipedia.org/wiki/Web_development">
                                    <button className="mt-3 text-white bg-two border border-two hover:bg-white hover:text-two active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-80 overflow-hidden rounded shadow transform transition duration-500 hover:scale-110 hover:shadow-2xl m-2">
                            <div className="p-6">
                                <div class="max-w-max max-h-max shadow-md rounded-lg bg-three p-3 p-3 pb-2">
                                    <Image className="object-cover" src="/images/svg/cyber-security.svg" alt="Cyber Security" width={50} height={50} />
                                </div>
                                <h4 className="my-3 text-xl font-semibold tracking-tight text-gray-800">Cyber Security</h4>
                                <p className="text-black my-1">Cyber security refers to the body of technologies, processes, and practices designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access.</p>
                                <Link href="https://en.wikipedia.org/wiki/Computer_security">
                                    <button className="mt-3 text-white bg-three border border-three hover:bg-white hover:text-three active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


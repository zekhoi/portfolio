import Link from 'next/link'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';

export default function Activities() {
    return (
        <div>
            <div id="activities">
                <div className="container px-8 mx-auto py-4 border-b">

                    <Fade top>
                    <h3 className="text-xl text-center md:text-2xl font-medium mb-2 py-2 mt-14">Activities</h3>       
                    </Fade>

                    {/* <h1 className="text-4xl text-center">Work In Progress</h1> */}
                    <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-2 mx-auto justify-items-center">   

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg hover:shadow-lg shadow transform transition duration-500 hover:scale-110 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/certificates/bwa-certificate-full-stack-javascript-developer-khoironi-kurnia-syah.jpg" alt="Full-Stack Javascript Developer" width={280} height={200}/>
                            <div className="px-6 py-4">
                                <h4 className="text-xl font-semibold tracking-tight text-gray-800">Online Course</h4>
                                <h5 className="text-md tracking-tight text-gray-800 my-3">Full-Stack Javascript Developer</h5>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg hover:shadow-lg shadow transform transition duration-500 hover:scale-110 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/certificates/bwa-certificate-full-stack-flutter-mobile-apps-developer-khoironi-kurnia-syah.jpg" alt="Flutter Mobile Developer" width={280} height={200}/>
                            <div className="px-6 py-4">
                                <h4 className="text-xl font-semibold tracking-tight text-gray-800">Online Course</h4>
                                <h5 className="text-md tracking-tight text-gray-800 my-3">Flutter Mobile Developer</h5>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg hover:shadow-lg shadow transform transition duration-500 hover:scale-110 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/certificates/big-data-analytics.png" alt="Fundamental Python dan Big Data Analytics" width={280} height={200}/>
                            <div className="px-6 py-4">
                                <h4 className="text-xl font-semibold tracking-tight text-gray-800">Webinar</h4>
                                <h5 className="text-md tracking-tight text-gray-800 my-3">Fundamental Python dan Big Data Analytics</h5>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg hover:shadow-lg shadow transform transition duration-500 hover:scale-110 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/certificates/basic-cyber-security.png" alt="Basic Cyber Security with Python" width={280} height={200}/>
                            <div className="px-6 py-4">
                                <h4 className="text-xl font-semibold tracking-tight text-gray-800">Webinar</h4>
                                <h5 className="text-md tracking-tight text-gray-800 my-3">Basic Cyber Security with Python</h5>
                            </div>
                        </div>
                        </Fade>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


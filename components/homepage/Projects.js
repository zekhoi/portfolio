import Image from 'next/image'
import Fade from 'react-reveal/Fade';

export default function Projects() {
    return (
        <div>
            <div id="projects">
                <div className="container px-8 mx-auto py-4 border-b">

                    <Fade top>
                    <h5 className="text-xl text-center md:text-2xl font-medium mb-2 py-2 mt-14">Projects</h5>
                    </Fade>
                    
                    {/* <h1 className="text-4xl text-center">Work In Progress</h1> */}

                    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto justify-items-center">

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg shadow hover:shadow-lg transform transition duration-500 hover:scale-105 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/projects/portfolio.png" alt="Next JS Portfolio Website" width={320} height={180}/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Portfolio Website</h4>
                                <h5 className="text-md tracking-tight text-gray-800">Technologies :</h5>
                                <div className="flex justify-start gap-2 py-2">
                                    <Image src="/images/icons/html5.png" alt="HTML5" width={25} height={25} />
                                    <Image src="/images/icons/css3.png" alt="CSS3" width={25} height={25} />
                                    <Image src="/images/icons/nextjs.png" alt="Next JS" width={25} height={25} />
                                    <Image src="/images/icons/tailwind.png" alt="Tailwind" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg shadow hover:shadow-lg transform transition duration-500 hover:scale-105 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/projects/not.jpg" alt="Covid Tracker" width={320} height={180}/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Covid Tracker</h4>
                                <h5 className="text-md tracking-tight text-gray-800">Technologies :</h5>
                                <div className="flex justify-start gap-2 py-2">
                                    <Image src="/images/icons/html5.png" alt="HTML5" width={25} height={25} />
                                    <Image src="/images/icons/css3.png" alt="CSS3" width={25} height={25} />
                                    <Image src="/images/icons/nextjs.png" alt="Next JS" width={25} height={25} />
                                    <Image src="/images/icons/tailwind.png" alt="Tailwind" width={25} height={25} />
                                    <Image src="/images/icons/restapi.svg" alt="REST API" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg shadow hover:shadow-lg transform transition duration-500 hover:scale-105 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/projects/not.jpg" alt="Anime List" width={320} height={180}/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Anime List</h4>
                                <h5 className="text-md tracking-tight text-gray-800">Technologies :</h5>
                                <div className="flex justify-start gap-2 py-2">
                                    <Image src="/images/icons/html5.png" alt="HTML5" width={25} height={25} />
                                    <Image src="/images/icons/css3.png" alt="CSS3" width={25} height={25} />
                                    <Image src="/images/icons/nextjs.png" alt="Next JS" width={25} height={25} />
                                    <Image src="/images/icons/tailwind.png" alt="Tailwind" width={25} height={25} />
                                    <Image src="/images/icons/graphql.png" alt="GraphQL" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-xs rounded-lg shadow hover:shadow-lg transform transition duration-500 hover:scale-105 m-2">
                            <Image className="object-cover w-full border-b rounded-b-none rounded" src="/images/projects/not.jpg" alt="React Components" width={320} height={180}/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">React Components</h4>
                                <h5 className="text-md tracking-tight text-gray-800">Technologies :</h5>
                                <div className="flex justify-start gap-2 py-2">
                                    <Image src="/images/icons/html5.png" alt="HTML5" width={25} height={25} />
                                    <Image src="/images/icons/css3.png" alt="CSS3" width={25} height={25} />
                                    <Image src="/images/icons/nextjs.png" alt="Next JS" width={25} height={25} />
                                    <Image src="/images/icons/tailwind.png" alt="Tailwind" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        </Fade>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


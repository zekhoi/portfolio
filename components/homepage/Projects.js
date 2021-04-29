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

                    <Fade bottom>
                    <h1 className="text-4xl text-center">Work In Progress</h1>
                    </Fade>
                    {/* <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto ">
                        <div className="max-w rounded-lg shadow hover:shadow-lg transform transition duration-500 hover:scale-110 m-2">
                            <img className="object-cover w-full border-t border-b rounded-b-none rounded" src="/images/projects/portfolio.png" alt="Next JS Portfolio Website"/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Portfolio Website</h4>
                                <h5 className="text-md font-semibold tracking-tight text-gray-800">Technologies :</h5>
                                <div className="flex justify-start gap-1 py-2">
                                    <Image src="/images/icons/html5.png" alt="HTML5" width={25} height={25} />
                                    <Image src="/images/icons/css3.png" alt="CSS3" width={25} height={25} />
                                    <Image src="/images/icons/nextjs.png" alt="Next JS" width={25} height={25} />
                                    <Image src="/images/icons/tailwind.png" alt="Tailwind" width={25} height={25} />
                                </div>
                            </div>
                        </div>
                        <div className="max-w rounded-lg hover:shadow-lg transform transition duration-500 hover:scale-110 m-2">
                            <img className="object-cover w-full border rounded" src="https://careers.shopee.sg/codeleague/images/seo.jpg" alt="Shopee Code League 2021"/>
                            <div className="px-6 py-4">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Tailwinds Components</h4>
                            <h5 className="text-md font-semibold tracking-tight text-gray-800">Technologies :</h5>
                                <div class="flex justify-between py-2">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-laravel"></i>
                                <i class="fab fa-node-js"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-docker"></i>
                                </div>
                            </div>
                        </div>
                        <div className="max-w rounded-lg hover:shadow-lg transform transition duration-500 hover:scale-110 m-2">
                            <img className="object-cover w-full border rounded" src="https://careers.shopee.sg/codeleague/images/seo.jpg" alt="Shopee Code League 2021"/>
                            <div className="px-6 py-4">
                            <h4 className="my-2 text-xl font-semibold tracking-tight text-gray-800">Portfolio Website</h4>
                            <h5 className="text-md font-semibold tracking-tight text-gray-800">Technologies :</h5>
                                <div class="flex justify-between py-2">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-laravel"></i>
                                <i class="fab fa-node-js"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-docker"></i>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


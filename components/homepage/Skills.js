import Image from 'next/image'

export default function Skills() {
    return (
        <div>
            <div id="skills">
                <div className="container px-8 mx-auto">
                    <h3 className="text-xl text-center md:text-2xl font-medium py-2">Skills</h3>
                    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 text-center">
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/python.png" alt="Python" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/php.png" alt="PHP" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/nodejs.png" alt="Node JS" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/html5.png" alt="HTML5" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/css3.png" alt="CSS3" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/laravel.png" alt="Laravel" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/nextjs.png" alt="Next JS" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/tailwind.png" alt="Tailwind CSS" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/bootstrap.png" alt="Bootstrap" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg  transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/figma.png" alt="Figma" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/github.png" alt="Github" width={100} height={100} />
                        </div>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/docker.png" alt="Docker" width={100} height={100} />
                        </div>
                    </div>	
                </div>
            </div>
        </div>
    )
}


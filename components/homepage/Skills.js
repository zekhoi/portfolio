import Image from 'next/image'
import Fade from 'react-reveal/Fade';

export default function Skills() {
    return (
        <div>
            <div id="skills">
                <div className="container px-8 mx-auto py-4 border-b">

                    <Fade top>
                    <h3 className="text-xl text-center md:text-2xl font-medium py-2 mt-14">Skills</h3>
                    </Fade>

                    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-6 text-center">

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/python.png" alt="Python" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/php.png" alt="PHP" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/nodejs.png" alt="Node JS" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/html5.png" alt="HTML5" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/css3.png" alt="CSS3" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/postgresql.png" alt="PostgreSQL" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/laravel.png" alt="Laravel" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/nextjs.png" alt="Next JS" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/tailwind.png" alt="Tailwind CSS" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/bootstrap.png" alt="Bootstrap" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg  transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/figma.png" alt="Figma" width={50} height={50} />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="max-w-d h-auto rounded-lg transform transition duration-500 hover:scale-110 p-4">
                            <Image src="/images/icons/github.png" alt="Github" width={50} height={50} />
                        </div>
                        </Fade>

                    </div>	
                </div>
            </div>
        </div>
    )
}


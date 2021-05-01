import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function Social() {
    return (
        <div>
            <div id="social">
                <div className="container mx-auto border-b">
                    <div className="px-8 py-16">
                        <Fade bottom>
                        <div className="flex flex-row justify-around text-3xl">
                            <Link href="https://facebook.com/zxkhoi">
                                <i className="lni lni-facebook-original cursor-pointer"/>
                            </Link>

                            <Link href="https://www.instagram.com/zekhoi/">
                                <i className="lni lni-instagram-original cursor-pointer"/>
                            </Link>

                            <Link href="https://twitter.com/zekhoi">
                                <i className="lni lni-twitter-original cursor-pointer"/>
                            </Link>

                            <Link href="https://www.youtube.com/c/KhoironiKurniaSyah">
                                <i className="lni lni-youtube cursor-pointer"/>
                            </Link>
                            
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}


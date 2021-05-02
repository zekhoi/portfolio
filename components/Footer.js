import { animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from "react"
import Fade from 'react-reveal/Fade';

export default function Footer() {

    const [over, setOver] = useState(false)

    useEffect(() => {

        const showButton = () => {
            if(window.scrollY <= 96){
                setOver(true)
            }else{
                setOver(false)
            }
        }
        showButton()

        window.addEventListener('scroll', showButton);


        return () => {
            window.removeEventListener('scroll', showButton);
        }

    }, [])

    return (
        <div>
            <div className="bg-two">
                <div className="container mx-auto px-6">
                    <div className="border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-2">
                            <Fade bottom>
                            <p className="text-sm text-white font-medium">
                                © 2021 Made with <i className="lni lni-heart"></i> by Khoironi Kurnia Syah
                            </p>
                            </Fade>
                        </div>
                    </div>
                    <Fade right>
                        <button className={`${over ? "hidden" : ""} fixed rounded-full bg-two text-white shadow-md p-3 flex right-5 bottom-5 z-50 focus:outline-none`} onClick={() => scroll.scrollToTop()}><i className="lni lni-chevron-up"></i></button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}


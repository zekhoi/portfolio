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
            <div className="container mx-auto px-6">
                <div className="mt-16 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-black font-medium mb-2">
                            © 2021 Made with <i className="lni lni-heart"></i> by Khoironi Kurnia Syah
                        </p>
                    </div>
                </div>
                <Fade right>
                    <button className={`${over ? "hidden" : ""} fixed rounded-full bg-two text-white p-3 flex right-5 bottom-5 z-50 focus:outline-none`} onClick={() => scroll.scrollToTop()}><i className="lni lni-chevron-up"></i></button>
                </Fade>
            </div>
        </div>
    )
}


import { animateScroll as scroll } from 'react-scroll'

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-black font-medium mb-2">
                            © 2021 Made with <i class="lni lni-heart"></i> by Khoironi Kurnia Syah
                        </p>
                    </div>
                </div>
            <button className="fixed rounded-full bg-black text-white p-3 flex right-5 bottom-5 z-50 focus:outline-none" onClick={() => scroll.scrollToTop()}><i className="lni lni-chevron-up"></i></button>
            </div>
        </div>
    )
}


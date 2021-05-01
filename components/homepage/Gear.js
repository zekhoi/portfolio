import Image from 'next/image'
import Fade from 'react-reveal/Fade';

export default function Gear() {
    return (
        <div>
            <div id="about">
                <div className="bg-one">
                    <div className="container px-8 mx-auto py-4">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto">
                            <Fade left>
                            <div className="max-w-md h-auto p-4">
                                <Image src="/images/svg/gear.svg" alt="Happy Coding" width={500} height={500} />
                            </div>
                            </Fade>
                            <Fade right>
                            <div className="max-w-md h-auto p-4 my-auto text-white">
                                <ul className="list-disc">
                                    <li className="font-sans font-medium ">ASUS X555BP A9-9425 R5 8GB</li>
                                    <li className="font-sans font-medium ">Armaggeddon Gaming Monitor Pixxel+ Pro PF22HD 22” 75Hz</li>
                                    <li className="font-sans font-medium ">NYK Nemesis Keyboard Gaming KR-201 Game Master</li>
                                    <li className="font-sans font-medium ">Digital Alliance LUNA Gaming Mouse</li>
                                    <li className="font-sans font-medium ">Mousepad Rexus KVLAR T5 Gaming MousePad</li>
                                    <li className="font-sans font-medium ">Microsoft Headset</li>
                                    <li className="font-sans font-medium ">BM800 Microphone</li>
                                </ul>
                            </div>
                            </Fade>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function Activities() {
    return (
        <div>
            <div id="activities">
                <div className="container px-8 mx-auto py-4 border-b">

                    <Fade top>
                    <h3 className="text-xl text-center md:text-2xl font-medium mb-2 py-2 mt-14">Activities</h3>       
                    </Fade>

                    <Fade bottom>
                    <h1 className="text-4xl text-center">Work In Progress</h1>
                    </Fade>
                    {/* <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto">   

                        <div className="max-w rounded-lg hover:shadow-lg shadow transform transition duration-500 hover:scale-110 m-2">
                            <img className="object-cover w-full border-t border-b rounded-b-none rounded" src="https://careers.shopee.sg/codeleague/images/seo.jpg" alt="Shopee Code League 2021"/>
                            <div className="px-6 py-4">
                                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Shopee Code League 2021</h4>
                                <Link href="https://github.com/zekhoi/shopeecodeleague">
                                    <button className="text-white bg-black border border-solid border-black hover:bg-white hover:text-black active:bg-white font-bold px-3 py-2 md:px-3 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        <i className="fab fa-github"></i> Get Code
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}


import Head from 'next/head'
import Navbar from './Navbar'
import Footer from '../Footer'

export default function Bloglayout (props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <script src="https://kit.fontawesome.com/850b50a31b.js" rel="stylesheet"/>
                <link rel="shortcut icon" href="favicon.png" type="image/png"/>
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}
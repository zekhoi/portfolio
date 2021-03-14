import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout (props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <script src="https://kit.fontawesome.com/850b50a31b.js" rel="stylesheet" crossorigin="anonymous"/>
                <link rel="shortcut icon" href="favicon.png" type="image/png"/>
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}
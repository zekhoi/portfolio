import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout (props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <script src="https://kit.fontawesome.com/850b50a31b.js" rel="stylesheet"/>
                <link rel = "stylesheet" type = "text/css" href = "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css" />
                
                <link rel="shortcut icon" href="favicon.png" type="image/png"/>
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}
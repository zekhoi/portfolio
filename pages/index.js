import Layout from '../components/Layout'
import Image from 'next/image'

import Main from '../components/homepage/Main'
import About from '../components/homepage/About'
import Interests from '../components/homepage/Interests'
import Skills from '../components/homepage/Skills'
import Activities from '../components/homepage/Activities'
import Projects from '../components/homepage/Projects'

export default function Home() {
  return (
    <div>

      <Layout title="Khoironi Kurnia Syah">
      
      <Main/>
      <About/>
      <Interests/>
      <Skills/>
      <Activities/>
      <Projects/>

      </Layout>
      
    </div>
  )
}

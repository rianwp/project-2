import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Profile from '../components/Profile/Profile'
import Project from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>project-2</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero/>
      <Profile/>
      <Skills/>
      <Project/>
    </>
  )
}

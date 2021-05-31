import Head from 'next/head'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Hero />
        <Tile />
      </main>
      <Footer />
    </div>
  )
}

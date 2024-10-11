"use client"
import { TikTokEmbed } from "react-social-media-embed"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Signika, Quicksand } from "next/font/google";

const signika = Signika({
  subsets: ['latin'],
})

const quicksand = Quicksand({
  subsets: ['latin'],
})

const RecenWorks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const tiktoks = [
    "https://www.tiktok.com/@adaadaaja.ca/video/7412120069519592710",
    "https://www.tiktok.com/@adaadaaja.ca/video/7398117284952296709",
    "https://www.tiktok.com/@adaadaaja.ca/video/7414428627451907333",
    "https://www.tiktok.com/@adaadaaja.ca/video/7400386138537463045",
    "https://www.tiktok.com/@adaadaaja.ca/video/7399625694701047045",
  ]

  return (
    <section className={`${signika.className} text-black flex flex-col gap-8 px-10 py-24`}>
      <h2 className="font-bold text-5xl text-center">RECENT WORKS</h2>

      <Carousel responsive={responsive} infinite={true} customTransition="all .5" transitionDuration={500}>
        {tiktoks.map((tiktok, index) => (
          <TikTokEmbed key={index} url={tiktok} />
        ))}
      </Carousel>
    </section>
  )
}

export default RecenWorks
import Image from "next/image"
import { Signika, Quicksand } from "next/font/google";

const signika = Signika({
  weight: '400',
  subsets: ['latin'],
})

const quicksand = Quicksand({
  weight: '700',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <section className={`${signika.className} flex w-full h-[75vh] bg-[#FAF8F1]`}>
      <div class="basis-1/2 text-black flex flex-col gap-2 justify-center p-10">
        <div className="w-3/4 self-center">
            <p className="font-extrabold tracking-widest text-4xl leading-8">PALING CREATIVE PALING EFEKTIF BIKIN KONTEN FYP MAH GAMPANG... GA PERCAYA?</p>
            <h1 className="mt-4 text-base">KONSULTASIIN  DULU DI ADAADAAJA!</h1>
            <button className={`${quicksand.className} mt-4 bg-[#c81520] self-start rounded-md py-2 px-10 text-[#FAF8F1] font-extrabold`}>Konsultasi Gratis</button>
        </div>
      </div>

      <div class="basis-1/2">
        {/* image with full width and height to its div with tailwind classname */}
        <figure className="relative w-full h-full">
          <Image
            src="/img/asset1.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
import { Signika, Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const signika = Signika({
  subsets: ['latin'],
})

const quicksand = Quicksand({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={`${signika.className} bg-[#09745F] text-[#FAF8F1] p-10`}>
      <section className="flex border-b-2 border-[#FBF156]">
        <div className="px-8 py-4 basis-1/4 border-r-2 border-[#FBF156] flex flex-col gap-2">
          {/* create 4 list of clickable links */}
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
        <div className="px-8 py-4 basis-1/4 border-r-2 border-[#FBF156]">

        </div>
        <div className="px-8 py-4 basis-1/4 border-r-2 border-[#FBF156] flex flex-col gap-2">
          <Link href="/">TikTok</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
        </div>
        <div className="px-8 py-4 basis-1/2 flex flex-col gap-2">
          <h2 className="text-2xl">
            Subscrice for free creative resources and industry leading advice
          </h2>
          <div className="flex flex-col font-normal gap-2">
            <label>
              Enter Your Email
            </label>
            <input type="email" className="outline-none rounded-md py-2 px-4 text-black" />
            <button className={`${quicksand.className} mt-4 bg-[#FBF156] self-start rounded-md py-2 px-10 text-[#09745F] font-extrabold`}>Konsultasi Gratis</button>
          </div>
        </div>
      </section>

      <section className="flex px-8 items-center justify-between py-4">
        <Link href="/">
          <figure>
            <Image
              src="/img/logo.png"
              alt="Bahana Logo"
              width={150}
              height={75}
            />
          </figure>
        </Link>

        {/* copyrights */}
        <p className="text-center mt-4">
          © 2024 Ada Ada Aja. All Rights Reserved.
        </p>
      </section>
    </footer>
  )
}

export default Footer
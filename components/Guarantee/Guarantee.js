import Image from "next/image"
import { Signika, Quicksand } from "next/font/google";

const signika = Signika({
  subsets: ['latin'],
})

const Guarantee = () => {
  return (
    <section className={`${signika.className} text-[#09745F] bg-[#FBF156] flex flex-col gap-8 items-center px-10 py-24`} style={
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 89%, 0 100%);'
      }
    }>
      <h2 className="font-bold text-5xl">GUARANTEE</h2>

      <ul className="flex gap-16">
        <li className="flex flex-col items-center gap-4 text-xl">
          <figure>
            <Image
              src="/img/dummy-100x100-ijo-putih.png"
              alt="Bahana Logo"
              width={150}
              height={75}
            />
          </figure>

          <h3>SERVICE EXCELENCE</h3>
        </li>

        <li className="flex flex-col items-center gap-4 text-xl">
          <figure>
            <Image
              src="/img/dummy-100x100-ijo-putih.png"
              alt="Bahana Logo"
              width={150}
              height={75}
            />
          </figure>

          <h3>SERVICE EXCELENCE</h3>
        </li>

        <li className="flex flex-col items-center gap-4 text-xl">
          <figure>
            <Image
              src="/img/dummy-100x100-ijo-putih.png"
              alt="Bahana Logo"
              width={150}
              height={75}
            />
          </figure>

          <h3>SERVICE EXCELENCE</h3>
        </li>

        <li className="flex flex-col items-center gap-4 text-xl">
          <figure>
            <Image
              src="/img/dummy-100x100-ijo-putih.png"
              alt="Bahana Logo"
              width={150}
              height={75}
            />
          </figure>

          <h3>SERVICE EXCELENCE</h3>
        </li>

      </ul>
    </section>
  )
}

export default Guarantee
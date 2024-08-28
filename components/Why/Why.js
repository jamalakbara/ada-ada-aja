import { Signika, Quicksand } from "next/font/google";

const signika = Signika({
  subsets: ['latin'],
})

const quicksand = Quicksand({
  subsets: ['latin'],
})

const Why = () => {
  return (
    <section className={`${signika.className} text-black flex flex-col gap-8 items-center px-10 py-24`}>
      <h2 className="font-bold text-5xl">KENAPA ADA ADA AJA ?</h2>

      <ul className="flex flex-wrap items-center justify-center gap-4">
        <li className="basis-1/3 flex flex-col gap-4 border rounded-md p-4 border-[#09745F]">
          <div className={`${quicksand.className} text-4xl text-[#c81520] font-bold`}>1.</div>
          <h3 className="text-xl font-bold">Top Tier Talent Only</h3>
          <p>We have exclusive access to top tier, diverse creators* across the US, UK, AU, Singapore, Philippines, Malaysia, Australia, and the rest of Southeast Asia.</p>
        </li>
        
        <li className="basis-1/3 flex flex-col gap-4 border rounded-md p-4 border-[#09745F]">
          <div className={`${quicksand.className} text-4xl text-[#c81520] font-bold`}>2.</div>
          <h3 className="text-xl font-bold">Top Tier Talent Only</h3>
          <p>We have exclusive access to top tier, diverse creators* across the US, UK, AU, Singapore, Philippines, Malaysia, Australia, and the rest of Southeast Asia.</p>
        </li>

        <li className="basis-1/3 flex flex-col gap-4 border rounded-md p-4 border-[#09745F]">
          <div className={`${quicksand.className} text-4xl text-[#c81520] font-bold`}>3.</div>
          <h3 className="text-xl font-bold">Top Tier Talent Only</h3>
          <p>We have exclusive access to top tier, diverse creators* across the US, UK, AU, Singapore, Philippines, Malaysia, Australia, and the rest of Southeast Asia.</p>
        </li>
        
        <li className="basis-1/3 flex flex-col gap-4 border rounded-md p-4 border-[#09745F]">
          <div className={`${quicksand.className} text-4xl text-[#c81520] font-bold`}>4.</div>
          <h3 className="text-xl font-bold">Top Tier Talent Only</h3>
          <p>We have exclusive access to top tier, diverse creators* across the US, UK, AU, Singapore, Philippines, Malaysia, Australia, and the rest of Southeast Asia.</p>
        </li>
      </ul>
    </section>
  )
}

export default Why
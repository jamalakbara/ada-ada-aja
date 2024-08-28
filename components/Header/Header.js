import Link from "next/link"
import Image from "next/image"
import { Signika, Quicksand } from "next/font/google";

const signika = Signika({
  weight: '400',
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className="flex items-center gap-10 bg-[#09745F] p-4">
      {/* Logo */}
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

      {/* Navigation */}
      <nav className={signika.className}>
        <ul className="flex gap-6">
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/recent-works">Recent Works</Link>
          </li>
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/creator">Creator</Link>
          </li>
          <li className="text-[#FAF8F1] hover:bg-[#FAF8F1] hover:text-[#09745F] p-1 rounded-md font-medium">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
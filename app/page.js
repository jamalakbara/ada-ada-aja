import Guarantee from "@/components/Guarantee/Guarantee";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Image from "next/image";
import Head from 'next/head'
import Services from "@/components/Services/Services";
import RecenWorks from "@/components/RecentWorks/RecenWorks";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Guarantee />
      <Why />
      <Services />
      <RecenWorks />
      <Footer />
    </>
  );
}

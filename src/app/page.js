"use client"

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import ListPsicos from "./components/ListPsicos";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white w-screen">
      <Navbar />
      <Banner />
      <Pricing />
      <ListPsicos />
      <section className="flex flex-wrap items-center p-6 mx-auto gap-6">
      <Testimonials />
      <Testimonials />
      <Testimonials />
      <Testimonials />
      </section>
      </div>
      <Footer />
    </>
  );
}

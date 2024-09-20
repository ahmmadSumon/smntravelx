"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Lenis from 'lenis'
import { useEffect } from "react";
import Packages from "./components/Packages";
import Services from "./components/Services";


export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })


  return (
    <div className="w-full h-full bg-zinc-900">
      
        <Hero className="z-10" />
   
  
    </div>
  );
}

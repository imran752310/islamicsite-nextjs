"use client"


import About from '@/Components/Home/About';
import Blog from '@/Components/Home/Blogs';
import Counter from '@/Components/Home/Counter';
import HeroSection from '@/Components/Home/Hero';
import IslamicPillars from '@/Components/Home/IslamicPillars';
import PrayerTimes from '@/Components/Home/PrayTime';
import Services from '@/Components/Home/Services';
import NewsletterSection from '@/Components/Home/Subscribe';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
    <HeroSection/>
    <IslamicPillars/>
    <About/>
    <PrayerTimes />
    <Services />
    <Blog/>
    <Counter/>
    <NewsletterSection/>
    

    </>
  );
}

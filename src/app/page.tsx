import About from "@/Components/Home/About";
import Blog from "@/Components/Home/Blogs";
import Counter from "@/Components/Home/Counter";
import Hero from "@/Components/Home/Hero";
import IslamicPillars from "@/Components/Home/IslamicPillars";
import PrayerTimes from "@/Components/Home/PrayTime";
import NewsletterSection from "@/Components/Home/Subscribe";

export default function Home() {
  return <div>
    <Hero />
    <IslamicPillars />
    <About />
    <PrayerTimes />
    <Blog />
    <Counter />
    <NewsletterSection />
  </div>;
}

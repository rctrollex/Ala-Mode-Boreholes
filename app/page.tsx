import Hero from "@/components/Hero"
import WhyUs from "@/components/WhyUs"
import Services from "@/components/Services"
import FeaturedProjects from "@/components/FeaturedProjects"
import Contact from "@/components/Contact"
import Process from "@/components/Process"
import CTA from "@/components/CTA"
export default function Home(){
  return(
    <div className="relative min-h-screen w-full">
      <Hero/>
      <WhyUs/>
      <Services/>
      <Process/>
      <FeaturedProjects/>
      <CTA/>
      <Contact/>
    </div>
  )
}
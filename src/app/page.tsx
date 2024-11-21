
'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import FeatureCard from "./_components/featureCard"
import Introduction from "./_components/Introduction"
import Tag from "./_components/tag"

export default   function Home() {

  return (
    <div>
      {/* HERO SECTION */}
      <section className="container py-20 text-center">
        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-red-400 to-black rounded-full text-neutral-950 font-semibold">Senaste podavsnittet</div>
    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter gradient-title pb-6">
      Arsenal Göteborg
    </h1>
    <p className="text-xl text-gray-300 mb-10 max-w-3-xl ">
      Välkonmnmen till Arsenal
    </p>
    <Link href="#">
    <Button className="mr-4 bg-[#7f0000]" size="lg" >Senaste Poddavsnittet</Button>
    </Link>
    <Link href="#">
    <Button  className="bg-[#9C824A]"  size="lg" >Ansök om matchbiljett</Button>
    </Link>
      </section>
  
      <Introduction />
      <section className="py-24">
        <div className="container">
          <div className="flex justify-center">

        <Tag>Features</Tag>
          </div>
        <h2>Where power mets</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <FeatureCard title="Real-time Collaboration" description="Work toegeter" className="col-span-2">
          <div className="aspect-video flex justify-center items-center">
          <p>this year</p>
            </div>
          </FeatureCard>
          <FeatureCard title="Real-time Collaboration" description="Work toegeter" className="col-span-2">
          <div className="aspect-video flex justify-center items-center">
          <p>this year</p>
            </div>
          </FeatureCard>
          <FeatureCard title="Real-time Collaboration" description="Work toegeter" className="col-span-2 ">
          <div className="aspect-video flex justify-center items-center">
          <p>this year</p>
            </div>
          </FeatureCard>
          <FeatureCard title="Real-time Collaboration" description="Work toegeter" className="col-span-2 ">
          <div className="aspect-video flex justify-center items-center">
          <p>this year</p>
            </div>
          </FeatureCard>
          </div>
        </div>
        </section>
    </div>
  )
}
 
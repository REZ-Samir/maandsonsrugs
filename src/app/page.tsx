import AboutRugs from "@/components/home/AboutRugs";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-[40px] sm:h-[60px]"> </div>
      <NewArrival />
      <div className="h-[40px] sm:h-[60px]"> </div>
      <AboutRugs />
      <div className="h-[40px] sm:h-[60px]"> </div>
      <Gallery/>
      <div className="h-[40px] sm:h-[60px]"> </div>
    </>
  );
}

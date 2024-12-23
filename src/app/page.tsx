import { Divider } from "@/components/common/CommonUtility";
import AboutRugs from "@/components/home/AboutRugs";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <NewArrival />
      <Divider />
      <AboutRugs />
      <Divider />
      <Gallery />
      <Divider />
    </>
  );
}

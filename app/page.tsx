import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import CalendlyBadge from "./Calendly";
import FAQSection from "./Faq";
import HowItWorksSection from "./Howitworks";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  const slideData = [
    {
      title: "",
      button: "",
      src: "/Harris_call-VEED_1.mp4", // Video/videos/drone.mp4
      type: "video" as "video",
    },
  ];

  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip text-white">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects/> */}
        {/* <iframe src="https://calendly.com/theabdullah224/new-meeting" width="100%" height="600px" ></iframe> */}
        <CalendlyBadge />
        <HowItWorksSection />
        <FAQSection />
        <h1 className="heading">
          Product Description {""}
          <span className="text-purple">Case Study</span>
        </h1>
        {/* <Carousel slides={slideData} /> */}
        <video
          controls
          loop
          className="w-full mt-6 rounded-lg shadow-lg max-h-[500px] object-cover"
        >
          <source src="/devixaivid. neww mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video
          controls
          loop
          className="w-full mt-6 rounded-lg shadow-lg max-h-[500px] object-cover"
        >
          <source src="/Harris_call-VEED_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Footer />
      </div>
    </main>
  );
}

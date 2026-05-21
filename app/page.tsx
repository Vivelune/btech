import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Slogan from "@/components/slogan/Slogan";
import BannerOne from "../components/bannerOne/BannerOne";
import Branding from "@/components/brandingService/Branding";
import MobileDev from "@/components/mobileDevService/MobileDev";
import Promise from "@/components/promise/Promise";
import BannerTwo from "@/components/bannerTwo/BannerTwo";
import Testimonial from "@/components/testimonial/Testimonial";
import WebDev from "@/components/webDevService/WebDev";
import DigitalMarketing from "@/components/digitalMarketingService/DigitalMarketing";
import Promotion from "@/components/promotion/Promotion";
import GetStarted from "@/components/getStarted/GetStarted";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="">
     <Navbar/>
     <Hero/>
     <Slogan/>
     <BannerOne/>
     <Branding/>
     <MobileDev/>
     <Promise/>
     <BannerTwo/>
     <Testimonial/>
     <WebDev/>
     <DigitalMarketing/>
     <Promotion/>
     <GetStarted/>
     <Footer/>
    </div>
  );
}

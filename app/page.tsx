import Header from "../app/(site)/_components/Header";
import Footer from "./(site)/_components/Footer";
import Link from "next/link";

import EnquirySection1 from "./homepages/fastsection";
import CourseCarousel from "./homepages/secoundCarousel";``
import LogoDisplay from "./homepages/thardsection";
import CommunitySection from "./homepages/forthCommSection";
import TeachingMethods from "./homepages/fevTeacsecton";
import Recruitment from "./homepages/sixslider";
import GoogleReviewsSlider from "./homepages/sevangooglerewive";
// import Python from "./homepages/paythan";
// import CommunitySection22 from "./aboutus/pages";


export default function Page(){
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <CommunitySection22/> */}
      <main className="flex-1">
      
        <EnquirySection1/>
        <LogoDisplay/>
        <CommunitySection/>
        <TeachingMethods/>
        <CourseCarousel/>
        <Recruitment/>
        <GoogleReviewsSlider/>
        {/* <Python/> */}
        
      </main>
      <Footer />
    </div>
  );
}

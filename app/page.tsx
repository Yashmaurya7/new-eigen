// import { buttonVariants } from "@/components/ui/button";

// import Link from "next/link";

// export default async function Home() {
 
//   return <div>
//     <h1 className='text-4xl'>Home</h1>
//     <Link className ={buttonVariants()} href='/dashboard'>Open my dashboard</Link>
    
//   </div>;
// }
// import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { ImageFold } from "@/components/back-ground";
// import { ImageFold1 } from "@/components/back-ground1";
import { ImageFold2 } from "@/components/back-ground2";
// import { ImageFold3 } from "@/components/back-ground3";

import { BackgroundBeamsWithCollisionDemo } from "@/components/BakcgroundBeamDemo";
import { CompareDemo } from "@/components/comparedemo2";
import  {Footer}  from "@/components/Footer";
// import TrustedPartners from "@/components/Logos";
import {  EigengramFold} from "@/components/LogoSection";
import  { ImageCarouselFold } from "@/components/carousel";
import { Timeline } from "@/components/ui/Timeline";
import { IncubatedAndTrustedFolds } from "@/components/ui/TrustedBy";
import { FoldWithVideo } from "@/components/FoldWithVideo";

import { FoundingTeamFold } from "@/components/FoundingTeam";
import Head from "next/head";

// import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialDemo";
// import CustomSection from "@/components/CustomSection";
interface TimelineEntry {
  title: string;         // The title of each timeline entry
  content: React.ReactNode; // The detailed content, can be any JSX or text
}

const timelineData: TimelineEntry[] = [
  {
    title: "Alzhiemer",
    content: (
<div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Finding roots if Alzheimer is just a Brain Disorder or also a Liver and Immunity Disorder
  </p>
</div>


    ),
  },
  {
    title: "Mpox (MonkeyPox)",
    content: (
      <div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Repurposed drugs to find cure for possible pandemic. Analyzing Homolog of E9-A20-D4 of Vaccinia Virus to find novel pathways of drug discovery

  </p>
</div>

    ),
  },
 
  {
    title: "Pancreatic Cancer",
    content: (
      <div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Identifying the top driver genes in Pancreatic Cancer that can be used as potential targets for Drug Discovery

  </p>
</div>

    ),
  },
  {
    title: "Anti–Myeloid Leukemia",
    content: (
      <div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Discovered scfv sequence that will potentially bind with CAR-NK for targeted therapies against Anti Myeloid Leukemia

  </p>
</div>

    ),
  },
  {
    title: "Breast Cancer",
    content: (
      <div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Developed suite of AI applications from lesion segmentation to cancer detection across ultrasound images and histopathological slides
  </p>
</div>

    ),
  },
  {
    title: "Kawasaki/ MISC-C/ Dengue",
    content: (
      <div className="p-4 md:p-6 bg-gray-900 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed md:leading-loose">
  Analyzing the biomarkers across biochemistry, inflammatory, cardiac and blood panels to identify differentiating markers in respective shock syndrome.

  </p>
</div>

    ),
  },
  

];

export default function Home() {
  return (
    <div> 
       <Head>
        <title>Eigengram - Let No Disease Go Untreated</title>
        <meta
          name="description"
          content="Eigengram specializes in precision medicine and drug discovery, tackling diseases like Alzheimer's, Mpox, Pancreatic Cancer, and more using artificial intelligence."
        />
        <meta
          name="keywords"
          content="Eigengram, Precision Medicine, Drug Discovery, Alzheimer's, Mpox, Pancreatic Cancer, AI Healthcare"
        />
        <meta name="author" content="Eigengram Team" />
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Eigengram - Let No Disease Go Untreated" />
        <meta
          property="og:description"
          content="Revolutionizing healthcare with precision medicine and AI-driven drug discovery for a healthier future."
        />
        <meta property="og:image" content="/path-to-thumbnail.jpg" />
        <meta property="og:url" content="https://www.eigengram.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eigengram - Let No Disease Go Untreated" />
        <meta
          name="twitter:description"
          content="Discover how Eigengram is leading the charge in precision medicine and drug discovery."
        />

      </Head>
      <ImageFold/>
          <BackgroundBeamsWithCollisionDemo />
         
          <EigengramFold/>
          <FoldWithVideo/>
       
          <CompareDemo/>
          <ImageFold2/>
          <Timeline data={timelineData}/>
          <ImageCarouselFold/>
          <IncubatedAndTrustedFolds/>
         
        
          <FoundingTeamFold/>
         
          <Footer/>
          
          




    </div>
    
  );
}

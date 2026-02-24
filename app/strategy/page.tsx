import CaseStudiesSection from "@/components/strategy/CaseStudiesSection";
import { TrustedBySlider } from "@/components/strategy/TrustedBySlider";
import { FrameworkSection } from "@/components/strategy/FrameworkSection";
import { HeroSection } from "@/components/strategy/HeroSection";
import Navbar from "@/components/strategy/Navbar";
import { ProgramsSection } from "@/components/strategy/ProgramSection";
//import ProjectsStudiesSection from "@/components/stratergy/projects";
import TermToolsPage from "@/components/strategy/TermToolsSection";
import Image from "next/image";
import { ToolStackSection } from "@/components/strategy/ExecutionSection";



export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ProgramsSection/>
    <FrameworkSection/>
    <TrustedBySlider/>
    <CaseStudiesSection/>
    <TermToolsPage/>
    <ToolStackSection/>
    </>
  );
}
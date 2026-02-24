import Navbar from "@/components/design/navbar";
import DesignHero from "@/components/design/hero";
import MethodologySection from "@/components/design/how";
import AdmissionCriteria from "@/components/design/admission";
import CourseEcosystem from "@/components/design/suite";
import FeaturesSection from "@/components/design/Features";
import Courses from "@/components/design/courses";

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <DesignHero />
      <MethodologySection />
      <AdmissionCriteria />
      <CourseEcosystem />
      <FeaturesSection />
      <Courses/>
    </>
  );
}

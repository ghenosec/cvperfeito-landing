import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { RecommendedTemplate } from "@/components/landing/recommended-template"
import { ProblemSection } from "@/components/landing/problem-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ATSSection } from "@/components/landing/ats-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { BeforeAfter } from "@/components/landing/before-after"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RecommendedTemplate />
      <ProblemSection />
      <HowItWorks />
      <ATSSection />
      <FeaturesSection />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}

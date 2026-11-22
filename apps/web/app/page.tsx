import { About } from "@/components/landing/about";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Privacy } from "@/components/landing/privacy";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Features />
        <Privacy />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}

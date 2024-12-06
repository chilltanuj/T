import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { HeadManagerContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

 export default function Home() {
  return (
    <>
    <Hero />
    <Camp />
    <Guide />
    <Features />
    <GetApp />
    </>  
  ) ;
}

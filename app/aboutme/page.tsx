import AboutMe from "@/components/aboutme/main/AboutMe";
import Footer from "../components/aboutme/main/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <AboutMe />
        <Footer />
      </div>
    </main>
  );
}
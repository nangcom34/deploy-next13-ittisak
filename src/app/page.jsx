"use client";
import Image from "next/image";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Profile />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}

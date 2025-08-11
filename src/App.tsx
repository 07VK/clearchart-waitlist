import React from "react";
import AboutSection from "./components/AboutSection";
import HeroWaitlist from "./components/HeroWaitlist";
import TeamSection from "./components/TeamSection"; // NEW: Import the team section
import logo from "./assets/clearchartai-logo.png"

export default function App() {
  return (
    <div className="bg-hero min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center px-6 pt-6">
        <img src={logo} alt="ClearChartAI" className="h-28 w-auto -ml-8" /> {/* Increased height from h-20 to h-28 */}
        <span
          className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight px-0 pt-7 -ml-5" // Reduced margin-top from mt-6 to mt-2
          style={{ color: '#4EC7C2' }} // light teal from your logo
        >
          ClearChartAI
        </span>
      </header>

      {/* About first */}
      <AboutSection />

      {/* Then the hero that matches your screenshot */}
      <HeroWaitlist />

       {/* Team Section */}
        <TeamSection /> 

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-400 justify-center text-center">
        © {new Date().getFullYear()} ClearChartAI. Inc.,
      </footer>
    </div>
  );
}
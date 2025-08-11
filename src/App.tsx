import React from "react";
import AboutSection from "./components/AboutSection";
import HeroWaitlist from "./components/HeroWaitlist";
import TeamSection from "./components/TeamSection"; // NEW: Import the team section
import logo from "./assets/clearchartai-logo.png"

export default function App() {
  return (
    <div className="bg-hero min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center gap-0 px-6 pt-6">
        <img src={logo} alt="ClearChartAI" className="h-20 w-auto" />
          <span
          className="text-2xl font-semibold mt-6"
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
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"   
      className="mx-auto max-w-6xl px-6 pt-8 md:pt-10"
    >
      {/* Heading matches "Join the Waitlist" */}
      <h1 className="text-[56px]/[1.05] sm:text-[64px]/[1.05] font-extrabold text-slate-900 tracking-tight">
        About ClearChartAI
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-4xl">
      Healthcare buries you under portals, PDFs, and jargon, then calls it “access.” ClearChartAI rips off the veil and hands the controls back to you. We hunt down your records from every hospital, lab, and clinic to bring them into one place. No medical degree needed, ClearChartAI will stitch your records together and translate them into plain English. Our expert trained AI will answer questions about your specific health, help you understand your records, diagnosis, and medications. We will let you know what to ask next, so your limited time with the doctor counts. No mystery, no confusion, just your health data working for you with real security and real clarity.

      </p>

      {/* Optional feature bullets */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="text-sm font-medium">Unified Records</div>
          <div className="text-sm text-slate-600">All providers, one place.</div>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="text-sm font-medium">Plain English</div>
          <div className="text-sm text-slate-600">No jargon, no guesswork.</div>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="text-sm font-medium">Actionable</div>
          <div className="text-sm text-slate-600">Know what to ask next.</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useState } from "react";
import PulsatingHeart from "./PulsatingHeart";
import ipad from "../assets/ipad.png"

type FormState = {
  name: string;
  email: string;
  phone: string;
};

const HeroWaitlist: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <PulsatingHeart />;
  }

  return (
    <main className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-8 lg:py-14">
      {/* Left: headline + form */}
      <div className="max-w-xl">
        <h1 className="text-[56px]/[1.05] sm:text-[64px]/[1.05] font-extrabold text-slate-900 tracking-tight">
          Join the
          <span className="block">ClearChartAI</span>
          Waitlist
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Be among the first to get your complete,
          <br className="hidden sm:block" /> AI-powered health record dashboard
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-2xl bg-white p-5 sm:p-6 shadow-[0_12px_40px_rgba(2,6,23,0.08)] ring-1 ring-slate-100"
        >
          <div className="space-y-4">
            <input
              value={form.name}
              onChange={onChange("name")}
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <input
              value={form.email}
              onChange={onChange("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <input
              value={form.phone}
              onChange={onChange("phone")}
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-white font-semibold shadow-md hover:opacity-95 active:opacity-90"
            >
              Join the Waitlist
            </button>
            <p className="text-center text-xs text-slate-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </form>
      </div>

      {/* Right: iPad image */}
      <div className="relative flex justify-center md:justify-end translate-x-6 md:translate-x-12">
        <img
          src={ipad} // Ensure ipad.png is in public/
          alt="Dashboard preview on iPad"
          className="w-[540px] max-w-full drop-shadow-2xl"
          loading="eager"
        />
      </div>
    </main>
  );
};

export default HeroWaitlist;

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
  // NEW: State for loading and error messages
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  // MODIFIED: This function now handles the API call
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Map frontend state 'phone' to backend's 'phoneNumber'
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phoneNumber: form.phone
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Use the error message from the backend
        throw new Error(data.error || "An unknown error occurred.");
      }

      // On success, trigger the success UI
      setSubmitted(true);

    } catch (err: any) {
      // On failure, set the error message to display it
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // This success UI remains the same
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
              required // NEW: Added required attribute for validation
            />
            <input
              value={form.email}
              onChange={onChange("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required // NEW: Added required attribute
            />
            <input
              value={form.phone}
              onChange={onChange("phone")}
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required // NEW: Added required attribute
            />
            
            {/* NEW: Error message display */}
            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading} // MODIFIED: Disable button when loading
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-white font-semibold shadow-md hover:opacity-95 active:opacity-90 disabled:opacity-50"
            >
              {/* MODIFIED: Show loading text */}
              {isLoading ? "Joining..." : "Join the Waitlist"}
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
          src={ipad}
          alt="Dashboard preview on iPad"
          className="w-[540px] max-w-full drop-shadow-2xl"
          loading="eager"
        />
      </div>
    </main>
  );
};

export default HeroWaitlist;
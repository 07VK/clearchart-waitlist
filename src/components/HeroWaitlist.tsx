import React, { useState } from "react";
import PulsatingHeart from "./PulsatingHeart";
import ipad from "../assets/ipad.png";
import { supabase } from "../utils/supabase"; // NEW: Import Supabase client

type FormState = {
  name: string;
  email: string;
  phone: string;
};

const HeroWaitlist: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist-table')
        .insert({
          name: form.name,
          email: form.email,
          phone_number: form.phone
        });

      if (supabaseError) {
        throw new Error(supabaseError.message || "An unknown error occurred.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return <PulsatingHeart />;
  }

  return (
    <main className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-8 lg:py-14">
      <div className="max-w-xl">
        <h6 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Join the
          <span className="block">ClearChartAI</span>
          Waitlist
        </h6>

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
              required
            />
            <input
              value={form.email}
              onChange={onChange("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required
            />
            <input
              value={form.phone}
              onChange={onChange("phone")}
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required
            />
            
            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-3 text-white font-semibold shadow-md hover:opacity-95 active:opacity-90 disabled:opacity-50"
            >
              {isLoading ? "Joining..." : "Join the Waitlist"}
            </button>
            <p className="text-center text-xs text-slate-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </form>
      </div>

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
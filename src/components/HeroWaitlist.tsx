import React, { useState } from "react";
import PulsatingHeart from "./PulsatingHeart.tsx";

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

    // You can also trigger API call here before switching
    setTimeout(() => {
      // Redirect or show success after a while
    }, 3000);
  };

  if (submitted) {
    return <PulsatingHeart />;
  }

  return (
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
  );
};

export default HeroWaitlist;

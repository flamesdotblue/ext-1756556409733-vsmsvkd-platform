import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-12">
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400" />
            AI Manager Console
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Orchestrate HR and Ops with an AI copilot
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl">
            Automate task distribution, assign work intelligently, and keep schedules balanced. A single manager view powered by real-time AI.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#dashboard" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-950 px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Open Manager View <ArrowRight size={16} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition">
              Explore Features
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50">
            SOC 2 Type II • SSO/SAML • Role-based access
          </div>
        </div>

        <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-white/60">
        <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">99.95% uptime</div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">70% faster assignment</div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">20% better coverage</div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">Enterprise controls</div>
      </div>
    </section>
  );
}

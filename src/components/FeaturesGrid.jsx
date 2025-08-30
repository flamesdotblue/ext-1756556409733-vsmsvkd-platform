import React from 'react';
import { Bot, Calendar, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Task Distribution',
    desc: 'Auto-route tasks based on skills, workload, priority, and SLA risk.',
  },
  {
    icon: Users,
    title: 'Smart Work Assignment',
    desc: 'Continuously balances work across teams and shifts to prevent bottlenecks.',
  },
  {
    icon: Calendar,
    title: 'Adaptive Scheduling',
    desc: 'Generates optimal rosters, respects preferences, and handles last-minute changes.',
  },
  {
    icon: BarChart3,
    title: 'Manager Insights',
    desc: 'Real-time coverage, queue health, and what-to-do-next recommendations.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Built for HR and Ops leaders</h2>
          <p className="mt-2 text-white/60 max-w-2xl">Focus on outcomes, not micro-assignments. Let the AI handle distribution while you manage strategy and people.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-orange-400/30 border border-white/10 flex items-center justify-center">
                <f.icon className="text-white/90" size={18} />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/65">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

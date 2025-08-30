import React from 'react';
import { CheckCircle, Clock, Users, Calendar, Bot } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Manager view</h2>
            <p className="mt-2 text-white/60 max-w-2xl">Live overview of teams, queues, coverage, and recommended actions from your AI copilot.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-sm hover:bg-white/[0.05] transition">
            <Bot size={16} /> Ask AI for plan
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: KPIs and Queues */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <StatCard label="Coverage" value="92%" trend="+2%" />
              <StatCard label="SLA: HR tickets" value="97%" trend="+1%" />
              <StatCard label="Avg handle time" value="5m 12s" trend="-18s" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="font-medium">Queues</div>
                <div className="text-xs text-white/60">Updated just now</div>
              </div>
              <div className="grid md:grid-cols-3 gap-0">
                <QueueCard title="Onboarding" waiting={18} sla="98%" color="from-purple-500/30" />
                <QueueCard title="Benefits" waiting={42} sla="94%" color="from-fuchsia-500/30" />
                <QueueCard title="IT Access" waiting={9} sla="99%" color="from-orange-400/30" />
              </div>
            </div>
          </div>

          {/* Right: Shifts and Automations */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-sm text-white/70 mb-3"><Calendar size={16}/> Upcoming shifts</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center justify-between"><span>APAC • HR Ops</span><span className="text-white/60">08:00–16:00</span></li>
                <li className="flex items-center justify-between"><span>EMEA • IT Support</span><span className="text-white/60">09:00–17:00</span></li>
                <li className="flex items-center justify-between"><span>Americas • Payroll</span><span className="text-white/60">10:00–18:00</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-sm text-white/70 mb-3"><CheckCircle size={16}/> Automations</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Route VIP tickets to L2 if queue &gt; 20</li>
                <li>• Auto-assign onboarding tasks at T-3 days</li>
                <li>• Rebalance shifts to meet 90% coverage</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-sm text-white/70 mb-3"><Clock size={16}/> Recommended actions</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Move 2 agents from Benefits to Onboarding for 45 minutes</li>
                <li>• Approve swap request: EMEA HR Ops 14:00–18:00</li>
                <li>• Start surge plan if Benefits queue exceeds 60</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-emerald-400">{trend}</div>
      </div>
    </div>
  );
}

function QueueCard({ title, waiting, sla, color = 'from-purple-500/30' }) {
  return (
    <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
      <div className="flex items-center justify-between">
        <div className="font-medium">{title}</div>
        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${color} to-transparent`} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
          <div className="text-xs text-white/60">Waiting</div>
          <div className="mt-1 text-lg font-semibold">{waiting}</div>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
          <div className="text-xs text-white/60">SLA</div>
          <div className="mt-1 text-lg font-semibold">{sla}</div>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400" style={{ width: Math.min(100, waiting).toString() + '%' }} />
      </div>
    </div>
  );
}

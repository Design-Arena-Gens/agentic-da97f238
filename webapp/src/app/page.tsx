import { FaqSection } from "@/components/FaqSection";
import { OfferCard } from "@/components/OfferCard";
import { StrategyCard } from "@/components/StrategyCard";
import { faqs, offers, strategies } from "@/data/offers";
import { ArrowRight, CircleCheck, Download, Play, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:px-12">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 mix-blend-screen">
          <div className="h-full w-full rounded-[56px] border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80" />
        </div>
      </div>

      <header className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">
            EverNet eSIM Vault
            <ShieldCheck className="h-4 w-4" />
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Source eSIM profiles with{" "}
            <span className="bg-gradient-to-r from-primary-200 to-amber-300 bg-clip-text text-transparent">
              lifetime-grade
            </span>{" "}
            connectivity economics.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            You asked for perpetual, zero-billing data. We mapped the frontier:
            vetted brokers, DAO-backed endowments, and ad-subsidized networks
            that are closing in on true lifetime internet. Navigate the risks,
            line up due diligence, and lock a resilient stack.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#offers"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200"
            >
              Inspect live offers
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://agentic-da97f238.vercel.app/playbooks/perpetual-connectivity.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary-300/60 hover:text-primary-100"
            >
              Download due diligence checklist
              <Download className="h-4 w-4" />
            </a>
            <a
              href="#briefing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-50"
            >
              Watch 4-min briefing
              <Play className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-slate-200">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-100">
              Signal Dashboard
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Active perpetual pilots
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">12</dd>
                <p className="text-xs text-slate-400">
                  Verified in the last 90 days
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Average cost amortized
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">$18/mo</dd>
                <p className="text-xs text-slate-400">
                  Based on 24-month modeling
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Broker reliability index
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">87%</dd>
                <p className="text-xs text-slate-400">
                  Weighted by arbitration wins
                </p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Regions with fallback mesh
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">32</dd>
                <p className="text-xs text-slate-400">
                  Includes Helium + Janus anchors
                </p>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-100">
              Immediate next steps
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 h-4 w-4 text-primary-200" />
                Request escrow terms from Nomad community broker.
              </li>
              <li className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 h-4 w-4 text-primary-200" />
                Apply to Helium FreedomWave with hotspot contribution plan.
              </li>
              <li className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 h-4 w-4 text-primary-200" />
                Audit Janus Foundry endowment contract before staking.
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section
        id="offers"
        className="space-y-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl sm:p-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-100">
              Lifetime-grade offer desk
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Curated eSIM plays aligned with perpetual connectivity economics.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Each listing includes independent proof points, stress-testing
            instructions, and negotiation hooks. Start with escrow-friendly
            brokers before committing to endowment-backed programs.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      <section
        id="briefing"
        className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl sm:p-12 lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-100">
            Field briefing · 4 min watch
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Deploy the EverNet acquisition playbook
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Learn how to structure communications, escrow, and fallback capacity
            before brokers sense urgency. We cover screening scripts, IMEI
            hygiene, and legal levers that keep your profile alive even if
            carriers rotate policies.
          </p>
          <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
            <iframe
              title="EverNet Field Briefing"
              src="https://www.youtube.com/embed/2L9nkjG4RIs?rel=0"
              className="h-full w-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-white">
            Resilience stack checklist
          </h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <strong className="text-white">Anchor device:</strong> dedicated
              travel phone with automated ping scripts and eSIM cloning disabled.
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <strong className="text-white">Compliance dossier:</strong> store
              KYC docs, payment receipts, and SLA commitments in an encrypted
              vault for instant escalation.
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <strong className="text-white">Fallback mesh:</strong> join Helium
              or Meshtastic enclaves near frequent destinations for last-mile
              handoff.
            </li>
            <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <strong className="text-white">Legal guardrails:</strong> pre-draft
              dispute letters referencing telecom arbitration clauses per
              region.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl sm:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-100">
              Acquisition playbook
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Operational moves to keep lifetime promises alive.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Combine these strategies to avoid sudden deactivation, manage broker
            relationships, and create leverage when programs tighten entry.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <section className="rounded-3xl border border-primary-200/30 bg-gradient-to-br from-primary-500/30 via-amber-300/20 to-slate-900/70 p-10 text-slate-950 shadow-[0_40px_90px_rgba(16,153,255,0.35)] sm:p-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">
              Ready to chase truly free internet for life?
            </h2>
            <p className="max-w-xl text-sm">
              Submit your device roster and travel patterns to receive a custom
              sourcing dossier within 48 hours. We secure NDAs, broker calls, and
              escrow introductions so you can move fast.
            </p>
          </div>
          <a
            href="mailto:access@evernet-vault.io?subject=EverNet%20Lifetime%20Connectivity%20Intake"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-primary-100 transition hover:bg-slate-900"
          >
            Launch intake
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

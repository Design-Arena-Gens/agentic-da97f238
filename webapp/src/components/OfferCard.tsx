import { Offer } from "@/data/offers";
import { cn } from "@/lib/cn";
import { ArrowUpRight, Shield, Wifi } from "lucide-react";
import Link from "next/link";

type Props = {
  offer: Offer;
};

const signalColors: Record<Offer["signalStrength"], string> = {
  speculative: "bg-amber-100 text-amber-700 border-amber-200",
  emerging: "bg-sky-100 text-sky-700 border-sky-200",
  validated: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const signalLabels: Record<Offer["signalStrength"], string> = {
  speculative: "Speculative — proceed with escrow",
  emerging: "Emerging — live pilots running",
  validated: "Validated — audited backing",
};

export function OfferCard({ offer }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl transition hover:border-primary-300/50 hover:shadow-primary-500/30">
      <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-primary-500/20 blur-3xl transition group-hover:scale-125" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {offer.brand}
          </h3>
          <p className="mt-1 text-sm text-slate-300">{offer.headline}</p>
        </div>
        <span
          className={cn(
            "rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-wide",
            signalColors[offer.signalStrength],
          )}
        >
          {signalLabels[offer.signalStrength]}
        </span>
      </div>

      <dl className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <Wifi className="h-4 w-4 text-primary-300" />
            Coverage
          </dt>
          <dd className="mt-1 font-medium">{offer.regions.join(", ")}</dd>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            One-time exposure
          </dt>
          <dd className="mt-1 font-medium">{offer.oneTimeCost}</dd>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Allowance profile
          </dt>
          <dd className="mt-1 font-medium">{offer.allowance}</dd>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Lifetime mechanic
          </dt>
          <dd className="mt-1 font-medium text-slate-200">
            {offer.lifetimeMechanic}
          </dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div>
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-200">
            <Shield className="h-4 w-4" />
            Proof points
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-200">
            {offer.proofPoints.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-white/5 bg-slate-900/40 p-3 leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary-200">
            Due diligence drill-down
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-200">
            {offer.dueDiligence.map((item) => (
              <li key={item} className="rounded-xl border border-white/5 bg-slate-900/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={offer.link}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-500/90 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Investigate offer
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

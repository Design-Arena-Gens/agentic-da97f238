import { Strategy } from "@/data/offers";
import { Lightbulb } from "lucide-react";

type Props = {
  strategy: Strategy;
};

export function StrategyCard({ strategy }: Props) {
  return (
    <div className="group flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl transition hover:border-primary-300/40 hover:shadow-primary-500/20">
      <header className="flex items-start gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200 transition group-hover:bg-primary-500/30">
          <Lightbulb className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-white">{strategy.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{strategy.description}</p>
        </div>
      </header>
      <ul className="mt-2 space-y-2 text-sm text-slate-200">
        {strategy.actions.map((action) => (
          <li
            key={action}
            className="rounded-2xl border border-white/5 bg-slate-900/40 p-3 leading-relaxed"
          >
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
}

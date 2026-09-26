import React from "react";
import { ArrowRight, ListOrdered, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ModeCard({to,random,label,description}) {
  const Icon = random ? Shuffle : ListOrdered;
  return <Link to={to} className="group card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-soft">
    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${random?"bg-ink-900 text-lime-400":"bg-lime-100 text-ink-900"}`}><Icon size={25}/></div>
    <div className="min-w-0 flex-1"><h3 className="text-lg font-extrabold">{label}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{description}</p></div>
    <ArrowRight size={19} className="text-slate-400 group-hover:translate-x-1"/>
  </Link>;
}

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopicCard({basePath,item,index}) {
  return <Link to={`${basePath}/${item.id}`} className="group card p-5 transition hover:-translate-y-1 hover:shadow-soft">
    <div className="flex items-center gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-900 text-xl font-black text-lime-400">{item.emoji}</div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2"><span className="text-xs font-black text-slate-400">TOPIC {String(index+1).padStart(2,"0")}</span></div>
        <h3 className="text-lg font-extrabold">{item.name}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-500">{item.description}</p>
      </div>
      <ArrowRight size={19} className="text-slate-400 group-hover:translate-x-1 group-hover:text-ink-900"/>
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Sparkles size={13}/>{item.items.length} practice cards</div>
  </Link>;
}

import React from "react";
import { ArrowRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubjectCard({classId,item}) {
  return <Link to={`/study/${classId}/${item.id}`} className="group card relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-soft">
    <div className="absolute inset-x-0 top-0 h-1.5 bg-lime-400"/>
    <div className="flex items-start justify-between">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime-100 text-3xl font-black">{item.emoji}</div>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 group-hover:bg-lime-400"><ArrowRight size={18}/></span>
    </div>
    <h3 className="mt-6 font-display text-2xl font-extrabold">{item.name}</h3>
    <div className="mt-1 text-sm font-bold text-slate-400">{item.nativeName}</div>
    <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">{item.description}</p>
    <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Layers3 size={14}/>{item.chapters.length} chapters</div>
  </Link>;
}

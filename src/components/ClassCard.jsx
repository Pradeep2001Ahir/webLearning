import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClassCard({ item }) {
  return <Link to={`/study/${item.id}`} className="group card relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-lime-100 transition group-hover:bg-lime-200"/>
    <div className="relative flex items-start justify-between gap-4">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-2xl">{item.emoji}</div>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 group-hover:bg-lime-400"><ArrowRight size={17}/></div>
    </div>
    <div className="relative mt-5">
      <div className="text-xs font-black uppercase tracking-[.16em] text-lime-600">{item.stage}</div>
      <h3 className="mt-1 font-display text-2xl font-extrabold">{item.name}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{item.description}</p>
      <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><BookOpen size={14}/>{item.subjects.length} subjects</div>
    </div>
  </Link>;
}

import React from "react";
import { ArrowRight, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChapterCard({classId,subjectId,item,index}) {
  return <Link to={`/study/${classId}/${subjectId}/${item.id}`} className="group card p-5 transition hover:-translate-y-1 hover:shadow-soft">
    <div className="flex items-center gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime-100 text-2xl">{item.emoji}</div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-[11px] font-black text-slate-500">{index+1}</span><h3 className="truncate text-lg font-extrabold">{item.name}</h3></div>
        <p className="text-sm font-semibold text-slate-500">{item.description}</p>
      </div>
      <ArrowRight size={19} className="shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-ink-900"/>
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><ListChecks size={14}/>{item.topics.length} topics</div>
  </Link>;
}

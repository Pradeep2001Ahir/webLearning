import React from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Volume2 } from "lucide-react";

function speak(value){
  if(!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(value);
  u.rate=.72; u.pitch=1.05;
  window.speechSynthesis.speak(u);
}

export default function LearningCard({item,index,total,mode,onPrev,onNext,onRestart}){
  const serial=mode==="serial";
  return <div className="mx-auto max-w-3xl">
    <div className="mb-5 flex items-center justify-between">
      <div><div className="text-xs font-black uppercase tracking-[.18em] text-slate-400">{serial?"Serial Wise":"Random Test"}</div><div className="mt-1 text-sm font-extrabold">{index+1} <span className="text-slate-400">/ {total}</span></div></div>
      <button onClick={()=>speak(item)} className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-extrabold text-slate-600 ring-1 ring-slate-200"><Volume2 size={16}/> Listen</button>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-lime-400 transition-all" style={{width:`${((index+1)/total)*100}%`}}/></div>
    <div className="relative mt-6 flex min-h-[390px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:min-h-[450px]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-100"/>
      <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-slate-50"/>
      <div className="relative text-center">
        <div className="mb-7 inline-flex rounded-full bg-lime-100 px-4 py-2 text-xs font-black uppercase tracking-[.18em]">Look • Say • Learn</div>
        <div key={`${item}-${index}`} className="animate-pop break-words px-3 font-display text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none text-ink-900">{item}</div>
        <p className="mx-auto mt-8 max-w-md text-sm font-bold leading-6 text-slate-400">Say the answer aloud, point to the card, and continue when ready.</p>
      </div>
    </div>
    <div className={`mt-5 grid gap-3 ${serial?"grid-cols-3":"grid-cols-2"}`}>
      {serial && <button disabled={index===0} onClick={onPrev} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white font-extrabold ring-1 ring-slate-200 disabled:opacity-35"><ChevronLeft size={20}/><span className="hidden sm:inline">Previous</span></button>}
      <button onClick={onRestart} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-lime-400 font-extrabold"><RotateCcw size={19}/> Restart</button>
      <button onClick={onNext} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-ink-900 font-extrabold text-white"><span className="hidden sm:inline">Next</span><ChevronRight size={20}/></button>
    </div>
  </div>;
}

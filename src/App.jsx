import React, {useMemo, useState} from "react";
import {Routes, Route, Link, Navigate, useParams} from "react-router-dom";
import {ArrowRight, BookOpen, CheckCircle2, GraduationCap, Layers3, Sparkles, Target} from "lucide-react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import ClassCard from "./components/ClassCard";
import SubjectCard from "./components/SubjectCard";
import ChapterCard from "./components/ChapterCard";
import TopicCard from "./components/TopicCard";
import ModeCard from "./components/ModeCard";
import LearningCard from "./components/LearningCard";
import {classes,getClass,getSubject,getChapter,getTopic} from "./data/academy";

function Layout({children}){
  return <div className="min-h-screen">
    <Header/>
    <main>{children}</main>
    <footer className="mt-16 border-t bg-white"><div className="page-shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between"><b>Wishwood Academy</b><span className="text-sm font-semibold text-slate-400">Little learners • Big beginnings</span></div></footer>
  </div>
}

function Home(){
  return <div>
    <section className="overflow-hidden"><div className="page-shell grid min-h-[570px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-xs font-black uppercase tracking-[.16em]"><Sparkles size={14}/> Smart learning journey</div>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">A better learning path for <span className="text-lime-500">little minds.</span></h1>
        <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-slate-500 sm:text-lg">Classes → Subjects → Chapters → Topics → Practice. A real-world content structure that makes your academy website easy to grow.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/study" className="btn-lime">Open Study Hub <ArrowRight size={19}/></Link><a href="#architecture" className="btn-dark">See Architecture</a></div>
      </div>
      <div className="relative"><div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-lime-200 blur-3xl"/><div className="relative rounded-[2.5rem] bg-ink-900 p-5 shadow-soft sm:p-7">
        <div className="rounded-[2rem] bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between"><div><div className="eyebrow">Learning Hub</div><div className="mt-2 font-display text-2xl font-extrabold">Choose your class</div></div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-100"><GraduationCap/></div></div>
          <div className="mt-7 grid grid-cols-2 gap-3">{classes.slice(0,4).map(c=><Link key={c.id} to={`/study/${c.id}`} className="rounded-2xl border p-4 transition hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-50"><div className="text-2xl">{c.emoji}</div><div className="mt-2 font-extrabold">{c.name}</div><div className="mt-1 text-xs font-bold text-slate-400">{c.subjects.length} subjects</div></Link>)}</div>
          <div className="mt-5 rounded-2xl bg-lime-50 p-4 text-sm font-bold text-slate-600">✓ Every level follows the same simple learning journey.</div>
        </div>
      </div></div>
    </div></section>

    <section id="architecture" className="border-y bg-white py-16"><div className="page-shell">
      <div className="max-w-2xl"><div className="eyebrow">Real-life architecture</div><h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">One structure. Unlimited content.</h2><p className="mt-3 font-semibold leading-7 text-slate-500">Teachers or developers can add classes, subjects, chapters and topics without creating a new page for every item.</p></div>
      <div className="mt-8 grid gap-3 md:grid-cols-5">{[
        ["01","Classes","Nursery → 3rd → ..."],["02","Subjects","Hindi • English • Maths"],["03","Chapters","Swar • Grammar • Numbers"],["04","Topics","Cards, words, sums"],["05","Practice","Serial + Random"]
      ].map(([n,t,d])=><div key={t} className="card p-5"><div className="text-xs font-black text-lime-600">{n}</div><div className="mt-2 font-extrabold">{t}</div><div className="mt-1 text-sm font-semibold text-slate-400">{d}</div></div>)}</div>
    </div></section>

    <section className="py-16"><div className="page-shell"><div className="flex items-end justify-between gap-4"><div><div className="eyebrow">Study</div><h2 className="mt-2 font-display text-3xl font-extrabold">Start from a class</h2></div><Link to="/study" className="hidden text-sm font-extrabold hover:underline sm:block">View all →</Link></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{classes.slice(0,4).map(c=><ClassCard key={c.id} item={c}/>)}</div></div></section>
  </div>
}

function Study(){
  const [query,setQuery]=useState("");
  const filtered=classes.filter(c=>c.name.toLowerCase().includes(query.toLowerCase()));
  return <div className="page-shell py-10 sm:py-14"><Breadcrumbs items={[{label:"Study"}]}/>
    <div className="flex flex-col gap-5 rounded-[2rem] bg-ink-900 p-6 text-white shadow-soft sm:p-8 md:flex-row md:items-end md:justify-between">
      <div><div className="eyebrow text-lime-300">Learning Hub</div><h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Choose your class</h1><p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-300">Select the child's class first. Then the website will guide you through subjects, chapters and topics.</p></div>
      <div className="w-full md:max-w-xs"><label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-400">Find a class</label><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Nursery, LKG..." className="w-full rounded-2xl border-0 bg-white px-4 py-3 font-bold text-ink-900 outline-none"/></div>
    </div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map(c=><ClassCard key={c.id} item={c}/>)}</div>
  </div>
}

function Subjects(){
  const {classId}=useParams(); const cls=getClass(classId); if(!cls)return <Navigate to="/study" replace/>;
  return <div className="page-shell py-10 sm:py-14"><Breadcrumbs items={[{label:"Study",to:"/study"},{label:cls.name}]}/>
    <div className="mb-8"><div className="eyebrow">{cls.stage} • {cls.shortName}</div><h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{cls.name} — Subjects</h1><p className="mt-2 font-semibold text-slate-500">{cls.description}</p></div>
    <div className="grid gap-5 md:grid-cols-3">{cls.subjects.map(s=><SubjectCard key={s.id} classId={cls.id} item={s}/>)}</div>
  </div>
}

function Chapters(){
  const {classId,subjectId}=useParams(); const cls=getClass(classId), sub=getSubject(classId,subjectId); if(!cls||!sub)return <Navigate to="/study" replace/>;
  return <div className="page-shell py-10 sm:py-14"><Breadcrumbs items={[{label:"Study",to:"/study"},{label:cls.name,to:`/study/${cls.id}`},{label:sub.name}]}/>
    <div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime-100 text-3xl font-black">{sub.emoji}</div><div><div className="eyebrow">{cls.name}</div><h1 className="mt-1 font-display text-3xl font-extrabold">{sub.name} Chapters</h1></div></div>
    <div className="mt-8 grid gap-4 md:grid-cols-2">{sub.chapters.map((c,i)=><ChapterCard key={c.id} classId={cls.id} subjectId={sub.id} item={c} index={i}/>)}</div>
  </div>
}

function Topics(){
  const {classId,subjectId,chapterId}=useParams(); const cls=getClass(classId), sub=getSubject(classId,subjectId), ch=getChapter(classId,subjectId,chapterId); if(!cls||!sub||!ch)return <Navigate to="/study" replace/>;
  const base=`/study/${cls.id}/${sub.id}/${ch.id}`;
  return <div className="page-shell py-10 sm:py-14"><Breadcrumbs items={[{label:"Study",to:"/study"},{label:cls.name,to:`/study/${cls.id}`},{label:sub.name,to:`/study/${cls.id}/${sub.id}`},{label:ch.name}]}/>
    <div className="rounded-[2rem] bg-ink-900 p-6 text-white shadow-soft sm:p-8"><div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime-400 text-3xl text-ink-900">{ch.emoji}</div><div><div className="text-xs font-black uppercase tracking-[.18em] text-lime-300">{sub.name} • Chapter</div><h1 className="mt-1 font-display text-3xl font-extrabold">{ch.name}</h1><p className="mt-2 text-sm font-semibold text-slate-300">{ch.description}</p></div></div></div>
    <div className="mt-8 grid gap-4 md:grid-cols-2">{ch.topics.map((t,i)=><TopicCard key={t.id} basePath={base} item={t} index={i}/>)}</div>
  </div>
}

function TopicPractice(){
  const {classId,subjectId,chapterId,topicId}=useParams(); const cls=getClass(classId), sub=getSubject(classId,subjectId), ch=getChapter(classId,subjectId,chapterId), t=getTopic(classId,subjectId,chapterId,topicId); if(!cls||!sub||!ch||!t)return <Navigate to="/study" replace/>;
  return <div className="page-shell py-10 sm:py-14"><Breadcrumbs items={[{label:"Study",to:"/study"},{label:cls.name,to:`/study/${cls.id}`},{label:sub.name,to:`/study/${cls.id}/${sub.id}`},{label:ch.name,to:`/study/${cls.id}/${sub.id}/${ch.id}`},{label:t.name}]}/>
    <div className="mx-auto max-w-3xl text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-lime-100 text-4xl font-black">{t.emoji}</div><div className="mt-5 eyebrow">{cls.name} • {sub.name} • {ch.name}</div><h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{t.name}</h1><p className="mt-3 font-semibold text-slate-500">{t.description}</p></div>
    <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
      <ModeCard to={`/study/${classId}/${subjectId}/${chapterId}/${topicId}/serial`} label="Serial Wise" description="Previous, Restart and Next — one card at a time."/>
      <ModeCard to={`/study/${classId}/${subjectId}/${chapterId}/${topicId}/random`} random label="Random Test" description="Next shows a different random learning card."/>
    </div>
    <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-3xl border border-lime-200 bg-lime-50 p-5"><CheckCircle2 className="mt-0.5 shrink-0 text-lime-600"/><div><b>Learning tip</b><p className="mt-1 text-sm font-semibold text-slate-600">Keep practice short, repeat often, and let children say the answer aloud.</p></div></div>
  </div>
}

function Practice(){
  const {classId,subjectId,chapterId,topicId,mode}=useParams(); const t=getTopic(classId,subjectId,chapterId,topicId); if(!t||!["serial","random"].includes(mode))return <Navigate to="/study" replace/>;
  const [index,setIndex]=useState(0), [random,setRandom]=useState(0);
  const active=mode==="serial"?index:random; const item=t.items[active];
  const nextRandom=useMemo(()=>{if(t.items.length<2)return 0;let n=Math.floor(Math.random()*t.items.length);if(n===random)n=(n+1)%t.items.length;return n},[random,t.items.length]);
  const next=()=>mode==="serial"?setIndex(i=>(i+1)%t.items.length):setRandom(nextRandom);
  return <div className="page-shell py-8 sm:py-12">
    <Breadcrumbs items={[{label:"Study",to:"/study"},{label:"Practice"}]}/>
    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><div className="eyebrow">{mode==="serial"?"Serial Wise":"Random Test"}</div><h1 className="mt-1 font-display text-3xl font-extrabold">{t.name}</h1></div><Link to={`/study/${classId}/${subjectId}/${chapterId}/${topicId}`} className="text-sm font-extrabold text-slate-500 hover:text-ink-900">← Change practice mode</Link></div>
    <LearningCard item={item} index={active} total={t.items.length} mode={mode} onPrev={()=>setIndex(i=>Math.max(0,i-1))} onNext={next} onRestart={()=>{setIndex(0);setRandom(0)}}/>
  </div>
}

function NotFound(){return <div className="page-shell flex min-h-[65vh] items-center justify-center text-center"><div><div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-lime-100 text-3xl">?</div><h1 className="mt-6 font-display text-3xl font-extrabold">Page not found</h1><Link to="/study" className="btn-lime mt-6">Back to Study <ArrowRight size={18}/></Link></div></div>}

export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/study" element={<Study/>}/><Route path="/study/:classId" element={<Subjects/>}/><Route path="/study/:classId/:subjectId" element={<Chapters/>}/><Route path="/study/:classId/:subjectId/:chapterId" element={<Topics/>}/><Route path="/study/:classId/:subjectId/:chapterId/:topicId" element={<TopicPractice/>}/><Route path="/study/:classId/:subjectId/:chapterId/:topicId/:mode" element={<Practice/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}

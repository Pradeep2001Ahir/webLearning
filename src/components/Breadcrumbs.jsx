import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items=[] }) {
  return <div className="mb-6 flex flex-wrap items-center gap-1.5 text-sm font-bold text-slate-500">
    <Link to="/" className="inline-flex items-center gap-1 hover:text-ink-900"><Home size={14}/>Home</Link>
    {items.map((item,i)=><React.Fragment key={i}><ChevronRight size={14} className="text-slate-300"/>
      {item.to ? <Link to={item.to} className="hover:text-ink-900">{item.label}</Link> : <span className={i===items.length-1?"text-ink-900":""}>{item.label}</span>}
    </React.Fragment>)}
  </div>;
}

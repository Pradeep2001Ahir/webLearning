import React, { useState } from "react";
import { Menu, X, Home, BookOpen, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/study", label: "Study", icon: BookOpen },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex">
          {links.map(({to,label,icon:Icon}) => (
            <NavLink key={to} to={to} className={({isActive}) =>
              `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-extrabold ${isActive ? "bg-lime-100 text-ink-900" : "text-slate-600 hover:bg-slate-100"}`
            }><Icon size={17}/>{label}</NavLink>
          ))}
          <span className="ml-2 flex items-center gap-2 rounded-full bg-ink-900 px-3 py-2 text-xs font-extrabold text-white">
            <BarChart3 size={14} className="text-lime-400"/> Learning Hub
          </span>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && <div className="border-t bg-white p-3 md:hidden">
        <div className="page-shell flex flex-col gap-2 px-0">
          {links.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} onClick={()=>setOpen(false)}
            className={({isActive})=>`flex items-center gap-3 rounded-2xl px-4 py-3 font-extrabold ${isActive?"bg-lime-100":"bg-slate-50"}`}><Icon size={18}/>{label}</NavLink>)}
        </div>
      </div>}
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Wishwood Academy">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 shadow-lg">
        <svg viewBox="0 0 52 52" className="h-8 w-8">
          <path d="M12 9h28v21c0 7-5.8 12.6-14 15-8.2-2.4-14-8-14-15V9Z" fill="none" stroke="#b7e51f" strokeWidth="2.8"/>
          <path d="M26 17c-5 4-7 8-6 13 2-2 4-3 6-3 3 0 5 2 7 4 0-6-2-10-7-14Z" fill="#b7e51f"/>
          <path d="M27 18c-1 5-1 10-1 16" stroke="#10182a" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg font-extrabold tracking-tight">WISHWOOD</div>
        <div className="mt-1 text-[10px] font-black tracking-[.25em] text-slate-500">ACADEMY</div>
      </div>
    </Link>
  );
}

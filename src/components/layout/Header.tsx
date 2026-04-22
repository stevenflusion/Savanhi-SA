"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Command } from "lucide-react";

export default function Header({
  setMobileOpen,
}: {
  setMobileOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-[#1C1C1C]/90 backdrop-blur-md border-b border-[#7A5197]/20 noise-bg">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#242424] transition-colors"
          >
            <Menu className="w-5 h-5 text-[#F4F4F4]" />
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 lg:hidden"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7A5197] via-[#BB5098] to-[#F47F6B] flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span
              className="font-bold text-[#F4F4F4]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Savanhi
            </span>
          </Link>
        </div>

        {/* Center - Search */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#242424] border border-[#7A5197]/20 text-sm text-[#A0A0A0] hover:border-[#7A5197]/40 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span className="text-xs">Buscar documentación...</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#1C1C1C] text-[10px] text-[#A0A0A0] border border-[#7A5197]/20">
            <Command className="w-3 h-3" />
            <span>K</span>
          </kbd>
        </button>

        {/* Right */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex px-2 py-1 rounded-full bg-[#2A1F35] text-[10px] text-[#BB5098] font-medium border border-[#7A5197]/20">
            v1.0
          </span>
        </div>
      </div>
    </header>
  );
}

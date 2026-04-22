"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Command,
} from "lucide-react";
import { navigation, NavItem } from "@/lib/navigation";

function NavSection({
  section,
  currentPath,
}: {
  section: NavItem;
  currentPath: string;
}) {
  const isActive = currentPath.startsWith(section.href);
  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    setOpen(isActive);
  }, [isActive]);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:translate-x-1 ${
          isActive
            ? "text-[#F4F4F4] bg-[#2A1F35]"
            : "text-[#A0A0A0] hover:text-[#F4F4F4] hover:bg-[#242424]"
        }`}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {open ? (
          <ChevronDown className="w-4 h-4 mr-2 shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 mr-2 shrink-0" />
        )}
        <span>{section.title}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 space-y-1 border-l border-[#7A5197]/20">
              {section.items?.map((item) => {
                const itemActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center pl-4 pr-3 py-1.5 text-sm rounded-r-lg transition-all duration-200 hover:translate-x-1 ${
                      itemActive
                        ? "text-[#F4F4F4] bg-[#BB5098]/15 border-l-2 border-[#BB5098]"
                        : "text-[#A0A0A0] hover:text-[#F4F4F4]"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-[#1C1C1C] border-r border-[#7A5197]/20 noise-bg flex flex-col lg:translate-x-0 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-[#7A5197]/20">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A5197] via-[#BB5098] to-[#F47F6B] flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div>
              <div
                className="font-bold text-lg text-[#F4F4F4] leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Savanhi
              </div>
              <div className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">
                Documentación
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigation.map((section) => (
            <NavSection
              key={section.href}
              section={section}
              currentPath={pathname}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#7A5197]/20">
          <div className="flex items-center justify-between text-xs text-[#A0A0A0]">
            <span>Versión</span>
            <span className="px-2 py-0.5 rounded-full bg-[#2A1F35] text-[#BB5098] font-medium">
              Abril 2026
            </span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}

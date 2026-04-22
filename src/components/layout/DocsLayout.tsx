"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TableOfContents from "./TableOfContents";
import { getBreadcrumbs, getPrevNext } from "@/lib/navigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);
  const { prev, next } = getPrevNext(pathname);

  return (
    <div className="min-h-screen flex">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 flex flex-col lg:ml-[280px]">
        <Header setMobileOpen={setMobileOpen} />

        <div className="flex flex-1">
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              {/* Breadcrumb */}
              {breadcrumbs.length > 1 && (
                <nav className="flex items-center gap-2 text-xs text-[#A0A0A0] mb-6">
                  {breadcrumbs.map((crumb, idx) => (
                    <span key={crumb.href} className="flex items-center gap-2">
                      {idx > 0 && <span>/</span>}
                      <Link
                        href={crumb.href}
                        className="hover:text-[#F4F4F4] transition-colors"
                      >
                        {crumb.title}
                      </Link>
                    </span>
                  ))}
                </nav>
              )}

              {/* Content */}
              <article className="prose prose-invert max-w-none">
                {children}
              </article>

              {/* Prev/Next */}
              <div className="mt-12 pt-8 border-t border-[#7A5197]/20 flex items-center justify-between gap-4">
                {prev ? (
                  <Link
                    href={prev.href}
                    className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F4F4F4] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-[#7A5197]">
                        Anterior
                      </div>
                      <div className="truncate max-w-[200px]">{prev.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={next.href}
                    className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#F4F4F4] transition-colors"
                  >
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-[#7A5197]">
                        Siguiente
                      </div>
                      <div className="truncate max-w-[200px]">{next.title}</div>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          </main>

          {/* TOC */}
          <div className="hidden xl:block w-[220px] shrink-0">
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  );
}

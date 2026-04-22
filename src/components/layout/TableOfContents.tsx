"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    const tocItems: TocItem[] = [];
    headings.forEach((heading, idx) => {
      const id = heading.id || `heading-${idx}`;
      if (!heading.id) heading.id = id;
      tocItems.push({
        id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });
    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-[220px] shrink-0">
      <div className="sticky top-20 pl-6 border-l border-[#7A5197]/20">
        <h4
          className="text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          En esta página
        </h4>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition-all duration-200 hover:text-[#F4F4F4] ${
                item.level === 3 ? "pl-3" : ""
              } ${
                activeId === item.id
                  ? "text-[#BB5098] font-medium"
                  : "text-[#A0A0A0]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

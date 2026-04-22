"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  BarChart3,
  Scale,
  ArrowRight,
  Zap,
  TrendingDown,
  Users,
} from "lucide-react";
import MetricCard from "@/components/ui/MetricCard";

const quickLinks = [
  {
    title: "Negocio",
    description: "Modelo, monetización y estrategia de marca ancla",
    href: "/negocio/propuesta-valor",
    icon: Building2,
    color: "from-[#7A5197] to-[#BB5098]",
  },
  {
    title: "Métricas",
    description: "OKRs, KPIs y métricas por actor y fase",
    href: "/okrs/resumen",
    icon: BarChart3,
    color: "from-[#BB5098] to-[#F47F6B]",
  },
  {
    title: "Legal",
    description: "Contratos, términos y condiciones",
    href: "/legal/contrato-marca",
    icon: Scale,
    color: "from-[#F47F6B] to-[#F86624]",
  },
];

const stats = [
  { value: "88%", label: "Penetración hard discount en hogares ecuatorianos", icon: TrendingDown },
  { value: "5.000", label: "Tiendas de barrio cerradas en 2025", icon: Building2 },
  { value: "6M+", label: "Usuarios activos en DeUna", icon: Users },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7A5197]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#F47F6B]/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A1F35] border border-[#7A5197]/20 text-xs text-[#BB5098] font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Última actualización: Abril 2026
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-heading mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Savanhi Docs
          </h1>

          <p className="text-lg sm:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed">
            La plataforma que revitaliza el comercio de barrio. Conectamos
            tiendas de proximidad con marcas de consumo masivo mediante cupones
            digitales inteligentes.
          </p>
        </motion.div>
      </section>

      {/* Quick links */}
      <section>
        <h2
          className="text-lg font-semibold text-[#F4F4F4] mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Acceso rápido
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {quickLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <Link
                href={link.href}
                className="group block rounded-xl bg-[#242424] border border-[#7A5197]/20 p-5 hover:border-[#7A5197]/40 transition-all duration-200 hover:scale-[1.02]"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-3`}
                >
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="font-semibold text-[#F4F4F4] mb-1 group-hover:text-[#BB5098] transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {link.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] mb-3">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#7A5197] group-hover:text-[#BB5098] transition-colors">
                  Ver más <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section>
        <h2
          className="text-lg font-semibold text-[#F4F4F4] mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Contexto del mercado
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <MetricCard
                value={stat.value}
                label={stat.label}
                gradient={
                  i === 0
                    ? "from-[#7A5197] via-[#BB5098] to-[#F47F6B]"
                    : i === 1
                    ? "from-[#F47F6B] via-[#F86624] to-[#FFB32B]"
                    : "from-[#FFB32B] via-[#F5C63C] to-[#2BA84A]"
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="rounded-xl bg-[#242424] border border-[#7A5197]/20 p-6">
        <h2
          className="text-xl font-semibold text-[#F4F4F4] mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          ¿Qué encontrarás aquí?
        </h2>
        <p className="text-[#A0A0A0] leading-relaxed mb-4">
          Esta documentación contiene todo lo necesario para entender, operar y
          escalar Savanhi. Desde la propuesta de valor para cada actor (tendero,
          consumidor, marca) hasta los contratos legales, proyecciones
          financieras y playbooks operativos.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Propuesta de valor",
            "Modelo de monetización",
            "OKRs y métricas",
            "Proyecciones financieras",
            "Contratos",
            "Playbook 90 días",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#2A1F35] text-[#BB5098] border border-[#7A5197]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

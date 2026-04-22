export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Introducción",
    href: "/introduccion",
    items: [
      { title: "¿Qué es Savanhi?", href: "/introduccion/que-es" },
      { title: "Problema y solución", href: "/introduccion/problema-solucion" },
    ],
  },
  {
    title: "Negocio",
    href: "/negocio",
    items: [
      { title: "Propuesta de valor por actor", href: "/negocio/propuesta-valor" },
      { title: "Modelo de monetización", href: "/negocio/monetizacion" },
      { title: "Estrategia de marca ancla", href: "/negocio/marca-ancla" },
      { title: "Sistema de tiers", href: "/negocio/sistema-tiers" },
    ],
  },
  {
    title: "OKRs y Métricas",
    href: "/okrs",
    items: [
      { title: "Resumen ejecutivo", href: "/okrs/resumen" },
      { title: "Piloto (Mes 1-2)", href: "/okrs/piloto" },
      { title: "Fase 1 (Mes 3-4)", href: "/okrs/fase-1" },
      { title: "Fase 2 (Mes 5-12)", href: "/okrs/fase-2" },
      { title: "Métricas por actor", href: "/okrs/metricas-actores" },
    ],
  },
  {
    title: "Finanzas",
    href: "/finanzas",
    items: [
      { title: "Proyecciones y P&L", href: "/finanzas/proyecciones" },
      { title: "Runway y burn rate", href: "/finanzas/runway" },
      { title: "Unit economics", href: "/finanzas/unit-economics" },
      { title: "Riesgos financieros", href: "/finanzas/riesgos" },
    ],
  },
  {
    title: "Go-to-Market",
    href: "/go-to-market",
    items: [
      { title: "Playbook 90 días", href: "/go-to-market/playbook" },
      { title: "Piloto Calderón", href: "/go-to-market/piloto-calderon" },
      { title: "Estrategia de alianzas", href: "/go-to-market/alianzas" },
    ],
  },
  {
    title: "Legal",
    href: "/legal",
    items: [
      { title: "Contrato marca ancla", href: "/legal/contrato-marca" },
      { title: "Contrato tendero", href: "/legal/contrato-tendero" },
      { title: "Términos y condiciones", href: "/legal/terminos" },
    ],
  },
  {
    title: "Riesgos",
    href: "/riesgos",
    items: [
      { title: "Riesgos de negocio", href: "/riesgos/negocio" },
      { title: "Riesgos financieros", href: "/riesgos/financieros" },
    ],
  },
];

export function getPageTitle(pathname: string): string {
  for (const section of navigation) {
    if (section.href === pathname) return section.title;
    for (const item of section.items || []) {
      if (item.href === pathname) return item.title;
    }
  }
  return "Savanhi Docs";
}

export function getBreadcrumbs(pathname: string): { title: string; href: string }[] {
  const crumbs: { title: string; href: string }[] = [{ title: "Docs", href: "/" }];
  for (const section of navigation) {
    if (pathname.startsWith(section.href)) {
      crumbs.push({ title: section.title, href: section.href });
      for (const item of section.items || []) {
        if (item.href === pathname) {
          crumbs.push({ title: item.title, href: item.href });
          break;
        }
      }
      break;
    }
  }
  return crumbs;
}

export function getPrevNext(pathname: string): { prev?: NavItem; next?: NavItem } {
  const flat: NavItem[] = [];
  for (const section of navigation) {
    for (const item of section.items || []) {
      flat.push(item);
    }
  }
  const idx = flat.findIndex((i) => i.href === pathname);
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx < flat.length - 1 ? flat[idx + 1] : undefined,
  };
}

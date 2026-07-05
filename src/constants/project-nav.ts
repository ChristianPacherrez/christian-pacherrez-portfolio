export const PROJECT_NAV_ITEMS = [
  { id: "el-reto", label: "El reto" },
  { id: "solucion", label: "Solución" },
  { id: "proceso", label: "Proceso" },
  { id: "galeria", label: "Galería" },
  { id: "resultado", label: "Resultados" },
] as const;

export const PROJECT_SECTION_IDS = PROJECT_NAV_ITEMS.map((item) => item.id);

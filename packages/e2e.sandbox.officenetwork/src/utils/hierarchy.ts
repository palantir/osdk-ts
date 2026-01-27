export type HierarchyLevel =
  | "ceo"
  | "evp"
  | "vp"
  | "director"
  | "manager"
  | "ic";

export function getHierarchyLevel(
  jobTitle: string | undefined,
): HierarchyLevel {
  const title = (jobTitle ?? "").toLowerCase();
  if (title.includes("chief") || title === "ceo") return "ceo";
  if (title.includes("evp") || title.includes("executive vp")) return "evp";
  if (title.includes("vp") || title.includes("vice president")) return "vp";
  if (title.includes("director")) return "director";
  if (title.includes("manager") || title.includes("lead")) return "manager";
  return "ic";
}

export const HIERARCHY_COLORS: Record<HierarchyLevel, string> = {
  ceo: "#f0c000", // Gotham gold
  evp: "#a371f7", // Gotham purple
  vp: "#58a6ff", // Gotham cyan/blue
  director: "#39c5cf", // Gotham teal
  manager: "#d29922", // Gotham amber
  ic: "#3fb950", // Gotham green
};

export const HIERARCHY_LABELS: Record<HierarchyLevel, string> = {
  ceo: "CEO",
  evp: "EVP",
  vp: "VP",
  director: "Director",
  manager: "Manager",
  ic: "IC",
};

export const HIERARCHY_ORDER: HierarchyLevel[] = [
  "ceo",
  "evp",
  "vp",
  "director",
  "manager",
  "ic",
];

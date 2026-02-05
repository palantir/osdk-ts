export type LensMode =
  | "offices"
  | "employees"
  | "network"
  | "chain"
  | "team"
  | "reorg";

export interface LensColors {
  bg: string;
  border: string;
  text: string;
}

const LENS_COLORS: Record<LensMode, LensColors> = {
  offices: {
    bg: "bg-[var(--accent-cyan)]",
    border: "border-[var(--accent-cyan)]",
    text: "text-[var(--accent-cyan)]",
  },
  employees: {
    bg: "bg-[var(--accent-violet)]",
    border: "border-[var(--accent-violet)]",
    text: "text-[var(--accent-violet)]",
  },
  network: {
    bg: "bg-[var(--accent-emerald)]",
    border: "border-[var(--accent-emerald)]",
    text: "text-[var(--accent-emerald)]",
  },
  chain: {
    bg: "bg-[var(--accent-amber)]",
    border: "border-[var(--accent-amber)]",
    text: "text-[var(--accent-amber)]",
  },
  team: {
    bg: "bg-[var(--accent-violet)]",
    border: "border-[var(--accent-violet)]",
    text: "text-[var(--accent-violet)]",
  },
  reorg: {
    bg: "bg-[var(--accent-amber)]",
    border: "border-[var(--accent-amber)]",
    text: "text-[var(--accent-amber)]",
  },
};

const LENS_TITLES: Record<LensMode, string> = {
  offices: "Office",
  employees: "Person",
  network: "Network",
  chain: "Reporting Chain",
  team: "Team Member",
  reorg: "Reorg",
};

export function getLensColors(mode: LensMode): LensColors {
  return LENS_COLORS[mode];
}

export function getLensTitle(mode: LensMode): string {
  return LENS_TITLES[mode];
}

export const LENS_ACCENT: Record<LensMode, string> = {
  offices: "var(--officenetwork-accent-cyan)",
  employees: "var(--officenetwork-accent-teal)",
  network: "var(--officenetwork-hier-evp)",
  chain: "var(--officenetwork-status-warning)",
  team: "var(--officenetwork-hier-evp)",
  reorg: "var(--officenetwork-status-error)",
};

export const LENS_PANEL_TITLE: Record<LensMode, string> = {
  offices: "Employee",
  employees: "Person Details",
  network: "Network Node",
  chain: "Reporting Chain",
  team: "Team Member",
  reorg: "Reorg Target",
};

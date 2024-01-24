export interface Template {
  id: string;
  label: string;
  envPrefix: string;
}

export const TEMPLATES: readonly Template[] = [
  {
    id: "template-react",
    label: "React",
    envPrefix: "VITE_",
  },
  {
    id: "template-vue",
    label: "Vue",
    envPrefix: "VITE_",
  },
  {
    id: "template-next-static-export",
    label: "Next (static export)",
    envPrefix: "NEXT_PUBLIC_",
  },
];

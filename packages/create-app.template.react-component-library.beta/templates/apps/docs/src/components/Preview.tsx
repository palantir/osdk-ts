import type { ReactNode } from "react";

/**
 * A bordered surface for rendering live component previews. Pair with a
 * markdown code block right beneath it for source.
 */
export function Preview({ children }: { children: ReactNode }) {
  return <div className="component-preview">{children}</div>;
}

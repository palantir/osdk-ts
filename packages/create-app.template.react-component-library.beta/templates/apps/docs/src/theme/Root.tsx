/**
 * Docusaurus reserves `src/theme/Root.tsx` as the outermost wrapper for every
 * route. We import Blueprint's CSS here so any custom component that uses
 * Blueprint primitives renders correctly inside MDX.
 */
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import type { ReactNode } from "react";

export default function Root({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

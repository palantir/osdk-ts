import CodeBlock from "@theme/CodeBlock";
import type { ReactNode } from "react";

/**
 * Mantine-style usage card: one bordered container with the live preview on
 * top and the source code beneath, separated by a hairline divider. The code
 * block carries its own filename pill (e.g. `Demo.tsx`) and Docusaurus's
 * built-in copy button.
 */
export function UsageExample({
  children,
  source,
  filename = "Demo.tsx",
  language = "tsx",
}: {
  children: ReactNode;
  source: string;
  filename?: string;
  language?: string;
}) {
  return (
    <div className="usage-example">
      <div className="usage-example__preview">{children}</div>
      <div className="usage-example__code">
        <CodeBlock language={language} title={filename}>
          {source}
        </CodeBlock>
      </div>
    </div>
  );
}

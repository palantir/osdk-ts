import type { CSSProperties, ReactNode } from "react";

export interface ExampleProps {
  /** Title shown at the top of the card. */
  title: string;
  /** Optional React node rendered next to the title (e.g. a Blueprint
   * `<Icon icon="info-sign" />`, an SVG, an emoji). The component itself
   * has no design-system dependency — it just renders whatever you pass. */
  icon?: ReactNode;
  /** Body text. */
  description: string;
}

/**
 * The starter component shipped with this template. Demonstrates the
 * baseline pattern: typed props with a minimal vanilla-React render —
 * no design-system dependency. Replace or extend with your own
 * components, or scaffold new ones via the `/new-component` Claude Code skill.
 *
 * Reads the consumer's CSS custom properties so dark mode "just works"
 * when the host site (e.g. Docusaurus) flips the data-theme attribute.
 */
export function Example({ description, icon, title }: ExampleProps) {
  const cardStyle: CSSProperties = {
    background: "var(--example-card-bg, #ffffff)",
    border:
      "1px solid var(--example-card-border, rgba(0, 0, 0, 0.08))",
    borderRadius: 8,
    boxShadow:
      "var(--example-card-shadow, 0 1px 2px rgba(0, 0, 0, 0.04))",
    color: "var(--example-card-color, #1a1b1e)",
    maxWidth: 360,
    padding: 20,
  };
  const descStyle: CSSProperties = {
    color: "var(--example-card-muted, #5c5f66)",
    margin: 0,
  };
  return (
    <div style={cardStyle}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: 8,
          marginBottom: 8,
        }}
      >
        {icon}
        <h3 style={{ color: "inherit", margin: 0 }}>{title}</h3>
      </div>
      <p style={descStyle}>{description}</p>
    </div>
  );
}

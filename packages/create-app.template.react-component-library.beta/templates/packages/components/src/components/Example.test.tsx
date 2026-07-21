import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Example } from "./Example";

describe("Example", () => {
  it("renders the title and description", () => {
    render(<Example title="Widgets" description="A starter component." />);

    expect(screen.getByRole("heading", { name: "Widgets" })).toBeTruthy();
    expect(screen.getByText("A starter component.")).toBeTruthy();
  });

  it("renders the optional icon node", () => {
    render(
      <Example
        title="With icon"
        description="Has an icon."
        icon={<span data-testid="icon">icon</span>}
      />
    );

    expect(screen.getByTestId("icon")).toBeTruthy();
  });
});

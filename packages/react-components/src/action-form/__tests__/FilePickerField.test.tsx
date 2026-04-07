/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FilePickerField } from "../fields/FilePickerField.js";

describe("FilePickerField", () => {
  afterEach(cleanup);

  describe("rendering", () => {
    it("shows placeholder text when value is null", () => {
      render(<FilePickerField value={null} />);

      expect(screen.getByText("No file chosen")).toBeDefined();
    });

    it("displays the file name when a single file is selected", () => {
      const file = new File(["content"], "report.pdf", {
        type: "application/pdf",
      });

      render(<FilePickerField value={file} />);

      expect(screen.getByText("report.pdf")).toBeDefined();
    });

    it("displays comma-separated names for multiple files", () => {
      const files = [
        new File(["a"], "photo.png", { type: "image/png" }),
        new File(["b"], "doc.pdf", { type: "application/pdf" }),
      ];

      render(<FilePickerField value={files} isMulti={true} />);

      expect(screen.getByText("photo.png, doc.pdf")).toBeDefined();
    });

    it("renders Browse text", () => {
      render(<FilePickerField value={null} />);

      expect(screen.getByText("Browse")).toBeDefined();
    });
  });

  describe("clear button", () => {
    it("shows clear button when a file is selected", () => {
      const file = new File(["content"], "report.pdf");
      render(<FilePickerField value={file} />);

      expect(
        screen.getByRole("button", { name: "Clear selection" }),
      ).toBeDefined();
    });

    it("does not show clear button when value is null", () => {
      render(<FilePickerField value={null} />);

      expect(
        screen.queryByRole("button", { name: "Clear selection" }),
      ).toBeNull();
    });

    it("calls onChange with null when clear is clicked", () => {
      const onChange = vi.fn();
      const file = new File(["content"], "report.pdf");

      render(<FilePickerField value={file} onChange={onChange} />);

      fireEvent.click(screen.getByRole("button", { name: "Clear selection" }));

      expect(onChange).toHaveBeenCalledWith(null);
    });
  });

  describe("file input", () => {
    it("passes accept attribute to the hidden input", () => {
      render(<FilePickerField value={null} accept={[".pdf", "image/*"]} />);

      expect(getFileInput().getAttribute("accept")).toBe(".pdf,image/*");
    });

    it("passes accept string directly", () => {
      render(<FilePickerField value={null} accept="image/png" />);

      expect(getFileInput().getAttribute("accept")).toBe("image/png");
    });

    it("sets multiple attribute when isMulti is true", () => {
      render(<FilePickerField value={null} isMulti={true} />);

      expect(getFileInput().multiple).toBe(true);
    });

    it("calls onChange with a single File when isMulti is false", () => {
      const onChange = vi.fn();
      render(<FilePickerField value={null} onChange={onChange} />);

      const files = [
        new File(["a"], "photo.png", { type: "image/png" }),
        new File(["b"], "doc.pdf", { type: "application/pdf" }),
      ];

      fireEvent.change(getFileInput(), { target: { files } });

      expect(onChange).toHaveBeenCalledWith(files[0]);
    });

    it("calls onChange with File[] when isMulti is true", () => {
      const onChange = vi.fn();
      render(
        <FilePickerField value={null} onChange={onChange} isMulti={true} />,
      );

      const files = [
        new File(["a"], "photo.png", { type: "image/png" }),
        new File(["b"], "doc.pdf", { type: "application/pdf" }),
      ];

      fireEvent.change(getFileInput(), { target: { files } });

      expect(onChange).toHaveBeenCalledWith(files);
    });

    it("calls onChange with null when no files are selected", () => {
      const onChange = vi.fn();
      render(<FilePickerField value={null} onChange={onChange} />);

      fireEvent.change(getFileInput(), { target: { files: [] } });

      expect(onChange).toHaveBeenCalledWith(null);
    });
  });
});

function getFileInput(): HTMLInputElement {
  const input = document.querySelector("input[type='file']");
  if (input == null) {
    throw new Error("File input not found");
  }
  return input as HTMLInputElement;
}

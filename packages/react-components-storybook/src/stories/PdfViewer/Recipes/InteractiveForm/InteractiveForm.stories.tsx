/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

/* cspell:disable */

import type {
  PdfFormFieldValue,
  PdfViewerProps,
} from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  PDFCheckBox,
  PDFDocument,
  PDFDropdown,
  PDFOptionList,
  PDFRadioGroup,
} from "pdf-lib";
import React, { useCallback, useState } from "react";

const PDF_SRC = "/interactive-form-pdf.pdf";

const FIELD_DISPLAY_ORDER = [
  { key: "FullName", label: "Full name" },
  { key: "ID", label: "ID" },
  { key: "Gender", label: "Gender" },
  { key: "Married", label: "Married" },
  { key: "City", label: "City" },
  { key: "Language", label: "Language" },
  { key: "Notes", label: "Notes" },
] as const;

interface FormRecipe {
  title: string;
  description: string;
  data: Record<string, PdfFormFieldValue>;
}

// Gender radio: "0" = Male, "1" = Female
const GENDER_LABELS: Record<string, string> = {
  "0": "Male",
  "1": "Female",
};

const FORM_RECIPES: FormRecipe[] = [
  {
    title: "John Smith",
    description: "Software engineer from London",
    data: {
      "FullName": "John Smith",
      "ID": "JS-12345",
      "Gender": "0",
      "Married": false,
      "City": "London",
      "Language": "English",
      "Notes":
        "Senior developer at Acme Corp.\nSpecializes in React and TypeScript.",
    },
  },
  {
    title: "Marie Dupont",
    description: "Married designer from Paris",
    data: {
      "FullName": "Marie Dupont",
      "ID": "MD-67890",
      "Gender": "1",
      "Married": true,
      "City": "Paris",
      "Language": "French",
      "Notes": "Lead UX designer.\nFluent in French and English.",
    },
  },
  {
    title: "Hans Müller",
    description: "Engineer from Berlin",
    data: {
      "FullName": "Hans Müller",
      "ID": "HM-24680",
      "Gender": "0",
      "Married": true,
      "City": "Berlin",
      "Language": "German",
      "Notes": "Mechanical engineer with 10 years experience.",
    },
  },
];

function formatFieldValue(
  key: string,
  value: PdfFormFieldValue | undefined,
): string {
  if (value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  if (key === "Gender") return GENDER_LABELS[value] ?? value;
  return value;
}

interface RecipeCardProps {
  recipe: FormRecipe;
  onLoad: (data: Record<string, PdfFormFieldValue>) => void;
}

function RecipeCard({ recipe, onLoad }: RecipeCardProps): React.ReactElement {
  const handleLoad = useCallback(() => {
    onLoad(recipe.data);
  }, [onLoad, recipe.data]);

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "4px", fontSize: "13px" }}>
        {recipe.title}
      </div>
      <div style={{ color: "#666", fontSize: "12px", marginBottom: "8px" }}>
        {recipe.description}
      </div>
      <button
        onClick={handleLoad}
        type="button"
        style={{
          background: "#2965cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "6px 16px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        Load
      </button>
    </div>
  );
}

async function downloadFilledPdf(
  formValues: Record<string, PdfFormFieldValue>,
): Promise<void> {
  const response = await fetch(PDF_SRC);
  const pdfBytes = await response.arrayBuffer();

  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();

  for (const [name, value] of Object.entries(formValues)) {
    if (value === undefined) continue;

    const field = form.getField(name);

    if (field instanceof PDFCheckBox) {
      if (value) {
        field.check();
      } else {
        field.uncheck();
      }
    } else if (field instanceof PDFRadioGroup) {
      const options = field.getOptions();
      const optionName = options[Number(value)] ?? String(value);
      field.select(optionName);
    } else if (field instanceof PDFDropdown) {
      field.select(String(value));
    } else if (field instanceof PDFOptionList) {
      field.select(String(value));
    } else {
      const textField = form.getTextField(name);
      textField.setText(String(value));
    }
  }

  const savedBytes = await pdfDoc.save();
  const blob = new Blob([savedBytes as BlobPart], {
    type: "application/pdf",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "filled-form.pdf";
  a.click();
  URL.revokeObjectURL(url);
}

interface FormSidebarProps {
  formValues: Record<string, PdfFormFieldValue>;
  onLoadRecipe: (recipe: Record<string, PdfFormFieldValue>) => void;
}

function FormSidebar(
  { formValues, onLoadRecipe }: FormSidebarProps,
): React.ReactElement {
  const handleDownload = useCallback(() => {
    void downloadFilledPdf(formValues);
  }, [formValues]);

  return (
    <div
      style={{
        width: "320px",
        borderLeft: "1px solid #e0e0e0",
        overflowY: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <section>
        <h3 style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: 600 }}>
          Current Values
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "4px 8px",
            fontSize: "13px",
          }}
        >
          {FIELD_DISPLAY_ORDER.map(({ key, label }) => (
            <React.Fragment key={key}>
              <span style={{ color: "#666" }}>{label}:</span>
              <span style={{ fontFamily: "monospace" }}>
                {formatFieldValue(key, formValues[key])}
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: 600 }}>
          Recipe Cards
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {FORM_RECIPES.map((recipe) => (
            <RecipeCard
              key={recipe.title}
              recipe={recipe}
              onLoad={onLoadRecipe}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: 600 }}>
          Download
        </h3>
        <p style={{ color: "#666", fontSize: "12px", margin: "0 0 8px" }}>
          Download the PDF with current form values baked in via pdf-lib.
        </p>
        <button
          onClick={handleDownload}
          type="button"
          style={{
            background: "#2965cc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "13px",
            width: "100%",
          }}
        >
          Download Filled PDF
        </button>
      </section>
    </div>
  );
}

function InteractiveFormWithSidebar(): React.ReactElement {
  const [formValues, setFormValues] = useState<
    Record<string, PdfFormFieldValue>
  >({});
  const [formData, setFormData] = useState<
    Record<string, PdfFormFieldValue> | undefined
  >(undefined);
  const [recipeLoadCount, setRecipeLoadCount] = useState(0);

  const handleFormChange = useCallback(
    (fieldName: string, value: PdfFormFieldValue) => {
      setFormValues((prev) => ({ ...prev, [fieldName]: value }));
    },
    [],
  );

  const handleLoadRecipe = useCallback(
    (recipe: Record<string, PdfFormFieldValue>) => {
      setFormData(recipe);
      setFormValues(recipe);
      setRecipeLoadCount((c) => c + 1);
    },
    [],
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer
          key={recipeLoadCount}
          src={PDF_SRC}
          formData={formData}
          onFormChange={handleFormChange}
        />
      </div>
      <FormSidebar formValues={formValues} onLoadRecipe={handleLoadRecipe} />
    </div>
  );
}

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer/Recipes",
  component: BasePdfViewer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveForm: Story = {
  render: () => (
    <div style={{ height: "600px" }}>
      <InteractiveFormWithSidebar />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// This story demonstrates using formData and onFormChange
// to build a sidebar that tracks form values and loads presets.
// Uses pdf-lib to download the filled PDF.
import { BasePdfViewer } from "@osdk/react-components/experimental";
import { PDFDocument } from "pdf-lib";

const [formData, setFormData] = useState<Record<string, PdfFormFieldValue>>();
const [formValues, setFormValues] = useState<Record<string, PdfFormFieldValue>>({});

<BasePdfViewer
  src="/interactive-form.pdf"
  formData={formData}
  onFormChange={(field, value) => setFormValues(prev => ({ ...prev, [field]: value }))}
/>`,
      },
    },
  },
};

import { BaseForm } from "@osdk/react-components/experimental";
import type { RendererFieldDefinition } from "@osdk/react-components/experimental";
import { useCallback, useState } from "react";
import "./form-page.css";

const fieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "employeeName",
    fieldComponent: "TEXT_INPUT",
    label: "Employee Name",
    placeholder: "Enter employee name",
    isRequired: true,
  },
  {
    fieldKey: "employmentStart",
    fieldComponent: "DATETIME_PICKER",
    label: "Employment Start Date",
    placeholder: "Enter employment start date",
    isRequired: true,
    fieldComponentProps: {
      showTime: true,
    },
  },
  {
    fieldKey: "employmentEnd",
    fieldComponent: "DATETIME_PICKER",
    label: "Employment End Date",
    placeholder: "Enter employment end date",
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    placeholder: "Select a department",
    label: "Department",
    isRequired: true,
    fieldComponentProps: {
      items: ["Engineering", "Design", "Marketing", "Sales"],
    },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    placeholder: "Tell us about yourself…",
    fieldComponentProps: {
      rows: 4,
      maxLength: 500,
    },
  },
  {
    fieldKey: "officeLocation",
    fieldComponent: "DROPDOWN",
    label: "Office Location",
    placeholder: "Search for a city…",
    fieldComponentProps: {
      items: [
        "New York",
        "San Francisco",
        "London",
        "Berlin",
        "Tokyo",
        "Sydney",
        "Toronto",
        "Paris",
      ],
      isSearchable: true,
    },
  },
  {
    fieldKey: "employmentType",
    fieldComponent: "RADIO_BUTTONS",
    label: "Employment Type",
    isRequired: true,
    fieldComponentProps: {
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "Contract", value: "contract" },
        { label: "Internship", value: "internship" },
      ],
    },
  },
  {
    fieldKey: "skills",
    fieldComponent: "DROPDOWN",
    label: "Skills",
    placeholder: "Search and select skills…",
    fieldComponentProps: {
      items: [
        "TypeScript",
        "React",
        "Python",
        "Go",
        "Rust",
        "GraphQL",
        "SQL",
        "Docker",
        "Kubernetes",
      ],
      isSearchable: true,
      isMultiple: true,
    },
  },
];

export function FormPage() {
  const [submittedState, setSubmittedState] = useState<
    Record<string, unknown> | undefined
  >(undefined);

  const handleSubmit = useCallback((formState: Record<string, unknown>) => {
    setSubmittedState(formState);
  }, []);

  return (
    <div style={{ maxWidth: 480, width: "100%", textAlign: "left" }}>
      <div className="formCard">
        <BaseForm
          formTitle="Demo Base Form"
          fieldDefinitions={fieldDefinitions}
          onSubmit={handleSubmit}
        />
      </div>

      {submittedState != null && (
        <pre className="submittedOutput">
          {JSON.stringify(submittedState, null, 2)}
        </pre>
      )}
    </div>
  );
}

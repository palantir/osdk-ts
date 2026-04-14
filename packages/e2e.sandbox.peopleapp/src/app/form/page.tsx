import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { BaseForm } from "@osdk/react-components/experimental";
import type {
  BaseFormFieldProps,
  RendererFieldDefinition,
} from "@osdk/react-components/experimental";
import { useCallback, useMemo, useState } from "react";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import "./form-page.css";

function RatingSlider({ id, value, onChange }: BaseFormFieldProps<unknown>) {
  const numericValue = typeof value === "number" ? value : 5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input
        id={id}
        type="range"
        min={1}
        max={10}
        value={numericValue}
        onChange={(e) => onChange?.(Number(e.target.value))}
        style={{ flex: 1 }}
      />
      <span>{numericValue} / 10</span>
    </div>
  );
}

const fieldDefinitions: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "employeeName",
    fieldComponent: "TEXT_INPUT",
    label: "Employee Name",
    placeholder: "Enter employee name",
    isRequired: true,
    fieldComponentProps: {},
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
    fieldComponentProps: {},
  },
  {
    fieldKey: "employmentDuration",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Employment Duration",
    placeholder: "Enter employment duration",
    isRequired: true,
    fieldComponentProps: {
      placeholderStart: "Start Date",
      placeholderEnd: "End Date",
    },
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
    fieldKey: "yearsOfExperience",
    fieldComponent: "NUMBER_INPUT",
    label: "Years of Experience",
    placeholder: "Enter years",
    isRequired: true,
    fieldComponentProps: {
      min: 0,
      max: 50,
    },
  },
  {
    fieldKey: "salary",
    fieldComponent: "NUMBER_INPUT",
    label: "Salary",
    placeholder: "Enter annual salary",
    fieldComponentProps: {
      min: 0,
      step: 1000,
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
    fieldKey: "resume",
    fieldComponent: "FILE_PICKER",
    label: "Resume",
    fieldComponentProps: {
      accept: [".pdf", ".doc", ".docx"],
      maxSize: 100, // 100 bytes
    },
  },
  {
    fieldKey: "portfolioFiles",
    fieldComponent: "FILE_PICKER",
    label: "Portfolio Files",
    fieldComponentProps: {
      isMulti: true,
      accept: "image/*",
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
  {
    fieldKey: "rating",
    fieldComponent: "CUSTOM",
    label: "Rating",
    fieldComponentProps: {
      defaultValue: 5,
      customRenderer: RatingSlider,
    },
  },
];

export function FormPage() {
  const [submittedState, setSubmittedState] = useState<
    Record<string, unknown> | undefined
  >(undefined);

  const handleSubmit = useCallback(
    async (formState: Record<string, unknown>) => {
      setSubmittedState(formState);
    },
    [],
  );

  const employeeObjectSet = useMemo(
    () => $(Employee) as ObjectSet<ObjectTypeDefinition>,
    [],
  );

  const allFieldDefinitions = useMemo(
    (): ReadonlyArray<RendererFieldDefinition> => [
      ...fieldDefinitions,
      {
        fieldKey: "team",
        fieldComponent: "OBJECT_SET",
        label: "Team Members",
        fieldComponentProps: {
          value: employeeObjectSet,
        },
      },
    ],
    [employeeObjectSet],
  );

  return (
    <div style={{ maxWidth: 480, width: "100%", textAlign: "left" }}>
      <div className="formCard">
        <BaseForm
          formTitle="Demo Base Form"
          fieldDefinitions={allFieldDefinitions}
          onSubmit={handleSubmit}
        />
      </div>

      {submittedState != null && (
        <pre className="submittedOutput">
          {JSON.stringify(submittedState, fileReplacer, 2)}
        </pre>
      )}
    </div>
  );
}

function fileReplacer(_key: string, value: unknown): unknown {
  if (value instanceof File) {
    return value.name;
  }
  if (Array.isArray(value) && value.every((v) => v instanceof File)) {
    return value.map((f) => f.name);
  }
  return value;
}

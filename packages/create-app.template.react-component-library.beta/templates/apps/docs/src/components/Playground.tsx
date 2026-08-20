import {
  HTMLSelect,
  InputGroup,
  Label,
  NumericInput,
  SegmentedControl,
  Slider,
  Switch,
} from "@blueprintjs/core";
import CodeBlock from "@theme/CodeBlock";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

/**
 * Interactive playground — renders a live demo on the left, a Blueprint-based
 * control panel on the right, and an optional code block beneath the row.
 * Changing a control updates the demo (and, if `source` is a function, the
 * shown source code too).
 *
 * Authors pass:
 * - `controls`: the list of fields to render (text/number/slider/switch/
 *               select/segmented).
 * - `render`: a function that receives the current values and returns the
 *             demo JSX.
 * - `source`: optional. String for a static code block, or a function for
 *             one that mirrors the current control values.
 */

interface Option {
  value: string;
  label?: string;
}

export type ControlDef =
  | {
    name: string;
    label: string;
    type: "text";
    defaultValue?: string;
    placeholder?: string;
  }
  | {
    name: string;
    label: string;
    type: "number";
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
  }
  | {
    name: string;
    label: string;
    type: "slider";
    defaultValue?: number;
    min: number;
    max: number;
    step?: number;
    labelStepSize?: number;
  }
  | { name: string; label: string; type: "switch"; defaultValue?: boolean }
  | {
    name: string;
    label: string;
    type: "select";
    options: readonly Option[];
    defaultValue?: string;
  }
  | {
    name: string;
    label: string;
    type: "segmented";
    options: readonly Option[];
    defaultValue?: string;
  };

type Values = Record<string, unknown>;

interface PlaygroundProps {
  controls: readonly ControlDef[];
  render: (values: Values) => ReactNode;
  source?: string | ((values: Values) => string);
  filename?: string;
  language?: string;
}

function ControlField({
  control,
  onChange,
  value,
}: {
  control: ControlDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  if (control.type === "text") {
    return (
      <Label>
        {control.label}
        <InputGroup
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder={control.placeholder}
          value={(value as string | undefined) ?? ""}
        />
      </Label>
    );
  }
  if (control.type === "number") {
    return (
      <Label>
        {control.label}
        <NumericInput
          fill
          max={control.max}
          min={control.min}
          onValueChange={(n) => onChange(n)}
          stepSize={control.step}
          value={(value as number | undefined) ?? control.defaultValue ?? 0}
        />
      </Label>
    );
  }
  if (control.type === "slider") {
    return (
      <Label>
        {control.label}
        <Slider
          labelStepSize={control.labelStepSize ?? control.max - control.min}
          max={control.max}
          min={control.min}
          onChange={(n) => onChange(n)}
          stepSize={control.step ?? 1}
          value={(value as number | undefined) ?? control.min}
        />
      </Label>
    );
  }
  if (control.type === "switch") {
    return (
      <Switch
        checked={(value as boolean | undefined) ?? false}
        label={control.label}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
    );
  }
  if (control.type === "select") {
    return (
      <Label>
        {control.label}
        <HTMLSelect
          fill
          onChange={(e) => onChange(e.currentTarget.value)}
          options={control.options.map((o) => ({
            label: o.label ?? o.value,
            value: o.value,
          }))}
          value={
            (value as string | undefined) ?? control.options[0]?.value ?? ""
          }
        />
      </Label>
    );
  }
  if (control.type === "segmented") {
    return (
      <Label>
        {control.label}
        <SegmentedControl
          fill
          onValueChange={(v) => onChange(v)}
          options={control.options.map((o) => ({
            label: o.label ?? o.value,
            value: o.value,
          }))}
          size="small"
          value={
            (value as string | undefined) ?? control.options[0]?.value ?? ""
          }
        />
      </Label>
    );
  }
  return null;
}

export function Playground({
  controls,
  filename = "Demo.tsx",
  language = "tsx",
  render,
  source,
}: PlaygroundProps) {
  const initial = useMemo<Values>(
    () => Object.fromEntries(controls.map((c) => [c.name, c.defaultValue])),
    [controls],
  );
  const [values, setValues] = useState<Values>(initial);

  function set(name: string, value: unknown) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="playground">
      <div className="playground__row">
        <div className="playground__preview">{render(values)}</div>
        <div className="playground__controls">
          {controls.map((control) => (
            <ControlField
              control={control}
              key={control.name}
              onChange={(v) => set(control.name, v)}
              value={values[control.name]}
            />
          ))}
        </div>
      </div>
      {source !== undefined && (
        <div className="playground__source">
          <CodeBlock language={language} title={filename}>
            {typeof source === "function" ? source(values) : source}
          </CodeBlock>
        </div>
      )}
    </div>
  );
}

import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import type { WorkshopModuleProps } from "@osdk/react-components/experimental/workshop-module";
import { useCallback, useMemo, useState } from "react";

import { Button } from "../../components/Button.js";

export function WorkshopModulePage() {
  const [moduleRid, setModuleRid] = useState("");
  const [moduleVersion, setModuleVersion] =
    useState<WorkshopModuleProps["moduleVersion"]>("published");
  const [module, setModule] = useState<WorkshopModuleProps>();
  const [inputExternalId, setInputExternalId] = useState("");
  const [inputValue, setInputValue] = useState<string | null>("");
  const [connectionError, setConnectionError] = useState<Error>();
  const variables = useMemo(() => {
    const externalId = inputExternalId.trim();
    return externalId === "" ? undefined : { [externalId]: inputValue };
  }, [inputExternalId, inputValue]);
  const onVariablesChanged = useCallback<
    NonNullable<WorkshopModuleProps["onVariablesChanged"]>
  >(
    (changes) => {
      const value = changes[inputExternalId.trim()];
      if (value === undefined) return;
      if (typeof value === "string" || value == null) setInputValue(value);
    },
    [inputExternalId],
  );

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        className="flex flex-wrap items-end gap-4 text-left"
        onSubmit={(event) => {
          event.preventDefault();
          setConnectionError(undefined);
          setModule({
            moduleRid: moduleRid.trim(),
            moduleVersion,
          });
        }}
      >
        <label className="flex flex-1 flex-col gap-2">
          Module RID
          <input
            className="border rounded-sm px-2 py-1"
            value={moduleRid}
            onChange={(event) => setModuleRid(event.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          Module version
          <select
            className="border rounded-sm px-2 py-1"
            value={moduleVersion}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "latest" || value === "published") {
                setModuleVersion(value);
              }
            }}
          >
            <option value="latest">Latest</option>
            <option value="published">Published</option>
          </select>
        </label>
        <Button type="submit" disabled={moduleRid.trim() === ""}>
          Load module
        </Button>
      </form>
      <p className="text-left">
        Enter a module from this Foundry instance. Use latest for the latest
        saved version, or published for the published version.
      </p>
      <div className="flex flex-wrap gap-4 text-left">
        <label className="flex flex-col gap-2">
          String input external ID
          <input
            className="border rounded-sm px-2 py-1"
            value={inputExternalId}
            onChange={(event) => setInputExternalId(event.target.value)}
          />
        </label>
        <label className="flex flex-1 flex-col gap-2">
          Input value (updates live)
          <input
            className="border rounded-sm px-2 py-1"
            value={inputValue ?? ""}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
      </div>
      {connectionError != null && (
        <output>Last messaging error: {connectionError.message}</output>
      )}
      {module != null && (
        <div className="w-full h-[70vh]">
          <BaseWorkshopModule
            foundryUrl={import.meta.env.VITE_FOUNDRY_URL}
            moduleRid={module.moduleRid}
            moduleVersion={module.moduleVersion}
            variables={variables}
            onVariablesChanged={onVariablesChanged}
            onConnectionError={setConnectionError}
          />
        </div>
      )}
    </div>
  );
}

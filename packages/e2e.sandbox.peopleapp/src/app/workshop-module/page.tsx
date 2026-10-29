import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import type { WorkshopModuleProps } from "@osdk/react-components/experimental/workshop-module";
import { useState } from "react";

import { Button } from "../../components/Button.js";

export function WorkshopModulePage() {
  const [moduleRid, setModuleRid] = useState("");
  const [moduleVersion, setModuleVersion] =
    useState<WorkshopModuleProps["moduleVersion"]>("published");
  const [module, setModule] = useState<WorkshopModuleProps>();

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        className="flex flex-wrap items-end gap-4 text-left"
        onSubmit={(event) => {
          event.preventDefault();
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
      {module != null && (
        <div className="w-full h-[70vh]">
          <BaseWorkshopModule
            foundryUrl={import.meta.env.VITE_FOUNDRY_URL}
            moduleRid={module.moduleRid}
            moduleVersion={module.moduleVersion}
          />
        </div>
      )}
    </div>
  );
}

import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";
import { useState } from "react";

import { Button } from "../../components/Button.js";

export function WorkshopModulePage() {
  const [moduleRid, setModuleRid] = useState("");
  const [moduleVersion, setModuleVersion] = useState("latest");
  const [module, setModule] = useState<{
    moduleRid: string;
    moduleVersion: string;
  }>();

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        className="flex flex-wrap items-end gap-4 text-left"
        onSubmit={(event) => {
          event.preventDefault();
          setModule({
            moduleRid: moduleRid.trim(),
            moduleVersion: moduleVersion.trim(),
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
          <input
            className="border rounded-sm px-2 py-1"
            value={moduleVersion}
            onChange={(event) => setModuleVersion(event.target.value)}
            required
          />
        </label>
        <Button
          type="submit"
          disabled={moduleRid.trim() === "" || moduleVersion.trim() === ""}
        >
          Load module
        </Button>
      </form>
      <p className="text-left">
        Enter a module from this Foundry instance. Use latest for the published
        version, dev for the development version, or a specific version.
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

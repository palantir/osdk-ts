import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import { Button } from "../../components/Button.js";
import { CreateOfficeForm } from "../../components/CreateOfficeForm.js";
import { H2 } from "../../components/headers.js";
import { Office } from "../../generatedNoCheck2/index.js";
import { OfficesListContent } from "./OfficesListContent.js";

interface OfficesListProps {
  selectedOffice: Office.OsdkInstance | undefined;
  onSelectOffice: (office: Office.OsdkInstance) => void;
}

export function OfficesList(
  { selectedOffice, onSelectOffice }: OfficesListProps,
) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { data: offices, isLoading, error } = useOsdkObjects(Office, {});

  return (
    <div>
      <H2>Offices{isLoading ? " (Loading...)" : ""}</H2>

      {error && (
        <div className="text-sm text-red-500">
          Error loading offices: {error.message}
        </div>
      )}
      <OfficesListContent
        offices={offices}
        selectedOffice={selectedOffice}
        onSelectOffice={onSelectOffice}
      />

      <div className="mt-6 border-t pt-4">
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          {showCreateForm ? "Hide Form" : "Create Office"}
        </Button>
        {showCreateForm && (
          <div className="mt-4">
            <CreateOfficeForm />
          </div>
        )}
      </div>
    </div>
  );
}

import { ActionForm } from "@osdk/react-components/experimental";
import { H2 } from "../../components/headers.js";
import { Section } from "../../components/Section.js";
import { createOffice } from "../../generatedNoCheck2/index.js";

export function ActionFormPage() {
  return (
    <div className="flex flex-col items-start text-left">
      <Section>
        <H2>Create Office (ActionForm)</H2>
        <ActionForm
          actionDefinition={createOffice}
          onSuccess={(result) => {
            console.log("Office created successfully", result);
          }}
          onError={(error) => {
            console.error("Failed to create office", error);
          }}
        />
      </Section>
    </div>
  );
}

import { useState } from "react";
import { OfficeDetails } from "../components/OfficeDetails.js";
import { OfficesList } from "../components/OfficesList.js";
import { Section } from "../components/Section.js";
import type { Office } from "../generatedNoCheck2/index.js";

export function OfficesPage() {
  const [selectedOffice, setSelectedOffice] = useState<
    Office.OsdkInstance | undefined
  >(undefined);

  const handleOfficeClick = (office: Office.OsdkInstance) => {
    setSelectedOffice(office);
  };

  return (
    <div className="flex flex-row items-start text-left">
      <div className="min-w-96 mr-8">
        <Section>
          <OfficesList
            selectedOffice={selectedOffice}
            onSelectOffice={handleOfficeClick}
          />
        </Section>
      </div>

      <div className="w-96">
        <Section>
          <OfficeDetails office={selectedOffice} />
        </Section>
      </div>
    </div>
  );
}

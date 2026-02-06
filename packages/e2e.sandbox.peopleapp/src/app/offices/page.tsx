import { ObjectTable } from "@osdk/react-components/experimental";
import { useState } from "react";
import { Section } from "../../components/Section.js";
import { Office } from "../../generatedNoCheck2/index.js";
import { OfficeDetails } from "./OfficeDetails.js";
import { OfficesList } from "./OfficesList.js";
import styles from "./OfficeTable.module.css";

export function OfficesPage() {
  const [selectedOffice, setSelectedOffice] = useState<
    Office.OsdkInstance | undefined
  >(undefined);

  const handleOfficeClick = (office: Office.OsdkInstance) => {
    setSelectedOffice(office);
  };

  const handleOfficeDeleted = () => {
    setSelectedOffice(undefined);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start text-left">
        <div className="min-w-96 mr-8">
          <Section>
            <OfficesList
              selected={selectedOffice}
              onSelect={handleOfficeClick}
            />
          </Section>
        </div>

        <div className="w-96">
          <Section>
            <OfficeDetails
              key={selectedOffice?.$primaryKey}
              office={selectedOffice}
              onOfficeDeleted={handleOfficeDeleted}
            />
          </Section>
        </div>
      </div>
      <div className="flex h-100 w-130">
        <ObjectTable
          objectType={Office}
          className={styles.officeTable}
          selectionMode="single"
        />
      </div>
    </div>
  );
}

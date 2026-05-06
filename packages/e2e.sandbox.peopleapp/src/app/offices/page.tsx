import type { Osdk } from "@osdk/api";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { useCallback, useState } from "react";
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

  const getRowAttributes = useCallback(
    (rowData: Osdk.Instance<typeof Office>) => {
      const officeType = String(rowData.officeType ?? "");
      // Highlight headquarter offices with a different background
      const isHQ = officeType === "Headquarters";
      return {
        "data-office-type": officeType,
        "data-is-hq": isHQ ? "true" : undefined,
      };
    },
    [],
  );

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
          getRowAttributes={getRowAttributes}
        />
        <style>
          {`
          /* Highlight headquarters with a subtle gold background */
          [data-is-hq="true"] {
            --osdk-table-row-bg-default: #fffbf0;
            --osdk-table-row-bg-alternate: #fff8e6;
          }
        `}
        </style>
      </div>
    </div>
  );
}

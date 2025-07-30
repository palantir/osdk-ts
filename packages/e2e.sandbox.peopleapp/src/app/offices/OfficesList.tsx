import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import { Button } from "../../components/Button.js";
import { CreateOfficeForm } from "../../components/CreateOfficeForm.js";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Office } from "../../generatedNoCheck2/index.js";

interface OfficeListItemProps {
  item: Office.OsdkInstance;
  isSelected: boolean;
  onSelect: (office: Office.OsdkInstance) => void;
}

function OfficeListItem(
  { item, isSelected, onSelect }: OfficeListItemProps,
) {
  return (
    <ListItem
      isSelected={isSelected}
      onClick={() => onSelect(item)}
      primaryContent={item.name ?? "<name-missing>"}
      secondaryContent={`ID: ${item.$primaryKey}`}
    />
  );
}

interface OfficesListProps {
  selected: Office.OsdkInstance | undefined;
  onSelect: (office: Office.OsdkInstance) => void;
}

export function OfficesList(
  props: OfficesListProps,
) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const offices = useOsdkObjects(Office, {});

  return (
    <>
      <div className="mb-8">
        <List<Office>
          items={offices}
          header={"Offices"}
          Component={OfficeListItem}
          {...props}
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
    </>
  );
}

import type { ObjectTypeDefinition, Osdk } from "@osdk/client";
import type { UseOsdkListResult } from "@osdk/react/experimental";
import type { ReactNode } from "react";
import React from "react";
import { ErrorMessage } from "./ErrorMessage.js";
import { H2 } from "./headers.js";
import { InlineSpinner } from "./InlineSpinner.js";

interface ListProps<T extends ObjectTypeDefinition> {
  Component: React.FC<{
    item: Osdk.Instance<T, "$allBaseProperties">;
    isSelected: boolean;
    onSelect: (item: Osdk.Instance<T, "$allBaseProperties">) => void;
  }>;

  selected: Osdk.Instance<T, "$allBaseProperties"> | undefined;

  onSelect: (item: Osdk.Instance<T, "$allBaseProperties">) => void;

  className?: string;

  header: ReactNode;

  items: UseOsdkListResult<T>;
}

export function List<T extends ObjectTypeDefinition>({
  Component,
  selected: selectedItem,
  onSelect,
  items,
  className = "list-none",
  header,
}: ListProps<T>) {
  const { data, isLoading, error } = items;
  return (
    <div>
      <H2>
        {header} <InlineSpinner isLoading={isLoading} />
      </H2>

      {error && (
        <ErrorMessage message={`Error loading items: ${error.message}`} />
      )}

      {!data || data.length === 0
        ? (
          <div className={"text-sm italic mt-2"}>
            {!error && !isLoading ? "None found." : "Loading..."}
          </div>
        )
        : (
          <ul className={className}>
            {data.filter(item => item != null).map(item => (
              <Component
                key={item.$primaryKey}
                item={item}
                isSelected={item.$primaryKey === selectedItem?.$primaryKey}
                onSelect={() => onSelect(item)}
              />
            ))}
          </ul>
        )}
    </div>
  );
}

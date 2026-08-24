import React, { useCallback } from "react";

export interface SavedView<Id extends string> {
  id: Id;
  label: string;
}

interface SavedViewTabProps<Id extends string> {
  view: SavedView<Id>;
  isActive: boolean;
  onSelect: (id: Id) => void;
}

function SavedViewTab<Id extends string>({
  view,
  isActive,
  onSelect,
}: SavedViewTabProps<Id>): React.ReactElement {
  const handleClick = useCallback(() => {
    onSelect(view.id);
  }, [onSelect, view.id]);

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={
        isActive
          ? "actionFormFilterListReproTab actionFormFilterListReproTabActive"
          : "actionFormFilterListReproTab"
      }
      onClick={handleClick}
    >
      {view.label}
    </button>
  );
}

interface SavedViewTabsProps<Id extends string> {
  views: ReadonlyArray<SavedView<Id>>;
  activeViewId: Id;
  onSelect: (id: Id) => void;
}

export function SavedViewTabs<Id extends string>({
  views,
  activeViewId,
  onSelect,
}: SavedViewTabsProps<Id>): React.ReactElement {
  return (
    <div className="actionFormFilterListReproTabs" role="tablist">
      {views.map((view) => (
        <SavedViewTab
          key={view.id}
          view={view}
          isActive={view.id === activeViewId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

import type { FilterState } from "@osdk/react-components/experimental/filter-list";
import React, { useCallback, useContext, useMemo, useState } from "react";

interface FilterStatesContextValue {
  filterStates: Map<string, FilterState>;
  setFilterState: (filterKey: string, newState: FilterState) => void;
  clearFilterState: (filterKey: string) => void;
  resetFilterStates: () => void;
}

const FilterStatesContext = React.createContext<
  FilterStatesContextValue | undefined
>(undefined);

export function FilterStatesProvider(props: { children: React.ReactNode }) {
  const [filterStates, setFilterStates] = useState<Map<string, FilterState>>(
    () => new Map(),
  );

  const setFilterState = useCallback(function setFilterState(
    filterKey: string,
    newState: FilterState,
  ) {
    setFilterStates((prev) => {
      const next = new Map(prev);
      next.set(filterKey, newState);
      return next;
    });
  }, []);

  const clearFilterState = useCallback(function clearFilterState(
    filterKey: string,
  ) {
    setFilterStates((prev) => {
      if (!prev.has(filterKey)) return prev;
      const next = new Map(prev);
      next.delete(filterKey);
      return next;
    });
  }, []);

  const resetFilterStates = useCallback(function resetFilterStates() {
    setFilterStates(new Map());
  }, []);

  const value = useMemo<FilterStatesContextValue>(
    () => ({
      filterStates,
      setFilterState,
      clearFilterState,
      resetFilterStates,
    }),
    [filterStates, setFilterState, clearFilterState, resetFilterStates],
  );

  return (
    <FilterStatesContext.Provider value={value}>
      {props.children}
    </FilterStatesContext.Provider>
  );
}

export function useFilterStatesContext(): FilterStatesContextValue {
  const ctx = useContext(FilterStatesContext);
  if (ctx == null) {
    throw new Error(
      "useFilterStatesContext must be used inside <FilterStatesProvider>",
    );
  }
  return ctx;
}

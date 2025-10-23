import type { WhereClause } from "@osdk/api";
import React from "react";
import { Button } from "./Button.js";
import type { TodoLike } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";

const whereClauses: WhereClause<TodoLike>[] = [
  {},
  { name: { $startsWith: "ea " } },
  { name: { $startsWith: "cool " } },
  { isComplete: true },
];

interface FilterSelectorProps {
  setFilter: (filter: WhereClause<TodoLike>) => void;
  heading?: string;
}

function FilterSelector({ setFilter, heading }: FilterSelectorProps) {
  const [clauseIdx, setClauseIdx] = React.useState(0);
  const onClick = React.useCallback(() => {
    const newIdx = (clauseIdx + 1) % whereClauses.length;
    // save the current index for ourselves
    setClauseIdx(newIdx);

    // inform our parent what to use
    setFilter(whereClauses[newIdx]);
  }, [clauseIdx, setClauseIdx]);

  const onReset = React.useCallback(() => {
    // Reset to first filter (empty {})
    setClauseIdx(0);
    setFilter(whereClauses[0]);
  }, [setClauseIdx, setFilter]);

  return (
    <>
      <H2>
        {heading ?? "Filter"}
      </H2>
      <pre className="text-sm">
        {JSON.stringify(whereClauses[clauseIdx], null, 2)}
      </pre>
      <div className="my-4 flex gap-2">
        <Button onClick={onClick}>
          ChangeFilter
        </Button>
        <Button onClick={onReset}>
          Reset Filter
        </Button>
      </div>
    </>
  );
}

export default FilterSelector;

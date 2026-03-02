import {
  useObjectSetAggregation,
  useOsdkClient,
} from "@osdk/react/experimental";
import React from "react";
import { Todo } from "./generatedNoCheck2/index.js";

export function TodoStats() {
  const client = useOsdkClient();
  const todoSet = React.useMemo(() => client(Todo), [client]);

  const { data: totalData, isLoading: totalLoading } = useObjectSetAggregation(
    todoSet,
    {
      aggregate: { $select: { $count: "unordered" } },
    },
  );

  const completedSet = React.useMemo(
    () => client(Todo).where({ isComplete: true }),
    [client],
  );
  const { data: completedData, isLoading: completedLoading } =
    useObjectSetAggregation(completedSet, {
      aggregate: { $select: { $count: "unordered" } },
    });

  const totalCount = totalData?.$count ?? 0;
  const completedCount = completedData?.$count ?? 0;
  const isLoading = totalLoading || completedLoading;

  return (
    <div className="text-sm text-gray-600">
      <strong>Stats (useObjectSetAggregation)</strong>
      <div>
        {`${totalCount} total, ${completedCount} completed`}
        {isLoading && " (loading...)"}
      </div>
    </div>
  );
}

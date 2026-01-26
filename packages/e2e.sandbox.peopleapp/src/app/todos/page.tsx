import { ObjectTable } from "@osdk/react-components/experimental";
import { TodoLike } from "../../generatedNoCheck2/index.js";

// ObjectTable with TodoLike interface
export function TodosPage() {
  return (
    <div className="flex flex-col">
      <ObjectTable objectType={TodoLike} selectionMode="single" />
    </div>
  );
}

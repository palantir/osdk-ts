import type { ObjectTypeDefinition } from "@osdk/api";
import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";

/** Filter definition with a required id — used to key per-filter UI state. */
export type IdentifiedFilterDef<T extends ObjectTypeDefinition> =
  & FilterDefinitionUnion<T>
  & { id: string };

/**
 * Reads the `id` off a filter definition. FilterList's callbacks type the definition as the wider
 * `FilterDefinitionUnion` (no `id`), but we only ever register `IdentifiedFilterDef`s, so the id is
 * present at runtime. Narrows without a cast.
 */
export function getFilterDefId<T extends ObjectTypeDefinition>(
  def: FilterDefinitionUnion<T>,
): string | undefined {
  return "id" in def && typeof def.id === "string" ? def.id : undefined;
}

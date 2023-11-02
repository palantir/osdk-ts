import { ObjectDefinition } from "@osdk/api";

import {
  GeoPoint,
  GeoShape,
  LocalDate,
  OntologyObject,
  Timestamp,
} from "@osdk/legacy-client";
/**
 * Its a todo item.
 */
export interface Todo extends OntologyObject {
  readonly __apiName: "Todo";
  readonly __primaryKey: number;
  readonly id: number | undefined;
  /**
   * The text of the todo
   */
  readonly body: string | undefined;
  readonly complete: boolean | undefined;
}

export const Todo = {
  apiName: "Todo",
  primaryKeyType: "integer",
  links: {},
  properties: {
    id: {
      type: "integer",
    },
    body: {
      type: "string",
    },
    complete: {
      type: "boolean",
    },
  },
} satisfies ObjectDefinition<"Todo", "Todo">;

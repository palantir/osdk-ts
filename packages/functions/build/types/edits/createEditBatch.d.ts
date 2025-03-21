import type { Client } from "@osdk/client";
import type { EditBatch } from "./EditBatch.js";
import type { AnyEdit } from "./types.js";
export declare function createEditBatch<T extends AnyEdit>(_client: Client): EditBatch<T>;

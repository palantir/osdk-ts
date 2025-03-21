import type { RequestHandler } from "msw";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
export type FauxFoundryHandlersFactory = (baseUrl: string, fauxFoundry: FauxFoundry) => Array<RequestHandler>;
export declare function createFauxFoundryHandlers(baseUrl: string, fauxFoundry: FauxFoundry): Array<RequestHandler>;

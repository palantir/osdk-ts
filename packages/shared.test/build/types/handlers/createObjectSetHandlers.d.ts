import type { RequestHandler } from "msw";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
export declare const createObjectSetHandlers: (baseUrl: string, fauxFoundry: FauxFoundry) => Array<RequestHandler>;

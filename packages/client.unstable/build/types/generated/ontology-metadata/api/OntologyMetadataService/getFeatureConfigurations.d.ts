import { type ConjureContext } from "conjure-lite";
import type { GetFeatureConfigurationsResponse } from "../GetFeatureConfigurationsResponse.js";
/**
* Please contact the OMS team before using this endpoint.
*
* Gets the current configuration of some OMS features. Note that these configurations are stack-wide, which
* means they do not have granularity on org/enrollment/group level.
*/
export declare function getFeatureConfigurations(ctx: ConjureContext): Promise<GetFeatureConfigurationsResponse>;

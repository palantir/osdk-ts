import { ModelApiDataType } from "./ModelApiDataType";

export interface DeploymentTransformApi {
    inputs: Array<ModelApiDataType>;
    outputs: Array<ModelApiDataType>;
}

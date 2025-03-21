import type { ObjectMonitoringFrontendConsumer } from "./ObjectMonitoringFrontendConsumer.js";
export interface ActionTypeFrontendConsumer_objectMonitoring {
	type: "objectMonitoring";
	objectMonitoring: ObjectMonitoringFrontendConsumer;
}
/**
* The different Action type frontends.
*/
export type ActionTypeFrontendConsumer = ActionTypeFrontendConsumer_objectMonitoring;

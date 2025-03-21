import type { GothamTypeInstallFailedStatus } from "./GothamTypeInstallFailedStatus.js";
import type { GothamTypeInstallInstalledStatus } from "./GothamTypeInstallInstalledStatus.js";
import type { GothamTypeInstallInstallingStatus } from "./GothamTypeInstallInstallingStatus.js";
import type { GothamTypeInstallNotFoundStatus } from "./GothamTypeInstallNotFoundStatus.js";
import type { GothamTypeInstallQueuedStatus } from "./GothamTypeInstallQueuedStatus.js";
import type { GothamTypeInstallStagedStatus } from "./GothamTypeInstallStagedStatus.js";
export interface GothamTypeInstallStatus_notFound {
	type: "notFound";
	notFound: GothamTypeInstallNotFoundStatus;
}
export interface GothamTypeInstallStatus_queued {
	type: "queued";
	queued: GothamTypeInstallQueuedStatus;
}
export interface GothamTypeInstallStatus_installing {
	type: "installing";
	installing: GothamTypeInstallInstallingStatus;
}
export interface GothamTypeInstallStatus_failed {
	type: "failed";
	failed: GothamTypeInstallFailedStatus;
}
export interface GothamTypeInstallStatus_staged {
	type: "staged";
	staged: GothamTypeInstallStagedStatus;
}
export interface GothamTypeInstallStatus_installed {
	type: "installed";
	installed: GothamTypeInstallInstalledStatus;
}
export type GothamTypeInstallStatus = GothamTypeInstallStatus_notFound | GothamTypeInstallStatus_queued | GothamTypeInstallStatus_installing | GothamTypeInstallStatus_failed | GothamTypeInstallStatus_staged | GothamTypeInstallStatus_installed;

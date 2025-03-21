import type { VersionDeleteArgs } from "./VersionDeleteArgs.js";
export default function versionDeleteCommand({ version, yes, application, foundryUrl, token, tokenFile }: VersionDeleteArgs): Promise<void>;

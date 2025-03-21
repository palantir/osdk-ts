import type { CommandModule } from "yargs";
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";
declare const command: CommandModule<CommonSiteArgs, SiteDeployArgs>;
export default command;

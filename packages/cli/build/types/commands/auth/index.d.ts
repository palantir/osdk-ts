import type { CliCommonArgs, CommonAuthArgs } from "@osdk/cli.common";
import type * as yargs from "yargs";
declare const auth: yargs.CommandModule<CliCommonArgs, CommonAuthArgs>;
export default auth;

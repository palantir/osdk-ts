import { Employee } from "@osdk/examples.basic.sdk";
import { client } from "../client.js";
import { logger } from "../logger.js";

export async function checkUnstableBulkLinks() {
  const { data: employees } = await client(Employee).fetchPage({
    pageSize: 100,
  });

  logger.debug("Fetching the bulk links");

  for await (
    const {
      object,
      linkApiName,
      otherObjectApiName,
      otherObjectPk,
    } of client.__UNSTABLE_getBulkLinks(employees, [
      "ventures",
      "amishsSyncGroup",
    ])
  ) {
    logger.info(
      `Found link ${object.$objectType}:${object.$primaryKey} <- (${linkApiName}) -> ${otherObjectApiName}:${otherObjectPk}`,
    );
  }
}

checkUnstableBulkLinks();

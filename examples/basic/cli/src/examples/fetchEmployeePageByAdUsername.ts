import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

/**
 * Demonstrates looking up an employee and for fun adds an `AND` and `ne`
 */
export async function fetchEmployeePageByAdUsername(
  client: Client<OntologyType>,
  adUsername: string,
) {
  const result = await client.objects.Employee.where({
    $and: [{ adUsername }, { employeeNumber: { ne: 5 } }],
  }).fetchPageOrThrow();

  console.log(`fetchEmployeePageByAdUsername('${adUsername}')`);
  console.table(
    result.data.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
  console.log();
}

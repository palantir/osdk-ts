import invariant from "tiny-invariant";
import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

/**
 * Demonstrates looking up an employee and for fun adds an `AND` and `ne`
 */
export async function fetchEmployeePageByAdUsernameAndLimit(
  client: Client<OntologyType>,
  adUsername: string,
) {
  const result = await client.objects.Employee.where({
    $and: [
      { adUsername },
      { employeeNumber: { ne: 5 } },
      { employeeNumber: { gte: 5 } },
    ],
  }).fetchPageOrThrow({
    select: ["adUsername", "employeeNumber", "jobProfile"],
  });

  console.log(`fetchEmployeePageByAdUsernameAndLimit('${adUsername}')`);
  console.table(result.data);
  console.log();

  invariant(result.data.length === 1);
  const employee = result.data[0];
  invariant(employee.adUsername === adUsername);
  invariant(!("businessTitle" in employee));

  /*
fetchEmployeePageByAdUsernameAndLimit('fish')
┌─────────┬────────────┬───────────────────────────────────────────────────────────────────────────┬────────────┬──────────────┐
│ (index) │ __apiName  │                                   __rid                                   │ adUsername │ __primaryKey │
├─────────┼────────────┼───────────────────────────────────────────────────────────────────────────┼────────────┼──────────────┤
│    0    │ 'Employee' │ 'ri.phonograph2-objects.main.object.c8f229e6-bdb7-49ee-a096-74ed1fd28c46' │   'fish'   │    10001     │
└─────────┴────────────┴───────────────────────────────────────────────────────────────────────────┴────────────┴──────────────┘
*/
}

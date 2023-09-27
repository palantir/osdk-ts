import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

export async function fetchEmployeeLead(
  client: Client<OntologyType>,
  adUsername: string,
) {
  const result = await client.objects.Employee.where({
    adUsername,
  })
    .pivotTo("lead")
    .fetchPageOrThrow({
      select: ["adUsername", "businessTitle", "employeeNumber"],
    });

  // const result = await client
  //   .objectSet("Employee", {
  //     $where: { locationCity: "Palo Alto" },
  //   })
  //   .pivotTo("lead", {
  //     $where: { locationCity: "New York" },
  //   })
  //   .fetchPageOrThrow({
  //     select: ["adUsername", "businessTitle", "employeeNumber"],
  //   });
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

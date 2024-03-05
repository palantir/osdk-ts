import { createClient } from "@osdk/client";
import {
  Employee,
  Office,
  Ontology,
  promoteEmployee,
  promoteEmployeeObject,
  Todo,
} from "./generatedNoCheck";

export const client = createClient(
  Ontology,
  "",
  async () => {
    return "";
  },
);

export async function osdkObjectSetExample() {
  /**
   * OBJECT SETS
   */

  // Simple where clause
  // This defaults to AND together all the parameters
  const simpleFilteredEmployeeObjectSet = await client(Employee).where({
    fullName: { $contains: "Clooney" },
    employeeId: { $eq: 12 },
  });

  // Where clause with ors, ands, nots
  const complexFilteredEmployeeObjectSet = await client(Employee).where({
    $or: [{ fullName: { $contains: "Clooney" }, employeeId: { $gt: 10 } }, {
      $and: [{ $not: { fullName: { $contains: "Pitt" } } }, {
        $or: [{ fullName: { $contains: "Downey" } }, {
          fullName: { $contains: "Hemsworth" },
          employeeId: { $gte: 20 },
        }],
      }],
    }],
  });

  // Where clause boolean

  await client(Todo).where({ isComplete: true });

  // Where clause GEOTYPES

  // Within clauses take either a polygon or bounding box
  const withinFilteredObjectSet = await client(Office).where({
    $or: [
      {
        entrance: { $within: { distance: [1_000, "miles"], of: [0, 0] } },
      },
      { entrance: { $within: { bbox: [0, 1, 2, 3] } } },
      { entrance: { $within: [0, 1, 2, 3] } },
      {
        entrance: {
          $within: { polygon: [[[0, 1], [0, 0], [1, 1], [1, 0], [0, 1]]] },
        },
      },
      {
        entrance: {
          $within: {
            type: "Polygon",
            coordinates: [[[0, 1], [0, 0], [1, 1], [1, 0], [0, 1]]],
          },
        },
      },
    ],
  });

  // Intersect clauses take either a polygon or bounding box
  const intersectFilteredObjectSet = await client(Office).where({
    $or: [
      { entrance: { $intersects: { bbox: [0, 1, 2, 3] } } },
      { entrance: { $intersects: [0, 1, 2, 3] } },
      {
        entrance: {
          $intersects: { polygon: [[[0, 1], [0, 0], [1, 1], [1, 0], [0, 1]]] },
        },
      },
      {
        entrance: {
          $intersects: {
            type: "Polygon",
            coordinates: [[[0, 1], [0, 0], [1, 1], [1, 0], [0, 1]]],
          },
        },
      },
    ],
  });

  // objectSet intersect
  const intersectedObjectSet = complexFilteredEmployeeObjectSet.intersect(
    simpleFilteredEmployeeObjectSet,
  );

  // objectSet union
  const unionObjectSet = complexFilteredEmployeeObjectSet.union(
    simpleFilteredEmployeeObjectSet,
  );

  // objectSet subtract
  const subtractObjectSet = complexFilteredEmployeeObjectSet.subtract(
    simpleFilteredEmployeeObjectSet,
  );

  // Pivots and links
  const getPeeps = await client(Employee).pivotTo("peeps").fetchPageOrThrow();
  console.log(getPeeps.data);

  const filteredEmployees = await simpleFilteredEmployeeObjectSet
    .fetchPageOrThrow();
  const employeeLead = await filteredEmployees
    .data[0].$link
    .lead.get();
  console.log(employeeLead.fullName);

  // When fetching a page of employees, you can down select properties you want, and also order the results
  const orderedEmployees = complexFilteredEmployeeObjectSet.fetchPageOrThrow({
    select: ["employeeId", "fullName", "startDate"],
    orderBy: { "startDate": "asc" },
    pageSize: 10,
  });

  /**
   * ACTIONS
   */

  // When calling an action, you can get back the edits that were made
  const actionResults = await client(promoteEmployee)({
    employeeId: employeeLead.employeeId,
    newTitle: "Architect",
    newCompensation: 1000000,
  }, { returnEdits: true });

  if (actionResults.type === "edits") {
    console.log("Edited employee: ", actionResults.edits);
  }

  // You can also just run validation to make sure the parameters you passed in for valid
  // Note, this action takes a concrete object, but will also accept the PK of the object (e.g. employeeLead.employeeId)
  const actionValidation = await client(promoteEmployeeObject)({
    employee: employeeLead,
    newTitle: "Architect",
    newCompensation: 1000000,
  }, { validateOnly: true });

  // You can get the entire validation result, or validation on a per-param basis
  console.log(actionValidation.result);
  console.log(actionValidation.parameters);

  console.log(
    withinFilteredObjectSet,
    intersectFilteredObjectSet,
    orderedEmployees,
    intersectedObjectSet,
    unionObjectSet,
    subtractObjectSet,
  );
}

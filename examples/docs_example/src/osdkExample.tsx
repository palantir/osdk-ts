import { createClient } from "@osdk/client";
import { Employee, Office, Ontology, Todo } from "./generatedNoCheck2";

export const client = createClient(
  Ontology,
  import.meta.env.VITE_FOUNDRY_URL,
  async () => {
    return "";
  },
);

export async function tryOsdk() {
  // Where clauses

  // Simple where clause
  const simpleFilteredEmployeeObjectSet = await client(Employee).where({
    fullName: { $contains: "Clooney" },
    employeeId: { $eq: 12 },
  });

  // Where clause with or, ands, nots
  const complexFilteredEmployeeObjectSet = await client(Employee).where({
    $or: [{ fullName: { $contains: "Clooney" }, startDate: { $gt: 10 } }, {
      $and: [{ $not: { fullName: { $contains: "Pitt" } } }, {
        $or: [{ fullName: { $contains: "Downey" } }, {
          fullName: { $contains: "Hemsworth" },
          employeeId: { $gte: 20 },
        }],
      }],
    }],
  });

  // Where clause geotypes

  // Within clauses take either a polygon or bounding box
  const withinFilteredObjectSet = await client(Office).where({
    $or: [
      {
        entrance: { $within: { distance: [1_000, "miles"], of: [0, 0] } },
      },
      { entrance: { $within: { bbox: [0, 1, 2, 3] } } },
      { entrance: { $within: [0, 1, 2, 3] } },
      {
        entrance: { $within: { polygon: [[[0, 1], [0, 0], [1, 1], [1, 0]]] } },
      },
      {
        entrance: {
          $within: {
            type: "Polygon",
            coordinates: [[[0, 1], [0, 0], [1, 1], [1, 0]]],
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
          $intersects: { polygon: [[[0, 1], [0, 0], [1, 1], [1, 0]]] },
        },
      },
      {
        entrance: {
          $intersects: {
            type: "Polygon",
            coordinates: [[[0, 1], [0, 0], [1, 1], [1, 0]]],
          },
        },
      },
    ],
  });

  // You can orderby when fetching object sets and select properties you want
  const orderedEmployees = simpleFilteredEmployeeObjectSet.fetchPageOrThrow({
    select: ["employeeId", "fullName"],
    orderBy: { "startDate": "asc" },
    pageSize: 10,
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
}

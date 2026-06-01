// Standalone OSDK validation of the latest-status RDP path against the live ontology.
// Run: node scripts/validateRdp.mjs   (reads FOUNDRY_URL + FOUNDRY_USER_TOKEN from the environment)
import { createClient } from "@osdk/client";
import {
  $ontologyRid,
  Assignment,
} from "../build/esm/generatedNoCheck2/index.js";
import { buildLatestStatusQuery } from "../build/esm/utils/statusFilter.js";

const url = process.env.FOUNDRY_URL;
const token = process.env.FOUNDRY_USER_TOKEN;
if (!url || !token) {
  throw new Error("FOUNDRY_URL and FOUNDRY_USER_TOKEN must be set");
}

const $ = createClient(url, $ontologyRid, async () => token);

const T = "WorkMode";
const V = "Remote";
const targetWhere = { $and: [{ type: { $eq: T } }, { value: { $eq: V } }] };
const negatedWhere = { $and: [{ type: { $eq: T } }, { value: { $ne: V } }] };

const page = await $(Assignment)
  .where({
    assignmentType: { $eq: "Permanent" },
    assignmentStatus: { $eq: "Active" },
  })
  .withProperties({
    targetMax: (b) =>
      b.pivotTo("statusUpdate").where(targetWhere).aggregate(
        "timestampEpochMs:max",
      ),
    negMax: (b) =>
      b.pivotTo("statusUpdate").where(negatedWhere).aggregate(
        "timestampEpochMs:max",
      ),
    diff: (b) =>
      b.pivotTo("statusUpdate").where(targetWhere).aggregate(
        "timestampEpochMs:max",
      )
        .subtract(
          b.pivotTo("statusUpdate").where(negatedWhere).aggregate(
            "timestampEpochMs:max",
          ),
        ),
  })
  .fetchPage();

for (const o of page.data) {
  console.log(
    `${o.assignmentId}  targetMax=${o.targetMax}  negMax=${o.negMax}  diff=${o.diff}  `
      + `latestIsRemote(diff>=0 || (diff==null && targetMax!=null))=${
        (o.diff != null && o.diff >= 0)
        || (o.diff == null && o.targetMax != null)
      }`,
  );
}

// Now exercise the SERVER-SIDE where filter on the diff RDP, like the app does.
const filtered = await $(Assignment)
  .where({
    assignmentType: { $eq: "Permanent" },
    assignmentStatus: { $eq: "Active" },
  })
  .withProperties({
    targetMax: (b) =>
      b.pivotTo("statusUpdate").where(targetWhere).aggregate(
        "timestampEpochMs:max",
      ),
    diff: (b) =>
      b.pivotTo("statusUpdate").where(targetWhere).aggregate(
        "timestampEpochMs:max",
      )
        .subtract(
          b.pivotTo("statusUpdate").where(negatedWhere).aggregate(
            "timestampEpochMs:max",
          ),
        ),
  })
  .where({
    $or: [
      { diff: { $gte: 0 } },
      {
        $and: [{ diff: { $isNull: true } }, { targetMax: { $isNull: false } }],
      },
    ],
  })
  .fetchPage();
console.log(
  "\nServer-side 'latest WorkMode == Remote' ->",
  filtered.data.map((o) => o.assignmentId).join(", "),
);

// Isolate: does $gte:0 alone on a negative diff exclude ASG-2?
const gteOnly = await $(Assignment)
  .where({
    assignmentType: { $eq: "Permanent" },
    assignmentStatus: { $eq: "Active" },
  })
  .withProperties({
    diff: (b) =>
      b.pivotTo("statusUpdate").where(targetWhere).aggregate(
        "timestampEpochMs:max",
      )
        .subtract(
          b.pivotTo("statusUpdate").where(negatedWhere).aggregate(
            "timestampEpochMs:max",
          ),
        ),
  })
  .where({ diff: { $gte: 0 } })
  .fetchPage();
console.log(
  "Server-side 'diff >= 0' only ->",
  gteOnly.data.map((o) => o.assignmentId).join(", "),
);

// Full headline via the app's own builder: latest WorkMode==Remote AND latest RemoteEligible==Yes
const headline = buildLatestStatusQuery(
  [{ type: "WorkMode", value: "Remote" }, {
    type: "RemoteEligible",
    value: "Yes",
  }],
  { composeAcrossTypes: "$and" },
);
const headlineResult = await $(Assignment)
  .where({
    assignmentType: { $eq: "Permanent" },
    assignmentStatus: { $eq: "Active" },
  })
  .withProperties(headline.withProperties)
  .where(headline.where)
  .fetchPage();
console.log(
  "\nHEADLINE (latest WorkMode==Remote AND latest RemoteEligible==Yes) ->",
  headlineResult.data.map((o) => o.assignmentId).join(", "),
  "  (expected: ASG-1)",
);

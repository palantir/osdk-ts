
// THIS FILE IS GENERATED. DO NOT MODIFY.
// You probably want to modify ../documentation.yml instead.

import type { SdkSnippets } from "@osdk/docs-spec-core";
import type { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";

export const snippets: SdkSnippets<typeof OSDK_SNIPPETS_SPEC> = {
  "kind": "sdk",
  "versions": {
    "1.0.0": {
      "snippets": {
        "reactProviderSetup": [
          {
            "template": "import { OsdkProvider2 } from \"@osdk/react/experimental\";\nimport { createClient } from \"@osdk/client\";\n\nconst client = createClient(\n  \"https://your-stack.palantirfoundry.com\",\n  \"{{{packageName}}}\",\n  async () => \"your-token\"\n);\n\nfunction App() {\n  return (\n    <OsdkProvider2 client={client}>\n      <YourApp />\n    </OsdkProvider2>\n  );\n}"
          }
        ],
        "reactUseOsdkObjectsBasic": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{objectType}});\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {data?.map(obj => (\n          <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>\n        ))}\n      </ul>\n      {isLoading && data && <span className=\"refresh-indicator\">Refreshing...</span>}\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "reactUseOsdkObjectsFilter": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Filtered{{objectType}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{titleProperty}}: { $isNotNull: true }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {data?.map(obj => (\n          <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "reactUseOsdkObjectByPrimaryKey": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { object, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !object && <div className=\"skeleton\">Loading...</div>}\n      {object && (\n        <div>\n          <h2>{object.{{titleProperty}}}</h2>\n        </div>\n      )}\n    </div>\n  );\n}"
          }
        ],
        "reactUseLinksBasic": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction Linked{{linkedObjectType}}({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { links, isLoading, error } = useLinks(source, \"{{linkApiName}}\");\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !links && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {links?.map(linked => (\n          <li key={linked.$primaryKey}>{linked.$primaryKey}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "reactUseOsdkActionBasic": [
          {
            "template": "import { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\n\nfunction {{actionApiName}}Button() {\n  const { applyAction, isPending, error } = useOsdkAction({{actionApiName}});\n\n  const handleClick = async () => {\n    await applyAction({\n      {{#actionParameterSampleValuesV2}}\n      {{key}}: {{value}}{{^last}},{{/last}}\n      {{/actionParameterSampleValuesV2}}\n    });\n  };\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {String(error.unknown ?? error.actionValidation)}</div>}\n      <button onClick={handleClick} disabled={isPending}>\n        {isPending ? \"Applying...\" : \"Apply {{actionApiName}}\"}\n      </button>\n    </div>\n  );\n}",
            "computedVariables": [
              "actionParameterSampleValuesV2"
            ]
          }
        ],
        "reactUseOsdkAggregationBasic": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Count() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: { $select: { $count: \"unordered\" } }\n  });\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && data == null && <div className=\"skeleton\">Loading...</div>}\n      {data != null && <span>Total: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "reactUseOsdkObjectsEnabled": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Conditional{{objectType}}List({ shouldFetch }: { shouldFetch: boolean }) {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    enabled: shouldFetch\n  });\n\n  return (\n    <div>\n      {!shouldFetch && <div>Select criteria to load data</div>}\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {data?.map(obj => (\n          <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "loadSingleObjectGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { object, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !object && <div>Loading...</div>}\n      {object && <div>{object.{{titleProperty}}}</div>}\n    </div>\n  );\n}"
          }
        ],
        "loadObjectPageGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{objectType}}, {\n    pageSize: 30\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "orderObjectsGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Sorted{{objectType}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    orderBy: { {{titleProperty}}: \"asc\" }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "searchObjectsGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Filtered{{objectType}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{titleProperty}}: { $isNotNull: true }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "loadSingleObjectReference": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { object, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !object && <div>Loading...</div>}\n      {object && <div>{object.{{titleProperty}}}</div>}\n    </div>\n  );\n}"
          }
        ],
        "loadObjectsReference": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{objectType}}, {\n    pageSize: 30\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "loadAllObjectsReference": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\n// Note: For large datasets, consider using pagination with fetchMore\nfunction All{{objectType}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{objectType}});\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "loadLinkedObjectReference": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction {{linkedObjectType}}Detail({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { links, isLoading, error } = useLinks(source, \"{{linkApiName}}\");\n  const linkedObject = links?.[0];\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !links && <div>Loading...</div>}\n      {linkedObject && <div>{linkedObject.$primaryKey}</div>}\n    </div>\n  );\n}"
          }
        ],
        "loadLinkedObjectsReference": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction Linked{{linkedObjectType}}List({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { links, isLoading, error, fetchMore } = useLinks(source, \"{{linkApiName}}\");\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !links && <div>Loading...</div>}\n      <ul>\n        {links?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "aggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Aggregation() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    where: { {{property}}: { $isNull: false } },\n    aggregate: {\n      $select: { $count: \"unordered\" },\n      $groupBy: { {{property}}: \"exact\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "countAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Count() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: { $select: { $count: \"unordered\" } }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Total: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "approximateDistinctAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}DistinctCount() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: { $select: { \"{{property}}:approximateDistinct\": \"unordered\" } }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Distinct count: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "exactDistinctAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}ExactDistinctCount() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: { $select: { \"{{property}}:exactDistinct\": \"unordered\" } }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Exact distinct count: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "numericAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}{{operation}}() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: { $select: { \"{{property}}:{{operation}}\": \"unordered\" } }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>{{operation}}: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "fixedWidthGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByFixedWidth() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: {\n      $select: { $count: \"unordered\" },\n      $groupBy: { {{property}}: { $fixedWidth: 10 } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "durationGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByDuration() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: {\n      $select: { $count: \"unordered\" },\n      $groupBy: { {{property}}: { $duration: [{{#durationText}}{{arg}}{{/durationText}}, \"{{#durationText}}{{unit}}{{/durationText}}\"] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "exactGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByExact() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: {\n      $select: { $count: \"unordered\" },\n      $groupBy: { {{property}}: \"exact\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "rangeGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByRange() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, {\n    aggregate: {\n      $select: { $count: \"unordered\" },\n      $groupBy: { {{property}}: { $ranges: [[{{{propertyValueV2}}}, {{{propertyValueV2}}}]] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}",
            "computedVariables": [
              "propertyValueV2"
            ]
          }
        ],
        "applyAction": [
          {
            "template": "import { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\n\nfunction {{actionApiName}}Button() {\n  const { applyAction, isPending, error } = useOsdkAction({{actionApiName}});\n\n  const handleClick = async () => {\n    await applyAction({\n      {{#actionParameterSampleValuesV2}}\n      {{key}}: {{value}}{{^last}},{{/last}}\n      {{/actionParameterSampleValuesV2}}\n    });\n  };\n\n  return (\n    <div>\n      {error && <div>Error: {String(error.unknown ?? error.actionValidation)}</div>}\n      <button onClick={handleClick} disabled={isPending}>\n        {isPending ? \"Applying...\" : \"Apply\"}\n      </button>\n    </div>\n  );\n}",
            "computedVariables": [
              "actionParameterSampleValuesV2"
            ]
          }
        ],
        "applyActionResponse": [
          {
            "template": "import { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\n\nfunction {{actionApiName}}WithResult() {\n  const { applyAction, isPending, error, data } = useOsdkAction({{actionApiName}});\n\n  return (\n    <div>\n      {data && <div>Action completed successfully</div>}\n    </div>\n  );\n}"
          }
        ],
        "validateAction": [
          {
            "template": "import { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\nimport { useState, useEffect } from \"react\";\n\nfunction {{actionApiName}}WithValidation() {\n  const { validateAction, applyAction, isPending, validationResult } = useOsdkAction({{actionApiName}});\n  const [params, setParams] = useState({});\n\n  useEffect(() => {\n    validateAction(params);\n  }, [params, validateAction]);\n\n  return (\n    <div>\n      {validationResult?.result === \"INVALID\" && (\n        <div>Validation errors present</div>\n      )}\n      <button\n        onClick={() => applyAction(params)}\n        disabled={isPending || validationResult?.result === \"INVALID\"}\n      >\n        {isPending ? \"Applying...\" : \"Apply\"}\n      </button>\n    </div>\n  );\n}"
          }
        ],
        "batchApplyAction": [
          {
            "template": "// Batch actions in React should be handled with multiple hook calls\n// or by using the client directly for batch operations\nimport { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\n\nfunction Batch{{actionApiName}}() {\n  const { applyAction, isPending } = useOsdkAction({{actionApiName}});\n\n  const handleBatchApply = async (items: Array<{ /* params */ }>) => {\n    await Promise.all(items.map(item => applyAction(item)));\n  };\n\n  return (\n    <button onClick={() => handleBatchApply([])} disabled={isPending}>\n      Apply Batch\n    </button>\n  );\n}"
          }
        ],
        "clientSetup": [
          {
            "template": "import { OsdkProvider2 } from \"@osdk/react/experimental\";\nimport { createClient } from \"@osdk/client\";\n\nconst client = createClient(\n  \"https://your-stack.palantirfoundry.com\",\n  \"{{{packageName}}}\",\n  async () => \"your-token\"\n);\n\nfunction App() {\n  return (\n    <OsdkProvider2 client={client}>\n      <YourApp />\n    </OsdkProvider2>\n  );\n}"
          }
        ],
        "callFunction": [
          {
            "template": "import { {{funcApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkFunction } from \"@osdk/react/experimental\";\n\nfunction {{funcApiName}}Caller() {\n  const { data, isLoading, error, refetch } = useOsdkFunction({{funcApiName}}, {\n    params: { /* function parameters */ }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}\n      <button onClick={refetch}>Refresh</button>\n    </div>\n  );\n}"
          }
        ],
        "executeFunction": [
          {
            "template": "import { {{funcApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkFunction } from \"@osdk/react/experimental\";\n\nfunction {{funcApiName}}Executor() {\n  const { data, isLoading, error, refetch } = useOsdkFunction({{funcApiName}}, {\n    params: { /* function parameters */ }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}\n      <button onClick={refetch}>Refresh</button>\n    </div>\n  );\n}"
          }
        ],
        "stringStartsWithTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}StartsWith() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $startsWith: \"foo\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "containsAnyTermTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}ContainsAnyTerm() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $containsAnyTerm: \"foo bar\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "containsAllTermsTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}ContainsAllTerms() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $containsAllTerms: \"foo bar\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "containsAllTermsInOrderTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}ContainsAllTermsInOrder() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $containsAllTermsInOrder: \"foo bar\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "containsTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Contains() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $contains: \"value\" }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "equalityTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Equality() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $eq: {{{propertyValueV2}}} }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "propertyValueV2"
            ]
          }
        ],
        "inFilterTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}InFilter() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $in: [{{{propertyValueV2}}}] }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "propertyValueV2"
            ]
          }
        ],
        "rangeTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Range() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { ${{operation}}: {{{propertyValueV2}}} }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "propertyValueV2"
            ]
          }
        ],
        "nullTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}NullFilter() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $isNull: true }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "andTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}AndFilter() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      $and: [\n        { $not: { {{primaryKeyPropertyV2.apiName}}: { $isNull: true } } },\n        { {{property}}: { $eq: {{{propertyValueV2}}} } }\n      ]\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "primaryKeyPropertyV2",
              "propertyValueV2"
            ]
          }
        ],
        "orTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}OrFilter() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      $or: [\n        { $not: { {{primaryKeyPropertyV2.apiName}}: { $isNull: true } } },\n        { {{property}}: { $eq: {{{propertyValueV2}}} } }\n      ]\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "primaryKeyPropertyV2",
              "propertyValueV2"
            ]
          }
        ],
        "notTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}NotFilter() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      $not: { {{property}}: { $eq: {{{propertyValueV2}}} } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}",
            "computedVariables": [
              "propertyValueV2"
            ]
          }
        ],
        "withinDistanceTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}WithinDistance() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $within: { $distance: [100, \"{{distanceUnit}}\"], $of: [-74.0060, 40.7128] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "withinBoundingBoxTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}WithinBoundingBox() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "withinPolygonTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}WithinPolygon() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "intersectsPolygonTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}IntersectsPolygon() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "intersectsBboxTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}IntersectsBbox() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{property}}: { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128] } }\n    }\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "objectSetOperationsGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}SetOperations() {\n  const client = useOsdkClient();\n  const combinedSet = useMemo(() => {\n    const setA = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"a\" } });\n    const setB = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"b\" } });\n    const setC = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"c\" } });\n    return setA.intersect(setB).subtract(setC);\n  }, [client]);\n\n  const { data, isLoading, error } = useObjectSet(combinedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "objectSetOperationsUnion": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}Union() {\n  const client = useOsdkClient();\n  const unionSet = useMemo(() => {\n    const setA = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"a\" } });\n    const setB = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"b\" } });\n    const setC = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"c\" } });\n    return setA.union(setB).union(setC);\n  }, [client]);\n\n  const { data, isLoading, error } = useObjectSet(unionSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "objectSetOperationsSubtract": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}Subtract() {\n  const client = useOsdkClient();\n  const subtractedSet = useMemo(() => {\n    const setA = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"a\" } });\n    const setB = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"b\" } });\n    const setC = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"c\" } });\n    return setA.subtract(setB).subtract(setC);\n  }, [client]);\n\n  const { data, isLoading, error } = useObjectSet(subtractedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "objectSetOperationsIntersect": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}Intersect() {\n  const client = useOsdkClient();\n  const intersectedSet = useMemo(() => {\n    const setA = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"a\" } });\n    const setB = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"b\" } });\n    const setC = client({{objectType}}).where({ {{titleProperty}}: { $containsAnyTerm: \"c\" } });\n    return setA.intersect(setB).intersect(setC);\n  }, [client]);\n\n  const { data, isLoading, error } = useObjectSet(intersectedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyBaseExample": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{sourceObjectType}}DerivedProperty() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{sourceObjectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"$count\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyCountAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedCount() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"$count\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyNumericAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedNumeric() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:{{operation}}\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertySelectPropertyAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedSelectProperty() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").selectProperty(\"{{property}}\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyApproximateDistinctAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedApproxDistinct() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:approximateDistinct\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyExactDistinctAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedExactDistinct() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:exactDistinct\")\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyApproximatePercentileAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedPercentile() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:approximatePercentile\", { percentile: 95 })\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyCollectToListAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedCollectList() {\n  const client = useOsdkClient();\n  const maxObjectsInList = 75;\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:collectList\", { limit: maxObjectsInList })\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyCollectToSetAggregation": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedCollectSet() {\n  const client = useOsdkClient();\n  const maxObjectsInSet = 75;\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"{{property}}:collectSet\", { limit: maxObjectsInSet })\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "loadObjectMetadataSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}Metadata() {\n  const client = useOsdkClient();\n  const [metadata, setMetadata] = useState<{ description?: string; visibility?: string } | null>(null);\n\n  useEffect(() => {\n    client.fetchMetadata({{objectType}}).then(setMetadata);\n  }, [client]);\n\n  return (\n    <div>\n      {metadata && (\n        <div>\n          <div>Description: {metadata.description}</div>\n          <div>Visibility: {metadata.visibility}</div>\n        </div>\n      )}\n    </div>\n  );\n}"
          }
        ],
        "loadInterfaceMetadataSnippet": [
          {
            "template": "import { {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkClient } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{interfaceApiName}}Metadata() {\n  const client = useOsdkClient();\n  const [metadata, setMetadata] = useState<{ rid?: string; implementedBy?: string[] } | null>(null);\n\n  useEffect(() => {\n    client.fetchMetadata({{interfaceApiName}}).then(setMetadata);\n  }, [client]);\n\n  return (\n    <div>\n      {metadata && (\n        <div>\n          <div>RID: {metadata.rid}</div>\n          <div>Implemented by: {metadata.implementedBy?.join(\", \")}</div>\n        </div>\n      )}\n    </div>\n  );\n}"
          }
        ],
        "loadInterfacesReference": [
          {
            "template": "import { {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{interfaceApiName}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{interfaceApiName}}, {\n    pageSize: 30\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "loadAllInterfacesReference": [
          {
            "template": "import { {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction All{{interfaceApiName}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{interfaceApiName}});\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "loadOrderedInterfacesReference": [
          {
            "template": "import { {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Ordered{{interfaceApiName}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{interfaceApiName}}, {\n    orderBy: { {{property}}: \"asc\" },\n    pageSize: 30\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "searchInterfacesReference": [
          {
            "template": "import { {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Search{{interfaceApiName}}() {\n  const { data, isLoading, error } = useOsdkObjects({{interfaceApiName}}, {\n    where: {\n      {{property}}: { $startsWith: \"foo\" }\n    },\n    pageSize: 30\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "castInterfaceToObjectReference": [
          {
            "template": "import { {{objectTypeApiName}}, {{interfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction CastInterface() {\n  const { data, isLoading, error } = useOsdkObjects({{interfaceApiName}}, {\n    pageSize: 10\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => {\n          const casted = obj.$as({{objectTypeApiName}});\n          return <li key={casted.$primaryKey}>{casted.$primaryKey}</li>;\n        })}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "subscribeToObjectSetInstructions": [
          {
            "template": "import { {{objectOrInterfaceApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectOrInterfaceApiName}}LiveList() {\n  const { data, isLoading, error } = useOsdkObjects({{objectOrInterfaceApiName}}, {\n    streamUpdates: true\n  });\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "loadTimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}TimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState<Array<{ time: string; value: number }>>([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllPoints().then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadTimeSeriesFirstPointSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}FirstPoint({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [point, setPoint] = useState(null);\n\n  useEffect(() => {\n    obj?.{{property}}?.getFirstPoint().then(setPoint);\n  }, [obj]);\n\n  return (\n    <div>\n      {point && <pre>{JSON.stringify(point, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadTimeSeriesLastPointSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}LastPoint({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [point, setPoint] = useState(null);\n\n  useEffect(() => {\n    obj?.{{property}}?.getLastPoint().then(setPoint);\n  }, [obj]);\n\n  return (\n    <div>\n      {point && <pre>{JSON.stringify(point, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadAbsoluteTimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}AbsoluteTimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState<Array<{ time: string; value: number }>>([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllPoints({\n      $startTime: \"2022-08-13T12:34:56Z\",\n      $endTime: \"2022-08-14T12:34:56Z\",\n    }).then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadRelativeTimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}RelativeTimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState<Array<{ time: string; value: number }>>([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllPoints({\n      $before: 1,\n      $unit: \"{{timeUnit}}\",\n    }).then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadGeotimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}GeotimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllValues().then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadGeotimeSeriesLastPointSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}GeotimeSeriesLatest({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [point, setPoint] = useState(null);\n\n  useEffect(() => {\n    obj?.{{property}}?.getLatestValue().then(setPoint);\n  }, [obj]);\n\n  return (\n    <div>\n      {point && <pre>{JSON.stringify(point, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadAbsoluteGeotimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}AbsoluteGeotimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllValues({\n      $startTime: \"2022-08-13T12:34:56Z\",\n      $endTime: \"2022-08-14T12:34:56Z\",\n    }).then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "loadRelativeGeotimeSeriesPointsSnippet": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}RelativeGeotimeSeries({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [points, setPoints] = useState([]);\n\n  useEffect(() => {\n    obj?.{{property}}?.getAllValues({\n      $before: 1,\n      $unit: \"{{timeUnit}}\",\n    }).then(setPoints);\n  }, [obj]);\n\n  return (\n    <div>\n      {points.length > 0 && <pre>{JSON.stringify(points, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "uploadAttachment": [
          {
            "template": "import { useOsdkClient } from \"@osdk/react/experimental\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { {{actionApiName}} } from \"{{{packageName}}}\";\n\nfunction AttachmentUploader() {\n  const client = useOsdkClient();\n\n  const handleUpload = async (file: File) => {\n    const attachment = createAttachmentUpload(file, file.name);\n    await client({{actionApiName}}).applyAction({\n      {{primaryKeyPropertyV2.apiName}}: {{{propertyValueV2}}},\n      {{property}}: attachment\n    });\n  };\n\n  return (\n    <input type=\"file\" onChange={e => {\n      const file = e.target.files?.[0];\n      if (file) {\n        handleUpload(file);\n      }\n    }} />\n  );\n}",
            "computedVariables": [
              "propertyValueV2",
              "primaryKeyPropertyV2"
            ]
          }
        ],
        "readMedia": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\nimport { useEffect, useState } from \"react\";\n\nfunction {{objectType}}Media({ primaryKey }: { primaryKey: string }) {\n  const { object: obj } = useOsdkObject({{objectType}}, primaryKey);\n  const [mediaUrl, setMediaUrl] = useState<string | null>(null);\n\n  useEffect(() => {\n    let url: string | undefined;\n    const loadMedia = async () => {\n      const contents = await obj?.{{property}}?.fetchContents();\n      if (contents?.ok) {\n        const blob = await contents.blob();\n        url = URL.createObjectURL(blob);\n        setMediaUrl(url);\n      }\n    };\n    if (obj) {\n      loadMedia();\n    }\n    return () => { if (url) { URL.revokeObjectURL(url); } };\n  }, [obj]);\n\n  return (\n    <div>\n      {mediaUrl && <a href={mediaUrl} download>Download media</a>}\n    </div>\n  );\n}"
          }
        ],
        "uploadMedia": [
          {
            "template": "import { useOsdkClient } from \"@osdk/react/experimental\";\nimport { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport type { MediaReference } from \"@osdk/api\";\nimport { {{actionApiName}}, {{objectType}} } from \"{{{packageName}}}\";\n\nfunction MediaUploader() {\n  const client = useOsdkClient();\n\n  const handleUpload = async (file: File) => {\n    const mediaReference: MediaReference = await client(\n      __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n      data: file,\n      fileName: file.name,\n      objectType: {{objectType}},\n      propertyType: \"{{property}}\",\n    });\n    await client({{actionApiName}}).applyAction({\n      // Pass the required action parameters including the primary key\n      {{mediaParameter}}: mediaReference\n    });\n  };\n\n  return (\n    <input type=\"file\" onChange={e => {\n      const file = e.target.files?.[0];\n      if (file) {\n        handleUpload(file);\n      }\n    }} />\n  );\n}"
          }
        ],
        "uploadMediaOntologyEdits": [
          {
            "template": "import { useOsdkClient } from \"@osdk/react/experimental\";\nimport { {{objectType}} } from \"{{{packageName}}}\";\nimport { createEditBatch, uploadMedia } from \"@osdk/functions\";\n\nfunction MediaOntologyEditsUploader() {\n  const client = useOsdkClient();\n\n  const handleUpload = async (file: File) => {\n    const batch = createEditBatch(client);\n    const mediaReference = await uploadMedia(client, { data: file, fileName: file.name });\n    // @ts-ignore\n    batch.create({{objectType}}, { {{property}}: mediaReference });\n    return batch.getEdits();\n  };\n\n  return (\n    <input type=\"file\" onChange={e => {\n      const file = e.target.files?.[0];\n      if (file) {\n        handleUpload(file);\n      }\n    }} />\n  );\n}"
          }
        ],
        "uploadMediaEphemeral": [
          {
            "template": "// Ephemeral media upload is not yet supported in the React SDK"
          }
        ],
        "derivedPropertyNumericExpression": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedNumericExpression() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      {{^isUnary}}\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\")\n          .aggregate(\"{{property}}\").{{operation}}(\n            baseObjectSet.pivotTo(\"{{linkApiName}}\").aggregate(\"$count\"))\n      {{/isUnary}}\n      {{#isUnary}}\n      \"{{operation}}_{{property}}\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\")\n          .selectProperty(\"{{property}}\").{{operation}}()\n      {{/isUnary}}\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "derivedPropertyDatetimeExpression": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}DerivedDatetimeExpression() {\n  const client = useOsdkClient();\n  const derivedSet = useMemo(() =>\n    client({{objectType}}).withProperties({\n      {{^isExtractPart}}\n      \"derivedPropertyDatetime_{{operation}}\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\")\n          .selectProperty(\"{{property}}\")\n          .{{operation}}(baseObjectSet.pivotTo(\"{{linkApiName}}\").selectProperty(\"{{property}}\"))\n      {{/isExtractPart}}\n      {{#isExtractPart}}\n      \"YEARS_part_of_{{property}}_of_{{linkApiName}}\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"{{linkApiName}}\")\n          .selectProperty(\"{{property}}\").extractPart(\"YEARS\")\n      {{/isExtractPart}}\n    }), [client]);\n\n  const { data, isLoading, error } = useObjectSet(derivedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "nearestNeighborsTextQuery": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}NearestNeighborsText() {\n  const client = useOsdkClient();\n  const resultSet = useMemo(() =>\n    client({{objectType}}).nearestNeighbors(\"coffee\", 5, \"{{property}}\"),\n  [client]);\n\n  const { data, isLoading, error } = useObjectSet(resultSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "nearestNeighborsVectorQuery": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction {{objectType}}NearestNeighborsVector() {\n  const client = useOsdkClient();\n  // Note that this vector maps to an arbitrary string\n  // It must match the dimension of the \"{{property}}\" property: {{vectorDimensionSize}}\n  const vectorQuery = useMemo(() =>\n    Array.from({ length: {{vectorDimensionSize}} }, () => 0.3),\n  []);\n  const resultSet = useMemo(() =>\n    client({{objectType}}).nearestNeighbors(vectorQuery, 5, \"{{property}}\"),\n  [client, vectorQuery]);\n\n  const { data, isLoading, error } = useObjectSet(resultSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "searchAround": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useOsdkClient, useObjectSet } from \"@osdk/react/experimental\";\nimport { useMemo } from \"react\";\n\nfunction SearchAround{{linkedObjectType}}() {\n  const client = useOsdkClient();\n  const linkedSet = useMemo(() =>\n    client({{sourceObjectType}})\n      .where({ {{rawLinkedPrimaryKeyProperty.apiName}}: { $in: [\"a\", \"b\", \"c\"] } })\n      .pivotTo(\"{{linkApiName}}\"),\n  [client]);\n\n  const { data, isLoading, error } = useObjectSet(linkedSet);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n    </div>\n  );\n}"
          }
        ]
      }
    }
  }
};
  
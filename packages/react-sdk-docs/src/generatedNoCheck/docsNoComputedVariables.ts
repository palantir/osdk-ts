
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
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { data, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      {data && (\n        <div>\n          <h2>{data.{{titleProperty}}}</h2>\n        </div>\n      )}\n    </div>\n  );\n}"
          }
        ],
        "reactUseLinksBasic": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction Linked{{linkedObjectType}}({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { data, isLoading, error } = useLinks(source, \"{{linkApiName}}\");\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {data?.map(linked => (\n          <li key={linked.$primaryKey}>{linked.$primaryKey}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
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
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Count() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg => agg.count());\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && data == null && <div className=\"skeleton\">Loading...</div>}\n      {data != null && <span>Total: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "reactUseOsdkObjectsEnabled": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Conditional{{objectType}}List({ shouldFetch }: { shouldFetch: boolean }) {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    enabled: shouldFetch\n  });\n\n  if (!shouldFetch) {\n    return <div>Select criteria to load data</div>;\n  }\n\n  return (\n    <div>\n      {error && <div className=\"error-banner\">Error: {error.message}</div>}\n      {isLoading && !data && <div className=\"skeleton\">Loading...</div>}\n      <ul>\n        {data?.map(obj => (\n          <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
          }
        ],
        "loadSingleObjectGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { data, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  if (error) return <div>Error: {error.message}</div>;\n  if (isLoading && !data) return <div>Loading...</div>;\n\n  return <div>{data?.{{titleProperty}}}</div>;\n}"
          }
        ],
        "loadObjectPageGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}List() {\n  const { data, isLoading, error, fetchMore } = useOsdkObjects({{objectType}}, {\n    pageSize: 30\n  });\n\n  if (error) return <div>Error: {error.message}</div>;\n  if (isLoading && !data) return <div>Loading...</div>;\n\n  return (\n    <div>\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "orderObjectsGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Sorted{{objectType}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    orderBy: { {{titleProperty}}: \"asc\" }\n  });\n\n  if (error) return <div>Error: {error.message}</div>;\n  if (isLoading && !data) return <div>Loading...</div>;\n\n  return (\n    <ul>\n      {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n    </ul>\n  );\n}"
          }
        ],
        "searchObjectsGuide": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObjects } from \"@osdk/react/experimental\";\n\nfunction Filtered{{objectType}}List() {\n  const { data, isLoading, error } = useOsdkObjects({{objectType}}, {\n    where: {\n      {{titleProperty}}: { $isNotNull: true }\n    }\n  });\n\n  if (error) return <div>Error: {error.message}</div>;\n  if (isLoading && !data) return <div>Loading...</div>;\n\n  return (\n    <ul>\n      {data?.map(obj => <li key={obj.$primaryKey}>{obj.{{titleProperty}}}</li>)}\n    </ul>\n  );\n}"
          }
        ],
        "loadSingleObjectReference": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkObject } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Detail({ primaryKey }: { primaryKey: string }) {\n  const { data, isLoading, error } = useOsdkObject({{objectType}}, primaryKey);\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      {data && <div>{data.{{titleProperty}}}</div>}\n    </div>\n  );\n}"
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
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction {{linkedObjectType}}Detail({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { data, isLoading, error } = useLinks(source, \"{{linkApiName}}\");\n  const linkedObject = data?.[0];\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      {linkedObject && <div>{linkedObject.$primaryKey}</div>}\n    </div>\n  );\n}"
          }
        ],
        "loadLinkedObjectsReference": [
          {
            "template": "import { {{sourceObjectType}} } from \"{{{packageName}}}\";\nimport { useLinks } from \"@osdk/react/experimental\";\n\nfunction Linked{{linkedObjectType}}List({ source }: { source: {{sourceObjectType}}.OsdkInstance }) {\n  const { data, isLoading, error, fetchMore } = useLinks(source, \"{{linkApiName}}\");\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && !data && <div>Loading...</div>}\n      <ul>\n        {data?.map(obj => <li key={obj.$primaryKey}>{obj.$primaryKey}</li>)}\n      </ul>\n      {fetchMore && <button onClick={fetchMore}>Load more</button>}\n    </div>\n  );\n}"
          }
        ],
        "aggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Aggregation() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg\n      .where(q => q.{{property}}.$isNotNull())\n      .groupBy(p => p.{{property}}.exact())\n      .count()\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "countAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}Count() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg => agg.count());\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Total: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "approximateDistinctAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}DistinctCount() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.approximateDistinct(obj => obj.{{property}})\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Distinct count: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "exactDistinctAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}ExactDistinctCount() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.exactDistinct(obj => obj.{{property}})\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>Exact distinct count: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "numericAggregationTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}{{operation}}() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.{{operation}}(obj => obj.{{property}})\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <span>{{operation}}: {data}</span>}\n    </div>\n  );\n}"
          }
        ],
        "fixedWidthGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByFixedWidth() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.groupBy(obj => obj.{{property}}.fixedWidth(10)).count()\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "durationGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByDuration() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.groupBy(obj => obj.{{property}}.by{{duration}}({{#durationText}}{{arg}}{{/durationText}})).count()\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "exactGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByExact() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.groupBy(obj => obj.{{property}}.exact()).count()\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ],
        "rangeGroupByTemplate": [
          {
            "template": "import { {{objectType}} } from \"{{{packageName}}}\";\nimport { useOsdkAggregation } from \"@osdk/react/experimental\";\n\nfunction {{objectType}}GroupedByRange() {\n  const { data, isLoading, error } = useOsdkAggregation({{objectType}}, agg =>\n    agg.groupBy(obj => obj.{{property}}.ranges([{\n      startValue: {{propertyValueV2}},\n      endValue: {{propertyValueV2}}\n    }])).count()\n  );\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      {isLoading && data == null && <div>Loading...</div>}\n      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}",
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
            "template": "// React hooks handle response state automatically\n// Access the result via the hook's return value\nimport { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\n\nfunction {{actionApiName}}WithResult() {\n  const { applyAction, isPending, error, result } = useOsdkAction({{actionApiName}});\n\n  // result contains the action result after successful execution\n  return (\n    <div>\n      {result && <div>Action completed successfully</div>}\n    </div>\n  );\n}"
          }
        ],
        "validateAction": [
          {
            "template": "import { {{actionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkAction } from \"@osdk/react/experimental\";\nimport { useState, useEffect } from \"react\";\n\nfunction {{actionApiName}}WithValidation() {\n  const { validateAction, applyAction, isPending, validationResult } = useOsdkAction({{actionApiName}});\n  const [params, setParams] = useState({});\n\n  useEffect(() => {\n    validateAction(params);\n  }, [params, validateAction]);\n\n  return (\n    <div>\n      {validationResult?.isValid === false && (\n        <div>Validation errors present</div>\n      )}\n      <button\n        onClick={() => applyAction(params)}\n        disabled={isPending || validationResult?.isValid === false}\n      >\n        {isPending ? \"Applying...\" : \"Apply\"}\n      </button>\n    </div>\n  );\n}"
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
            "template": "import { {{functionApiName}} } from \"{{{packageName}}}\";\nimport { useOsdkFunction } from \"@osdk/react/experimental\";\n\nfunction {{functionApiName}}Caller() {\n  const { execute, data, isLoading, error } = useOsdkFunction({{functionApiName}});\n\n  return (\n    <div>\n      {error && <div>Error: {error.message}</div>}\n      <button onClick={() => execute({ /* params */ })} disabled={isLoading}>\n        {isLoading ? \"Running...\" : \"Run Function\"}\n      </button>\n      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}\n    </div>\n  );\n}"
          }
        ]
      }
    }
  }
};
  
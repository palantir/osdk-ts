import{f as p,j as e}from"./iframe-_sjFdmAq.js";import{O as i}from"./object-table-CTlxP_R4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwltTFWt.js";import"./index-CRSgNIa9.js";import"./Dialog-4qjvqay6.js";import"./cross-Dv72_hpq.js";import"./svgIconContainer-BedeSN7M.js";import"./useBaseUiId-5QpKILIQ.js";import"./InternalBackdrop-BHc5wGPm.js";import"./composite-2nXa2kLb.js";import"./index-DDb5dG4i.js";import"./index-CDG4GXO9.js";import"./index-Cf7hmIbi.js";import"./useEventCallback-Bm7WEFMf.js";import"./SkeletonBar-wAqZwJDd.js";import"./LoadingCell-DKnHsqX6.js";import"./ColumnConfigDialog-CdThEmIS.js";import"./DraggableList-tmCYnujm.js";import"./search-D7Px8uCu.js";import"./Input-CRLxf9hA.js";import"./useControlled-BllABFw_.js";import"./isEqual-COhRFLd0.js";import"./isObject-B4kaZFqd.js";import"./Button-DDufaugh.js";import"./ActionButton-B8HgdDq5.js";import"./Checkbox-D106U2Y1.js";import"./useValueChanged-DOIGpNaa.js";import"./CollapsiblePanel-D5QrO41U.js";import"./MultiColumnSortDialog-Cpkrbr5q.js";import"./MenuTrigger-P33Stl4i.js";import"./CompositeItem-Dabrke8K.js";import"./ToolbarRootContext-bAnsIJ5m.js";import"./getDisabledMountTransitionStyles-Qaq6nV66.js";import"./getPseudoElementBounds-75v4OgTn.js";import"./chevron-down-BIgDt-Eo.js";import"./index-EBLySk6J.js";import"./error-w7TsYwMi.js";import"./BaseCbacBanner-D7UxXv5U.js";import"./makeExternalStore-xIxEL6hr.js";import"./Tooltip-C9gVs0nJ.js";import"./PopoverPopup-CO-oz-Q8.js";import"./toNumber-CAERmn9I.js";import"./useOsdkClient-ZzKuYGir.js";import"./tick-BOFkJvoA.js";import"./DropdownField-U6htmsLd.js";import"./withOsdkMetrics-CKkOy2IX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};

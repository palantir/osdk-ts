import{f as p,j as e}from"./iframe-B5xJqKl6.js";import{O as i}from"./object-table-DwE4jvCR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ne8FQQgc.js";import"./Table-gEZqVGDT.js";import"./index-CCjfPqEl.js";import"./Dialog-SyGpH5VH.js";import"./cross-C5VNjLCx.js";import"./svgIconContainer-B69lMk25.js";import"./useBaseUiId-Cotk4UXc.js";import"./InternalBackdrop-Dli4x5Y-.js";import"./composite-BjyS4v5o.js";import"./index-D_ZLDl4o.js";import"./index-CGviHfV1.js";import"./index-B9wtWaws.js";import"./useEventCallback-B6wls_4_.js";import"./SkeletonBar-DS-T5Kqb.js";import"./LoadingCell-MMAiHjE-.js";import"./ColumnConfigDialog-BNbNgfGJ.js";import"./DraggableList-CdjZOjeo.js";import"./search-DaqXKDSx.js";import"./Input-WDAACwdq.js";import"./useControlled-Cyv6PlBx.js";import"./Button-qyC1OAbF.js";import"./small-cross-c3hXIKIB.js";import"./ActionButton-g8wW2xvY.js";import"./Checkbox-DqtOkUXo.js";import"./useValueChanged-CF6aBjQN.js";import"./CollapsiblePanel-DsqAKcOa.js";import"./MultiColumnSortDialog-DLlNszC6.js";import"./MenuTrigger-DhC3ynmP.js";import"./CompositeItem-CLpB1ycb.js";import"./ToolbarRootContext-C6Gq0LMZ.js";import"./getDisabledMountTransitionStyles-C7T2cCRj.js";import"./getPseudoElementBounds-Ba9IoLmx.js";import"./chevron-down-Dbn0Vtw3.js";import"./index-6kBwbZOO.js";import"./error-DFd4_H53.js";import"./BaseCbacBanner-C41b3Hb_.js";import"./makeExternalStore-DLfdYAzs.js";import"./Tooltip-CDTxO2q6.js";import"./PopoverPopup-D9OmGnX9.js";import"./debounce-DnGe1WPS.js";import"./useOsdkClient-tqT3GVR2.js";import"./tick-CRsinXX8.js";import"./DropdownField-B-xEEli2.js";import"./isEqual-BLcwcQGd.js";import"./withOsdkMetrics-DKzJkasc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

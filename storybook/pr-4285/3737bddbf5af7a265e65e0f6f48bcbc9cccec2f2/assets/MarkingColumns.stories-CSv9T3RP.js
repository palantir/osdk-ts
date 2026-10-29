import{f as p,j as e}from"./iframe-CiSKHfyc.js";import{O as i}from"./object-table-BUWT5KBZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWupNPgO.js";import"./Table-B_RCfvj3.js";import"./index-D3wSasD3.js";import"./Dialog-C7vJczax.js";import"./cross-DLLCkXVB.js";import"./svgIconContainer-BJUr7DHQ.js";import"./useBaseUiId-b_FN5CrC.js";import"./InternalBackdrop-D3k0KQi8.js";import"./composite-jZQCk-zR.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./index-DiV7dZco.js";import"./useEventCallback-sqYZKM0w.js";import"./SkeletonBar-CPu9e21L.js";import"./LoadingCell-KaZWCKJ4.js";import"./ColumnConfigDialog-BRc4xEVX.js";import"./DraggableList-BfwLO2fI.js";import"./search-DZapC1lH.js";import"./Input-Cul32AIH.js";import"./useControlled-CiZcMD85.js";import"./Button-Cmyv-rnS.js";import"./small-cross-B8GBbM76.js";import"./ActionButton-BQXgRd_a.js";import"./Checkbox-DfjI4tvH.js";import"./useValueChanged-Cy7TI7KD.js";import"./CollapsiblePanel-CI66v9kn.js";import"./MultiColumnSortDialog-BXCUme4L.js";import"./MenuTrigger-BfJwIOVp.js";import"./CompositeItem-_hXBxygC.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./getDisabledMountTransitionStyles-B0YJZ1gZ.js";import"./getPseudoElementBounds-CF1HuyZT.js";import"./chevron-down-D5jrtiFY.js";import"./index-CVFbikLp.js";import"./error-CDPXWVFZ.js";import"./BaseCbacBanner-0rqK7Jap.js";import"./makeExternalStore-BA-q_GW8.js";import"./Tooltip-DEc9D41A.js";import"./PopoverPopup-BFyTaDus.js";import"./debounce-C0MW0JLZ.js";import"./useOsdkClient-rmpyupkX.js";import"./tick-Dt1Daxrw.js";import"./DropdownField-CYqYbFgh.js";import"./isEqual-DBiPhKAB.js";import"./withOsdkMetrics-CWRpGlls.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

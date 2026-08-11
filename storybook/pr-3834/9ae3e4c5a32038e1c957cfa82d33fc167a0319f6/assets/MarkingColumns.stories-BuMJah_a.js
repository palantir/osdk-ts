import{f as p,j as e}from"./iframe-BQQenncx.js";import{O as i}from"./object-table-DfbCwTiy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DE2zdEQ0.js";import"./Table-Cmaah35x.js";import"./index-AEra5GjR.js";import"./Dialog-CiV-H6wX.js";import"./cross-CU5c5uos.js";import"./svgIconContainer-DKhBOnYU.js";import"./useBaseUiId-BgSJ0JuX.js";import"./InternalBackdrop-DUQAObxa.js";import"./composite-CU8fvfsg.js";import"./index-BVUmKt0T.js";import"./index-ly2aBA7A.js";import"./index-hWkQAxDW.js";import"./useEventCallback-B8NeoGCO.js";import"./SkeletonBar-BrFOAxeA.js";import"./LoadingCell-W9xuj7VH.js";import"./ColumnConfigDialog-DqnpXYNI.js";import"./DraggableList-Bc8uF3OC.js";import"./search-CgjP2Jwy.js";import"./Input-70viAAti.js";import"./useControlled-C13sOQuV.js";import"./isEqual-sa52SWWU.js";import"./isObject-Ds2zxCKN.js";import"./Button-hetyNd0y.js";import"./ActionButton-D6ggDCLc.js";import"./Checkbox-NVtkWJ8H.js";import"./useValueChanged-FwEMaXBy.js";import"./CollapsiblePanel-Db4XoTeG.js";import"./MultiColumnSortDialog-C3m8vwg6.js";import"./MenuTrigger-BeG6leMZ.js";import"./CompositeItem-vvPbfk0M.js";import"./ToolbarRootContext-Bu_SuW92.js";import"./getDisabledMountTransitionStyles-eVYX_BMX.js";import"./getPseudoElementBounds-BjNpuUcd.js";import"./chevron-down-Bog31CQQ.js";import"./index-CGPUvFpI.js";import"./error-DmbVq6Jg.js";import"./BaseCbacBanner-D89jOczY.js";import"./makeExternalStore-CkGykhKx.js";import"./Tooltip-0nOBWHFn.js";import"./PopoverPopup-Ht7DQmdg.js";import"./toNumber-B4TNDdae.js";import"./useOsdkClient-0MgZdaOJ.js";import"./tick-zu9zWfhb.js";import"./DropdownField-MuED612X.js";import"./withOsdkMetrics-At11PAU6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

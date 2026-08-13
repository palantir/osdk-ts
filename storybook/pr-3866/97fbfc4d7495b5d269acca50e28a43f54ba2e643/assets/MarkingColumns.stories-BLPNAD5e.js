import{f as p,j as e}from"./iframe-CYhZfT3_.js";import{O as i}from"./object-table-DCRgSSGC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DuW2ZL9O.js";import"./Table-CXcwYSnZ.js";import"./index-Bsk-T9AU.js";import"./Dialog-Tc2_deC_.js";import"./cross-BJdfjTua.js";import"./svgIconContainer-BpN9N_JA.js";import"./useBaseUiId-DZSo-im9.js";import"./InternalBackdrop-DfBwjCGc.js";import"./composite-BPx_h-nk.js";import"./index-BKmbfABs.js";import"./index-BthbUhg9.js";import"./index-C-WRNz3E.js";import"./useEventCallback-CunyUO5F.js";import"./SkeletonBar-Dx8fHgLa.js";import"./LoadingCell-CZR7iFmp.js";import"./ColumnConfigDialog-D7ZisgWP.js";import"./DraggableList-BbR3WdJ2.js";import"./search-CgpKnjTm.js";import"./Input-kdaFhJQC.js";import"./useControlled-Cx72k2R7.js";import"./Button-B7yZuVYQ.js";import"./small-cross-C5sJSYZw.js";import"./ActionButton-DaZ8p3ZP.js";import"./Checkbox-DMnLA1rT.js";import"./useValueChanged-CUgB0lPb.js";import"./CollapsiblePanel-BejYuaCH.js";import"./MultiColumnSortDialog-DfskZs5F.js";import"./MenuTrigger-BWA5hG1d.js";import"./CompositeItem-CqWJQP_Z.js";import"./ToolbarRootContext-C__wJlPO.js";import"./getDisabledMountTransitionStyles-DV9NgReY.js";import"./getPseudoElementBounds-DeuZh7pR.js";import"./chevron-down-DkFotZE7.js";import"./index-BrJQ0JzU.js";import"./error-DWSHrAom.js";import"./BaseCbacBanner-DHWoPqU5.js";import"./makeExternalStore-BbuDQhcx.js";import"./Tooltip-DsiXQ8gP.js";import"./PopoverPopup-BuTn7Bh_.js";import"./toNumber-CuILyFQS.js";import"./useOsdkClient-BJBOx_dn.js";import"./tick-BVznHvW2.js";import"./DropdownField-C7hB0VQ9.js";import"./withOsdkMetrics-BU-eC2Yy.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};

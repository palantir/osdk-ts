import{f as p,j as e}from"./iframe-DSFJZDbB.js";import{O as i}from"./object-table-B8xjoy0n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXZsHDRp.js";import"./Table-1XkMER8j.js";import"./index-7paxFDvD.js";import"./Dialog-Caab4FUH.js";import"./cross-BB9CVc-Q.js";import"./svgIconContainer-RNVtlkjd.js";import"./useBaseUiId-c3zUK5X5.js";import"./InternalBackdrop-DdORp9Q9.js";import"./composite-DxVQtdWX.js";import"./index-DZNGA6d-.js";import"./index-D6ZHe2_A.js";import"./index-CAeppKO1.js";import"./useEventCallback-DTCuInat.js";import"./SkeletonBar-DQiEZV8C.js";import"./LoadingCell-XNktlDu8.js";import"./ColumnConfigDialog-CjybA5H0.js";import"./DraggableList-C-iyGsMt.js";import"./search-CoFzowK4.js";import"./Input-PKRWZfPT.js";import"./useControlled-C2eq60VR.js";import"./Button-DQPbKfHN.js";import"./small-cross-B1kb7b-t.js";import"./ActionButton-kgYnBNqq.js";import"./Checkbox-Cn6m-uDp.js";import"./useValueChanged-b7YKzV-e.js";import"./CollapsiblePanel-DdKqq7dp.js";import"./MultiColumnSortDialog-P9C5XVU0.js";import"./MenuTrigger-CkpMeat5.js";import"./CompositeItem-Dz7MzIvk.js";import"./ToolbarRootContext-jXB37hMy.js";import"./getDisabledMountTransitionStyles-CwpF8ZPZ.js";import"./getPseudoElementBounds-BWVx--r2.js";import"./chevron-down-VJT3Mdig.js";import"./index-Cwvk-iSE.js";import"./error-uQwZC4G-.js";import"./BaseCbacBanner-B8PXr8iA.js";import"./makeExternalStore-CLq3a0rV.js";import"./Tooltip-DWE64HaZ.js";import"./PopoverPopup-CfSBk3Qn.js";import"./debounce-BHFyCnbQ.js";import"./useOsdkClient-wklcT--g.js";import"./tick-6JyAUDtT.js";import"./DropdownField-DYg7EKof.js";import"./isEqual-DZCHnOpJ.js";import"./withOsdkMetrics-BTLO2asc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

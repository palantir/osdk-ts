import{f as p,j as e}from"./iframe-Bx31wN7l.js";import{O as i}from"./object-table-CUTVINjX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fuKytI2J.js";import"./Table-C6sxDE12.js";import"./index-DZxERBQ8.js";import"./Dialog-B_mHCcF-.js";import"./cross-ByPIg3cq.js";import"./svgIconContainer-CsmE7H8N.js";import"./useBaseUiId-BpE0KEfc.js";import"./InternalBackdrop-CXzy1IR-.js";import"./composite-Bx5EuYDq.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./index-eq9JihVj.js";import"./useEventCallback-BdwVQOgv.js";import"./SkeletonBar-CblG8V_N.js";import"./LoadingCell-q9KKR5qM.js";import"./ColumnConfigDialog-7tDXfpC1.js";import"./DraggableList-Dfq2W5_B.js";import"./search-BkXPkxMB.js";import"./Input-CQoFLmc7.js";import"./useControlled-BUc-d8tN.js";import"./Button-D8P70LO7.js";import"./small-cross-2gr1UHRE.js";import"./ActionButton-D3XLfflN.js";import"./Checkbox-Rzr3-pvM.js";import"./useValueChanged-LXU-Rlru.js";import"./CollapsiblePanel-C307MSn7.js";import"./MultiColumnSortDialog-BP03TXhe.js";import"./MenuTrigger-DlzBhBKN.js";import"./CompositeItem-CXKQZ3E9.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./getDisabledMountTransitionStyles-I794iXBx.js";import"./getPseudoElementBounds-Cxm3qVX_.js";import"./chevron-down-Ca2LkDWe.js";import"./index-BrSdfPya.js";import"./error-BqlruEo6.js";import"./BaseCbacBanner-G-8ScpXv.js";import"./makeExternalStore-BiPnGhaA.js";import"./Tooltip-BHEJ_2jR.js";import"./PopoverPopup-DjXhzR73.js";import"./debounce-BfkSYXdV.js";import"./useOsdkClient-D1EBd0jQ.js";import"./tick-PN43AiNg.js";import"./DropdownField-B0i5mi2Z.js";import"./isEqual-CkX8CbxS.js";import"./withOsdkMetrics-DO2o0cgY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BmFJOqc6.js";import{O as i}from"./object-table-H-W8mI66.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_jr2zBl.js";import"./Table-BpHj1i1T.js";import"./index-3j69-5Ym.js";import"./Dialog-BHl_uah2.js";import"./cross-CKVqWa-w.js";import"./svgIconContainer-CMQoxDUu.js";import"./useBaseUiId-C5SRli-B.js";import"./InternalBackdrop-LfW5Mcwa.js";import"./composite-BoouiZdh.js";import"./index-DWnSWhJ9.js";import"./index-Cfv6AZs9.js";import"./index-DXpgb3R7.js";import"./useEventCallback-DxoETJUl.js";import"./SkeletonBar-BYmaDYvY.js";import"./LoadingCell-DDCR-xi8.js";import"./ColumnConfigDialog-B_xkXJJp.js";import"./DraggableList-BTBrHQlG.js";import"./search-CioqFqwa.js";import"./Input-BT2Zyp5m.js";import"./useControlled-L8rvP9al.js";import"./isEqual-Bzt_ultW.js";import"./isObject-wZOe6YRR.js";import"./Button-BBPh3cP6.js";import"./ActionButton-DQEgHTbw.js";import"./Checkbox-9fy7D2y_.js";import"./useValueChanged-CxlDIVDs.js";import"./CollapsiblePanel-C30yTyzX.js";import"./MultiColumnSortDialog-UzWZkrUO.js";import"./MenuTrigger-bCnbUhqU.js";import"./CompositeItem-CPVzsbMv.js";import"./ToolbarRootContext-Dryg-_tS.js";import"./getDisabledMountTransitionStyles-CCs1LxYN.js";import"./getPseudoElementBounds-CY2Q6OxG.js";import"./chevron-down-DWMFwiT1.js";import"./index-C3KliuNA.js";import"./error-l2yMMQM_.js";import"./BaseCbacBanner-Ho2FH0qL.js";import"./makeExternalStore-iaafROBl.js";import"./Tooltip-f0K72knV.js";import"./PopoverPopup-DZe7T4hw.js";import"./toNumber-D5o0NDBW.js";import"./useOsdkClient-CmamzJMC.js";import"./tick-BPttWX0Q.js";import"./DropdownField-CzWm6Bt6.js";import"./withOsdkMetrics-BzcGzmjv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

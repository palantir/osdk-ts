import{f as p,j as e}from"./iframe-CFQ9G3uO.js";import{O as i}from"./object-table-CAVdkrL4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1ZvWZ1B.js";import"./Table-ByICRVtb.js";import"./index-BrTT1QYM.js";import"./Dialog-CMmdBSHE.js";import"./cross-Th924Xj2.js";import"./svgIconContainer-UNIpHB70.js";import"./useBaseUiId-DR9MpHDU.js";import"./InternalBackdrop-BYUzzxg5.js";import"./composite-CcP6OIrf.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./index-Dlk-dVgZ.js";import"./useEventCallback-D2dYS9c-.js";import"./SkeletonBar-BZja4E16.js";import"./LoadingCell-BjO_-sdZ.js";import"./ColumnConfigDialog-DcslyDjj.js";import"./DraggableList-Brn3iCp5.js";import"./search-2qv0O4T5.js";import"./Input-DXZODgk0.js";import"./useControlled-CZXT8yrt.js";import"./Button-CE7esyC3.js";import"./small-cross-BEf2AWPD.js";import"./ActionButton-DNlorvJl.js";import"./Checkbox-BPLCKRPV.js";import"./useValueChanged-BKOHDyr1.js";import"./CollapsiblePanel-C0s5Hv5w.js";import"./MultiColumnSortDialog-BcTOUSHc.js";import"./MenuTrigger-BqTI-aoy.js";import"./CompositeItem-Dm-ge3S4.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./getDisabledMountTransitionStyles-VkjRSqjD.js";import"./getPseudoElementBounds-C-ZD0-Sf.js";import"./chevron-down-Cu6k6Z5N.js";import"./index-Clq14PWf.js";import"./error-CP69BMiN.js";import"./BaseCbacBanner-Dgyzb5Y3.js";import"./makeExternalStore-Dcan_kEv.js";import"./Tooltip-Chj9n8Fk.js";import"./PopoverPopup-D2AzS4JP.js";import"./debounce-CjSFYMGi.js";import"./useOsdkClient-B973Ur3i.js";import"./tick-C6f5jokZ.js";import"./DropdownField-DOW2Yrq8.js";import"./isEqual-NY24Vuy-.js";import"./withOsdkMetrics-BOULM9w0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

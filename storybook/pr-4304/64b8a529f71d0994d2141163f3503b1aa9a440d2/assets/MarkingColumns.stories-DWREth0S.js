import{f as p,j as e}from"./iframe-BnrsOFns.js";import{O as i}from"./object-table--cX5SXPG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6w5d29Q.js";import"./Table-BvdRlk5o.js";import"./index-tNt1Rsha.js";import"./Dialog-DM-IrXvU.js";import"./cross-DmYEQL4N.js";import"./svgIconContainer-DHTpClH2.js";import"./useBaseUiId-CnooZjs2.js";import"./InternalBackdrop-BaF0YRGc.js";import"./composite-D8-ppVWB.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./index-BZW31MjY.js";import"./useEventCallback-CZng5Hbt.js";import"./SkeletonBar-6aKx3xfA.js";import"./LoadingCell-00htEzT2.js";import"./ColumnConfigDialog-CAUIIA7Q.js";import"./DraggableList-BSQYrR59.js";import"./search-Ch8w7dwR.js";import"./Input-Bh0uDmot.js";import"./useControlled-BkaP8RLt.js";import"./Button-CQyg3zRK.js";import"./small-cross-C6Err9V7.js";import"./ActionButton-zIEW8ID5.js";import"./Checkbox-B6BRsvTM.js";import"./useValueChanged-qkyo_zF3.js";import"./CollapsiblePanel-gvQpiFoS.js";import"./MultiColumnSortDialog-BBcnd61j.js";import"./MenuTrigger-o53B80RM.js";import"./CompositeItem-CoclYseh.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./getDisabledMountTransitionStyles-Da1PpZL2.js";import"./getPseudoElementBounds-yJ_WHN74.js";import"./chevron-down-CJXJGt0n.js";import"./index-D5j7HDb2.js";import"./error-5DZ7K3HO.js";import"./BaseCbacBanner-u8F6KIgM.js";import"./makeExternalStore-EV-ALQ58.js";import"./Tooltip-BujJSCDB.js";import"./PopoverPopup-C5dDiQD8.js";import"./debounce-CkNSqP1Q.js";import"./useOsdkClient-zEriq08y.js";import"./tick-CjP_LBfV.js";import"./DropdownField-STvnB7PE.js";import"./isEqual-Bzzv7Zaz.js";import"./withOsdkMetrics-zFHODIcB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

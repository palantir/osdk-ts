import{f as p,j as e}from"./iframe-BLUQ5n2c.js";import{O as i}from"./object-table-BJvkeLAv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMlP9NYW.js";import"./Table-BzDrSoDv.js";import"./index-CsLnk6pi.js";import"./Dialog-CPph2Z9X.js";import"./cross-lsoPApi8.js";import"./svgIconContainer-Cp4hDvLL.js";import"./useBaseUiId-BeXNNW2Y.js";import"./InternalBackdrop-CSoztZdj.js";import"./composite-DpCo7vDA.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./index-Cu1ZahnW.js";import"./useEventCallback-Bj8tWb2p.js";import"./SkeletonBar-CkH9gL38.js";import"./LoadingCell-BFm_IhfR.js";import"./ColumnConfigDialog-BCD7IAOK.js";import"./DraggableList-DtXpJvTm.js";import"./search-BxVXVDMi.js";import"./Input-CJtdNhxn.js";import"./useControlled-B201dL0t.js";import"./Button-SHEnCOjG.js";import"./small-cross-PSmIAOl0.js";import"./ActionButton-D86_SLzn.js";import"./Checkbox-CrtpiRPG.js";import"./useValueChanged-DRWNLZgS.js";import"./CollapsiblePanel-YVQttI65.js";import"./MultiColumnSortDialog-D7RRsETP.js";import"./MenuTrigger-Cn5L-B4M.js";import"./CompositeItem-BFmGj5TY.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./getDisabledMountTransitionStyles-Bhs6m7gR.js";import"./getPseudoElementBounds-BUU7Awzx.js";import"./chevron-down-5sopWHZC.js";import"./index-C0S21z2f.js";import"./error-CimK2De2.js";import"./BaseCbacBanner-BJtZEIgT.js";import"./makeExternalStore-cNeOPsE8.js";import"./Tooltip-DrCIXT4c.js";import"./PopoverPopup-CZdF7XOC.js";import"./debounce-CALuRR5X.js";import"./useOsdkClient-vyzs8V6e.js";import"./tick-DbzhA004.js";import"./DropdownField-Bm51UKRg.js";import"./isEqual-DR8RDtey.js";import"./withOsdkMetrics-XVg1B84_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

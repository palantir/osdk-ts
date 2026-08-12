import{f as p,j as e}from"./iframe-BrhV0PUK.js";import{O as i}from"./object-table-Z4cmqtj5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCSdbV6c.js";import"./Table-Bz5nJ9Ny.js";import"./index-CYSE8e1n.js";import"./Dialog-BZ4hSjWa.js";import"./cross-CsjK0wnB.js";import"./svgIconContainer-BaPcQU1s.js";import"./useBaseUiId-ar5Lsdrx.js";import"./InternalBackdrop-DO2ikwN0.js";import"./composite-Ds9WVBvD.js";import"./index-CF0KaaTI.js";import"./index-C_GiEd2c.js";import"./index-BYkfd9Z2.js";import"./useEventCallback-DS55l13S.js";import"./SkeletonBar-BWicLY9L.js";import"./LoadingCell-C3tlvEjv.js";import"./ColumnConfigDialog-Bg4tV_Z3.js";import"./DraggableList-TdP2A-Xp.js";import"./search-sMra4T2I.js";import"./Input-DMkARyQa.js";import"./useControlled-6A1CqUP6.js";import"./isEqual-BlP1cLoz.js";import"./isObject-CbbeAem9.js";import"./Button-D7_ffq5-.js";import"./ActionButton-U-WlZ3SG.js";import"./Checkbox-CMJOfmnq.js";import"./useValueChanged-Bnxfc6U1.js";import"./CollapsiblePanel-E470J13C.js";import"./MultiColumnSortDialog-DKnzOvLW.js";import"./MenuTrigger-WGUempeG.js";import"./CompositeItem-wFOdGMSc.js";import"./ToolbarRootContext-Db_LnSee.js";import"./getDisabledMountTransitionStyles-BlAu_peX.js";import"./getPseudoElementBounds-BZ7D0NBY.js";import"./chevron-down-Be_vCZl2.js";import"./index-BoJTlJdl.js";import"./error-ZZJFbw6u.js";import"./BaseCbacBanner-Bw9MfsJv.js";import"./makeExternalStore-DaqSmfhW.js";import"./Tooltip-6rvPTKBG.js";import"./PopoverPopup-Bzkl8xuj.js";import"./toNumber-DTQ1Vb4r.js";import"./useOsdkClient-BYy0RPqe.js";import"./tick-D16kJw8f.js";import"./DropdownField-DUfUJeW4.js";import"./withOsdkMetrics-dDB_t-WN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

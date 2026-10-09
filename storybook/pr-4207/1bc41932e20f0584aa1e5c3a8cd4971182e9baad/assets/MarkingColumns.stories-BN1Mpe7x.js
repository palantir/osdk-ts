import{f as p,j as e}from"./iframe-CZ6kIwVs.js";import{O as i}from"./object-table-DUTK7ErW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7ZMJfvLO.js";import"./Table-ClJWP7oZ.js";import"./index-DI8fXOjY.js";import"./Dialog-C2Fh148t.js";import"./cross-D1S37vKD.js";import"./svgIconContainer-DnYA5NkM.js";import"./useBaseUiId-C8GyANar.js";import"./InternalBackdrop-CG-AIdNq.js";import"./composite-ZguSvKQK.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./index-Sa9k0vw4.js";import"./useEventCallback-AXc9OhMC.js";import"./SkeletonBar-DirsOHoC.js";import"./LoadingCell-DWGeO2Vc.js";import"./ColumnConfigDialog-z8uEyuDJ.js";import"./DraggableList-DY7O392e.js";import"./search-BEog5Q0_.js";import"./Input-BNiQQ7Yq.js";import"./useControlled-DYYKJrdL.js";import"./Button-D2YNSXqx.js";import"./small-cross-BRCq_Kda.js";import"./ActionButton-CCbXIhyD.js";import"./Checkbox-vpsJYbE_.js";import"./useValueChanged-BFS0ZGwF.js";import"./CollapsiblePanel-lqHD1Tly.js";import"./MultiColumnSortDialog-CwX6ASC_.js";import"./MenuTrigger-DahAPyz2.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./getDisabledMountTransitionStyles-bhu6Mdmh.js";import"./getPseudoElementBounds-BCP_KMb6.js";import"./chevron-down-CfJcExH9.js";import"./index-CRcSFsCM.js";import"./error-Be3f2oAD.js";import"./BaseCbacBanner-DxnCPOHJ.js";import"./makeExternalStore-CcH4sGc5.js";import"./Tooltip-CWcrOYKW.js";import"./PopoverPopup-5xXF3ZfI.js";import"./debounce-ZXxDT22C.js";import"./useOsdkClient-D_Xa4Rm7.js";import"./tick-ClDAkRZz.js";import"./DropdownField-CWvFDQGS.js";import"./isEqual-B__f9IMX.js";import"./withOsdkMetrics-CJa04cyG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

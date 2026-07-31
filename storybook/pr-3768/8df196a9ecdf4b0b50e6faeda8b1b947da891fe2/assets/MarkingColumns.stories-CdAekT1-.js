import{f as p,j as e}from"./iframe-BMtSmCiC.js";import{O as i}from"./object-table-BSTO9YEM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NIBkOjBn.js";import"./Table-BM4ZJWYi.js";import"./index-py39XDsr.js";import"./Dialog-C6MiGDOv.js";import"./cross-CC3kqzKg.js";import"./svgIconContainer-BEirRmCI.js";import"./useBaseUiId-CTbwHvzT.js";import"./InternalBackdrop-D8dzKVYY.js";import"./composite-pXZ88G6n.js";import"./index-C5W6Kzqo.js";import"./index-DgH8S27r.js";import"./index-qgpLBCWR.js";import"./useEventCallback-Dr92A45a.js";import"./SkeletonBar-ozqpkjWP.js";import"./LoadingCell-Hx6osZjv.js";import"./ColumnConfigDialog-B4Ijx-MB.js";import"./DraggableList-D5shv8xp.js";import"./search-DtaouECH.js";import"./Input-DKQqZn4l.js";import"./useControlled-j6tOUI6l.js";import"./isEqual-CApp1l2x.js";import"./isObject-Dm38g99h.js";import"./Button-BYUzSZ09.js";import"./ActionButton-8nwpYddL.js";import"./Checkbox-DcEzndBS.js";import"./useValueChanged-CPnT0fM-.js";import"./CollapsiblePanel-DLVdBCP0.js";import"./MultiColumnSortDialog-9hGeS_QV.js";import"./MenuTrigger-B7P3d3CB.js";import"./CompositeItem-D_37PXYX.js";import"./ToolbarRootContext-DfNgwKSk.js";import"./getDisabledMountTransitionStyles-BGjH6OOR.js";import"./getPseudoElementBounds-2OVm5s2A.js";import"./chevron-down-BBkZ12vx.js";import"./index-5sH2ARV_.js";import"./error-osbVx-Bf.js";import"./BaseCbacBanner-B5ca1v5f.js";import"./makeExternalStore-D6p4PJo6.js";import"./Tooltip-Bu7hfAyM.js";import"./PopoverPopup-ClzAhzZN.js";import"./toNumber-C3YRR2uG.js";import"./useOsdkClient-BqEoEEXo.js";import"./tick-V4yYgYJK.js";import"./DropdownField-Cio1-EQT.js";import"./withOsdkMetrics-Az6IiGLG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-C9qhmNcZ.js";import{O as i}from"./object-table-RDjCkhrw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wNbJb-Pp.js";import"./Table-Nh8gMrCA.js";import"./index-B8P3LB4x.js";import"./Dialog-Df2SSlRS.js";import"./cross-DabX7tW-.js";import"./svgIconContainer-_uLEbp2C.js";import"./useBaseUiId-BTthXH_t.js";import"./InternalBackdrop-CgJ7ZQ7K.js";import"./composite-z0XknHYc.js";import"./index-DsqCXRoD.js";import"./index-DqJwTMkP.js";import"./index-CqvxxowX.js";import"./useEventCallback-DaBlRRBo.js";import"./SkeletonBar-EKMH7dnu.js";import"./LoadingCell-DC6J4sE1.js";import"./ColumnConfigDialog-Dyq2_1MI.js";import"./DraggableList-S6M-4kd_.js";import"./search-BDZY5Txu.js";import"./Input-BAGZIUmV.js";import"./useControlled-BTlBSM6y.js";import"./Button-HuNNWrG7.js";import"./small-cross-v2H6eOD9.js";import"./ActionButton-CZp7gXsO.js";import"./Checkbox-B7m0CtgI.js";import"./useValueChanged-VNxj8dRl.js";import"./CollapsiblePanel-BvRA97qN.js";import"./MultiColumnSortDialog-Bs1VnL9V.js";import"./MenuTrigger-C7UQv66O.js";import"./CompositeItem-CA3YvoYV.js";import"./ToolbarRootContext-tAljMxWu.js";import"./getDisabledMountTransitionStyles-_-80yZua.js";import"./getPseudoElementBounds-vWw3gXmS.js";import"./chevron-down-CJK_UNyE.js";import"./index-7d_bwMVc.js";import"./error-Pw2WsETW.js";import"./BaseCbacBanner-BKt2Rvts.js";import"./makeExternalStore-D9Eq3Efe.js";import"./Tooltip-D942ZPAo.js";import"./PopoverPopup-CVg99Xmz.js";import"./debounce-DAIWBKzq.js";import"./useOsdkClient-CZBXaSe4.js";import"./tick-BB4s_qlQ.js";import"./DropdownField-o7TutVQ3.js";import"./isEqual-DBoLl1ZU.js";import"./withOsdkMetrics-COlZnM_t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

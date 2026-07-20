import{f as p,j as e}from"./iframe-B5v0vUXI.js";import{O as i}from"./object-table-BkfGcYQZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cgdmbp6W.js";import"./index-CvFqYh-3.js";import"./Dialog-D_IzYFEj.js";import"./cross-YUgeJ--M.js";import"./svgIconContainer-C5Z2vPrm.js";import"./useBaseUiId-BsF4zk_0.js";import"./InternalBackdrop-C_bPnfQ2.js";import"./composite-DZ7boRnK.js";import"./index-3MPkyRzd.js";import"./index-CMCS9DrW.js";import"./index-CvfpqS5l.js";import"./useEventCallback-Cj2EQjO8.js";import"./SkeletonBar-Bo0coUbM.js";import"./LoadingCell-CFaXrNjM.js";import"./ColumnConfigDialog-39hNWvLN.js";import"./DraggableList-Cb6MegIS.js";import"./search-Kemz_XqC.js";import"./Input-CTukojuw.js";import"./useControlled-CpEwdjMu.js";import"./isEqual-DPTf9YgE.js";import"./isObject-D37ONkc8.js";import"./Button-8tyoJWc4.js";import"./ActionButton-D01u5wYt.js";import"./Checkbox-BUaR3bJV.js";import"./useValueChanged-Bpv0FVpU.js";import"./CollapsiblePanel-CSYV6ZMY.js";import"./MultiColumnSortDialog-BawVLOtC.js";import"./MenuTrigger-unQFsMEo.js";import"./CompositeItem-DYk5HRQt.js";import"./ToolbarRootContext-CUj1ZiHN.js";import"./getDisabledMountTransitionStyles-CWLzF503.js";import"./getPseudoElementBounds-sM3cClJE.js";import"./chevron-down-rGDhbi4C.js";import"./index-B_up1t_H.js";import"./error-K1wLn0w3.js";import"./BaseCbacBanner-Bgz5SGpI.js";import"./makeExternalStore-Cxkn3s2m.js";import"./Tooltip-B2STUGuM.js";import"./PopoverPopup-Du5W_kmM.js";import"./toNumber-DoT8tStv.js";import"./useOsdkClient-D8XI1G-5.js";import"./tick-GUNHcYaZ.js";import"./DropdownField-De4x1-jo.js";import"./withOsdkMetrics-D6qhNBkt.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

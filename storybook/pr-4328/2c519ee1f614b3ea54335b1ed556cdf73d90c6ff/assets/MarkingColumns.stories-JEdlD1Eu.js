import{f as p,j as e}from"./iframe-lON5AZ3L.js";import{O as i}from"./object-table-CY1HhWS5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CII01xYb.js";import"./Table-BSsDoVm_.js";import"./index-BbInquUP.js";import"./Dialog-DwoswbFK.js";import"./cross-CZfg3piu.js";import"./svgIconContainer-CX_rozDa.js";import"./useBaseUiId-COzPbt8W.js";import"./InternalBackdrop-BUdtJ2mO.js";import"./composite-ChlDDG92.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./index-D88RmGRP.js";import"./useEventCallback-ChKmlvki.js";import"./SkeletonBar-BoIeke2n.js";import"./LoadingCell-Di0K-zen.js";import"./ColumnConfigDialog-J1QlLMH5.js";import"./DraggableList-DQx5w-9B.js";import"./search-ZnUmH3zZ.js";import"./Input-BTUHBzsz.js";import"./useControlled-Bg_lHZoo.js";import"./Button-NLlVT-nC.js";import"./small-cross-E0MhYcPt.js";import"./ActionButton-fF4x8pwf.js";import"./Checkbox-BlCTNtaZ.js";import"./useValueChanged-DBAEDgpw.js";import"./CollapsiblePanel-CLfLwLQM.js";import"./MultiColumnSortDialog-DKk8lIBH.js";import"./MenuTrigger-o3B51z0I.js";import"./CompositeItem-ppbsSdS6.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./getDisabledMountTransitionStyles-Cfd1b-as.js";import"./getPseudoElementBounds-D_X7OILl.js";import"./chevron-down-B6vOrraR.js";import"./index-BDhDrjkY.js";import"./error-B77E7aT6.js";import"./BaseCbacBanner-BFErWSQa.js";import"./makeExternalStore-BPZMGY7I.js";import"./Tooltip-BEGKa3-T.js";import"./isObject-DX3EuMyF.js";import"./debounce-BWiznTrv.js";import"./useOsdkClient-mvo5kAdP.js";import"./tick-DG2wS06_.js";import"./DropdownField-CDUsrETz.js";import"./isEqual-bz5Rcl9o.js";import"./_baseIsEqual-DQZzxLKC.js";import"./withOsdkMetrics-CXO0MkNI.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

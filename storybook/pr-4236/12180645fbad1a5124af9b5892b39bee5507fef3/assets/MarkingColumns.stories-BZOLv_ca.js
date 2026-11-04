import{f as p,j as e}from"./iframe-C-_1TazU.js";import{O as i}from"./object-table-Beb5fH2d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkKF1Buf.js";import"./Table-BCBSDpni.js";import"./index-Bpncd7pQ.js";import"./Dialog-DsM0_WQ8.js";import"./cross-C4V96JZV.js";import"./svgIconContainer-CMraZsuF.js";import"./useBaseUiId-_AW1QpO6.js";import"./InternalBackdrop-C5_BMHIb.js";import"./composite-Dz3hbzMM.js";import"./index-BubkWFVt.js";import"./index-CMC--zdt.js";import"./index-90cPmaM8.js";import"./useEventCallback-D70YOU97.js";import"./SkeletonBar-BNfm8GyJ.js";import"./LoadingCell-B0Nv_30_.js";import"./ColumnConfigDialog-KOc_l0BB.js";import"./DraggableList-k0m91GC-.js";import"./search-Brf_HBSH.js";import"./Input-CRdjsgvE.js";import"./useControlled-B0TcQP9p.js";import"./Button-3Z_BNFpX.js";import"./small-cross-CJnmFJ9d.js";import"./ActionButton-4JN5WqHj.js";import"./Checkbox-CJUicpa4.js";import"./useValueChanged-APgIOvq6.js";import"./CollapsiblePanel-BH9UnnpL.js";import"./MultiColumnSortDialog-DQKESGLV.js";import"./MenuTrigger-C0WE1G2S.js";import"./CompositeItem-CUiyh8KX.js";import"./ToolbarRootContext-DKRIHX6q.js";import"./getDisabledMountTransitionStyles-Drv-bm06.js";import"./getPseudoElementBounds-B3bHIS4L.js";import"./chevron-down-C9eSOQPA.js";import"./index-BbmPsGxd.js";import"./error-Bm-o3dV9.js";import"./BaseCbacBanner-DhXCr72Y.js";import"./makeExternalStore-Bt0DPf8S.js";import"./Tooltip-CC5f6fsc.js";import"./PopoverPopup-BRmr0_XW.js";import"./debounce-BZOoCBd7.js";import"./useOsdkClient-cVvbHq8H.js";import"./tick-qWt9TM4D.js";import"./DropdownField-C3zSIjmP.js";import"./isEqual-BMSQp6EM.js";import"./withOsdkMetrics-DfOFosKa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

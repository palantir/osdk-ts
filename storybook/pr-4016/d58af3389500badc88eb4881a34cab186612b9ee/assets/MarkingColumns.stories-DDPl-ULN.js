import{f as p,j as e}from"./iframe-DlB65lJW.js";import{O as i}from"./object-table-CcWD3WsP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DV_Jg5FM.js";import"./Table-DcDqojBO.js";import"./index-B8sBGRC5.js";import"./Dialog-DLhwrcm-.js";import"./cross-BYT-n1qT.js";import"./svgIconContainer-DE9YLrbK.js";import"./useBaseUiId-C0JAm9wS.js";import"./InternalBackdrop-SH1n7UWl.js";import"./composite-CUY2PD51.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./index-BvPZVp58.js";import"./useEventCallback-NsVuizNp.js";import"./SkeletonBar-DttNsmst.js";import"./LoadingCell-CCfFG6NQ.js";import"./ColumnConfigDialog-DYTKAZ8a.js";import"./DraggableList-Ci64cDF2.js";import"./search-DUnv4tIx.js";import"./Input-CXcuZUCe.js";import"./useControlled-CQNoni_g.js";import"./Button-C6hVNenO.js";import"./small-cross-QFgDRgyE.js";import"./ActionButton-CQcpOspk.js";import"./Checkbox-CgdfUSaF.js";import"./useValueChanged-C824U35_.js";import"./CollapsiblePanel-SDxq7GAZ.js";import"./MultiColumnSortDialog-msaLaZzx.js";import"./MenuTrigger-BT36bnMp.js";import"./CompositeItem-PpZ3j7ZS.js";import"./ToolbarRootContext-BDX936Z-.js";import"./getDisabledMountTransitionStyles-CDFfMpVr.js";import"./getPseudoElementBounds-PXmrM0eY.js";import"./chevron-down-BHTjgyZJ.js";import"./index-D-Hc9dUX.js";import"./error-DriOx_PR.js";import"./BaseCbacBanner-C5HWYNvi.js";import"./makeExternalStore-OTHtuU79.js";import"./Tooltip-D7WLW3WV.js";import"./PopoverPopup-BG_vJMqS.js";import"./debounce-N0tv_m3M.js";import"./useOsdkClient-Bw3TotSy.js";import"./tick-u8fu2QmD.js";import"./DropdownField-dOSM9Rw1.js";import"./isEqual-D9P5SRPk.js";import"./withOsdkMetrics-6eg3mxYV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

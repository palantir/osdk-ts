import{f as n,j as t}from"./iframe-d2ViTWmA.js";import{O as p}from"./object-table-Cap9F0iX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1PWcWiMd.js";import"./Table-DtmKej-A.js";import"./index-BsvVWl42.js";import"./Dialog-DtKMtcWD.js";import"./cross-CqB-COsD.js";import"./svgIconContainer-Ca_axEBY.js";import"./useBaseUiId-s9GkMrfx.js";import"./InternalBackdrop-4Ho1oo--.js";import"./composite-DwUHzh1U.js";import"./index-DCClUVMF.js";import"./index-CblGNSh8.js";import"./index-D6gFPdT9.js";import"./useEventCallback-DLBStIYH.js";import"./SkeletonBar-C5aMgStD.js";import"./LoadingCell-Qr-Mbruo.js";import"./ColumnConfigDialog-DHSHtEVx.js";import"./DraggableList-CTtA1mHA.js";import"./search-BPaGFRW6.js";import"./Input-WAgGL-in.js";import"./useControlled-DP-_xKMv.js";import"./Button-3wSnBm2K.js";import"./small-cross-BLKRlFyB.js";import"./ActionButton-CdWqVp-r.js";import"./Checkbox-CXw8_fcD.js";import"./useValueChanged-DHzymmJR.js";import"./CollapsiblePanel-DWHwz1Yh.js";import"./MultiColumnSortDialog-DfOpQ5yp.js";import"./MenuTrigger-BRqiTcHq.js";import"./CompositeItem-LXwnIylm.js";import"./ToolbarRootContext-jdhYQx8W.js";import"./getDisabledMountTransitionStyles-BYEvH3Nx.js";import"./getPseudoElementBounds-bYqDMoYN.js";import"./chevron-down-Byfe-kDK.js";import"./index-B5VTl4Up.js";import"./error-BLkrxYqH.js";import"./BaseCbacBanner-BpvHmtbf.js";import"./makeExternalStore-B9z0_w0q.js";import"./Tooltip-Bj1r5GOv.js";import"./PopoverPopup-D_0YnbxI.js";import"./toNumber-C6WXr97i.js";import"./useOsdkClient-04YEAEMh.js";import"./tick-DOT0FqHr.js";import"./DropdownField-CXuFVpGn.js";import"./withOsdkMetrics-gYMfRBGI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};

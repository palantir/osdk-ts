import{f as n,j as t}from"./iframe-DzqL76g_.js";import{O as p}from"./object-table-CP_c08kj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmG9dd1J.js";import"./Table-BLWJYCos.js";import"./index-C7_zXXHU.js";import"./Dialog-CLvHkKkD.js";import"./cross-JNlRAt1Y.js";import"./svgIconContainer-C4c3U1tJ.js";import"./useBaseUiId-BMxeAaRK.js";import"./InternalBackdrop-Bm0TLdpS.js";import"./composite-ZwiEyvb2.js";import"./index-DrZY_AQx.js";import"./index-MULyq74S.js";import"./index-SN9vA9md.js";import"./useEventCallback-BKpvKtpZ.js";import"./SkeletonBar-BlDXEKTY.js";import"./LoadingCell-DLXuxj2v.js";import"./ColumnConfigDialog-xUo5R8Ak.js";import"./DraggableList-B7JDgkpz.js";import"./search-o3G2SKWf.js";import"./Input-BLrL7N-3.js";import"./useControlled-CL8CCR_w.js";import"./Button-DchrC9Fa.js";import"./small-cross-BEToCHFc.js";import"./ActionButton-hyPTWY7z.js";import"./Checkbox-B57TDEC6.js";import"./minus-BDz0q1GT.js";import"./tick-bMcg0jQb.js";import"./useValueChanged-BBjvMJVi.js";import"./caret-down-Bbns_mqK.js";import"./CollapsiblePanel-Dnqvcilk.js";import"./MultiColumnSortDialog-Ct02ryPU.js";import"./MenuTrigger-BktJHoyZ.js";import"./CompositeItem-Bg5Dmo8o.js";import"./ToolbarRootContext-Bk0YX5FX.js";import"./getDisabledMountTransitionStyles-BFXtb6nh.js";import"./getPseudoElementBounds-CEURjEPE.js";import"./chevron-down-Bi_yQRGc.js";import"./index-CwKZ4F6H.js";import"./error-58l_8lT3.js";import"./BaseCbacBanner-Dkit4g9P.js";import"./makeExternalStore-C-OCQZvs.js";import"./Tooltip-D18JH_jw.js";import"./PopoverPopup-CNRKd4Dm.js";import"./toNumber-3RW3e6E1.js";import"./useOsdkClient-DgU1yLb6.js";import"./DropdownField-Cng5fwE5.js";import"./withOsdkMetrics-Cb699rWq.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};

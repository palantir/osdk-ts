import{f as n,j as t}from"./iframe-Cl8eJGqQ.js";import{O as p}from"./object-table-CBXQIJzE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1sGFP9D.js";import"./Table-C7Znw18S.js";import"./index-DN50PQh-.js";import"./Dialog-Bc2UmNyM.js";import"./cross-CCvLdnS1.js";import"./svgIconContainer-CHD9Zlbf.js";import"./useBaseUiId-BNd5VFWN.js";import"./InternalBackdrop-Cv0OocJC.js";import"./composite-sB4cBqnX.js";import"./index-CHnn2mMS.js";import"./index-BRo-G0NH.js";import"./index-BrCDZNAH.js";import"./useEventCallback-BW5i4Ipb.js";import"./SkeletonBar-CDZ2VAQF.js";import"./LoadingCell-CCpiJtu8.js";import"./ColumnConfigDialog-BYPSwPU8.js";import"./DraggableList-Cwg1nno2.js";import"./search-DE_gr0Gd.js";import"./Input-Cjk_GJyv.js";import"./useControlled-morME-0h.js";import"./Button-B_F0tOoM.js";import"./small-cross-BmXi7_ZD.js";import"./ActionButton-DMJmWu3H.js";import"./Checkbox-BDW_HtJC.js";import"./minus-oiDwDlbL.js";import"./tick-oKNoz2_0.js";import"./useValueChanged-J-zWfSBU.js";import"./caret-down-DDQ4kVst.js";import"./CollapsiblePanel-CtoCqxYe.js";import"./MultiColumnSortDialog-Xt7HLORa.js";import"./MenuTrigger-LYG29s82.js";import"./CompositeItem-DGV1adBP.js";import"./ToolbarRootContext-BgUoIskF.js";import"./getDisabledMountTransitionStyles-WGVEYmzV.js";import"./getPseudoElementBounds-B4dEW2X9.js";import"./chevron-down-DdkVAd_U.js";import"./index-DM-Qy-J0.js";import"./error-DBlAgSRV.js";import"./BaseCbacBanner-GlKHF98e.js";import"./makeExternalStore-CF-LNVVA.js";import"./Tooltip-DvsSlIW0.js";import"./PopoverPopup-RJY6AEdV.js";import"./toNumber-DDT2r3AW.js";import"./useOsdkClient-BCTYC4Xc.js";import"./DropdownField-CLUwmI_g.js";import"./withOsdkMetrics-TyrIMJ16.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

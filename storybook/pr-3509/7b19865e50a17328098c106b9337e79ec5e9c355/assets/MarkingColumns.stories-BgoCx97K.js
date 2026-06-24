import{f as n,j as t}from"./iframe-DmtxDnTH.js";import{O as p}from"./object-table-DhXTnNfm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxyQKcON.js";import"./Table-BahERpfI.js";import"./index-UeV0ApAV.js";import"./Dialog-DKYGeZM1.js";import"./cross-D08IHWHi.js";import"./svgIconContainer-1riIGZvh.js";import"./useBaseUiId-CAIP8w_s.js";import"./InternalBackdrop-LNFyV0FL.js";import"./composite-vBvhoKt_.js";import"./index-CBK0Fki1.js";import"./index-DkbQheRB.js";import"./index-3li54SeK.js";import"./useEventCallback-DY_kurM_.js";import"./SkeletonBar-CSyoX0L0.js";import"./LoadingCell-UDYp96Bt.js";import"./ColumnConfigDialog-DGXNm9ds.js";import"./DraggableList-wYMtM87V.js";import"./Input-h2uCVRox.js";import"./useControlled-BIcgbJzI.js";import"./Button-BwCYtN10.js";import"./small-cross-BkWeys5h.js";import"./ActionButton-BjynlE5c.js";import"./Checkbox-DPbfZB5f.js";import"./minus-CSpuzHya.js";import"./useValueChanged-BzCw20Un.js";import"./caret-down-Brhm9pUs.js";import"./CollapsiblePanel-OM6vn1VM.js";import"./MultiColumnSortDialog-SfVpzaFJ.js";import"./MenuTrigger-BXUgHgKs.js";import"./CompositeItem-D5SMmEGc.js";import"./ToolbarRootContext-B4NcKAEO.js";import"./getDisabledMountTransitionStyles-Bi1modoK.js";import"./getPseudoElementBounds-DnVE7ZJ6.js";import"./chevron-down-BtpMTyXF.js";import"./index-CjAHCQ08.js";import"./error-Cdgw1-5t.js";import"./BaseCbacBanner-BTYuQ4nb.js";import"./makeExternalStore-Bxdhnhes.js";import"./Tooltip-DAoNjFfQ.js";import"./PopoverPopup-Bn4i4TKu.js";import"./toNumber-DWoX51Bl.js";import"./useOsdkClient-DdVPTHD_.js";import"./DropdownField-DpEp5eDh.js";import"./withOsdkMetrics-BNR_Ce6I.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

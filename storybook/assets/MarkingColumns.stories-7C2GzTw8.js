import{f as n,j as t}from"./iframe-_5wDdiP0.js";import{O as p}from"./object-table-JyMH3_tQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-8h1P6xYu.js";import"./index-C4e07EIP.js";import"./Dialog-BaArQrPR.js";import"./cross-CDvtm7wa.js";import"./svgIconContainer-Ds5mhaKt.js";import"./useBaseUiId-Cestzn_A.js";import"./InternalBackdrop-DDcBCCvq.js";import"./composite-vLU-bk1f.js";import"./index-CLA2ZEob.js";import"./index-8QRTyP0W.js";import"./index-Conl1gt5.js";import"./useEventCallback-BX-lASpz.js";import"./SkeletonBar-D1W6393k.js";import"./LoadingCell-D8gaeupQ.js";import"./ColumnConfigDialog-C3HERuXb.js";import"./DraggableList-BTLRcmWz.js";import"./search-C54mWapc.js";import"./Input-CZd-DQop.js";import"./useControlled-X_H_3l5l.js";import"./Button-DqnMjAXS.js";import"./small-cross-BnlOd_fW.js";import"./ActionButton-DJNASACQ.js";import"./Checkbox-B7zFY4-d.js";import"./minus-BHfqhxqL.js";import"./tick-dPsMid-0.js";import"./useValueChanged-CqVFETBn.js";import"./caret-down-CSPmrDKn.js";import"./CollapsiblePanel-Bta0t43s.js";import"./MultiColumnSortDialog-CCaA9kGq.js";import"./MenuTrigger-CuVdZyZ9.js";import"./CompositeItem-DlynxLru.js";import"./ToolbarRootContext-DJn2a6mf.js";import"./getDisabledMountTransitionStyles-Dp4V2P0x.js";import"./getPseudoElementBounds-CJZnyMx2.js";import"./chevron-down-DLT-272G.js";import"./index-DNJ8IDrW.js";import"./error-CzOPN5aE.js";import"./BaseCbacBanner-DfitNFHf.js";import"./makeExternalStore-BBIrWIAB.js";import"./Tooltip-Dpaqd64W.js";import"./PopoverPopup-Bf3Ny9re.js";import"./toNumber-BTiXR98a.js";import"./useOsdkClient-DgInDypn.js";import"./DropdownField-mue2BKTf.js";import"./withOsdkMetrics-ZZ7U2DXl.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

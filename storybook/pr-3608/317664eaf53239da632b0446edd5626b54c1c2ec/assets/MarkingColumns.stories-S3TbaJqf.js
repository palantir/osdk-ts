import{f as n,j as t}from"./iframe-C8FlscN3.js";import{O as p}from"./object-table-t0gR5FWm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AjrhGxn2.js";import"./Table-5-xI4Viu.js";import"./index-D1M1f0NA.js";import"./Dialog-Bixag5u_.js";import"./cross-C1qizlEg.js";import"./svgIconContainer-_jt-7dFm.js";import"./useBaseUiId-CoJqg4jJ.js";import"./InternalBackdrop-CRRZGv1Y.js";import"./composite-DqI9PGDZ.js";import"./index-D1Fzsegy.js";import"./index-Bgw8c57h.js";import"./index-Z_PzySPK.js";import"./useEventCallback-CAdSqU-i.js";import"./SkeletonBar-DX66KYdq.js";import"./LoadingCell-3Y9yJMg2.js";import"./ColumnConfigDialog-BfyDDki0.js";import"./DraggableList-CLmC8oe2.js";import"./search-CSvH33j2.js";import"./Input-BjJhxMvH.js";import"./useControlled-DvhhfNTI.js";import"./Button-tMKbD7-C.js";import"./small-cross-Cfl9WMoS.js";import"./ActionButton-4KQtb_ir.js";import"./Checkbox-wWFVsNOd.js";import"./minus-Dm90foAo.js";import"./tick-BN96IK1k.js";import"./useValueChanged-DP53iHTC.js";import"./caret-down-TXj15ISK.js";import"./CollapsiblePanel-CYnjOU4d.js";import"./MultiColumnSortDialog-BInfLRyX.js";import"./MenuTrigger-BOsi5noG.js";import"./CompositeItem-BdWwpp5U.js";import"./ToolbarRootContext-DbrY3OHQ.js";import"./getDisabledMountTransitionStyles-DNOCEHho.js";import"./getPseudoElementBounds-CqiHNJME.js";import"./chevron-down-B9FRkYpS.js";import"./index-BAyuz10r.js";import"./error-KKZt0rwh.js";import"./BaseCbacBanner-UxeC2Te-.js";import"./makeExternalStore-Da98X94b.js";import"./Tooltip-LclsCRLy.js";import"./PopoverPopup-D1A3wdcv.js";import"./toNumber-BLVCTzYR.js";import"./useOsdkClient-BvsjTqnu.js";import"./DropdownField-CJ4aYqTL.js";import"./withOsdkMetrics-wrPqJq6J.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

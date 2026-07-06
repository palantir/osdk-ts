import{f as n,j as t}from"./iframe-DvIBq-Qp.js";import{O as p}from"./object-table-C7dY2ayg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qPbwgJt1.js";import"./Table-BQ_EP_Pq.js";import"./index-DYcITOMN.js";import"./Dialog-hM4Naw_5.js";import"./cross-CeQJcL_u.js";import"./svgIconContainer-HMSVamun.js";import"./useBaseUiId-D1k0Zh_m.js";import"./InternalBackdrop-B1erfSzt.js";import"./composite-DSjEszzC.js";import"./index-c6NsK4gQ.js";import"./index-BizHiwW0.js";import"./index-XPt-Ez8Y.js";import"./useEventCallback-Bqe4wVzx.js";import"./SkeletonBar-CNCNUH7K.js";import"./LoadingCell-ByBvitoL.js";import"./ColumnConfigDialog-QflUPZDb.js";import"./DraggableList-DdwOC0pX.js";import"./search-1YOdV9G7.js";import"./Input-Cj7HcRQC.js";import"./useControlled-B_b2PFHw.js";import"./Button-GRi8JG_E.js";import"./small-cross-KW_LpdHh.js";import"./ActionButton-vtlPzUHc.js";import"./Checkbox-7r6YknZF.js";import"./useValueChanged-D0lZckOO.js";import"./CollapsiblePanel-SzXiBQJ3.js";import"./MultiColumnSortDialog-CXg457F5.js";import"./MenuTrigger-D6tucqvV.js";import"./CompositeItem-CfqO8uiP.js";import"./ToolbarRootContext-ShMZM9dE.js";import"./getDisabledMountTransitionStyles-CHaw_V9T.js";import"./getPseudoElementBounds-CAvymUUu.js";import"./chevron-down-CASBDsiq.js";import"./index-DzZ9O4W9.js";import"./error-B4g75CH1.js";import"./BaseCbacBanner-Cwv60S_k.js";import"./makeExternalStore-Cq13hLrw.js";import"./Tooltip-BVF6CQrB.js";import"./PopoverPopup-6-y8ohW1.js";import"./toNumber-Dpk3rFQN.js";import"./useOsdkClient-BGeaIFzV.js";import"./tick-BnlzatVD.js";import"./DropdownField-B-l0L3v-.js";import"./withOsdkMetrics-BOHB0rT-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

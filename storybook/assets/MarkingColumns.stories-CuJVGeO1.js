import{f as n,j as t}from"./iframe-Cq0f0YGc.js";import{O as p}from"./object-table-DNERDTeY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-ThT0tyS9.js";import"./index-CHLZ_cbX.js";import"./Dialog-DMu-BE12.js";import"./cross-DmatqTCY.js";import"./svgIconContainer-B8mFhiXK.js";import"./useBaseUiId-CzmmRtVN.js";import"./InternalBackdrop-B0ET1VtI.js";import"./composite-StbfLZaH.js";import"./index-Jjw3xH2F.js";import"./index-BAhUG1kk.js";import"./index-DYoB2okZ.js";import"./useEventCallback-Cxu931lN.js";import"./SkeletonBar-CecK0cIU.js";import"./LoadingCell-C0MGm6HG.js";import"./ColumnConfigDialog-6G4VTxBN.js";import"./DraggableList-x7QxTwoY.js";import"./search-DP9M0N5w.js";import"./Input-bapHzMjV.js";import"./useControlled-wT_vKaA9.js";import"./Button-K6OgNzs-.js";import"./small-cross-ChJjXiV7.js";import"./ActionButton-B3F3Uehm.js";import"./Checkbox-BDkJLtB2.js";import"./useValueChanged-CCcCDMzc.js";import"./CollapsiblePanel-D6R9g1d0.js";import"./MultiColumnSortDialog-DPdfEAC-.js";import"./MenuTrigger-vAjRIWuJ.js";import"./CompositeItem-BJhSD00r.js";import"./ToolbarRootContext-ChqJin0N.js";import"./getDisabledMountTransitionStyles-BsdRiZ6A.js";import"./getPseudoElementBounds-DYjpxo4j.js";import"./chevron-down-BeEehn98.js";import"./index-DhXipvQj.js";import"./error-CDthDz4c.js";import"./BaseCbacBanner-CZHbNFWw.js";import"./makeExternalStore-CQ4aObpt.js";import"./Tooltip-hgZV--vP.js";import"./PopoverPopup-CIkwNQru.js";import"./toNumber-B912erGj.js";import"./useOsdkClient-2BMzLlUy.js";import"./tick-Bcz5Ock6.js";import"./DropdownField-DMK7A3iJ.js";import"./withOsdkMetrics-DCnuDoUP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

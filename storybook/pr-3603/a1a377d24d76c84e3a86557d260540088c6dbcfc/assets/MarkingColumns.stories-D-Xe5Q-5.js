import{f as n,j as t}from"./iframe-BBnYssKE.js";import{O as p}from"./object-table-CrP-AVG5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Q1X6EyBU.js";import"./Table-tdgKtYJu.js";import"./index-Dsq-QVPM.js";import"./Dialog-B9QPPBbP.js";import"./cross-Dm7Mw9KH.js";import"./svgIconContainer-ClncAOm3.js";import"./useBaseUiId-D95b9lUd.js";import"./InternalBackdrop-B40uSbWH.js";import"./composite-Dsyt5hif.js";import"./index-B5LPtQqv.js";import"./index-DwbwFuJ6.js";import"./index-rDCV9qw1.js";import"./useEventCallback-CeB1B9Zq.js";import"./SkeletonBar-CePRRfW4.js";import"./LoadingCell--CZ5HiiD.js";import"./ColumnConfigDialog-FcOSgJu0.js";import"./DraggableList-CDBWsX3h.js";import"./search-CfZBthS7.js";import"./Input-6ez52RYZ.js";import"./useControlled-BGBIGCbd.js";import"./Button-BZIwRf36.js";import"./small-cross-DGgZtsjj.js";import"./ActionButton-BYwte3qz.js";import"./Checkbox-nMNr6w9M.js";import"./minus-0ZSCaSuf.js";import"./tick-BCw5qs2t.js";import"./useValueChanged-1WHKDFLm.js";import"./caret-down-CQ1Lw5L6.js";import"./CollapsiblePanel-Cq6Uo_dj.js";import"./MultiColumnSortDialog-qBcYRTn9.js";import"./MenuTrigger-sHYbXQ8p.js";import"./CompositeItem-crAYYpLc.js";import"./ToolbarRootContext-BveLu8S4.js";import"./getDisabledMountTransitionStyles-BysKSgBJ.js";import"./getPseudoElementBounds-D3g7uFYP.js";import"./chevron-down-CrVz2E-d.js";import"./index-k39j1op_.js";import"./error-cFVTdEtB.js";import"./BaseCbacBanner-ChBR8mI0.js";import"./makeExternalStore-DvJo4l2H.js";import"./Tooltip-D6mOi_WT.js";import"./PopoverPopup-C6JFgZRT.js";import"./toNumber-BnBIzDo1.js";import"./useOsdkClient-B0EG-CTa.js";import"./DropdownField-De7hLPAI.js";import"./withOsdkMetrics-2PkoG5s_.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

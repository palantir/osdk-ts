import{f as n,j as t}from"./iframe-Dem1jDDS.js";import{O as p}from"./object-table-jWIfoaOi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-G63TiWQ_.js";import"./Table-p9qwiXtv.js";import"./index-BCRd_LMW.js";import"./Dialog-BzmKySbg.js";import"./cross-D5PF6dfy.js";import"./svgIconContainer-DU8ZRB9_.js";import"./useBaseUiId-Cg-XwDDy.js";import"./InternalBackdrop-BNUYx67r.js";import"./composite-wCVm2Dol.js";import"./index-DqaMI3eV.js";import"./index-Dtm-sfXF.js";import"./index-CuYwHywN.js";import"./useEventCallback-BVBYMFZY.js";import"./SkeletonBar-Bb5wzuAU.js";import"./LoadingCell-CZ7ohOsE.js";import"./ColumnConfigDialog-CWCzl5um.js";import"./DraggableList-5DfNZVxr.js";import"./search-qlQl-7pj.js";import"./Input-CNzowxc_.js";import"./useControlled-BiLVvTH4.js";import"./Button-Cu6j3cTw.js";import"./small-cross-Cx41fDuO.js";import"./ActionButton-CxAVcywI.js";import"./Checkbox-ClxPCcD7.js";import"./minus-B2lnROIu.js";import"./tick-BdNAOHEK.js";import"./useValueChanged-CyRtdodg.js";import"./caret-down-CYG6wV9Z.js";import"./CollapsiblePanel-C_yRlWqi.js";import"./MultiColumnSortDialog-BIxhs7xz.js";import"./MenuTrigger-Dpy9Ww9e.js";import"./CompositeItem-DiidbYEL.js";import"./ToolbarRootContext-prEa1F63.js";import"./getDisabledMountTransitionStyles-5CY7_c06.js";import"./getPseudoElementBounds-cjuxFpQA.js";import"./chevron-down-D--xe1Ur.js";import"./index-BTI5iaOB.js";import"./error-C9rz3Y7J.js";import"./BaseCbacBanner-sudmVTxH.js";import"./makeExternalStore-Ci6FMxJw.js";import"./Tooltip-BD_orPoO.js";import"./PopoverPopup-BH5DPnZZ.js";import"./toNumber-BYhiSE95.js";import"./useOsdkClient-DmQrUgGS.js";import"./DropdownField-b4tMFq71.js";import"./withOsdkMetrics-RpJi84Zv.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

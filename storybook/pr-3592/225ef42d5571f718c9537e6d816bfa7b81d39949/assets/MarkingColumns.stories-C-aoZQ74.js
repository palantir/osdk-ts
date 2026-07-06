import{f as n,j as t}from"./iframe-COgyXZaj.js";import{O as p}from"./object-table-CUfLah8a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CURlSKHZ.js";import"./Table-BKZ8BO2a.js";import"./index-BSe1gAIM.js";import"./Dialog-C7BY4WMD.js";import"./cross-D74AX7yW.js";import"./svgIconContainer-Do68B7yK.js";import"./useBaseUiId-D-KMAuVb.js";import"./InternalBackdrop-YcB_3zJ5.js";import"./composite-thmUSTAt.js";import"./index-DmgDY6Cg.js";import"./index-LHYsLpGJ.js";import"./index-j_pOLI2r.js";import"./useEventCallback-D-F751r2.js";import"./SkeletonBar-BialxoF7.js";import"./LoadingCell-C3qAY1K5.js";import"./ColumnConfigDialog-Z2dtBOjR.js";import"./DraggableList-BYfbH4iD.js";import"./search-Bqrp4BB9.js";import"./Input-BDfzzD2g.js";import"./useControlled-D5pDpaVA.js";import"./Button-Cm1bW70f.js";import"./small-cross-C4pY4rRK.js";import"./ActionButton-uoMrgSu6.js";import"./Checkbox-xCxxl_-n.js";import"./useValueChanged-CXnM0W3Z.js";import"./CollapsiblePanel-BKjioy7a.js";import"./MultiColumnSortDialog--xR4CBM0.js";import"./MenuTrigger-BXhJG7lX.js";import"./CompositeItem-CNNF1fNB.js";import"./ToolbarRootContext-CXpmYfPq.js";import"./getDisabledMountTransitionStyles-CKciby-X.js";import"./getPseudoElementBounds-DwHjrWEN.js";import"./chevron-down-0jNx_-as.js";import"./index-MJ9BTIR5.js";import"./error-ByUY1xnR.js";import"./BaseCbacBanner-3FY0QVba.js";import"./makeExternalStore-wMrSsfcR.js";import"./Tooltip-BtZoDWWR.js";import"./PopoverPopup-fHENVCJr.js";import"./toNumber-DZrMjqDG.js";import"./useOsdkClient-Ba32FWDc.js";import"./tick-BsH6lxPF.js";import"./DropdownField-gpEEctkn.js";import"./withOsdkMetrics-DSz1qomi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

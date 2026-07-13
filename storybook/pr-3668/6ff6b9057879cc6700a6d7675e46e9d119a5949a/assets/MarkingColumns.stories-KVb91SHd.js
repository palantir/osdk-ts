import{f as n,j as t}from"./iframe-bxRMNczp.js";import{O as p}from"./object-table-ZMyUGvld.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRcmb1W.js";import"./Table-DVZHl3CJ.js";import"./index-Z4Cfnvhq.js";import"./Dialog-DDQszHEG.js";import"./cross-R7R5wt6y.js";import"./svgIconContainer-7gZ2E55w.js";import"./useBaseUiId-BgNfMjA9.js";import"./InternalBackdrop-D8t58Usq.js";import"./composite-f5gML3WJ.js";import"./index-CwC_eRQA.js";import"./index-Br7vQdps.js";import"./index-vcKqmcoJ.js";import"./useEventCallback-YRtVKkmi.js";import"./SkeletonBar-H88ISLGk.js";import"./LoadingCell-CRswoSMy.js";import"./ColumnConfigDialog-p6AvVOuo.js";import"./DraggableList-gogRn1gk.js";import"./search-HidXhXwC.js";import"./Input-djjdsceB.js";import"./useControlled-BkN2Lkbv.js";import"./Button-tM0dsnqC.js";import"./small-cross-DInmaMXL.js";import"./ActionButton-CnJJDlk0.js";import"./Checkbox-B5iqzYuF.js";import"./useValueChanged-ZPXr1Wwz.js";import"./CollapsiblePanel-C33X7_Tl.js";import"./MultiColumnSortDialog-gOqRMd_w.js";import"./MenuTrigger-GE4AfOkd.js";import"./CompositeItem-BJAbDT9R.js";import"./ToolbarRootContext-T1JrG8bu.js";import"./getDisabledMountTransitionStyles-bGCKARvS.js";import"./getPseudoElementBounds-B2fcQNZB.js";import"./chevron-down-CZhO4R3K.js";import"./index-BOQ6QNM0.js";import"./error-D5vR-pKB.js";import"./BaseCbacBanner-D0iC1gkZ.js";import"./makeExternalStore-DUngePYM.js";import"./Tooltip-BjKKiys4.js";import"./PopoverPopup-2PrCnoSJ.js";import"./toNumber-2O2357bp.js";import"./useOsdkClient-Bjmq1YrX.js";import"./tick-Zc-cwa8S.js";import"./DropdownField-BBqPdk-E.js";import"./withOsdkMetrics-Yw1-PeTM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

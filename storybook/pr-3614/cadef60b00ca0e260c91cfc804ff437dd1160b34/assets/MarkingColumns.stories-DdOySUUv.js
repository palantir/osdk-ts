import{f as n,j as t}from"./iframe-CECvnXSo.js";import{O as p}from"./object-table-CQGHHrsC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7RmVTZ8.js";import"./Table-DKwo4oYr.js";import"./index-1Ss0MhFY.js";import"./Dialog-oxCOwHPh.js";import"./cross-E94Uu_yX.js";import"./svgIconContainer-Dw7ng1xf.js";import"./useBaseUiId-Cj2ApOB0.js";import"./InternalBackdrop-CkBPBhCa.js";import"./composite-DVzDbgfm.js";import"./index-Cx4Rhex7.js";import"./index-50UB8KvJ.js";import"./index-CTpSFKkN.js";import"./useEventCallback-BGj1m1nY.js";import"./SkeletonBar-DMTkhTTp.js";import"./LoadingCell-p8n0oH1p.js";import"./ColumnConfigDialog-0cYHdmar.js";import"./DraggableList-CMOQw8NW.js";import"./search-BIoI0uGK.js";import"./Input-1uhs_ahV.js";import"./useControlled-CNYSLQui.js";import"./Button-CBdPJVa9.js";import"./small-cross-qJGeIV1e.js";import"./ActionButton-HLEZ9AGl.js";import"./Checkbox-By_a7ddB.js";import"./useValueChanged-D86R-bKX.js";import"./CollapsiblePanel-B6kZ06qS.js";import"./MultiColumnSortDialog-MXez7Y4r.js";import"./MenuTrigger-Bi0LAk8D.js";import"./CompositeItem-17y826AO.js";import"./ToolbarRootContext-D_-i9-df.js";import"./getDisabledMountTransitionStyles-Dcg-UM9j.js";import"./getPseudoElementBounds-DxkLN6Ud.js";import"./chevron-down-7FdXUDp0.js";import"./index-DvUYyCBl.js";import"./error-DDGWEmGW.js";import"./BaseCbacBanner-ityaC3GO.js";import"./makeExternalStore-Bdlxnl76.js";import"./Tooltip-DQdNQCKV.js";import"./PopoverPopup-CdFXRWi8.js";import"./toNumber-lN6D74-Q.js";import"./useOsdkClient-BwldDvAi.js";import"./tick-DVkPy-2O.js";import"./DropdownField-BKoqGlA2.js";import"./withOsdkMetrics-D81SOOp8.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

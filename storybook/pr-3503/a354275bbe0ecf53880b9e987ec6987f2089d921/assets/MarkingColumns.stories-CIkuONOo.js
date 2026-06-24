import{f as n,j as t}from"./iframe-CsSxFWDQ.js";import{O as p}from"./object-table-QBTymlKu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvOrtwwR.js";import"./Table-BCPiRU-g.js";import"./index-bHhiJnAp.js";import"./Dialog-DUfYdiqX.js";import"./cross-CwfHYU2d.js";import"./svgIconContainer-TolvF2de.js";import"./useBaseUiId-DUDGopse.js";import"./InternalBackdrop-BYmAUfAM.js";import"./composite-BxaRNPUz.js";import"./index-DNlBzvBJ.js";import"./index-CpZweDHn.js";import"./index-D55aLDIZ.js";import"./useEventCallback-DMOlgOxd.js";import"./SkeletonBar-x4xEgTDu.js";import"./LoadingCell-Dz5udvq7.js";import"./ColumnConfigDialog-HAHysIwM.js";import"./DraggableList-D228peT2.js";import"./Input-B6Btc8sl.js";import"./useControlled-CQ3V8HFA.js";import"./Button-D_ru-NGk.js";import"./small-cross-DcNTcfjE.js";import"./ActionButton-BrOUU3nQ.js";import"./Checkbox-BNCHnL8t.js";import"./minus-DximBIV6.js";import"./useValueChanged-D7mFpDS9.js";import"./caret-down-DftJnr50.js";import"./CollapsiblePanel-CM4KxxUP.js";import"./MultiColumnSortDialog-Di001_t5.js";import"./MenuTrigger-DvOpwqek.js";import"./CompositeItem-CjvR8DtT.js";import"./ToolbarRootContext-CjwcIMdl.js";import"./getDisabledMountTransitionStyles-_YbkIdy_.js";import"./getPseudoElementBounds-Bzck1T4P.js";import"./chevron-down-CIfNPorN.js";import"./index-By5_arRA.js";import"./error-CanW8myJ.js";import"./BaseCbacBanner-BzqaeeLY.js";import"./makeExternalStore-hP3ZBOSn.js";import"./Tooltip-BUK-8kZd.js";import"./PopoverPopup-CgZH-BxN.js";import"./toNumber-CfLwZLLI.js";import"./useOsdkClient-BK36R_xL.js";import"./DropdownField-C8fuIL3d.js";import"./withOsdkMetrics-BTQnPSKf.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

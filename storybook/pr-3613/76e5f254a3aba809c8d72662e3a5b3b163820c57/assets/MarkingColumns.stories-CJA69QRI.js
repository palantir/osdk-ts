import{f as n,j as t}from"./iframe-B4tn47ID.js";import{O as p}from"./object-table-CSQ-QBbz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0Ir0BY1n.js";import"./Table-BomnKgrq.js";import"./index-Bq3QvPK9.js";import"./Dialog-BsaHyeRO.js";import"./cross-VOXFfNZC.js";import"./svgIconContainer-DAEDeh0J.js";import"./useBaseUiId-DXQbbhrE.js";import"./InternalBackdrop-DLqw4WbA.js";import"./composite-BOgTbrl8.js";import"./index-B8JQ71a5.js";import"./index-Br7cLYRR.js";import"./index-Ci9wQLQ5.js";import"./useEventCallback-BUbUK_7C.js";import"./SkeletonBar-CUmSMyU7.js";import"./LoadingCell-Bm2agjCz.js";import"./ColumnConfigDialog-B1kVNooe.js";import"./DraggableList-qS5x9RmD.js";import"./search-Bo2Y7njn.js";import"./Input-DTiNfWIU.js";import"./useControlled-5AawpJZ2.js";import"./Button-C8ZQ3eoQ.js";import"./small-cross-DKqjqWGN.js";import"./ActionButton-BNCJgXfM.js";import"./Checkbox-2jcKMdJP.js";import"./useValueChanged-BTueNlVq.js";import"./CollapsiblePanel-BRscsHAv.js";import"./MultiColumnSortDialog-MxM-d8dS.js";import"./MenuTrigger-CVGebJQA.js";import"./CompositeItem-CILprvMU.js";import"./ToolbarRootContext-BfOKpVJp.js";import"./getDisabledMountTransitionStyles-BLAzd5ll.js";import"./getPseudoElementBounds-BimaQ6LJ.js";import"./chevron-down-CDvkAbox.js";import"./index-DI0KON9W.js";import"./error-BGjtoKT1.js";import"./BaseCbacBanner-Cawd8ktY.js";import"./makeExternalStore-DFjcTOM3.js";import"./Tooltip-CdBwyPMW.js";import"./PopoverPopup-22oppCH2.js";import"./toNumber-BDK90jUx.js";import"./useOsdkClient-CZqRnC4j.js";import"./tick-B_c84JFG.js";import"./DropdownField-CwQtTmpq.js";import"./withOsdkMetrics-BmXr4RkT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

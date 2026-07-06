import{f as n,j as t}from"./iframe-B79O0zQM.js";import{O as p}from"./object-table-BKNRS19X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIltFqCT.js";import"./Table-fLBNb_BP.js";import"./index-C8kSIInM.js";import"./Dialog-o1jLEeIp.js";import"./cross-DYKMH4xO.js";import"./svgIconContainer-DFCRIRXc.js";import"./useBaseUiId-L1IQaSOP.js";import"./InternalBackdrop-CpkhdwJJ.js";import"./composite-GAmqbSry.js";import"./index-38KKGp5R.js";import"./index-8YydoI3z.js";import"./index-Df9A7Mki.js";import"./useEventCallback-GQnwBCIk.js";import"./SkeletonBar-CILrBBTD.js";import"./LoadingCell-DO8Qx1-H.js";import"./ColumnConfigDialog-CWtGk5R3.js";import"./DraggableList-IOynlALw.js";import"./search-C9Dzl56b.js";import"./Input-PA5UMAtE.js";import"./useControlled-CWgBrla5.js";import"./Button-GfazOTZQ.js";import"./small-cross-npbc2L4O.js";import"./ActionButton-B1JhaImu.js";import"./Checkbox-DB1cwaK7.js";import"./minus-Z-kdTU-R.js";import"./tick-rALId09J.js";import"./useValueChanged-Dk8tU2Zt.js";import"./caret-down-BCbo1qcr.js";import"./CollapsiblePanel-Cj5uI6BJ.js";import"./MultiColumnSortDialog-Ck-xla7X.js";import"./MenuTrigger-C0HyfFeu.js";import"./CompositeItem-C89j8GKI.js";import"./ToolbarRootContext-CkobNPuH.js";import"./getDisabledMountTransitionStyles-Bjhaxc0S.js";import"./getPseudoElementBounds-D8duLDqQ.js";import"./chevron-down-EZ8DL_uu.js";import"./index-ejK9oAwW.js";import"./error-CmvVGGaw.js";import"./BaseCbacBanner-DJ9ETbSi.js";import"./makeExternalStore-BOYhineC.js";import"./Tooltip-zQBJoOLd.js";import"./PopoverPopup-BrTMObmi.js";import"./toNumber-DYk5cYaG.js";import"./useOsdkClient-CzgSqcm0.js";import"./DropdownField-zZucnEaT.js";import"./withOsdkMetrics-CdyoixQI.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-Cu_KTnnP.js";import{O as p}from"./object-table-L-vhhLk-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CST8YKaX.js";import"./Table-BkVPhNvS.js";import"./index-DCmiLcEH.js";import"./Dialog-BIkYDmpZ.js";import"./cross-DhwoQ3Cs.js";import"./svgIconContainer-CIbJAvzW.js";import"./useBaseUiId-DQ1i1HvP.js";import"./InternalBackdrop-DORr255q.js";import"./composite-CCPiVe2a.js";import"./index-CWNoOFpl.js";import"./index-Dd-rIXPz.js";import"./index-B8fdcihZ.js";import"./useEventCallback-C2zHgNu9.js";import"./SkeletonBar-gCbeIn2p.js";import"./LoadingCell-DSnVVlJH.js";import"./ColumnConfigDialog-BYH3i5lD.js";import"./DraggableList-Ci4wQdKk.js";import"./search-DTXooeDv.js";import"./Input-DCSfEZTZ.js";import"./useControlled-C_o7ozFW.js";import"./Button-nPFPMaQF.js";import"./small-cross-DoP01fZB.js";import"./ActionButton-CjQV0nzD.js";import"./Checkbox-CcwiwQeg.js";import"./useValueChanged-DU6bdgcW.js";import"./CollapsiblePanel-C0u4n5YE.js";import"./MultiColumnSortDialog-dJmJMA1c.js";import"./MenuTrigger-DdstnBCL.js";import"./CompositeItem-D7qlHE3e.js";import"./ToolbarRootContext-BIcM9TO3.js";import"./getDisabledMountTransitionStyles-D0Cvn0Wu.js";import"./getPseudoElementBounds-C-bagCpL.js";import"./chevron-down-7Mwq2lEl.js";import"./index-oyR97XSn.js";import"./error-BHN40zNs.js";import"./BaseCbacBanner-BGjLE4YM.js";import"./makeExternalStore-CVVblFMU.js";import"./Tooltip-C6sDGiBb.js";import"./PopoverPopup-Dn96Aja9.js";import"./toNumber-CxKpZoYT.js";import"./useOsdkClient-DT_8Cjxd.js";import"./tick-BwGXs2Hw.js";import"./DropdownField-DqFSiFpO.js";import"./withOsdkMetrics-DROh4esD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

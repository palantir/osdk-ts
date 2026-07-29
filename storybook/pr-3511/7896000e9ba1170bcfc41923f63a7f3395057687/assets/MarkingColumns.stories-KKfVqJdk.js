import{f as n,j as t}from"./iframe-DIdaxOLR.js";import{O as p}from"./object-table-CoNh2y9z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv4ocMnk.js";import"./Table-DB_Pn8nL.js";import"./index-GvktmLB_.js";import"./Dialog-CFXiRv5w.js";import"./cross-BQQs13Fl.js";import"./svgIconContainer-DafxEzdg.js";import"./useBaseUiId-CcZqXfAF.js";import"./InternalBackdrop-C6fSx2lF.js";import"./composite-DHu_NJDJ.js";import"./index-ClaFPr-d.js";import"./index-D0nZjEcy.js";import"./index-BOfidV88.js";import"./useEventCallback-DvQzswKu.js";import"./SkeletonBar-CEfHE6Vg.js";import"./LoadingCell-CGPIxHw2.js";import"./ColumnConfigDialog-BAWOhrfg.js";import"./DraggableList-D42ewjP4.js";import"./search-ByfIaBTs.js";import"./Input-q_83M2dQ.js";import"./useControlled-BZuFqG0t.js";import"./Button-CiOiDF7a.js";import"./small-cross-Bo01nl37.js";import"./ActionButton-MrPg5-WH.js";import"./Checkbox-CGbZ49eF.js";import"./minus-BEFJu42F.js";import"./tick-gO7fBjm5.js";import"./useValueChanged-byV6LFGg.js";import"./caret-down-DYkX4qcH.js";import"./CollapsiblePanel-CiLlfFdA.js";import"./MultiColumnSortDialog-Cq_W0MDf.js";import"./MenuTrigger-CWidFxXi.js";import"./CompositeItem-C1xIO8ne.js";import"./ToolbarRootContext-B2mSYT1Q.js";import"./getDisabledMountTransitionStyles-DbnZLkOT.js";import"./getPseudoElementBounds-ZSRKgaeb.js";import"./chevron-down-Ci9EmqSi.js";import"./index-cjkh6zoM.js";import"./error-CNRMUlL9.js";import"./BaseCbacBanner-CvE-uEpn.js";import"./makeExternalStore-D3CLRkNX.js";import"./Tooltip-CeS-D6Fh.js";import"./PopoverPopup-Bqq3eFq9.js";import"./toNumber-BMQI3xcp.js";import"./useOsdkClient-DXI1lmzk.js";import"./DropdownField-BtLop8D7.js";import"./withOsdkMetrics-CynymlIC.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

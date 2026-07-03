import{f as n,j as t}from"./iframe-BgM7s6NU.js";import{O as p}from"./object-table-CVyJnltT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgVGrWWk.js";import"./Table-D9bSkSBX.js";import"./index-BxYlfej2.js";import"./Dialog-DfZwmY46.js";import"./cross-Dmj7s9vC.js";import"./svgIconContainer-yByNBI5e.js";import"./useBaseUiId-CN6gEpIH.js";import"./InternalBackdrop-B3nz5lmD.js";import"./composite-DOIGingi.js";import"./index-CipJaMI-.js";import"./index-o8A-H11s.js";import"./index-DWz7CHPH.js";import"./useEventCallback-D5VQUvaf.js";import"./SkeletonBar-BgkmueLV.js";import"./LoadingCell-3q8VW9q4.js";import"./ColumnConfigDialog-BEsr_ILz.js";import"./DraggableList-a9WNVupl.js";import"./search-B4LU9bhP.js";import"./Input-D4IATUa3.js";import"./useControlled-MG65Srm2.js";import"./Button-DKbJ926h.js";import"./small-cross-Rh0TT2H8.js";import"./ActionButton-BSQAdh6_.js";import"./Checkbox-BgCjfFru.js";import"./useValueChanged-D9k5GhII.js";import"./CollapsiblePanel-DP9ySEIj.js";import"./MultiColumnSortDialog-CIEqWMLp.js";import"./MenuTrigger-CaljBkx7.js";import"./CompositeItem-CrmgCkQt.js";import"./ToolbarRootContext-BCyCuwMC.js";import"./getDisabledMountTransitionStyles-CKYxjGgo.js";import"./getPseudoElementBounds-B642FNkj.js";import"./chevron-down-BwDFHFRh.js";import"./index-W4gviOzE.js";import"./error-CqOKc6wG.js";import"./BaseCbacBanner-C4LFKasb.js";import"./makeExternalStore-DjI0JxPL.js";import"./Tooltip-DkKTkeb2.js";import"./PopoverPopup-ClB-dz-a.js";import"./toNumber-CsATLOoQ.js";import"./useOsdkClient-nKkjUSnh.js";import"./tick-D2z6fONX.js";import"./DropdownField-NKcVel0J.js";import"./withOsdkMetrics-Bfa6_rea.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

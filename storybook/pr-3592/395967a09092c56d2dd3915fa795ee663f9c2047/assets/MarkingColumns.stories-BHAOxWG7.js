import{f as n,j as t}from"./iframe-gFssGAf1.js";import{O as p}from"./object-table-Ce1TJPWp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y4wIX-uA.js";import"./Table-BHTG5ogY.js";import"./index-COwGmWRi.js";import"./Dialog-B7vrqJSd.js";import"./cross-BBQyPZCp.js";import"./svgIconContainer-CZvKaYWH.js";import"./useBaseUiId-Bx8pun8U.js";import"./InternalBackdrop-DFiIn_vy.js";import"./composite-Cgx9KCH4.js";import"./index-CyQZA97-.js";import"./index-Dtml0nDn.js";import"./index-C6y53aIV.js";import"./useEventCallback-Cc9J-Pbq.js";import"./SkeletonBar-Che2H1f1.js";import"./LoadingCell-CP6GnaEL.js";import"./ColumnConfigDialog-DQpKQJPu.js";import"./DraggableList-CXZR8TKI.js";import"./search-CVTe4_QC.js";import"./Input-CSpvgbGy.js";import"./useControlled-BCGuXS9q.js";import"./Button-COT62_yZ.js";import"./small-cross-DFyZgJaF.js";import"./ActionButton-Cw6eZ8NL.js";import"./Checkbox-QS-J8q3y.js";import"./minus-fkrgKl-t.js";import"./tick-CimFZW34.js";import"./useValueChanged-Ds-ECCDn.js";import"./caret-down-d_yP9HD7.js";import"./CollapsiblePanel-Bp8NkALG.js";import"./MultiColumnSortDialog-VJgBsSzg.js";import"./MenuTrigger-XSuEdinC.js";import"./CompositeItem-DOPE1RS9.js";import"./ToolbarRootContext-u2KtsOkQ.js";import"./getDisabledMountTransitionStyles-pcVsAu1A.js";import"./getPseudoElementBounds-TNVX-l-7.js";import"./chevron-down-BATQ0KTh.js";import"./index-RGxUsOMu.js";import"./error-XSVHXQDH.js";import"./BaseCbacBanner-Cb4OAjZh.js";import"./makeExternalStore-Bcdw7yQy.js";import"./Tooltip-Bv49-z3-.js";import"./PopoverPopup-DCJHd8-t.js";import"./toNumber-CsK_qFyy.js";import"./useOsdkClient-C_XnB0f2.js";import"./DropdownField-PNdgi2Wb.js";import"./withOsdkMetrics-DMjiHC0K.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

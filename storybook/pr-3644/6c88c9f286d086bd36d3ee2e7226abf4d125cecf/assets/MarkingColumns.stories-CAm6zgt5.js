import{f as n,j as t}from"./iframe-BKBfot2J.js";import{O as p}from"./object-table-ynPI-JUw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDEmWdpD.js";import"./Table-oNF3ZaTk.js";import"./index-DyLIad-u.js";import"./Dialog-RX6lpR_O.js";import"./cross-DEdTBx1o.js";import"./svgIconContainer-DuVqaUvI.js";import"./useBaseUiId-BU2OkR0r.js";import"./InternalBackdrop-D0b-JzI2.js";import"./composite-CqCPDKzt.js";import"./index-DgDVbfrk.js";import"./index-D_swfoLH.js";import"./index-BR9jhLht.js";import"./useEventCallback-B7S0OXoD.js";import"./SkeletonBar-C_ANk2Ze.js";import"./LoadingCell-CLgmrwsb.js";import"./ColumnConfigDialog-CTS6JjwD.js";import"./DraggableList-BNL1onKo.js";import"./search-Bge0vqWk.js";import"./Input-ia7FD9kx.js";import"./useControlled-CWFGDVcM.js";import"./Button-BHNI-JAr.js";import"./small-cross-ByOClUMT.js";import"./ActionButton-Dy2azLld.js";import"./Checkbox-OldrqqIH.js";import"./useValueChanged-DGAjo74z.js";import"./CollapsiblePanel-BIqWHEGM.js";import"./MultiColumnSortDialog-Dn7aVQBq.js";import"./MenuTrigger-BAS1T5io.js";import"./CompositeItem-ERV_dfiA.js";import"./ToolbarRootContext-Be9AL0zM.js";import"./getDisabledMountTransitionStyles-DW5o43vm.js";import"./getPseudoElementBounds-DCqg94bg.js";import"./chevron-down-MmD20AEZ.js";import"./index-D_FDqr3a.js";import"./error-CPH4Ll6R.js";import"./BaseCbacBanner-FcVB6y77.js";import"./makeExternalStore-D1bGgX9q.js";import"./Tooltip-55OEnLN7.js";import"./PopoverPopup-BgHkWzrI.js";import"./toNumber-Dn83T8fB.js";import"./useOsdkClient-BYuDZEIT.js";import"./tick-BBo7uXnB.js";import"./DropdownField-BbDxaLa6.js";import"./withOsdkMetrics-BUWJe443.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

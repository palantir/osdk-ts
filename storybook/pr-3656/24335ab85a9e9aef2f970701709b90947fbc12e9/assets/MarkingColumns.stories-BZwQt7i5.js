import{f as n,j as t}from"./iframe-HdcGgbdA.js";import{O as p}from"./object-table-CuenShC3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw_hR2Bn.js";import"./Table-CzpHUkoU.js";import"./index-e9PaiC4c.js";import"./Dialog-DtxUu4q3.js";import"./cross-BlrjY9iP.js";import"./svgIconContainer-quT0DxzY.js";import"./useBaseUiId-bzLFpoWT.js";import"./InternalBackdrop-BrU_RKHN.js";import"./composite-CUyk41eZ.js";import"./index-jZ7Wgdp9.js";import"./index-DgsRemEa.js";import"./index-C7hPrun6.js";import"./useEventCallback-gHXe8fUF.js";import"./SkeletonBar-CSzWa3XN.js";import"./LoadingCell-BwKBNfUF.js";import"./ColumnConfigDialog-BgcqhX78.js";import"./DraggableList-qR8Hygj3.js";import"./search-BXojRFA9.js";import"./Input-BY_Kw-ep.js";import"./useControlled-DKlPK4uU.js";import"./Button-DFu1lsOn.js";import"./small-cross-AuOZiNEe.js";import"./ActionButton-FT_-lE8U.js";import"./Checkbox-021smIRS.js";import"./useValueChanged-DmlpvgL3.js";import"./CollapsiblePanel-D-mzT31v.js";import"./MultiColumnSortDialog-C9mhdaFc.js";import"./MenuTrigger-DV3wD3lB.js";import"./CompositeItem-Bop6ZfZQ.js";import"./ToolbarRootContext-BQxfk6gj.js";import"./getDisabledMountTransitionStyles-snraxPat.js";import"./getPseudoElementBounds-DwiK9ttk.js";import"./chevron-down-pBVAZbVQ.js";import"./index-C2JC-hxO.js";import"./error-OlBsv4yQ.js";import"./BaseCbacBanner-DG69W7vt.js";import"./makeExternalStore-DI7WV0pI.js";import"./Tooltip-W1jVUm6n.js";import"./PopoverPopup-B1u9Ulhw.js";import"./toNumber-C4qKmEDN.js";import"./useOsdkClient-005dEyh0.js";import"./tick-Caq-927r.js";import"./DropdownField-B4PT1k0h.js";import"./withOsdkMetrics-E6333lzv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

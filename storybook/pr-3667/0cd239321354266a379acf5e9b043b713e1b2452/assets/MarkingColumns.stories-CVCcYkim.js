import{f as n,j as t}from"./iframe-CKGXZdUd.js";import{O as p}from"./object-table-BDGl98-H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-D_Qx_N.js";import"./Table-CGb3Lzrl.js";import"./index-CBZIuX82.js";import"./Dialog-T5TCE3Hr.js";import"./cross-BkeDnqB2.js";import"./svgIconContainer-3Trf26hR.js";import"./useBaseUiId-1bUrDpZD.js";import"./InternalBackdrop-CNp8OgBe.js";import"./composite-aok1y7nX.js";import"./index-g0MaeY23.js";import"./index-DAFgbO3H.js";import"./index-e0CJWOaA.js";import"./useEventCallback-BcoWPnXc.js";import"./SkeletonBar-CUfaCFbY.js";import"./LoadingCell-BrargOvD.js";import"./ColumnConfigDialog-CEI1XmbA.js";import"./DraggableList-C_JhftFX.js";import"./search-BQODn8Gc.js";import"./Input-C_7sB4VL.js";import"./useControlled-DtdgmWSi.js";import"./Button-Dv61x2nZ.js";import"./small-cross-CmfVVQUf.js";import"./ActionButton-G8orXhZe.js";import"./Checkbox-D1eFdzoL.js";import"./useValueChanged-BiYWVrOE.js";import"./CollapsiblePanel-94NCwlSx.js";import"./MultiColumnSortDialog-ndbghPuO.js";import"./MenuTrigger-fSp5iw9H.js";import"./CompositeItem-DJL6BkdA.js";import"./ToolbarRootContext-EryvHoYA.js";import"./getDisabledMountTransitionStyles-B6yODoyE.js";import"./getPseudoElementBounds-BUO86LAH.js";import"./chevron-down-DJrgvxMv.js";import"./index-BITpeDcg.js";import"./error-D_aBRd00.js";import"./BaseCbacBanner-Ds4zNHco.js";import"./makeExternalStore-t9OzsKWn.js";import"./Tooltip-CMvBoQ4U.js";import"./PopoverPopup-CVrDd1u_.js";import"./toNumber-C3coS1I4.js";import"./useOsdkClient-DVgIUEYF.js";import"./tick-DxoPFw5B.js";import"./DropdownField-DaLAhIw_.js";import"./withOsdkMetrics-CUTak4OL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

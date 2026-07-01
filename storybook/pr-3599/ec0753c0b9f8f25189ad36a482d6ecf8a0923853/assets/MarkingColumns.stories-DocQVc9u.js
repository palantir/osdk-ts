import{f as n,j as t}from"./iframe-CDHHzoJv.js";import{O as p}from"./object-table-e1rRZzcH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4dkwi5q.js";import"./Table-BueKOape.js";import"./index-DIpk4oSm.js";import"./Dialog-ByYIc5nT.js";import"./cross-DOk1OK3c.js";import"./svgIconContainer-D_Xh0B1Q.js";import"./useBaseUiId-D2qLSisG.js";import"./InternalBackdrop-CGUfkZGB.js";import"./composite-p-GotdUy.js";import"./index-BAv16zx8.js";import"./index-BpuaQgyh.js";import"./index-B4h0MzDt.js";import"./useEventCallback-CtKBqCBv.js";import"./SkeletonBar-CCDUGfLo.js";import"./LoadingCell-aZmcfPSZ.js";import"./ColumnConfigDialog-BfIW21Yo.js";import"./DraggableList-DshWZoBt.js";import"./search-DJu7CnV2.js";import"./Input-BAm1Qz_G.js";import"./useControlled-qnu_GTzW.js";import"./Button-CTRiQbec.js";import"./small-cross-BSKQ5CpI.js";import"./ActionButton-D0lmVCiI.js";import"./Checkbox-BAny6qug.js";import"./minus-ChgewUzB.js";import"./tick-BMIEhCo4.js";import"./useValueChanged-cHwUJKg6.js";import"./caret-down-CliIcsDf.js";import"./CollapsiblePanel-BF-lIKyN.js";import"./MultiColumnSortDialog-DiIBC2iO.js";import"./MenuTrigger-CnVsqie5.js";import"./CompositeItem-CetiieSv.js";import"./ToolbarRootContext-DF8cuKYf.js";import"./getDisabledMountTransitionStyles-DRjVjqph.js";import"./getPseudoElementBounds-hTXanSaH.js";import"./chevron-down-CFaoCxzm.js";import"./index-CVJ4N9lK.js";import"./error-CrvBy8Ck.js";import"./BaseCbacBanner-C9bx_zLP.js";import"./makeExternalStore-BoJAPglE.js";import"./Tooltip-BmmkFcaS.js";import"./PopoverPopup-BR9GEqtV.js";import"./toNumber-DLTCsNv4.js";import"./useOsdkClient-D6I7GFcV.js";import"./DropdownField-wpuFFQTZ.js";import"./withOsdkMetrics-D5kT2_1u.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

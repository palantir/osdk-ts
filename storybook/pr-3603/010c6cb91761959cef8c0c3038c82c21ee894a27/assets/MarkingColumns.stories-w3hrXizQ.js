import{f as n,j as t}from"./iframe-CCVCcgjV.js";import{O as p}from"./object-table-BUH_EW5P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-V0_EXFHR.js";import"./Table-BHqkTGYu.js";import"./index-D_o5YvhA.js";import"./Dialog-DeUf3EEs.js";import"./cross-DFiDzZfG.js";import"./svgIconContainer-CP_uSZNo.js";import"./useBaseUiId-B7sncwP6.js";import"./InternalBackdrop-Cd_MgOeE.js";import"./composite-B676ApEQ.js";import"./index-DEm73OrF.js";import"./index-CTeDgTsI.js";import"./index-CYoYuLy4.js";import"./useEventCallback-CDCmG-V3.js";import"./SkeletonBar-CY_mfR1m.js";import"./LoadingCell-BI0_uzv3.js";import"./ColumnConfigDialog-Cwlm8-Ow.js";import"./DraggableList-D5YJBdRE.js";import"./search-D3jdU1iX.js";import"./Input-DnTfZm7C.js";import"./useControlled-CC9okYJm.js";import"./Button-DJJKBClZ.js";import"./small-cross-AFA6riVj.js";import"./ActionButton-Ii42K1Xt.js";import"./Checkbox-n5nLZRgu.js";import"./minus-wXHEZMFI.js";import"./tick-lkh1yIAk.js";import"./useValueChanged-3j0Q1uDy.js";import"./caret-down-D5H2q3i4.js";import"./CollapsiblePanel-Zedr8MZA.js";import"./MultiColumnSortDialog-D4icmH38.js";import"./MenuTrigger-CFivCJgp.js";import"./CompositeItem-DBKBqhLR.js";import"./ToolbarRootContext-R7hpo3R4.js";import"./getDisabledMountTransitionStyles-DpDR9Sis.js";import"./getPseudoElementBounds-BR_0Bn3u.js";import"./chevron-down-DkQgBUL3.js";import"./index-IGGOCBKx.js";import"./error-BSLDPawg.js";import"./BaseCbacBanner-CgEyatN8.js";import"./makeExternalStore-BaWXL9U-.js";import"./Tooltip-R00e_8MY.js";import"./PopoverPopup-qgt3sp-U.js";import"./toNumber-DOmH7qWH.js";import"./useOsdkClient-CBhyLga7.js";import"./DropdownField-Bw0NTUiY.js";import"./withOsdkMetrics-DYRl-Wvo.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

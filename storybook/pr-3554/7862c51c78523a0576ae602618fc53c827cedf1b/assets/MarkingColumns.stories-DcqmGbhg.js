import{f as n,j as t}from"./iframe-DHrFp4_-.js";import{O as p}from"./object-table-B-jyUiAE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Brgfwo0I.js";import"./Table-FCZA8zWQ.js";import"./index-Ru9Of4md.js";import"./Dialog-C5XKMdLn.js";import"./cross-hB8AS5s5.js";import"./svgIconContainer-BrP4ciVU.js";import"./useBaseUiId-BDpSa2Mu.js";import"./InternalBackdrop-CyCL4hXU.js";import"./composite-D84drrBx.js";import"./index-q_OtGgbA.js";import"./index-C0LuXSsL.js";import"./index-C4z_oo6G.js";import"./useEventCallback-CDnud8dZ.js";import"./SkeletonBar-Dxnx-55K.js";import"./LoadingCell-DsaWPCPF.js";import"./ColumnConfigDialog-N6yKpO14.js";import"./DraggableList-CGbElz5u.js";import"./Input-C4Kg3vT1.js";import"./useControlled-DHVl_CnQ.js";import"./Button-Bz_r43wc.js";import"./small-cross-D4-pSM9R.js";import"./ActionButton-BEmHqGsG.js";import"./Checkbox-DxMHtp1N.js";import"./minus-DG2yzxRt.js";import"./useValueChanged-D6uWfFLN.js";import"./caret-down-DgC-V3P3.js";import"./CollapsiblePanel-BQ8mWo3I.js";import"./MultiColumnSortDialog-D3mIWu4C.js";import"./MenuTrigger-N6mcELmF.js";import"./CompositeItem-ftOGY9QE.js";import"./ToolbarRootContext-Bf9HqSsT.js";import"./getDisabledMountTransitionStyles-Yfb7GuIk.js";import"./getPseudoElementBounds-eunDfOsS.js";import"./chevron-down-Bf3shBCs.js";import"./index-D4vCc_lg.js";import"./error-DOoAZI6I.js";import"./BaseCbacBanner-BPUwpAQe.js";import"./makeExternalStore-DYxoAObn.js";import"./Tooltip-B86MwdDR.js";import"./PopoverPopup-DtcI4pNt.js";import"./toNumber-CzIi66JE.js";import"./useOsdkClient-BWzLAKUZ.js";import"./DropdownField-CHJkd3fz.js";import"./withOsdkMetrics-BynLKkHM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

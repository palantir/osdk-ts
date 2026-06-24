import{f as n,j as t}from"./iframe-BbiirmN6.js";import{O as p}from"./object-table-DUXRUWiy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Doqq2m3i.js";import"./Table-Q0AN-TgL.js";import"./index-B94rWRxl.js";import"./Dialog-CUEeLdBg.js";import"./cross-rR2antC_.js";import"./svgIconContainer-BHB5pHcv.js";import"./useBaseUiId-C_S4ohxT.js";import"./InternalBackdrop-CmQbu_o7.js";import"./composite-Bh3AGWNF.js";import"./index-i6fTQz_j.js";import"./index-5rH6bU5k.js";import"./index-DsZYp5CU.js";import"./useEventCallback-CZDBL2sm.js";import"./SkeletonBar-BCK4XPeD.js";import"./LoadingCell-CkcAvezK.js";import"./ColumnConfigDialog-B3svpHlZ.js";import"./DraggableList-D-8uH2aY.js";import"./Input-CviTufyp.js";import"./useControlled-DUtulQ-j.js";import"./Button-DjXVdpwU.js";import"./small-cross-BvLdtlqO.js";import"./ActionButton-BDboFoIW.js";import"./Checkbox-BL_u64zz.js";import"./minus-05QtpRmD.js";import"./useValueChanged-DNLfRwfl.js";import"./caret-down-CTXK8anC.js";import"./CollapsiblePanel-DoAY_QkV.js";import"./MultiColumnSortDialog-D8znRPvm.js";import"./MenuTrigger-DHK9RPM8.js";import"./CompositeItem-Ceq4ZC0D.js";import"./ToolbarRootContext-DwapeTKT.js";import"./getDisabledMountTransitionStyles-BMGROm2n.js";import"./getPseudoElementBounds-D3PQa8l0.js";import"./chevron-down-0wMbM-ig.js";import"./index-DLmuEeEW.js";import"./error-BEFOUHlm.js";import"./BaseCbacBanner-Dds_Wssq.js";import"./makeExternalStore-DMbt8zLZ.js";import"./Tooltip-x3zvtPxY.js";import"./PopoverPopup-CfU6eQWU.js";import"./toNumber-BaW_vqQD.js";import"./useOsdkClient-CqvT4R04.js";import"./DropdownField-DoApMHHa.js";import"./withOsdkMetrics-Cq69iokh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

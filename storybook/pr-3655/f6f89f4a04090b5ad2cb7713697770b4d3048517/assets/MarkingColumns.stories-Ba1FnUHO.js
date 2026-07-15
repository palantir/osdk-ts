import{f as n,j as t}from"./iframe-BReQfzQE.js";import{O as p}from"./object-table-Llyt5ct5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DwO3UDy6.js";import"./Table-DxYiGBse.js";import"./index-B3RyB3sX.js";import"./Dialog-Q4sMQBsW.js";import"./cross-DDbnTE35.js";import"./svgIconContainer-DgKPfbC9.js";import"./useBaseUiId-D_yAhBoN.js";import"./InternalBackdrop-CjzdQm0F.js";import"./composite-Dn9idZig.js";import"./index-BrppgLJh.js";import"./index-DTGT-YJS.js";import"./index-D9OyI5Pf.js";import"./useEventCallback-TLRQ_prm.js";import"./SkeletonBar-LdqCfnuv.js";import"./LoadingCell-DpWzeTaI.js";import"./ColumnConfigDialog-DG5S9Pea.js";import"./DraggableList-CSj5XYRK.js";import"./search-BEdvkX_p.js";import"./Input-dIZevx3g.js";import"./useControlled-BVoaGLTD.js";import"./Button-RYYrZpZz.js";import"./small-cross-P4M5Ph-v.js";import"./ActionButton-Cj_HY9aU.js";import"./Checkbox-DfEYdPeG.js";import"./useValueChanged-Cy5NSSXI.js";import"./CollapsiblePanel-u_bjLVp9.js";import"./MultiColumnSortDialog-BkpMJrrD.js";import"./MenuTrigger-Citb6tQE.js";import"./CompositeItem-B36SUBTb.js";import"./ToolbarRootContext-DsTt3FLa.js";import"./getDisabledMountTransitionStyles-CuA4Fj8h.js";import"./getPseudoElementBounds-SgBQR5iC.js";import"./chevron-down-t6mVIC1n.js";import"./index-DyCd-4H3.js";import"./error-DVK7hCu-.js";import"./BaseCbacBanner-DyvQJ8v1.js";import"./makeExternalStore-Dc95XsCd.js";import"./Tooltip-CkRwn9tz.js";import"./PopoverPopup-Dh__Jz8n.js";import"./toNumber-CVMK1AF6.js";import"./useOsdkClient-SlEx7HZ5.js";import"./tick-CKKZXEHC.js";import"./DropdownField-BsLhARnD.js";import"./withOsdkMetrics-C6O0UZBB.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

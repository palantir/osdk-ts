import{f as n,j as t}from"./iframe-D6C9Trwj.js";import{O as p}from"./object-table-CxrxDIEG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D9Seyq6l.js";import"./index-DDlgToJp.js";import"./Dialog-Dr_asUUu.js";import"./cross-B-tX8pxW.js";import"./svgIconContainer-BcCoP_VO.js";import"./useBaseUiId-CK8zz_o5.js";import"./InternalBackdrop-BhBk4yfO.js";import"./composite-CpbDy630.js";import"./index-D_DunY4G.js";import"./index-bGEWMLTM.js";import"./index-C4RXNNbl.js";import"./useEventCallback-DsY6ddwy.js";import"./SkeletonBar-nilE11Hw.js";import"./LoadingCell-BpHLVbhR.js";import"./ColumnConfigDialog-5JqL-i7s.js";import"./DraggableList-DFl_kXit.js";import"./search-B7UvTq-1.js";import"./Input-CLlf0Dxa.js";import"./useControlled-BhZdTOY8.js";import"./Button-C_2bkx_i.js";import"./small-cross-DwDFwKnV.js";import"./ActionButton-Dn5tOrhH.js";import"./Checkbox-1C77R0fY.js";import"./useValueChanged-CU-LWLz6.js";import"./CollapsiblePanel-DLyeuemT.js";import"./MultiColumnSortDialog-3XjKZY-U.js";import"./MenuTrigger-Blwa4I5b.js";import"./CompositeItem-XglmiJOH.js";import"./ToolbarRootContext-B0WwuHp8.js";import"./getDisabledMountTransitionStyles-DhFgaqJ0.js";import"./getPseudoElementBounds-DPFgf-1U.js";import"./chevron-down-CYWoK0T6.js";import"./index-Cuh6-2mw.js";import"./error-DtXcSHVK.js";import"./BaseCbacBanner-DhbE-sRG.js";import"./makeExternalStore-C-NB2NR2.js";import"./Tooltip-7kuOBmIo.js";import"./PopoverPopup-C5aHHPrW.js";import"./toNumber-B0sHIBp4.js";import"./useOsdkClient-DhMXVzPo.js";import"./tick-BD3dMPqR.js";import"./DropdownField-BD_mHPdD.js";import"./withOsdkMetrics-UCmWowd6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

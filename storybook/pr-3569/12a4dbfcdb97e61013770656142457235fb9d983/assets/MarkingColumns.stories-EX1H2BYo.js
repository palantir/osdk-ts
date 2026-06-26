import{f as n,j as t}from"./iframe-wmk01Rda.js";import{O as p}from"./object-table-_VV92xW3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DanPxv3p.js";import"./Table-CUcnk_8_.js";import"./index-DrKf14Lc.js";import"./Dialog-BSrMlmkq.js";import"./cross-Dw4cREIp.js";import"./svgIconContainer-D2lCDHCe.js";import"./useBaseUiId-CkMH9yD-.js";import"./InternalBackdrop-jlHxzWMV.js";import"./composite-DonlcX2d.js";import"./index-CCIuVkDG.js";import"./index-ca_FFj-2.js";import"./index-BXHIN152.js";import"./useEventCallback-BwoaVtK6.js";import"./SkeletonBar-CAVn6vyu.js";import"./LoadingCell-CKP4jlPw.js";import"./ColumnConfigDialog-BYomLzbh.js";import"./DraggableList-B-3hgDQU.js";import"./Input-CMR8H54J.js";import"./useControlled-CdG4nnce.js";import"./Button-TCKvkXVo.js";import"./small-cross-GY4dRbsc.js";import"./ActionButton-CTgvRmS2.js";import"./Checkbox-DoEkeKgJ.js";import"./minus-DT6t_Ges.js";import"./useValueChanged-He6buwhc.js";import"./caret-down-DuxHbOHU.js";import"./CollapsiblePanel-DBE2cLGj.js";import"./MultiColumnSortDialog-CIbCKakc.js";import"./MenuTrigger-CgSuxCG-.js";import"./CompositeItem-Bmwr_LSB.js";import"./ToolbarRootContext-DoWLArfe.js";import"./getDisabledMountTransitionStyles-DstNhIPq.js";import"./getPseudoElementBounds-DLcI9TnV.js";import"./chevron-down-CFUZHjRb.js";import"./index-C6eraJGX.js";import"./error-Jj0KVLpV.js";import"./BaseCbacBanner-CeKkxLYI.js";import"./makeExternalStore-BwLBTQhL.js";import"./Tooltip-C4c8kUjt.js";import"./PopoverPopup-Rr3LRI2W.js";import"./toNumber-wEHqSwWX.js";import"./useOsdkClient-CB6Tnqyj.js";import"./DropdownField-BpHnvtr-.js";import"./withOsdkMetrics-Cym4Hvb1.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

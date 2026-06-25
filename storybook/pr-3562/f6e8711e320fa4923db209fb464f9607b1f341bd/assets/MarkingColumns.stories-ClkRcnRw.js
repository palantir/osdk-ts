import{f as n,j as t}from"./iframe-zMSgvVTG.js";import{O as p}from"./object-table-C27fLFw5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHmHvHs-.js";import"./Table-XbeVunr5.js";import"./index-xqKU_H0G.js";import"./Dialog-6hx-M78o.js";import"./cross-Cyx-yofV.js";import"./svgIconContainer-HpE8WRxf.js";import"./useBaseUiId-DC4igyPd.js";import"./InternalBackdrop-9qFL_zoA.js";import"./composite-B9H-VkW1.js";import"./index-BGgYI7-3.js";import"./index-Bm8Z36J8.js";import"./index-CYSAVLSr.js";import"./useEventCallback-BAHB6mo0.js";import"./SkeletonBar-BAvT96jt.js";import"./LoadingCell-VIt-botQ.js";import"./ColumnConfigDialog-Yj6w64Ha.js";import"./DraggableList-CDZh4wpr.js";import"./Input-F4oRMikg.js";import"./useControlled-Co5JUK6d.js";import"./Button-D5KttGWB.js";import"./small-cross-dwNhTgiZ.js";import"./ActionButton-B2yeVQIj.js";import"./Checkbox-1CkDRkw0.js";import"./minus-CL7pP9d0.js";import"./useValueChanged-DIFs6OvD.js";import"./caret-down-B_BmVBvP.js";import"./CollapsiblePanel-BntCMBP1.js";import"./MultiColumnSortDialog-CuTVfPTk.js";import"./MenuTrigger-pSQuhJpj.js";import"./CompositeItem-Dg9iP0H2.js";import"./ToolbarRootContext-BPU53F95.js";import"./getDisabledMountTransitionStyles-CAmmLEvG.js";import"./getPseudoElementBounds-CVHeSE6N.js";import"./chevron-down-CS8vsP9D.js";import"./index-TLgZxQeV.js";import"./error-DXd7zKHr.js";import"./BaseCbacBanner-BiY79lSh.js";import"./makeExternalStore-BouUAQTK.js";import"./Tooltip-wG3giV5B.js";import"./PopoverPopup-DSDK1Y_v.js";import"./toNumber-CU5fFCkM.js";import"./useOsdkClient-Dc0meCZj.js";import"./DropdownField-DA55-XvD.js";import"./withOsdkMetrics-BxoJONIr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-Cj5XhV0K.js";import{O as p}from"./object-table-BBAQ4iZ-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CuJrIVwN.js";import"./Table-ZBUw1MDQ.js";import"./index-BUuf6QFI.js";import"./Dialog-H-Z7HMFG.js";import"./cross-ipEa_Fgv.js";import"./svgIconContainer-B4JaXaFc.js";import"./useBaseUiId-EaNfd7E5.js";import"./InternalBackdrop-DAf5h5Ih.js";import"./composite-DourfYiy.js";import"./index-3sVAsvdZ.js";import"./index-KpoTnuXn.js";import"./index-BkAkxe5V.js";import"./useEventCallback-BYNvEizO.js";import"./SkeletonBar-BBF7yRC_.js";import"./LoadingCell-C0oQaK7C.js";import"./ColumnConfigDialog-CurtstEo.js";import"./DraggableList-BUd7BBZo.js";import"./search-8fWNri7B.js";import"./Input-DpvlHRmk.js";import"./useControlled-BqmBP-xo.js";import"./Button-C0iKOXSP.js";import"./small-cross-BTK8lVXe.js";import"./ActionButton-DerugDVR.js";import"./Checkbox-B1PRAVxC.js";import"./minus-Dt5gz2Wp.js";import"./tick-D7-BXBdH.js";import"./useValueChanged-Cr5nNLsd.js";import"./caret-down-BC5F8GeJ.js";import"./CollapsiblePanel-C_C-XrOO.js";import"./MultiColumnSortDialog-CiM3ohMZ.js";import"./MenuTrigger-CMQV_neq.js";import"./CompositeItem-uYx2vIaG.js";import"./ToolbarRootContext-C5rbQ6xe.js";import"./getDisabledMountTransitionStyles-BAqZpw4e.js";import"./getPseudoElementBounds-BYdtGyMi.js";import"./chevron-down-iqXj3iA3.js";import"./index-CfT4_Ghf.js";import"./error-BhxFFmsR.js";import"./BaseCbacBanner-DbbxevJm.js";import"./makeExternalStore-bPaMfi75.js";import"./Tooltip-DyySdUWE.js";import"./PopoverPopup-CM4RQhnl.js";import"./toNumber-BDicVHpS.js";import"./useOsdkClient-Dq181usN.js";import"./DropdownField-B30g9ojY.js";import"./withOsdkMetrics-DEOsKe5t.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

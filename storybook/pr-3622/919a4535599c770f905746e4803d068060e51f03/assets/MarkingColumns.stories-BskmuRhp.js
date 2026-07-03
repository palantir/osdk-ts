import{f as n,j as t}from"./iframe-CTpEiklg.js";import{O as p}from"./object-table-CxmhzVh8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HjgRIjnU.js";import"./Table-sXFfqMbq.js";import"./index-DATAnOu4.js";import"./Dialog-BF0Fq70F.js";import"./cross-BxFgownq.js";import"./svgIconContainer-CJyYhQD8.js";import"./useBaseUiId-BcsqHrcW.js";import"./InternalBackdrop-DCiH6aF7.js";import"./composite-CZSd3WEH.js";import"./index-BnSLvptt.js";import"./index-m0dcwGiE.js";import"./index-Dz6GGSoO.js";import"./useEventCallback-C9arXyxs.js";import"./SkeletonBar-zqoqru-J.js";import"./LoadingCell-Bz8iduPM.js";import"./ColumnConfigDialog-CKA_BlFI.js";import"./DraggableList-CNeBz9S1.js";import"./search-BpimWbbi.js";import"./Input-L37JoD2W.js";import"./useControlled-sCDcn-eS.js";import"./Button-Bs7RHCAx.js";import"./small-cross-uvbbrgQ_.js";import"./ActionButton-D4Qfwb5P.js";import"./Checkbox-CyNW4B03.js";import"./useValueChanged-BSaYvssY.js";import"./CollapsiblePanel-CtamZTRJ.js";import"./MultiColumnSortDialog-DnLs3blt.js";import"./MenuTrigger-BT6Dv8ZX.js";import"./CompositeItem-Cv93BoTy.js";import"./ToolbarRootContext-DGQzkc9X.js";import"./getDisabledMountTransitionStyles-BVMquvev.js";import"./getPseudoElementBounds-CMNL_FYm.js";import"./chevron-down-D0wNoYA6.js";import"./index-BuetERLU.js";import"./error-RWgNzzUN.js";import"./BaseCbacBanner-ChGKA2Cs.js";import"./makeExternalStore-l9Y-9YjF.js";import"./Tooltip-C3jNMgAY.js";import"./PopoverPopup-DbnC6u7q.js";import"./toNumber-Xy9wgEqL.js";import"./useOsdkClient-LDDbIm_C.js";import"./tick-CXMYKt-0.js";import"./DropdownField-BVBQNtLK.js";import"./withOsdkMetrics-ArOoGBh3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

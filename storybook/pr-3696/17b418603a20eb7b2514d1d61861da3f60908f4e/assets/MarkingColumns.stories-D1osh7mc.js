import{f as n,j as t}from"./iframe-Dl62X5ic.js";import{O as p}from"./object-table-DzRA7Mxo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9xagDZWN.js";import"./Table-D9MrzOm8.js";import"./index-r58F3SRz.js";import"./Dialog-CJTpl5lb.js";import"./cross-Dz9bobDU.js";import"./svgIconContainer-CDF0MBN3.js";import"./useBaseUiId-BZmuLScT.js";import"./InternalBackdrop-CUbDm0mk.js";import"./composite-5K-iGM63.js";import"./index-CnSx04IC.js";import"./index-VVu8Dx_K.js";import"./index-C43hAumx.js";import"./useEventCallback-C6wmA8fg.js";import"./SkeletonBar-tl3J6Agl.js";import"./LoadingCell-2Wi9jC-f.js";import"./ColumnConfigDialog-Ctz3fxGV.js";import"./DraggableList-D_k5i4OI.js";import"./search-C2kc8148.js";import"./Input-D7jaCKwy.js";import"./useControlled-DXjG9kLU.js";import"./Button-ChSQqWTn.js";import"./small-cross-XscPhA7b.js";import"./ActionButton-Clvxcs8u.js";import"./Checkbox-Dq_mlxsJ.js";import"./useValueChanged-BDnmFJ1P.js";import"./CollapsiblePanel-6wlgdqmH.js";import"./MultiColumnSortDialog-CsS0qCMr.js";import"./MenuTrigger-E2gBZa0U.js";import"./CompositeItem-9M5fDXNa.js";import"./ToolbarRootContext-Bw5Q4Aok.js";import"./getDisabledMountTransitionStyles-fFVklT7J.js";import"./getPseudoElementBounds-TACN8Mem.js";import"./chevron-down-B-xg4ZpH.js";import"./index-KYGZGSHD.js";import"./error-Bdp21cmx.js";import"./BaseCbacBanner-Bl-_XnGR.js";import"./makeExternalStore-BL6KvBj8.js";import"./Tooltip-Batd7piz.js";import"./PopoverPopup-C0r9zNTS.js";import"./toNumber-CN-GuG5F.js";import"./useOsdkClient-CIHFFW4f.js";import"./tick-BamqF3vZ.js";import"./DropdownField-BN8T2Zfa.js";import"./withOsdkMetrics-Ycu2Npgr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-CYW5dms5.js";import{O as p}from"./object-table-CUqbUV1v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-olK7XJq_.js";import"./Table-oxJcIij4.js";import"./index-BvCsYRnS.js";import"./Dialog-C5eD7p8X.js";import"./cross-C1GpBADO.js";import"./svgIconContainer-Co2y6FkV.js";import"./useBaseUiId-D11MneQi.js";import"./InternalBackdrop-BcF92kYa.js";import"./composite-pL0XyzxB.js";import"./index-qKsGl0BM.js";import"./index-IvQmYIWP.js";import"./index-Cv7h8pdy.js";import"./useEventCallback-BvEcOCdA.js";import"./SkeletonBar-Ajk3Z7S8.js";import"./LoadingCell-oKEwqOJf.js";import"./ColumnConfigDialog-fMTHJiGQ.js";import"./DraggableList-DI1mSYfo.js";import"./search-DyatV9DG.js";import"./Input-275Rxpul.js";import"./useControlled-qlmpqfTt.js";import"./Button-BAONyfmh.js";import"./small-cross-B2EmL1jx.js";import"./ActionButton-CwYo_LDI.js";import"./Checkbox-BRhtm6mX.js";import"./useValueChanged-CqHTYvle.js";import"./CollapsiblePanel-BiuwxjVW.js";import"./MultiColumnSortDialog-Bq8rV5_5.js";import"./MenuTrigger-SiIov3D7.js";import"./CompositeItem-C3KWzmte.js";import"./ToolbarRootContext-CPizw2Pk.js";import"./getDisabledMountTransitionStyles-HZk_UelZ.js";import"./getPseudoElementBounds-CxDcIV1b.js";import"./chevron-down-3TYRtgLT.js";import"./index-Bf5Jk6iU.js";import"./error-B205EXeR.js";import"./BaseCbacBanner-UO9ZxyiS.js";import"./makeExternalStore-Bi9cPtCd.js";import"./Tooltip-CG7TR7jA.js";import"./PopoverPopup-BdlDhbcI.js";import"./toNumber-CqOrSTkx.js";import"./useOsdkClient-B1xHsvfR.js";import"./tick-CgjDXCqf.js";import"./DropdownField-DMS8Je6P.js";import"./withOsdkMetrics-Bs9W2n9P.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

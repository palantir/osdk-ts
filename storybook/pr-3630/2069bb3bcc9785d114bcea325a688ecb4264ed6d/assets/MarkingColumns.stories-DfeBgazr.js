import{f as n,j as t}from"./iframe-CnhU1nHR.js";import{O as p}from"./object-table-Bt_IbA25.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GzDtQ0-b.js";import"./Table-D-DrJ4T0.js";import"./index-LSdFXBcx.js";import"./Dialog-C-NCbsPL.js";import"./cross-AF74lAsG.js";import"./svgIconContainer-CnzdGOux.js";import"./useBaseUiId-DISFbcLc.js";import"./InternalBackdrop-D08Fe6pv.js";import"./composite-CRP8Bgs-.js";import"./index-CZScCUho.js";import"./index-BFq7VPlT.js";import"./index-BYbuWfGw.js";import"./useEventCallback-BNS7Fva3.js";import"./SkeletonBar-COEqcDk-.js";import"./LoadingCell-Bq_UXcIo.js";import"./ColumnConfigDialog-CwxehZ_D.js";import"./DraggableList-CObSqffM.js";import"./search-DaoNK__e.js";import"./Input-Cln5VL6O.js";import"./useControlled-BKkNpVJ6.js";import"./Button-BS0XXroh.js";import"./small-cross-YirVPBrd.js";import"./ActionButton-wSt8k-cS.js";import"./Checkbox-ClhDSfVk.js";import"./useValueChanged-Bkalbgbc.js";import"./CollapsiblePanel-Bymuua8t.js";import"./MultiColumnSortDialog-Cw5G1aTv.js";import"./MenuTrigger-DF_ig9Om.js";import"./CompositeItem-6_jT91VN.js";import"./ToolbarRootContext-CdyOlu6q.js";import"./getDisabledMountTransitionStyles-DHUmmEUy.js";import"./getPseudoElementBounds-B8cWNy0x.js";import"./chevron-down-C1niUM8q.js";import"./index-Ctb2owto.js";import"./error-D9PoFvRx.js";import"./BaseCbacBanner-4JfqLnd_.js";import"./makeExternalStore-B2OP_pNO.js";import"./Tooltip-Bkv-k_mt.js";import"./PopoverPopup-KM_3rwya.js";import"./toNumber-B4E6r5vU.js";import"./useOsdkClient-RDG_xxHE.js";import"./tick-DNNBaY_A.js";import"./DropdownField-DLzSAIAY.js";import"./withOsdkMetrics-C_OY6Uv4.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

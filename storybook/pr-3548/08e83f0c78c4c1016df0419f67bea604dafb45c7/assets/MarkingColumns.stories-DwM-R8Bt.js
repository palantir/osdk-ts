import{f as n,j as t}from"./iframe-83F8flfy.js";import{O as p}from"./object-table-BbM7PmGp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_s0NEdB.js";import"./Table-B5R8ec5Z.js";import"./index-DfkZKDju.js";import"./Dialog-D6h3g271.js";import"./cross-DXerdfS4.js";import"./svgIconContainer-DIKDfch6.js";import"./useBaseUiId-9G_Jb_68.js";import"./InternalBackdrop-BULytgl2.js";import"./composite-BuuHAsAY.js";import"./index-DKygYrjw.js";import"./index-ZIuRylts.js";import"./index-D_LTAE9d.js";import"./useEventCallback-BdkPmNKP.js";import"./SkeletonBar-DzYvI18U.js";import"./LoadingCell-DaZLPR0S.js";import"./ColumnConfigDialog-DVve4CXr.js";import"./DraggableList-B7umXzDM.js";import"./Input-DEEiLvzF.js";import"./useControlled-BFnd4CoS.js";import"./Button-BsrKZpMb.js";import"./small-cross-lAnVDEu9.js";import"./ActionButton-CPXXWY-m.js";import"./Checkbox-DTr9soov.js";import"./minus-B2Z1geiR.js";import"./useValueChanged-D67bfJ7F.js";import"./caret-down-Db-Ew4XC.js";import"./CollapsiblePanel-BmTf3Xsn.js";import"./MultiColumnSortDialog-DpK_Qpty.js";import"./MenuTrigger-Cu1EVqpx.js";import"./CompositeItem-ALHHMHbO.js";import"./ToolbarRootContext-BsBzW-qT.js";import"./getDisabledMountTransitionStyles-mILr8dqM.js";import"./getPseudoElementBounds-BInUCyfn.js";import"./chevron-down-C5IkZ22r.js";import"./index-C12wJsS5.js";import"./error-DQEmY2MR.js";import"./BaseCbacBanner-BwEIfYMh.js";import"./makeExternalStore-tIcgo_v2.js";import"./Tooltip-ZEfULwgM.js";import"./PopoverPopup-CNsKMuUC.js";import"./toNumber-CX2bVpwy.js";import"./useOsdkClient-Bkjj3fZX.js";import"./DropdownField-BFOutgfM.js";import"./withOsdkMetrics-VwwOgy9O.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

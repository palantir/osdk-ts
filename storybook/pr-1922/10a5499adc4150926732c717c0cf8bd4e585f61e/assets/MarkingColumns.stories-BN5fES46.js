import{f as n,j as t}from"./iframe-C4m6yQsv.js";import{O as p}from"./object-table-DkC1s7t8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CuxyfXVA.js";import"./Table-BxAn4_zP.js";import"./index-DyMQoOtV.js";import"./Dialog-CHGiik9R.js";import"./cross-Ct9u-56A.js";import"./svgIconContainer-fmHlBOE6.js";import"./useBaseUiId-D4_hNcWH.js";import"./InternalBackdrop-BFj-zEQI.js";import"./composite-BqgmbAEr.js";import"./index-DT0d2Au3.js";import"./index-DB4W279z.js";import"./index-DgTkgUfC.js";import"./useEventCallback-f57ZkCpZ.js";import"./SkeletonBar-CmI-7GKg.js";import"./LoadingCell-CNsctgbs.js";import"./ColumnConfigDialog-DNmIoqXq.js";import"./DraggableList-Ch7yir43.js";import"./search-BBAdaena.js";import"./Input-BG60qdSn.js";import"./useControlled-CPFaS_uV.js";import"./Button-CATJK-Xf.js";import"./small-cross-BH_TqGXP.js";import"./ActionButton-CVSdic0Q.js";import"./Checkbox-Cug0HN2Z.js";import"./minus-BBznawIc.js";import"./tick-CcRfX6tV.js";import"./useValueChanged-DYLgfaWm.js";import"./caret-down-BX3jhWWD.js";import"./CollapsiblePanel-dli-Jsw1.js";import"./MultiColumnSortDialog-CDDVHr9_.js";import"./MenuTrigger-BZ9zS0Cn.js";import"./CompositeItem-BVUgV2up.js";import"./ToolbarRootContext-RUoSNFVw.js";import"./getDisabledMountTransitionStyles-DDt1oFLw.js";import"./getPseudoElementBounds-dNBkRquk.js";import"./chevron-down-CePYGEom.js";import"./index-CU_hqNfG.js";import"./error-C4J5qiGB.js";import"./BaseCbacBanner-C0P-tpCf.js";import"./makeExternalStore-DBeG9ghW.js";import"./Tooltip-CsfL_mPY.js";import"./PopoverPopup-Dv26rwKW.js";import"./toNumber-B41ELk2M.js";import"./useOsdkClient-DO4WEftM.js";import"./DropdownField-CIh6r8bo.js";import"./withOsdkMetrics-CySr3Bjx.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

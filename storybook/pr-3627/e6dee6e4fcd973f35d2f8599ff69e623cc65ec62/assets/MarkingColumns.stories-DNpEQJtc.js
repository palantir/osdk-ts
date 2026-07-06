import{f as n,j as t}from"./iframe-C3-rU_hh.js";import{O as p}from"./object-table-DwF6CfAf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPEfE7qD.js";import"./Table-CIzYHItc.js";import"./index-BYw8aiNR.js";import"./Dialog-D1SRghRx.js";import"./cross-D3LuiZ9e.js";import"./svgIconContainer-Cig8za8A.js";import"./useBaseUiId-DsMPEtCd.js";import"./InternalBackdrop-CmFls3RW.js";import"./composite-DlMuq_u9.js";import"./index-C3cDpDsp.js";import"./index-BBnutprT.js";import"./index-CLnv_GXS.js";import"./useEventCallback-DuRYJfDp.js";import"./SkeletonBar-Dx9IunN5.js";import"./LoadingCell-DT1r7Ymd.js";import"./ColumnConfigDialog-DQIrwnoH.js";import"./DraggableList-DtNy0-LC.js";import"./search-Da5SRxod.js";import"./Input-DNg1rTaI.js";import"./useControlled-CcPQuWHH.js";import"./Button-CMSgPGf_.js";import"./small-cross-D92nxudb.js";import"./ActionButton-Cemzb9_o.js";import"./Checkbox-dkfaSCXi.js";import"./useValueChanged-ClsbHmbg.js";import"./CollapsiblePanel-tBBn9vr0.js";import"./MultiColumnSortDialog-BY4ozS6L.js";import"./MenuTrigger-DDJ75-Eq.js";import"./CompositeItem-DY0mVT1W.js";import"./ToolbarRootContext-B--QW8q6.js";import"./getDisabledMountTransitionStyles-Dm6C5eJD.js";import"./getPseudoElementBounds-BHVPBPHA.js";import"./chevron-down-C9aYBCzt.js";import"./index-DEhiYS1G.js";import"./error-CM0DFADk.js";import"./BaseCbacBanner-BvuDAA7p.js";import"./makeExternalStore-Co0uKMwo.js";import"./Tooltip-Bn2yliUh.js";import"./PopoverPopup-iQJDX-lu.js";import"./toNumber-CwcJ_AvI.js";import"./useOsdkClient-Cr8oRlLX.js";import"./tick-Cw9BAyOn.js";import"./DropdownField-C5zO2fvi.js";import"./withOsdkMetrics-CIwTxNDs.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

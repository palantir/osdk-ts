import{f as n,j as t}from"./iframe-DKbJD91Q.js";import{O as p}from"./object-table-Bz8vFHVi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqUkcmYs.js";import"./Table-C2uh5p9N.js";import"./index-Bngq8Vi1.js";import"./Dialog-zV6aNcse.js";import"./cross-DbPHs0j6.js";import"./svgIconContainer-4juTmAGa.js";import"./useBaseUiId-BYQ6OaKE.js";import"./InternalBackdrop-DHhYXE8o.js";import"./composite-B4mRtSK_.js";import"./index-ClmDs36c.js";import"./index-qEUIoyPR.js";import"./index-Co_s3NbU.js";import"./useEventCallback-DP-pMMBQ.js";import"./SkeletonBar-s7R9-r-5.js";import"./LoadingCell-DEXZV4Ns.js";import"./ColumnConfigDialog-C-0sEpbQ.js";import"./DraggableList-DyZQev71.js";import"./search-BII4tWc4.js";import"./Input-Cse94nI4.js";import"./useControlled-Cz4_lCzM.js";import"./Button-BKABdA37.js";import"./small-cross-B8_kEvwb.js";import"./ActionButton-DtmjBSER.js";import"./Checkbox-CyNeM_l2.js";import"./useValueChanged-6tNJJjQc.js";import"./CollapsiblePanel-DbXKH0s3.js";import"./MultiColumnSortDialog-B5cdBjRT.js";import"./MenuTrigger-XDvFLA6T.js";import"./CompositeItem-BeSf6rF_.js";import"./ToolbarRootContext-nYK4s239.js";import"./getDisabledMountTransitionStyles-DxJPU7-_.js";import"./getPseudoElementBounds-WskQBVr2.js";import"./chevron-down-CO9asE2V.js";import"./index-CpBu1bAg.js";import"./error-5yLXSKBF.js";import"./BaseCbacBanner--QOzANdB.js";import"./makeExternalStore-B_vkRC4b.js";import"./Tooltip-DSkkwxAT.js";import"./PopoverPopup-yMSy_0W6.js";import"./toNumber-CVka2v-_.js";import"./useOsdkClient-RBVhBv2k.js";import"./tick-CW_kQbdt.js";import"./DropdownField-CG6dkBaP.js";import"./withOsdkMetrics-CuRRWFHy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-BSDg5MOj.js";import{O as p}from"./object-table-CKmdx1SH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhhkxHce.js";import"./Table-CdNlcId-.js";import"./index-ChJoNBQZ.js";import"./Dialog-RZY7Myu9.js";import"./cross-GXuD0dq5.js";import"./svgIconContainer-BNfBxi5_.js";import"./useBaseUiId-B4d-vjpF.js";import"./InternalBackdrop-Ctu21wJT.js";import"./composite-Cp97NJVX.js";import"./index-BLIkDC4O.js";import"./index-gVxlpqjD.js";import"./index-CleziYPI.js";import"./useEventCallback-BkZhpuGk.js";import"./SkeletonBar-0Tt3lfEj.js";import"./LoadingCell-CxOY2vLw.js";import"./ColumnConfigDialog-DC5NTg-B.js";import"./DraggableList-DAcTSFqG.js";import"./search-BJIbBP2L.js";import"./Input-BHM1pTwl.js";import"./useControlled-BhwYl-lI.js";import"./Button-Db9WTFhm.js";import"./small-cross-CGlGMfPU.js";import"./ActionButton-E-tx4Y2R.js";import"./Checkbox-DNK2vdeN.js";import"./minus-WeODG8f9.js";import"./tick-DuGVnXdV.js";import"./useValueChanged-DgCdUxrR.js";import"./caret-down-CG5oCyvp.js";import"./CollapsiblePanel-C7Y7Tl72.js";import"./MultiColumnSortDialog-CWx2HwQs.js";import"./MenuTrigger-BGRyP-X4.js";import"./CompositeItem-DB7wPSIT.js";import"./ToolbarRootContext-BSJASkqf.js";import"./getDisabledMountTransitionStyles-RCMSVhJm.js";import"./getPseudoElementBounds-BqetYsh2.js";import"./chevron-down-CKEX1Ln_.js";import"./index-DJgtesb4.js";import"./error-i2Xe8-cu.js";import"./BaseCbacBanner-ChVgXezE.js";import"./makeExternalStore-DmzDi4Tz.js";import"./Tooltip-BnPEWasX.js";import"./PopoverPopup-_jhIb9C8.js";import"./toNumber-ZkCNquOk.js";import"./useOsdkClient-D3GIeLvA.js";import"./DropdownField-2K6H3KSc.js";import"./withOsdkMetrics-DUXW6H-S.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-D4v6mEn1.js";import{O as p}from"./object-table-D33tr1XO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cbRsP1zf.js";import"./Table-OE_i_xPX.js";import"./index-BLDi9A8o.js";import"./Dialog-DR1GKnzg.js";import"./cross-BB7vr1gI.js";import"./svgIconContainer-mFWmX3qp.js";import"./useBaseUiId-CX8CHixx.js";import"./InternalBackdrop-74vI1ez0.js";import"./composite-DD0mt_Ur.js";import"./index-CdI-0PmB.js";import"./index-BLke2j3w.js";import"./index-CZIkCEvv.js";import"./useEventCallback-DvotY5zK.js";import"./SkeletonBar-CI_kXOPs.js";import"./LoadingCell-DKefoLG9.js";import"./ColumnConfigDialog-spNIj7WG.js";import"./DraggableList-DPm_zsAi.js";import"./search-BcKgp1Di.js";import"./Input-D7akk8dr.js";import"./useControlled-BKDEzTh5.js";import"./Button-DQB5SbCy.js";import"./small-cross-B1fDr7ZV.js";import"./ActionButton-DVBYSDCI.js";import"./Checkbox-BLUL9Ldz.js";import"./minus-DhWxclpl.js";import"./tick-BlRrWYH0.js";import"./useValueChanged-rynAGIrE.js";import"./caret-down-C9R4WHQ2.js";import"./CollapsiblePanel-BJCLgdcx.js";import"./MultiColumnSortDialog-BFNKK5wW.js";import"./MenuTrigger-BwQ0OLvk.js";import"./CompositeItem-GxHcENsz.js";import"./ToolbarRootContext-BAVjkYc-.js";import"./getDisabledMountTransitionStyles-Bj4vjgLE.js";import"./getPseudoElementBounds-Bj01wAIb.js";import"./chevron-down-BeDHxKfS.js";import"./index-CoiNuHwc.js";import"./error-LJVwwXWD.js";import"./BaseCbacBanner-B8mQkjTp.js";import"./makeExternalStore-DboLJKQP.js";import"./Tooltip-tolnLG8O.js";import"./PopoverPopup-DQmN9__a.js";import"./toNumber-DCSkxSp7.js";import"./useOsdkClient-BXpTsNKc.js";import"./DropdownField-D6TGd-3U.js";import"./withOsdkMetrics-D-aEMXQf.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

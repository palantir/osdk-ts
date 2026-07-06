import{f as n,j as t}from"./iframe-DPQWsr1M.js";import{O as p}from"./object-table-F349_EHD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-o6KnyvDN.js";import"./Table-B_-DpvEY.js";import"./index-1D96oTTR.js";import"./Dialog-CeKQqDit.js";import"./cross-DuB_0bGf.js";import"./svgIconContainer-DIYWApzK.js";import"./useBaseUiId-Boyfwhpa.js";import"./InternalBackdrop-Dve4kKmR.js";import"./composite-CRXaqm95.js";import"./index-BoQJKO6s.js";import"./index-DX8vE8bR.js";import"./index-DphPtI9O.js";import"./useEventCallback-VIPtdgLJ.js";import"./SkeletonBar-jfrV_xdX.js";import"./LoadingCell-CMd-_e4c.js";import"./ColumnConfigDialog-2h1LjP2L.js";import"./DraggableList-vrCZ0rif.js";import"./search-whg2w3Mu.js";import"./Input-B3p7mp8A.js";import"./useControlled-cAinZOSm.js";import"./Button-bVhb01O1.js";import"./small-cross-IApkH4qL.js";import"./ActionButton-C6F9nGNw.js";import"./Checkbox-CBUYqYdF.js";import"./minus-CNCgh7Lw.js";import"./tick-UlujjfRs.js";import"./useValueChanged-Dkyk0U6p.js";import"./caret-down-t9cfxrIc.js";import"./CollapsiblePanel-CBTzAcIX.js";import"./MultiColumnSortDialog-COCk6bEC.js";import"./MenuTrigger-CMUOm0_1.js";import"./CompositeItem-DKs-nDTm.js";import"./ToolbarRootContext-DgzoeN19.js";import"./getDisabledMountTransitionStyles-9zJVlt-G.js";import"./getPseudoElementBounds-B7JVPAez.js";import"./chevron-down-D17DM69_.js";import"./index-BMd1dmez.js";import"./error-CWxwFwqY.js";import"./BaseCbacBanner-CCuos3gc.js";import"./makeExternalStore-CJXnY_nB.js";import"./Tooltip-CpJEa-q8.js";import"./PopoverPopup-Cc6DL6DZ.js";import"./toNumber-Cgalrlu3.js";import"./useOsdkClient-VKuPN8FR.js";import"./DropdownField-CExAfDQ1.js";import"./withOsdkMetrics-DA_bV2kQ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

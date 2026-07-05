import{f as n,j as t}from"./iframe-DI8xhFrw.js";import{O as p}from"./object-table-B0rkeufA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-pfBTG-5O.js";import"./Table-B_4GYhBS.js";import"./index-BlwoNqFW.js";import"./Dialog-Gqdl29xp.js";import"./cross-BKLrYLNV.js";import"./svgIconContainer-DWW9_GwS.js";import"./useBaseUiId-CYDaYSO2.js";import"./InternalBackdrop-BHxshyaU.js";import"./composite-B_axicrx.js";import"./index-0sPpJHYZ.js";import"./index-BL6TyxlU.js";import"./index-BIxwBA2f.js";import"./useEventCallback-B-39BF4z.js";import"./SkeletonBar-BdSipkvZ.js";import"./LoadingCell-hJiZLC_x.js";import"./ColumnConfigDialog-BDNoNfNC.js";import"./DraggableList-CxCpfB84.js";import"./search-CUWsefYA.js";import"./Input-CwxWxH0R.js";import"./useControlled-JdJ-Acsj.js";import"./Button-HfWHmORN.js";import"./small-cross-ZWTcNBWJ.js";import"./ActionButton-LDlNjsuY.js";import"./Checkbox-D3z6CwV2.js";import"./useValueChanged-B0cbGSzo.js";import"./CollapsiblePanel-D1YXQhmp.js";import"./MultiColumnSortDialog-B7bMw2KI.js";import"./MenuTrigger-R6-MNBzo.js";import"./CompositeItem-D3tRsSzK.js";import"./ToolbarRootContext-BGS2qhNp.js";import"./getDisabledMountTransitionStyles-BLbjqFb1.js";import"./getPseudoElementBounds-ChL6qpOy.js";import"./chevron-down-CdEihpC_.js";import"./index-y9pWUITA.js";import"./error-CYTlXn9M.js";import"./BaseCbacBanner-DvFozGGc.js";import"./makeExternalStore-BMUU3lQI.js";import"./Tooltip-C7FQpoMb.js";import"./PopoverPopup-CfBOZqOc.js";import"./toNumber-_ubCicVm.js";import"./useOsdkClient-ZrGTxnGp.js";import"./tick-MzghAii9.js";import"./DropdownField-fYBw_XvG.js";import"./withOsdkMetrics-CaL8dOC1.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

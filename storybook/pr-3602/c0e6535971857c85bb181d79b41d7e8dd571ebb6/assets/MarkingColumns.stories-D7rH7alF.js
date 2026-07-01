import{f as n,j as t}from"./iframe-XVdSRdYM.js";import{O as p}from"./object-table-CEL2rgG7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5LuScNJD.js";import"./Table-DWAifrPh.js";import"./index-C2ivEAZV.js";import"./Dialog-BepDqyHC.js";import"./cross-CzyEZNkf.js";import"./svgIconContainer-uLfsWncC.js";import"./useBaseUiId-Dlt6DqI4.js";import"./InternalBackdrop-DbMODp_Y.js";import"./composite-DBuUY9ee.js";import"./index-Cfi10bou.js";import"./index-QGskbwQm.js";import"./index-CykSWG_i.js";import"./useEventCallback-C4-tGlAr.js";import"./SkeletonBar-DvnTxtJ5.js";import"./LoadingCell--3ipj902.js";import"./ColumnConfigDialog-Cdr8s9zJ.js";import"./DraggableList-Bpwfcb0p.js";import"./search-BJXk2GGs.js";import"./Input-D4RzPdfS.js";import"./useControlled-CX3K2Yu8.js";import"./Button-BEC_kD0_.js";import"./small-cross-DGMs2rNv.js";import"./ActionButton-ChhRQGCN.js";import"./Checkbox-gGN1HW6y.js";import"./minus-DR_EdrwW.js";import"./tick-B4Ri8ZTT.js";import"./useValueChanged-ls-8OXwm.js";import"./caret-down-B01Q-F3N.js";import"./CollapsiblePanel-CCcYfQOY.js";import"./MultiColumnSortDialog-DdCWgxWS.js";import"./MenuTrigger-CyNntqRn.js";import"./CompositeItem-C9ApRMR9.js";import"./ToolbarRootContext-DtMV81G6.js";import"./getDisabledMountTransitionStyles-BmGctt2H.js";import"./getPseudoElementBounds-vxzaeGmR.js";import"./chevron-down-C6RPEPY3.js";import"./index-bVkwzNKK.js";import"./error-BrefKBay.js";import"./BaseCbacBanner-Drtfo7dh.js";import"./makeExternalStore-BtJEFL-1.js";import"./Tooltip-DSLwrZu_.js";import"./PopoverPopup-iRAj8-GM.js";import"./toNumber-NN0hbuhN.js";import"./useOsdkClient-MoMpYDqn.js";import"./DropdownField-CtX7FF47.js";import"./withOsdkMetrics-CL3fvcxx.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

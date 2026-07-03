import{f as n,j as t}from"./iframe-p490nonH.js";import{O as p}from"./object-table-DuKryOyy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIcftnno.js";import"./Table-BNQvytfP.js";import"./index-52NS_aRn.js";import"./Dialog-CZn4i_u6.js";import"./cross-BDCEJ8IA.js";import"./svgIconContainer-C6RHrBFn.js";import"./useBaseUiId-VK_cNWma.js";import"./InternalBackdrop-DyqH1FTO.js";import"./composite-aw4zcgXT.js";import"./index-PVazNw2_.js";import"./index-pcbqRC2-.js";import"./index-BeIFyu_c.js";import"./useEventCallback-CXivFiSR.js";import"./SkeletonBar-FBAzzry5.js";import"./LoadingCell-DgSHPPO-.js";import"./ColumnConfigDialog-CLr6tv5_.js";import"./DraggableList-1Duf6TMs.js";import"./search-jVbUyNWV.js";import"./Input-YQC5y0gd.js";import"./useControlled-BWvN-8Kn.js";import"./Button-CG83dhiX.js";import"./small-cross-Dgysjyys.js";import"./ActionButton-C9TYqjaG.js";import"./Checkbox-k_6b16QU.js";import"./minus-DGZK7YQd.js";import"./tick-CKS_prOE.js";import"./useValueChanged-CsHFkbAL.js";import"./caret-down-CJmZiIQv.js";import"./CollapsiblePanel-DdRxBGRF.js";import"./MultiColumnSortDialog-CRPZ5Qku.js";import"./MenuTrigger-Dtk3Y48B.js";import"./CompositeItem-B5C5mptb.js";import"./ToolbarRootContext-C9wWIi1V.js";import"./getDisabledMountTransitionStyles-BrNcqc8B.js";import"./getPseudoElementBounds-TUp9sTIF.js";import"./chevron-down-DQOkHGl7.js";import"./index-BVCoQIzt.js";import"./error-DmWs_i4H.js";import"./BaseCbacBanner-CQPiIMUq.js";import"./makeExternalStore-CDK13bzX.js";import"./Tooltip-USZfb5_R.js";import"./PopoverPopup-NperHhXn.js";import"./toNumber-sRG4roAN.js";import"./useOsdkClient-CwmShQs7.js";import"./DropdownField-Cd0OsfLP.js";import"./withOsdkMetrics-xECZZGPA.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

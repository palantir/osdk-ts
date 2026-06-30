import{f as n,j as t}from"./iframe-CLWfP4z2.js";import{O as p}from"./object-table-CktdgTKx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzrZStXC.js";import"./Table-en3Z-6O5.js";import"./index-BgBB7Z-e.js";import"./Dialog-BQ984uqG.js";import"./cross-C0Wr3hwd.js";import"./svgIconContainer-D69P_S4a.js";import"./useBaseUiId-C9NJB7nL.js";import"./InternalBackdrop-DxEooAZj.js";import"./composite-h9wyn-2l.js";import"./index-Chb7ww3q.js";import"./index-Bl6F4jYh.js";import"./index-B5mcrY2z.js";import"./useEventCallback-Cxz1JUxO.js";import"./SkeletonBar-BqAhseA4.js";import"./LoadingCell-slU_Veea.js";import"./ColumnConfigDialog-DMyoqLmI.js";import"./DraggableList-CvMjs_ud.js";import"./search-ODINC4xY.js";import"./Input-zzQ_1vwt.js";import"./useControlled-Bwb3lJEh.js";import"./Button-Bn4klNWu.js";import"./small-cross-DkXUHE_R.js";import"./ActionButton-BNGXvoI9.js";import"./Checkbox-B5HMcoh0.js";import"./minus-CmYTHzM7.js";import"./tick-CfFP_Gq6.js";import"./useValueChanged-DL4Bu8cu.js";import"./caret-down-CpVK74Eq.js";import"./CollapsiblePanel-DROaDhQ_.js";import"./MultiColumnSortDialog-CLYv0Bqc.js";import"./MenuTrigger-Div1oUqI.js";import"./CompositeItem-DYrmc6lS.js";import"./ToolbarRootContext-BmDtDt78.js";import"./getDisabledMountTransitionStyles-DOrVjuHn.js";import"./getPseudoElementBounds-I4YMh8Gs.js";import"./chevron-down-C1Pfmq_D.js";import"./index-Cm9O_44o.js";import"./error-Dy5ltek9.js";import"./BaseCbacBanner-hLGnPlc-.js";import"./makeExternalStore-Wc8F_bcH.js";import"./Tooltip-sihSziLo.js";import"./PopoverPopup-0gcjn5QI.js";import"./toNumber-DDw3dFfL.js";import"./useOsdkClient-Cg_T5tHQ.js";import"./DropdownField-Bc1UwhmK.js";import"./withOsdkMetrics-1Ht0Uux3.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

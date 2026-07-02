import{f as n,j as t}from"./iframe-xD6sf6k4.js";import{O as p}from"./object-table-DVB4Bk95.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HW58aP8R.js";import"./Table-DrjNK8OL.js";import"./index-DtdAuxfV.js";import"./Dialog-B9UQmfAp.js";import"./cross-Cvsl_xC_.js";import"./svgIconContainer-DmEqQ_Wj.js";import"./useBaseUiId-Bn7EX6ww.js";import"./InternalBackdrop-NMOQ6tS1.js";import"./composite-DHb3uOJp.js";import"./index-B-QfgGlp.js";import"./index-jvO5ooba.js";import"./index-CI6DEteu.js";import"./useEventCallback-DYrOvyll.js";import"./SkeletonBar-B5zvyvAh.js";import"./LoadingCell-Dpo_umd7.js";import"./ColumnConfigDialog-B_8LYjgq.js";import"./DraggableList-D02au4vf.js";import"./search-BQvRChSD.js";import"./Input-C13HrPBp.js";import"./useControlled-DAIMP-j7.js";import"./Button-nFnIYVNE.js";import"./small-cross-BwxGNYtg.js";import"./ActionButton-BZ3WeiyS.js";import"./Checkbox-BsRUyQv0.js";import"./minus-Bl9AIG94.js";import"./tick-BvA3cleu.js";import"./useValueChanged-BzgxGiRD.js";import"./caret-down-4prQybrq.js";import"./CollapsiblePanel-Dh5xqumC.js";import"./MultiColumnSortDialog-m8L7L-sg.js";import"./MenuTrigger-BUhUUB8B.js";import"./CompositeItem-CGvSyO7B.js";import"./ToolbarRootContext-Cy_oRtJN.js";import"./getDisabledMountTransitionStyles-BgvRCUbM.js";import"./getPseudoElementBounds-Bs5GXUW2.js";import"./chevron-down-B5yKIUvO.js";import"./index-CGRgRUDz.js";import"./error-DASnQSmm.js";import"./BaseCbacBanner-Bc9ys7eF.js";import"./makeExternalStore-DBMWsle9.js";import"./Tooltip-hxZ2Jy5I.js";import"./PopoverPopup-BpnSUg7v.js";import"./toNumber-DbuJCFi5.js";import"./useOsdkClient-DXPMskX9.js";import"./DropdownField-Dw6SI60m.js";import"./withOsdkMetrics-CSVQUtbv.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

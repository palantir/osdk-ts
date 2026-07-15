import{f as n,j as t}from"./iframe-Br9LRUXS.js";import{O as p}from"./object-table-Ba9dwImi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_qrdcre.js";import"./Table-D2b2fni6.js";import"./index-CZz-vvhK.js";import"./Dialog-BAVvfVz5.js";import"./cross-k5kdi8c7.js";import"./svgIconContainer-Cw_Fe7ch.js";import"./useBaseUiId-BADWPJVf.js";import"./InternalBackdrop-PRSBTaEj.js";import"./composite-BvtS-MCL.js";import"./index-BMkqW9Ai.js";import"./index-B05D-_kz.js";import"./index-CGMzlPa0.js";import"./useEventCallback-CxNSVsWt.js";import"./SkeletonBar-BPPe8Dwi.js";import"./LoadingCell-C0ox8oD7.js";import"./ColumnConfigDialog-ydmSWR4T.js";import"./DraggableList-DIFshxrt.js";import"./search-CyHs5wWO.js";import"./Input-B5eDlNiP.js";import"./useControlled-zE00DqWa.js";import"./Button-BwHiS4QI.js";import"./small-cross-BDIclt6W.js";import"./ActionButton-BQDjoK39.js";import"./Checkbox-CYi6lRFg.js";import"./useValueChanged-DmdwyfB6.js";import"./CollapsiblePanel-C70k5KlF.js";import"./MultiColumnSortDialog-BPlkYAys.js";import"./MenuTrigger-tVY73qPz.js";import"./CompositeItem-BUq-oaxe.js";import"./ToolbarRootContext-CYgMjT8_.js";import"./getDisabledMountTransitionStyles-xzC4aXXo.js";import"./getPseudoElementBounds-4_NOdflx.js";import"./chevron-down-fhSKKc30.js";import"./index-BMxCDFSh.js";import"./error-BYqIwzq6.js";import"./BaseCbacBanner-BoDuATLr.js";import"./makeExternalStore-KBYueQvT.js";import"./Tooltip-BSGxuAlV.js";import"./PopoverPopup-KcHXGeVb.js";import"./toNumber-DkwHSs3u.js";import"./useOsdkClient-Cl8usTaN.js";import"./tick-gYk_N5jC.js";import"./DropdownField-D5TyrI6_.js";import"./withOsdkMetrics-C5sh7xBo.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

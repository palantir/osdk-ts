import{f as n,j as t}from"./iframe-DmanCMEI.js";import{O as p}from"./object-table-BOnj1K9n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-doTXSS6w.js";import"./Table-Bm95r9Jc.js";import"./index-BC1LLXL5.js";import"./Dialog-CyBjPatv.js";import"./cross-gbzL7JWR.js";import"./svgIconContainer-Cvoi4_Sl.js";import"./useBaseUiId-D1zBL0DS.js";import"./InternalBackdrop-Dyb5X86C.js";import"./composite-CxTPo-Sh.js";import"./index-CcBFqiWq.js";import"./index-CfJBzqcM.js";import"./index-7KVEeB0f.js";import"./useEventCallback-DBtfOhpr.js";import"./SkeletonBar-DPIBNUuJ.js";import"./LoadingCell-BIKt8H5R.js";import"./ColumnConfigDialog-MDILY6fY.js";import"./DraggableList-B-jNLDQZ.js";import"./search-DuDCg1Pk.js";import"./Input-BJ05cG_c.js";import"./useControlled-ACJqipIm.js";import"./Button-4qJso63q.js";import"./small-cross-CeY0DZ3A.js";import"./ActionButton-CaVyZJEB.js";import"./Checkbox-hMBSOyWI.js";import"./useValueChanged-D72XIVjX.js";import"./CollapsiblePanel-CqbNntZ_.js";import"./MultiColumnSortDialog-IooCE7Ih.js";import"./MenuTrigger-BArjN5Qq.js";import"./CompositeItem-ZWcQiJwA.js";import"./ToolbarRootContext-BAUHoLHk.js";import"./getDisabledMountTransitionStyles-KhAyXbUC.js";import"./getPseudoElementBounds-ncoZeIgg.js";import"./chevron-down-DR3bdEe4.js";import"./index-IbUXuY6k.js";import"./error-Bw-mjGsQ.js";import"./BaseCbacBanner-BAlDvOtg.js";import"./makeExternalStore-34eYA6eS.js";import"./Tooltip-BGgLPuDf.js";import"./PopoverPopup-BvAwckT4.js";import"./toNumber-Cig2uH6n.js";import"./useOsdkClient-BkKhyzRZ.js";import"./tick-D4FhYBi9.js";import"./DropdownField-DuYJGLJk.js";import"./withOsdkMetrics-CTv8KbCs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-DCqHKbrB.js";import{O as p}from"./object-table-Dp1ctJWL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BpC0Xix4.js";import"./Table-NOB19mqr.js";import"./index-DksTdEAE.js";import"./Dialog-VevNUS4m.js";import"./cross-CU1mVuqS.js";import"./svgIconContainer-C_r3XmUZ.js";import"./useBaseUiId-DneFdTlE.js";import"./InternalBackdrop-DR_kFkG7.js";import"./composite-CQu6WcFD.js";import"./index-BDBkMqeU.js";import"./index-Cg1yXLif.js";import"./index-7Y2zG3k5.js";import"./useEventCallback-Dv-E5PJ0.js";import"./SkeletonBar-D2cCx3SW.js";import"./LoadingCell-CxWGnSSd.js";import"./ColumnConfigDialog-BWmfjp0G.js";import"./DraggableList-lAAucr3g.js";import"./search-CdpFNP5g.js";import"./Input-D4PweGk6.js";import"./useControlled-DaKi3qlI.js";import"./Button-yOAN8cB8.js";import"./small-cross-D3vT9YkD.js";import"./ActionButton-C02Ldtzd.js";import"./Checkbox-BEhqJdwX.js";import"./useValueChanged-DKXFFzAk.js";import"./CollapsiblePanel-CMm7MsDp.js";import"./MultiColumnSortDialog-CmxGAF0y.js";import"./MenuTrigger-BAswjT3N.js";import"./CompositeItem-DnhineeP.js";import"./ToolbarRootContext-CCGnrXPP.js";import"./getDisabledMountTransitionStyles-DIZwTKjs.js";import"./getPseudoElementBounds-BAJjPnom.js";import"./chevron-down-CGNIDolt.js";import"./index-BCF8iDXD.js";import"./error-Dy63jnhf.js";import"./BaseCbacBanner-R1rwtr3v.js";import"./makeExternalStore-DMQ9I4QN.js";import"./Tooltip-3genz2FN.js";import"./PopoverPopup-D9A9UqLo.js";import"./toNumber-DazHSMOl.js";import"./useOsdkClient-BabGOx0D.js";import"./tick-WX0Zm-Wi.js";import"./DropdownField-BKL6B-_4.js";import"./withOsdkMetrics-BFTHdOY7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

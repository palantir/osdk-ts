import{f as n,j as t}from"./iframe-CjLCYPjP.js";import{O as p}from"./object-table-4o5D7obC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByO7fxtk.js";import"./Table-DXPe7lgP.js";import"./index-f-S2-r7i.js";import"./Dialog-C4TyCTA7.js";import"./cross-DL0QZscy.js";import"./svgIconContainer-CUfGw83J.js";import"./useBaseUiId-njZIx2Uj.js";import"./InternalBackdrop-DcxaL_PT.js";import"./composite-DOtgHB4N.js";import"./index-B-mUbcTO.js";import"./index-DFQIppYh.js";import"./index-BJNvwJy0.js";import"./useEventCallback-B4PsR34i.js";import"./SkeletonBar-Dfq3KLiJ.js";import"./LoadingCell-BeNHpScv.js";import"./ColumnConfigDialog-CSRJDIZo.js";import"./DraggableList-gmg4DbLZ.js";import"./search-_m4au-z9.js";import"./Input-jALqAWvf.js";import"./useControlled-CoHb1tef.js";import"./Button-CIR_AgrW.js";import"./small-cross-BLFFZOgT.js";import"./ActionButton-tR5Q6IOl.js";import"./Checkbox-9A0Kn_UP.js";import"./minus-BHr811cq.js";import"./tick-Dh-Y59zV.js";import"./useValueChanged-DdOgyepL.js";import"./caret-down-8jOpd4yE.js";import"./CollapsiblePanel-C7Qsoko0.js";import"./MultiColumnSortDialog-CYohMHzc.js";import"./MenuTrigger-cJkx_izm.js";import"./CompositeItem-Bqp3H5gP.js";import"./ToolbarRootContext-Do5gfKIj.js";import"./getDisabledMountTransitionStyles-xkMz7bO3.js";import"./getPseudoElementBounds-DKP9-avB.js";import"./chevron-down-DLtLuFqQ.js";import"./index-DrA2L_ZC.js";import"./error-Mi8VUdj0.js";import"./BaseCbacBanner-NtP0edhN.js";import"./makeExternalStore-CuYJtRm7.js";import"./Tooltip-x0EIYMcK.js";import"./PopoverPopup-DBVaV4KW.js";import"./toNumber-Dc_C2hIq.js";import"./useOsdkClient-C5B9dS-h.js";import"./DropdownField-CVccp13h.js";import"./withOsdkMetrics-JADyG9oK.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

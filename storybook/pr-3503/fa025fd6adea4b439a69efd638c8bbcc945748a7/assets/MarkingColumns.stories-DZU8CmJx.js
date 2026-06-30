import{f as n,j as t}from"./iframe-Bt1FGd4n.js";import{O as p}from"./object-table-DNU4U8Ka.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cd7qpJNf.js";import"./Table-CG1yY8rs.js";import"./index-BXmA99LJ.js";import"./Dialog-CkxdnDGI.js";import"./cross-Bl27BioQ.js";import"./svgIconContainer-1fMK_YRK.js";import"./useBaseUiId-Bed1A4wB.js";import"./InternalBackdrop-B7nAbuk0.js";import"./composite-Cx4iv6Gt.js";import"./index-NS9ffVkI.js";import"./index-Bi1CFq0b.js";import"./index-D9wVJJcV.js";import"./useEventCallback-B-waF5GG.js";import"./SkeletonBar-CnnprsXQ.js";import"./LoadingCell-Bcquh96j.js";import"./ColumnConfigDialog-DkYdYjdA.js";import"./DraggableList-CpBgYx91.js";import"./search-D6bVIcXN.js";import"./Input-CliK5hox.js";import"./useControlled-QExZAE6j.js";import"./Button-CnTnjrCD.js";import"./small-cross-B1dYyJkX.js";import"./ActionButton-FGBpyMym.js";import"./Checkbox-BNCSdJhL.js";import"./minus-DESlwISC.js";import"./tick-DMUntjWR.js";import"./useValueChanged-BfQlHgTL.js";import"./caret-down-COnNs73M.js";import"./CollapsiblePanel-C3RPSpHX.js";import"./MultiColumnSortDialog-MfEacKWM.js";import"./MenuTrigger-DfpeJOH4.js";import"./CompositeItem-DMxksI1g.js";import"./ToolbarRootContext-B-p9i1Nh.js";import"./getDisabledMountTransitionStyles-ClXWCS35.js";import"./getPseudoElementBounds-CvUGwBg2.js";import"./chevron-down-DA01aDAQ.js";import"./index-DnJdMzCw.js";import"./error-BCHDrnez.js";import"./BaseCbacBanner-Di5tcb09.js";import"./makeExternalStore-BDxrD6i4.js";import"./Tooltip-GeZZ93Qd.js";import"./PopoverPopup-DkggI-C3.js";import"./toNumber-Q1DzrIR1.js";import"./useOsdkClient-DKPhiPp3.js";import"./DropdownField-DjaXVsoW.js";import"./withOsdkMetrics-DYvQ4eTM.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

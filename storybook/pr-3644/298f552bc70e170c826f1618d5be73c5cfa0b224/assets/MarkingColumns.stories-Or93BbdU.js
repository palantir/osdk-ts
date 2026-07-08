import{f as n,j as t}from"./iframe-Sinac5C-.js";import{O as p}from"./object-table-DqDGP3vD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NTO9eUq2.js";import"./Table-UfBQyGHl.js";import"./index-ybCHkguh.js";import"./Dialog-DYN1VtMt.js";import"./cross-vcsVvsRm.js";import"./svgIconContainer-BJzbMQV4.js";import"./useBaseUiId-DeyTEOj1.js";import"./InternalBackdrop-DZ1oqP5e.js";import"./composite-Bt3mY2Oe.js";import"./index-Be3QAx03.js";import"./index-DRuWNwJW.js";import"./index-Dp0L9X3U.js";import"./useEventCallback-Cpci4snE.js";import"./SkeletonBar-BzAtVdDB.js";import"./LoadingCell-DTuZLEuO.js";import"./ColumnConfigDialog-D0hx4qbY.js";import"./DraggableList-CFI-7wqk.js";import"./search-BHX689kx.js";import"./Input-CdEMNwrX.js";import"./useControlled-BWqdkm3Y.js";import"./Button-thwa8aHe.js";import"./small-cross-DwtiNFiq.js";import"./ActionButton-CnEepSDi.js";import"./Checkbox-DNl5ObtC.js";import"./useValueChanged-Dt66cWJa.js";import"./CollapsiblePanel-DN8dlRG_.js";import"./MultiColumnSortDialog-BGjV_b7e.js";import"./MenuTrigger-kMdu1q8-.js";import"./CompositeItem-97yYl-on.js";import"./ToolbarRootContext-56wK4ELT.js";import"./getDisabledMountTransitionStyles-DMWHksXr.js";import"./getPseudoElementBounds-D-tgY3IJ.js";import"./chevron-down-xxwIfOQv.js";import"./index-Czoh3j4v.js";import"./error-8PMBH84i.js";import"./BaseCbacBanner-D9u8AGjU.js";import"./makeExternalStore-CAjAetME.js";import"./Tooltip-mlybnl1y.js";import"./PopoverPopup-DQh_SUrn.js";import"./toNumber-CIu1ECcm.js";import"./useOsdkClient-3bJMPM1w.js";import"./tick-Dwt21Cnr.js";import"./DropdownField-BQBckVG5.js";import"./withOsdkMetrics-DIlezMZa.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

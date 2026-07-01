import{f as n,j as t}from"./iframe-femnAnxu.js";import{O as p}from"./object-table-B4MfP3Tv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-WXOK-U.js";import"./Table-IuHa1v7L.js";import"./index-Cbme1k2a.js";import"./Dialog-Dd-NugnF.js";import"./cross-UuwGvC_0.js";import"./svgIconContainer-DSUHrivN.js";import"./useBaseUiId-eii0WrfQ.js";import"./InternalBackdrop-BJeGqboe.js";import"./composite-Cm2mN-z1.js";import"./index-HUXPEUsO.js";import"./index-B82ftcNm.js";import"./index-BYcFbpGF.js";import"./useEventCallback-U2TwTlHx.js";import"./SkeletonBar-BdDuCFyj.js";import"./LoadingCell-DzvxGGnK.js";import"./ColumnConfigDialog-3wnHLJvl.js";import"./DraggableList-BAwHe8QN.js";import"./Input-lyinRyk6.js";import"./useControlled-GpTDQtny.js";import"./Button-DIcTOjx3.js";import"./small-cross-BaCUAzuP.js";import"./ActionButton-Ckj54VEE.js";import"./Checkbox-B4g1auEb.js";import"./minus-DIqAZ34C.js";import"./useValueChanged-6omolaRx.js";import"./caret-down-B9bewQFP.js";import"./CollapsiblePanel-DXUTLupk.js";import"./MultiColumnSortDialog-CFT0bZf5.js";import"./MenuTrigger-DdD_PxWz.js";import"./CompositeItem-BOw0SOmd.js";import"./ToolbarRootContext-BittqsQ9.js";import"./getDisabledMountTransitionStyles-DKIyk-rV.js";import"./getPseudoElementBounds-CiPZBSv9.js";import"./chevron-down-CBGhBZTh.js";import"./index-XzfaPc1h.js";import"./error-DjNZj1nA.js";import"./BaseCbacBanner-rksPT1-N.js";import"./makeExternalStore-Bh4QKTzj.js";import"./Tooltip-ZSC2nIZp.js";import"./PopoverPopup-CpoqDnQC.js";import"./toNumber-Bmy4PuFG.js";import"./useOsdkClient-BitMUCPS.js";import"./DropdownField-cnrIFtqY.js";import"./withOsdkMetrics-eqpNk8P2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

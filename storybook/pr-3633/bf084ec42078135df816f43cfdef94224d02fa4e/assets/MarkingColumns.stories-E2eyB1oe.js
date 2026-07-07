import{f as n,j as t}from"./iframe-CCHicgAT.js";import{O as p}from"./object-table-BQSGqyFh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZUdEkx9w.js";import"./Table-De1tXGzn.js";import"./index-erXVeKzm.js";import"./Dialog-vIYcpOef.js";import"./cross-BoW2CFzb.js";import"./svgIconContainer-CT8qasyd.js";import"./useBaseUiId-CHnZoAe-.js";import"./InternalBackdrop-h9npHAcr.js";import"./composite-KsTmwuoM.js";import"./index-CWSijKne.js";import"./index-BbS88aWT.js";import"./index-BsQsslRx.js";import"./useEventCallback-C3a0VRDJ.js";import"./SkeletonBar-DjVk8vBI.js";import"./LoadingCell-BDTWP_VA.js";import"./ColumnConfigDialog-fK7dbIwt.js";import"./DraggableList-CcHNzX5r.js";import"./search-Bf6FLrqb.js";import"./Input-Cs5_InzK.js";import"./useControlled-SF3ZeUXr.js";import"./Button-zGeYpjtk.js";import"./small-cross-CZVg0J4S.js";import"./ActionButton-1dfqNj8b.js";import"./Checkbox-CckCHpBq.js";import"./useValueChanged-B8CVaf42.js";import"./CollapsiblePanel-BjPY8dhx.js";import"./MultiColumnSortDialog-DFOLQsPz.js";import"./MenuTrigger-CVJJkkz7.js";import"./CompositeItem-BP7inN6H.js";import"./ToolbarRootContext-DSDzlIKl.js";import"./getDisabledMountTransitionStyles-BHIctvu-.js";import"./getPseudoElementBounds-TGsVs-f4.js";import"./chevron-down-BruPS1Tz.js";import"./index-BHTgYSBD.js";import"./error-DNrecZbm.js";import"./BaseCbacBanner-CAqjNEnF.js";import"./makeExternalStore-vz78AVGV.js";import"./Tooltip-C6-_5fpH.js";import"./PopoverPopup-DVB_Ak6t.js";import"./toNumber-DaZO_aHo.js";import"./useOsdkClient-n2obuovA.js";import"./tick-DHGNepa_.js";import"./DropdownField-BqggZgjR.js";import"./withOsdkMetrics-DZUYlxG5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

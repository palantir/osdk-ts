import{f as n,j as t}from"./iframe-D2XFuklh.js";import{O as p}from"./object-table-CGQquVFE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkuUTQOb.js";import"./Table-DSsj6bdI.js";import"./index-CZPXsQVY.js";import"./Dialog-Nmy-Ffyi.js";import"./cross-BT8Rhhk0.js";import"./svgIconContainer-BzGraci7.js";import"./useBaseUiId-CSOiJPHm.js";import"./InternalBackdrop-CvJ3ANkY.js";import"./composite-DrSVg6K0.js";import"./index-wq2p0Quo.js";import"./index-DNInbmlu.js";import"./index-BfWBHWbi.js";import"./useEventCallback-yAa3uH6w.js";import"./SkeletonBar-DGrWCjhA.js";import"./LoadingCell-CgvTZp2g.js";import"./ColumnConfigDialog-BMXGhCIz.js";import"./DraggableList-CeDMmITJ.js";import"./search-D-2QIl00.js";import"./Input-Ch1OQ8sF.js";import"./useControlled-BSiffkjq.js";import"./Button-BJ8-7aKB.js";import"./small-cross-DD3K3n41.js";import"./ActionButton-Dqm2BUaS.js";import"./Checkbox-DmZskhrw.js";import"./minus-ZO7TWYA7.js";import"./tick-ChIRHmTX.js";import"./useValueChanged-JoE15dNl.js";import"./caret-down-lhdmcEFE.js";import"./CollapsiblePanel-B_GyF5k6.js";import"./MultiColumnSortDialog-BGfwWYs-.js";import"./MenuTrigger-CrGS7y6W.js";import"./CompositeItem-C6StUy7G.js";import"./ToolbarRootContext-6HfJCD2I.js";import"./getDisabledMountTransitionStyles-CSrGk6-k.js";import"./getPseudoElementBounds-CVG4E5oc.js";import"./chevron-down-Chyewp-s.js";import"./index-CRbL3dBf.js";import"./error-BWIosSFN.js";import"./BaseCbacBanner-C3OBpDAI.js";import"./makeExternalStore-DPV_7rOc.js";import"./Tooltip-BXb4AJhB.js";import"./PopoverPopup-B43fe3Qz.js";import"./toNumber-Dmt2nRqV.js";import"./useOsdkClient-DYhmcVUk.js";import"./DropdownField-CX_P6kEe.js";import"./withOsdkMetrics-BeGMPDqA.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as p,j as e}from"./iframe-B0Q7ew8Z.js";import{O as i}from"./object-table-CnvSGGFW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BW4DoD-q.js";import"./index-B3euQAxX.js";import"./Dialog-WbYUxlgJ.js";import"./cross-CuUHaT77.js";import"./svgIconContainer-DHqtFPi_.js";import"./useBaseUiId-DTpiFHLl.js";import"./InternalBackdrop-C_e4Amrk.js";import"./composite-C38hBHQ1.js";import"./index-LgXgW0tz.js";import"./index-DDwtoaNx.js";import"./index-CdLLvF95.js";import"./useEventCallback-CfEmFQFo.js";import"./SkeletonBar-8Z-HAmIt.js";import"./LoadingCell-rvCJgKBp.js";import"./ColumnConfigDialog-XOh1gpvr.js";import"./DraggableList-DNdEOp6h.js";import"./search-ftQvRLI-.js";import"./Input-g4yPu6B6.js";import"./useControlled-BS_Eo8Jr.js";import"./Button-DJ9AZpJd.js";import"./small-cross-DfX0mXVC.js";import"./ActionButton-DGWgotCn.js";import"./Checkbox-B4CnmWRO.js";import"./useValueChanged-DtBaEsJ9.js";import"./CollapsiblePanel-CXKPpa6L.js";import"./MultiColumnSortDialog-DGOR6vtP.js";import"./MenuTrigger-WLHl3M4-.js";import"./CompositeItem-CVqNqknj.js";import"./ToolbarRootContext-C1mulGkb.js";import"./getDisabledMountTransitionStyles-CW0hcLTx.js";import"./getPseudoElementBounds-BqkVMi-w.js";import"./chevron-down-CPWeMG22.js";import"./index-MLSRGr_T.js";import"./error-DCkSicSK.js";import"./BaseCbacBanner-Bzf8VEwK.js";import"./makeExternalStore-DfcRwF-H.js";import"./Tooltip-DwBPcoAB.js";import"./PopoverPopup-BDARVRq8.js";import"./debounce-CyMb4iRa.js";import"./useOsdkClient-BcJFc_0Y.js";import"./tick-CnmVaPy0.js";import"./DropdownField-CxXuqhZR.js";import"./isEqual-DF47nHyu.js";import"./withOsdkMetrics-xWaVFLHz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};

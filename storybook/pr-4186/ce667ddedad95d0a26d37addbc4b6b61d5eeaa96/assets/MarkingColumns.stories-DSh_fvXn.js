import{f as p,j as e}from"./iframe-wJSBANRY.js";import{O as i}from"./object-table-dHKlunb9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2Ho1hLQ.js";import"./Table-CTD02Af2.js";import"./index-BcqSzCju.js";import"./Dialog-CV6-j9YY.js";import"./cross-iKlVZHPy.js";import"./svgIconContainer-Ci6LfE3v.js";import"./useBaseUiId-DWH3HBR0.js";import"./InternalBackdrop-PNyvHwph.js";import"./composite-CrDIQ1mA.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./index-CQ_EW3Gy.js";import"./useEventCallback-DGk7LQxu.js";import"./SkeletonBar-CDnrAFCZ.js";import"./LoadingCell-Cn8isCsC.js";import"./ColumnConfigDialog-DMxKVsSi.js";import"./DraggableList-Bd0kJQ_h.js";import"./search-D4rdWSgZ.js";import"./Input-Cn5YrDjO.js";import"./useControlled-BvO6L4jZ.js";import"./Button-Bs-O5zId.js";import"./small-cross-Cpe-iFEE.js";import"./ActionButton-DdrPB5Lk.js";import"./Checkbox-BX830qPl.js";import"./useValueChanged-CZAIb2ZW.js";import"./CollapsiblePanel-DCeDgGvN.js";import"./MultiColumnSortDialog-Ox4I1sUH.js";import"./MenuTrigger-BWDSVjYX.js";import"./CompositeItem-CMcnLQ_L.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./getDisabledMountTransitionStyles-DDRBIdQ3.js";import"./getPseudoElementBounds-MQP3kSmu.js";import"./chevron-down-Cwjazhdf.js";import"./index-pP0t4O08.js";import"./error-ByPPsGV9.js";import"./BaseCbacBanner-COwBtUHw.js";import"./makeExternalStore-Cdabd0ud.js";import"./Tooltip-hpUjH5hm.js";import"./PopoverPopup-BZ8qTaMK.js";import"./debounce-ByAeDhuR.js";import"./useOsdkClient-DWkxVc6G.js";import"./tick-DVG2gobP.js";import"./DropdownField-DUCR4Hdj.js";import"./isEqual-BaPqpVgX.js";import"./withOsdkMetrics-DYFTNSHn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

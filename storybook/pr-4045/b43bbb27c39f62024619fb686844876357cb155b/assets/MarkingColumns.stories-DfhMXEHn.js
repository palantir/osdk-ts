import{f as p,j as e}from"./iframe-BjF7QLhH.js";import{O as i}from"./object-table-CRKpg9i5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjubRawJ.js";import"./Table-B85Q0ZFg.js";import"./index-DjhpcMou.js";import"./Dialog-ye1qQI2K.js";import"./cross-H3gYztYg.js";import"./svgIconContainer-BOlpbv4R.js";import"./useBaseUiId-DsiyrTc5.js";import"./InternalBackdrop-DjHac_o6.js";import"./composite-C3VIqVTD.js";import"./index-dd7HiSC0.js";import"./index-D9CUEICi.js";import"./index-_Dhu50HX.js";import"./useEventCallback-8NkDy3YU.js";import"./SkeletonBar-wv_LSLd9.js";import"./LoadingCell-BTF7OY9I.js";import"./ColumnConfigDialog-DEbqWsiT.js";import"./DraggableList-jq3VaT7b.js";import"./search-CfhozSoV.js";import"./Input-EpQSMSPb.js";import"./useControlled-k0Oisgsr.js";import"./Button-BaubE4M6.js";import"./small-cross-aBFUVmSW.js";import"./ActionButton-BYRhG-r1.js";import"./Checkbox-CeRhyG7S.js";import"./useValueChanged-WiC8WLMH.js";import"./CollapsiblePanel-CbQAA8YZ.js";import"./MultiColumnSortDialog-4IZ447J8.js";import"./MenuTrigger-C5-uAPsu.js";import"./CompositeItem-CJJAstdN.js";import"./ToolbarRootContext-160MLPLN.js";import"./getDisabledMountTransitionStyles-CvnFYTQC.js";import"./getPseudoElementBounds-I8RQbwIa.js";import"./chevron-down-qzCHSoFz.js";import"./index-Zf4kiRn8.js";import"./error-DEWhTW9J.js";import"./BaseCbacBanner-DxaUAtTm.js";import"./makeExternalStore--bKLbn6H.js";import"./Tooltip-EUOwem5v.js";import"./PopoverPopup-Pu1LSCLj.js";import"./debounce-ChQOuTiY.js";import"./useOsdkClient-Bbvx3WSo.js";import"./tick-CryAE_DJ.js";import"./DropdownField-BBcJxhdu.js";import"./isEqual-D8iy_ZUF.js";import"./withOsdkMetrics-BhtzFR1P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

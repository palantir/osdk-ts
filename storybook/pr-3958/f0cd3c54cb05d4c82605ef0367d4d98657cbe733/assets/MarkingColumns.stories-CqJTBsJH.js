import{f as p,j as e}from"./iframe-CQw56iWo.js";import{O as i}from"./object-table-_b87z9yg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cb-iTVGL.js";import"./Table-BjVQv3Ut.js";import"./index-BbcRXNNj.js";import"./Dialog-DQjpS1ko.js";import"./cross-Nlfk9xaA.js";import"./svgIconContainer-CJszD9JX.js";import"./useBaseUiId-wSHMnGD-.js";import"./InternalBackdrop-Il8xAP3p.js";import"./composite-CrcBBrnx.js";import"./index-3NrBg7OY.js";import"./index-B-4hZkSR.js";import"./index-DnT2_768.js";import"./useEventCallback-D5srKw5L.js";import"./SkeletonBar-BF1cQEzt.js";import"./LoadingCell-CV9XZ9Uc.js";import"./ColumnConfigDialog-COYitlC3.js";import"./DraggableList-CBeAoOWH.js";import"./search-BeZpj5L6.js";import"./Input-BjEM47WF.js";import"./useControlled-Brc4EdI6.js";import"./Button-CE9o7PIg.js";import"./small-cross-CnTvk0Kj.js";import"./ActionButton-2adJk00V.js";import"./Checkbox-CfsX_vZH.js";import"./useValueChanged-DGcNWuA7.js";import"./CollapsiblePanel-Dw6R1hci.js";import"./MultiColumnSortDialog-CZ4APG3L.js";import"./MenuTrigger-hUaCMsAR.js";import"./CompositeItem-B1bezKZw.js";import"./ToolbarRootContext-R1fb82vZ.js";import"./getDisabledMountTransitionStyles-CVZQPl4y.js";import"./getPseudoElementBounds-BX5Pi7co.js";import"./chevron-down-Df0py7y_.js";import"./index-C5iZ-ss4.js";import"./error-C5hkCc6v.js";import"./BaseCbacBanner-Dp2SlZsT.js";import"./makeExternalStore-CCwV61OO.js";import"./Tooltip-CtxV_51G.js";import"./PopoverPopup-BgEulf2-.js";import"./debounce-CNCpWjWV.js";import"./useOsdkClient-9L2S2s7W.js";import"./tick-CPHWizrD.js";import"./DropdownField-BNLfoGtV.js";import"./isEqual-DvLhOnOz.js";import"./withOsdkMetrics-D9HOSlTb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

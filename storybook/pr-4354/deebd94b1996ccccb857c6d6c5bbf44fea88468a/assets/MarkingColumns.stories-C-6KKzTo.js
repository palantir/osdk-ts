import{f as p,j as e}from"./iframe-s6qt4jCK.js";import{O as i}from"./object-table-De1PzSdd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9jiBPXEl.js";import"./Table-B73Bx19c.js";import"./index-D6YAKeyS.js";import"./Dialog-C6WxxT4y.js";import"./cross-z12JNlD1.js";import"./svgIconContainer-D4Tr3eBw.js";import"./useBaseUiId-BIc0eo6T.js";import"./InternalBackdrop-BYGdIn__.js";import"./composite-CPpi_uAC.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./index-CQTw8n2D.js";import"./useEventCallback-DNF3ylqB.js";import"./SkeletonBar-D69vB7ej.js";import"./LoadingCell-B95L-pZY.js";import"./ColumnConfigDialog-DWLVWYmU.js";import"./DraggableList-DLQJhoX2.js";import"./search-CwDPAivc.js";import"./Input-DP0PAzjj.js";import"./useControlled-CTyuJ7Af.js";import"./Button-Kk03FIZS.js";import"./small-cross-D0AIe3u5.js";import"./ActionButton-CjYFa-2U.js";import"./Checkbox-CRpQdjwJ.js";import"./useValueChanged-BZVZmlsN.js";import"./CollapsiblePanel-Du2JeiGm.js";import"./MultiColumnSortDialog-GDfrw8ba.js";import"./MenuTrigger-BEUsd7am.js";import"./CompositeItem-cbLDCwSH.js";import"./ToolbarRootContext-nYUUEgez.js";import"./getDisabledMountTransitionStyles-Chz3YyJw.js";import"./getPseudoElementBounds-DXe2aI7J.js";import"./chevron-down-nr5MnKpi.js";import"./index-D2cPMVS8.js";import"./error-DrFA3py_.js";import"./BaseCbacBanner-DRm2kmou.js";import"./makeExternalStore-CRyGpLoG.js";import"./Tooltip-DjYQyP_H.js";import"./isObject-CZ9Ec7qs.js";import"./debounce-DH380oHP.js";import"./useOsdkClient-DGoGfdz1.js";import"./tick-YVdkfck4.js";import"./DropdownField-COSvrKxl.js";import"./isEqual-DFsXV7yQ.js";import"./_baseIsEqual-7XBh0Yb_.js";import"./withOsdkMetrics-C2Hl675L.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

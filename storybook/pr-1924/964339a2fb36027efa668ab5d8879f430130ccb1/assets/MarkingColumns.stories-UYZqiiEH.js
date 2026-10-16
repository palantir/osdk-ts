import{f as p,j as e}from"./iframe-D0LlCScw.js";import{O as i}from"./object-table-COIfwPKf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPYsHztA.js";import"./Table-CVrn8a7m.js";import"./index-R-OWCfkC.js";import"./Dialog-DHPBiuDP.js";import"./cross-BIKx7l1B.js";import"./svgIconContainer-CPd4FEGO.js";import"./useBaseUiId-Cnf8WH7W.js";import"./InternalBackdrop-DSzn_M6g.js";import"./composite-DawpNJ_k.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./index-Dh6bu7y0.js";import"./useEventCallback-BHhry2Ze.js";import"./SkeletonBar-BM6j1C1a.js";import"./LoadingCell-4G6EJCyj.js";import"./ColumnConfigDialog-1N3jOgDU.js";import"./DraggableList-DX8ugLQU.js";import"./search-Dy9Bh6oJ.js";import"./Input-DguSmqlF.js";import"./useControlled-C-xRoLJo.js";import"./Button-Bfbc-efe.js";import"./small-cross-D12kpvdn.js";import"./ActionButton-CCgA1PS9.js";import"./Checkbox-DqcVMQmm.js";import"./useValueChanged-D4Cuolrk.js";import"./CollapsiblePanel-DGCQJ7r2.js";import"./MultiColumnSortDialog-6daUiyok.js";import"./MenuTrigger-bU6vvaQC.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./getDisabledMountTransitionStyles-DtmNom5N.js";import"./getPseudoElementBounds-lP1dSnSf.js";import"./chevron-down-D3xB8NyO.js";import"./index-Bynh9I8M.js";import"./error-g8Wu2PpH.js";import"./BaseCbacBanner-DPbFCEOT.js";import"./makeExternalStore-G-t7fMHO.js";import"./Tooltip-ozF9P0sc.js";import"./PopoverPopup-DPim281m.js";import"./debounce-BWX6LBdf.js";import"./useOsdkClient-BbcMY0OU.js";import"./tick-DOJuYt0r.js";import"./DropdownField-BsF9XJhY.js";import"./isEqual-DjcNAgH_.js";import"./withOsdkMetrics-Bwsdr4IU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

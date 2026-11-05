import{f as p,j as e}from"./iframe-Cj5xKvLA.js";import{O as i}from"./object-table-CXvKUv2q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1DDVoTO.js";import"./Table-DGGWQjwY.js";import"./index-BBh4Z0mE.js";import"./Dialog-DtCOhCpV.js";import"./cross-BPLfBPr7.js";import"./svgIconContainer-DZYGEA7n.js";import"./useBaseUiId-n2QF9Zar.js";import"./InternalBackdrop-CYszCwsc.js";import"./composite-925znV2G.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./index-C38bxeqR.js";import"./useEventCallback-ByjKqT98.js";import"./SkeletonBar-_qu8whIi.js";import"./LoadingCell-BjLHFRuH.js";import"./ColumnConfigDialog-Cl9Wb7Yv.js";import"./DraggableList-DirU_-P4.js";import"./search-BmtS1KCs.js";import"./Input-Bffgvop9.js";import"./useControlled-D5krREh9.js";import"./Button-Be388aOs.js";import"./small-cross-CADTU48B.js";import"./ActionButton-D9I3daR7.js";import"./Checkbox-CySyhzbG.js";import"./useValueChanged-owXuKPN-.js";import"./CollapsiblePanel-Ba92qoA8.js";import"./MultiColumnSortDialog-B6sg6gM1.js";import"./MenuTrigger-D-QWhFP0.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./getDisabledMountTransitionStyles-BgDH7Jb-.js";import"./getPseudoElementBounds-DXisblbi.js";import"./chevron-down-C93yiICa.js";import"./index-oe6lplKX.js";import"./error-Bd1ykK4E.js";import"./BaseCbacBanner-ChRzr7gJ.js";import"./makeExternalStore-BZjXkoXh.js";import"./Tooltip-D09713yr.js";import"./isObject-DuNnO_hx.js";import"./debounce-D6aQMZp0.js";import"./useOsdkClient-oka-dZbc.js";import"./tick-Cf_flWq8.js";import"./DropdownField-5C_sV8hr.js";import"./isEqual-BNgPn_sy.js";import"./_baseIsEqual-DNNLc-1V.js";import"./withOsdkMetrics-Dl0Rlheu.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

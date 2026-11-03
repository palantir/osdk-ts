import{f as p,j as e}from"./iframe--rHM778H.js";import{O as i}from"./object-table-DEvcxJSc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpVBsV2L.js";import"./Table-BbpbHFt5.js";import"./index-BElFIwyB.js";import"./Dialog-7ZP0B0yF.js";import"./cross-CHXgNJax.js";import"./svgIconContainer-CjX9_w9R.js";import"./useBaseUiId-BT7Lgjzv.js";import"./InternalBackdrop-DHyESATu.js";import"./composite-CaRBo0mp.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./index-CtcclfAS.js";import"./useEventCallback-CtvvOJjW.js";import"./SkeletonBar-CS_pei9f.js";import"./LoadingCell-D_OgPP-l.js";import"./ColumnConfigDialog-DR2lvB79.js";import"./DraggableList-Ck4YH1Wg.js";import"./search-ZsY-Nyc_.js";import"./Input-DqZJVW1Y.js";import"./useControlled-BERkl8jy.js";import"./Button-BOD28ASd.js";import"./small-cross-C70aYTmZ.js";import"./ActionButton-DK8p2X8j.js";import"./Checkbox-D5krlzgT.js";import"./useValueChanged-DvGNLe7a.js";import"./CollapsiblePanel-BPc-B49G.js";import"./MultiColumnSortDialog-odHCG5KR.js";import"./MenuTrigger-DyAGSfdx.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./getDisabledMountTransitionStyles-DLn2tUEn.js";import"./getPseudoElementBounds-e0hNXxT9.js";import"./chevron-down-BlvURY3l.js";import"./index-CmizMsna.js";import"./error-CPHhJfnm.js";import"./BaseCbacBanner-B7-jqhl-.js";import"./makeExternalStore-CUNRgSrC.js";import"./Tooltip-DkjIu7bG.js";import"./PopoverPopup-DL06cZLQ.js";import"./debounce-CUpiJ6Vz.js";import"./useOsdkClient-CuCdO7SN.js";import"./tick-Bcv5PjwQ.js";import"./DropdownField-2stvnYri.js";import"./isEqual-BRXdJPDE.js";import"./withOsdkMetrics-DWwTgGIe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BSB0HYWK.js";import{O as i}from"./object-table-BWVBwQxB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BkFYvt7D.js";import"./Table-DzUVH6T3.js";import"./index-CFn7NuDF.js";import"./Dialog-B_ZKv57J.js";import"./cross-CyBS2Nke.js";import"./svgIconContainer-ZqmkZwCg.js";import"./useBaseUiId-DOYgZcYk.js";import"./InternalBackdrop-rCZWLdBO.js";import"./composite-DrFNuPAr.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./index-BWL2KDwg.js";import"./useEventCallback-BmJuJRN8.js";import"./SkeletonBar-AS4gHbaK.js";import"./LoadingCell-D2hxsOA-.js";import"./ColumnConfigDialog-B22nyHE9.js";import"./DraggableList-CZTlQJRm.js";import"./search-DVQNznbm.js";import"./Input-BwaAEQhC.js";import"./useControlled-CPd31jrj.js";import"./Button-odXi-ust.js";import"./small-cross-xl9eyWoT.js";import"./ActionButton-SFqgFBPz.js";import"./Checkbox-CNUTcBu6.js";import"./useValueChanged-DEyO1HnO.js";import"./CollapsiblePanel-BKaGtf_t.js";import"./MultiColumnSortDialog-Dn9jhLxM.js";import"./MenuTrigger-DMz9UZ0B.js";import"./CompositeItem-DFUc4zP3.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./getDisabledMountTransitionStyles-MdauVsir.js";import"./getPseudoElementBounds-DO90Z8uF.js";import"./chevron-down-eX4f9a69.js";import"./index-DF12onFH.js";import"./error-Bf4UPDqQ.js";import"./BaseCbacBanner-DY1hopzF.js";import"./makeExternalStore-dBNRhzI_.js";import"./Tooltip-BcbU3cUH.js";import"./PopoverPopup-D5lvrcxC.js";import"./debounce-CV5acG61.js";import"./useOsdkClient-fF8P9Svw.js";import"./tick-MzeZ9_PK.js";import"./DropdownField-t0KVkBHv.js";import"./isEqual-CMA1ePV8.js";import"./withOsdkMetrics-BSqN_NUg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-DCaGj3l0.js";import{O as i}from"./object-table-D0mt5DPJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gC7fLLdU.js";import"./Table-Ds7HS37W.js";import"./index-DHJOctOT.js";import"./Dialog-BvfSMtlB.js";import"./cross-BpMnC369.js";import"./svgIconContainer-BdchtLLj.js";import"./useBaseUiId-DGrKf2Eo.js";import"./InternalBackdrop-CSwqTrZw.js";import"./composite-BmlfmHXv.js";import"./index-lxz2Q88D.js";import"./index-CqOnqOgj.js";import"./index-BzSaS7Cw.js";import"./useEventCallback-B32f23SN.js";import"./SkeletonBar-4_sAq1N_.js";import"./LoadingCell-DaN63Ldr.js";import"./ColumnConfigDialog-DB8cbZnm.js";import"./DraggableList-BFubNhXI.js";import"./search-Bhwoz9oz.js";import"./Input-ndPiwRRZ.js";import"./useControlled-CmhVbQER.js";import"./Button-BwAz3h5J.js";import"./small-cross-yPYVW9ma.js";import"./ActionButton-CLaZ3sVC.js";import"./Checkbox-B7HTI25J.js";import"./useValueChanged-BSGKh55p.js";import"./CollapsiblePanel-kflJyW8i.js";import"./MultiColumnSortDialog-B-Hv7au_.js";import"./MenuTrigger-Xyg7dls5.js";import"./CompositeItem-BD31eM2W.js";import"./ToolbarRootContext-DYMdUcY2.js";import"./getDisabledMountTransitionStyles-CPT9oXs8.js";import"./getPseudoElementBounds-CFsJDsKN.js";import"./chevron-down-DD_PJCyI.js";import"./index-C1b2qvva.js";import"./error-BT5-tKwD.js";import"./BaseCbacBanner-DMFela52.js";import"./makeExternalStore-DJQIf4q1.js";import"./Tooltip-BsrpxabU.js";import"./PopoverPopup-DckcAQlp.js";import"./debounce-B1LoYU07.js";import"./useOsdkClient-6qfYQwQq.js";import"./tick-NvbgN8tQ.js";import"./DropdownField-DVsSESTI.js";import"./useDebouncedCallback-BPfUve02.js";import"./withOsdkMetrics-IcI5BvBR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

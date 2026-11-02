import{f as p,j as e}from"./iframe-DM1KpbCL.js";import{O as i}from"./object-table-BYpj4rmp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5lE_CeJ.js";import"./Table-CgY3wOOw.js";import"./index-CcTzWx10.js";import"./Dialog-BPu8yv4m.js";import"./cross-CnFtk43X.js";import"./svgIconContainer-D9_cFA2L.js";import"./useBaseUiId-BS0ydcCd.js";import"./InternalBackdrop-BafR-jVe.js";import"./composite-UHbWR1-V.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./index-DzseGhFT.js";import"./useEventCallback-CPGZvpaV.js";import"./SkeletonBar-CIbWgRcz.js";import"./LoadingCell-B-S-snu4.js";import"./ColumnConfigDialog-BwmXpKR2.js";import"./DraggableList-BPHkcrGz.js";import"./search-CDaKZsSd.js";import"./Input-rJPz8yLN.js";import"./useControlled-BpM5Znsw.js";import"./Button-DbYUMIvf.js";import"./small-cross-D217SYw1.js";import"./ActionButton-CWh3vKDS.js";import"./Checkbox-B_lQ7cng.js";import"./useValueChanged-BvcJAZcs.js";import"./CollapsiblePanel-BCYCJ6Xx.js";import"./MultiColumnSortDialog-B1ICIl4b.js";import"./MenuTrigger-CAG7Bxtr.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./getDisabledMountTransitionStyles-BnK3lh8Z.js";import"./getPseudoElementBounds-CmPQacu1.js";import"./chevron-down-B55CqhSV.js";import"./index-BzYLadhD.js";import"./error-BpWcPv0-.js";import"./BaseCbacBanner-B7JhimwT.js";import"./makeExternalStore-ZdV9YzEC.js";import"./Tooltip-DJZfHa2w.js";import"./PopoverPopup-B7nGMxdA.js";import"./debounce-CcYDWLT0.js";import"./useOsdkClient-2PfnP7RQ.js";import"./tick-Dp0UZtnJ.js";import"./DropdownField-ByM8k4kQ.js";import"./isEqual-CGEFIeDh.js";import"./withOsdkMetrics-Dzlv9-Px.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-71AE2c8s.js";import{O as i}from"./object-table-UYofKsdi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtlTcUvi.js";import"./Table-xrwghvfR.js";import"./index-70-LFm6P.js";import"./Dialog-BLMww6GM.js";import"./cross-DPU8k9PA.js";import"./svgIconContainer-CQVZ0EfL.js";import"./useBaseUiId-koFcKlW2.js";import"./InternalBackdrop-DSsgF3k7.js";import"./composite-CJjbOeLp.js";import"./index-_yJiFnLU.js";import"./index-C_ZG4zPp.js";import"./index-CubMyL5c.js";import"./useEventCallback-DCKstoaM.js";import"./SkeletonBar-CyVSDhVA.js";import"./LoadingCell-DEx_LkxO.js";import"./ColumnConfigDialog-DgCfVhpc.js";import"./DraggableList-9P3rKwuX.js";import"./search-DRjn4zmO.js";import"./Input-BTOTZdkr.js";import"./useControlled-ARtkj8_v.js";import"./Button-NFl_FDQS.js";import"./small-cross-DQMGM7ye.js";import"./ActionButton-mGI9HBkv.js";import"./Checkbox-Dy9E1N6v.js";import"./useValueChanged-Bgebujyt.js";import"./CollapsiblePanel-D3SarGBu.js";import"./MultiColumnSortDialog-Bu4iguJN.js";import"./MenuTrigger-DPX8NUq1.js";import"./CompositeItem-Cu549WoE.js";import"./ToolbarRootContext-lpwl76Za.js";import"./getDisabledMountTransitionStyles-CHz2fGHP.js";import"./getPseudoElementBounds-PPP_HaMX.js";import"./chevron-down-BOqQXOX9.js";import"./index-CRRe-iJL.js";import"./error-qex0YiDZ.js";import"./BaseCbacBanner-tM1OMb7g.js";import"./makeExternalStore-Bv5nMmxN.js";import"./Tooltip-BgYmNIJk.js";import"./PopoverPopup-DN5RzoVw.js";import"./debounce-DXWm-QpH.js";import"./useOsdkClient-C4P5dLRq.js";import"./tick-PepXr6jD.js";import"./DropdownField-SCGgbCNn.js";import"./isEqual-DJ0v_bAA.js";import"./withOsdkMetrics-TK9LRg4L.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

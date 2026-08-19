import{f as p,j as e}from"./iframe-BD-LWr1p.js";import{O as i}from"./object-table-CJFF8n9s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dmgTD7Sy.js";import"./Table-DptuV1pu.js";import"./index-C4WNdzjX.js";import"./Dialog-BAiinTZl.js";import"./cross-ek8KuXfH.js";import"./svgIconContainer-CIg5fwF3.js";import"./useBaseUiId-wrsAqB_t.js";import"./InternalBackdrop-ajo3Ljj6.js";import"./composite-BuDBmEPr.js";import"./index-YTdZ8qtU.js";import"./index-DrMY-03p.js";import"./index-AdOgxmTZ.js";import"./useEventCallback-PxF8Exlt.js";import"./SkeletonBar-B5Pg2PMT.js";import"./LoadingCell-9De3Hx9v.js";import"./ColumnConfigDialog-D9RYQvmN.js";import"./DraggableList-54NtNGRb.js";import"./search-Cesj0Sn1.js";import"./Input-H0p-Kdle.js";import"./useControlled-S-BenCcy.js";import"./Button-DYW0znBH.js";import"./small-cross-BGYlQIQ0.js";import"./ActionButton-CGAk7BMh.js";import"./Checkbox-DXkgkmDI.js";import"./useValueChanged-DhWzb1ZN.js";import"./CollapsiblePanel-D1v8TPV_.js";import"./MultiColumnSortDialog-CTz5B5Bi.js";import"./MenuTrigger-Dre0mHpq.js";import"./CompositeItem-BT4SOs7q.js";import"./ToolbarRootContext-W9Cyg5bT.js";import"./getDisabledMountTransitionStyles-DfzQBBqR.js";import"./getPseudoElementBounds-CWc-7ein.js";import"./chevron-down-DZyBBtLC.js";import"./index-qpSIk4b9.js";import"./error-CGXE3NEO.js";import"./BaseCbacBanner-ZvEz-m-p.js";import"./makeExternalStore-BglmpTlj.js";import"./Tooltip-FW4vRfEH.js";import"./PopoverPopup-BnuLOZmM.js";import"./debounce-BACFrRsD.js";import"./useOsdkClient-CN3BmlPj.js";import"./tick-CxY1HILU.js";import"./DropdownField-CtG7SSoj.js";import"./isEqual-BpoUtECJ.js";import"./withOsdkMetrics-CbPUGjlt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

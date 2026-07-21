import{f as p,j as e}from"./iframe-C6Gno_Aq.js";import{O as i}from"./object-table-Uy6QM309.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHnjjJXQ.js";import"./Table-BHgZqqdr.js";import"./index-_m_JHKvg.js";import"./Dialog-Yc5UnJJe.js";import"./cross-DEBXdKEp.js";import"./svgIconContainer-BLTZNNpG.js";import"./useBaseUiId-CnO9l72w.js";import"./InternalBackdrop-BW1WOh88.js";import"./composite-BlxHHZlA.js";import"./index-Cjc07lz8.js";import"./index-DH-47JRN.js";import"./index-_ZcEUh5t.js";import"./useEventCallback-Bv9OLSoN.js";import"./SkeletonBar-B5LEab9A.js";import"./LoadingCell-CNIEnA8X.js";import"./ColumnConfigDialog-D8s8iUVs.js";import"./DraggableList-ChQ74AZk.js";import"./search-D577hEWx.js";import"./Input-DwspMHxQ.js";import"./useControlled-B0Ct5X_K.js";import"./isEqual-BNvlR8Lm.js";import"./isObject-C9uyR3jw.js";import"./Button-DdI2oTJ4.js";import"./ActionButton-CAN6YxmO.js";import"./Checkbox-BufqOQu-.js";import"./useValueChanged-CT5n8g_n.js";import"./CollapsiblePanel-a6ZSRc-u.js";import"./MultiColumnSortDialog-CnbRX7NB.js";import"./MenuTrigger-Cn05N57C.js";import"./CompositeItem-DE_b4Ah6.js";import"./ToolbarRootContext-Dt9qdQ1p.js";import"./getDisabledMountTransitionStyles-CalH2XBv.js";import"./getPseudoElementBounds-gRxFXJdK.js";import"./chevron-down-BrbcyY4P.js";import"./index-YErgbXSw.js";import"./error-CB9fHq9w.js";import"./BaseCbacBanner-DKB5-CYd.js";import"./makeExternalStore-0Avz4Dap.js";import"./Tooltip-B7Tp1rtY.js";import"./PopoverPopup-C62ERw9I.js";import"./toNumber-DwN3JQAn.js";import"./useOsdkClient-D51UiWcH.js";import"./tick-BN4chA2r.js";import"./DropdownField-OZmPo58H.js";import"./withOsdkMetrics--nrQLmcD.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BpwQaCWI.js";import{O as i}from"./object-table-CH05AIGR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ce4Df6DJ.js";import"./Table-DGBWybdL.js";import"./index-NFv3j1Kg.js";import"./Dialog-BSaCnSag.js";import"./cross-rhRWeE7s.js";import"./svgIconContainer-CuioFaav.js";import"./useBaseUiId-C5AYGB4P.js";import"./InternalBackdrop-CeA1CBxo.js";import"./composite-CEBA9fRk.js";import"./index-DITs30Pt.js";import"./index-C7wtgwzA.js";import"./index-COz9BELM.js";import"./useEventCallback-IWP8tLQx.js";import"./SkeletonBar-BRdeXJTx.js";import"./LoadingCell-Dtbdc1RG.js";import"./ColumnConfigDialog-BIahiB4f.js";import"./DraggableList-CWV-fUSQ.js";import"./search-BFV-1IQp.js";import"./Input-cDQ-g7j4.js";import"./useControlled-B5EHNqku.js";import"./isEqual-DaDScgTk.js";import"./isObject-CRq5C3Ab.js";import"./Button-CF2CCiZI.js";import"./ActionButton-CzDRD5Y9.js";import"./Checkbox-D0yotXNX.js";import"./useValueChanged-CyvwbWm9.js";import"./CollapsiblePanel-CFUvSMen.js";import"./MultiColumnSortDialog-BWPCHdDX.js";import"./MenuTrigger-B4Jz4isr.js";import"./CompositeItem-DYXeZzjt.js";import"./ToolbarRootContext-3wDAKiuQ.js";import"./getDisabledMountTransitionStyles-CNXRSnjE.js";import"./getPseudoElementBounds-DStwRK1c.js";import"./chevron-down-Bq6hXrIQ.js";import"./index-DPdcJJ72.js";import"./error-DStggkKI.js";import"./BaseCbacBanner-eJjTQfwV.js";import"./makeExternalStore-BuiA034c.js";import"./Tooltip-DyA1KRF2.js";import"./PopoverPopup-B63ooC6C.js";import"./toNumber-1FjbIoRB.js";import"./useOsdkClient-DAenydGK.js";import"./tick-BNGdmLsY.js";import"./DropdownField-eOCoaJZL.js";import"./withOsdkMetrics-KUUyNHJj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

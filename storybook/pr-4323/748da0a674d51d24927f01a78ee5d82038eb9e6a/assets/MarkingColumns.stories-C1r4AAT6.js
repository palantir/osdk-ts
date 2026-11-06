import{f as p,j as e}from"./iframe-C3HFz_5t.js";import{O as i}from"./object-table-D4nnc4fH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Lu-1fXSQ.js";import"./Table-YAoAfofb.js";import"./index-C294enkt.js";import"./Dialog-DEYwtx14.js";import"./cross-VDE-QV8Y.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./useBaseUiId-Bldx0Hal.js";import"./InternalBackdrop-DJRSYLek.js";import"./composite-D03Np3Q8.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./index-B7jmGBVS.js";import"./useEventCallback-C-PGdIYD.js";import"./SkeletonBar-DGKfF2S7.js";import"./LoadingCell-C1WN3_o-.js";import"./ColumnConfigDialog-BjGJy6Dt.js";import"./DraggableList-BI-9U1zg.js";import"./search-DicQa5iZ.js";import"./Input-C6djVFfS.js";import"./useControlled-CO4tNWxM.js";import"./Button-BCjPDU8B.js";import"./small-cross-BXZDNcqg.js";import"./ActionButton-BTKeHAqS.js";import"./Checkbox-D0DLF897.js";import"./useValueChanged-BRuQsI8Y.js";import"./CollapsiblePanel-BsUoXH1E.js";import"./MultiColumnSortDialog-D-LKE5Gr.js";import"./MenuTrigger-dLKf57bk.js";import"./CompositeItem-Ljl_SfE6.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./getDisabledMountTransitionStyles-AZ8EU8I1.js";import"./getPseudoElementBounds-aWxumBMj.js";import"./chevron-down-DKXpMnZC.js";import"./index-o5L_LgpC.js";import"./error-NlvFbJx8.js";import"./BaseCbacBanner-CZYijgNC.js";import"./makeExternalStore-CTKXCo5y.js";import"./Tooltip-BAxfPrcD.js";import"./PopoverPopup-B4HM-lxB.js";import"./debounce-IhEbnEYZ.js";import"./useOsdkClient-B9v2FimT.js";import"./tick-BQmvO2-Z.js";import"./DropdownField-Bq0jfkKU.js";import"./isEqual--r9Zetx6.js";import"./withOsdkMetrics-CwJ1jB1x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

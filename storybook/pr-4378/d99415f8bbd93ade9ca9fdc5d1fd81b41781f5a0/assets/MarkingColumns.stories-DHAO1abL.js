import{f as p,j as e}from"./iframe-DpLKkykb.js";import{O as i}from"./object-table-CCQRTpV6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-LnzVrM.js";import"./Table-BWUlCOMb.js";import"./index-CGUYPJOd.js";import"./Dialog-DzkUvi49.js";import"./cross-CXiMlBtd.js";import"./svgIconContainer-CZQsWSbp.js";import"./useBaseUiId-exgAqZMu.js";import"./InternalBackdrop-DcJ6yFxi.js";import"./composite-B2s1GcRp.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./index-4T6xY16C.js";import"./useEventCallback-Vl5Y4MSh.js";import"./SkeletonBar-Dy4BjWyK.js";import"./LoadingCell-lYNsC5b7.js";import"./ColumnConfigDialog-Dzuli4nh.js";import"./DraggableList-DtrhgtKM.js";import"./search-DHqp7hab.js";import"./Input-BRg86MD8.js";import"./useControlled-DGS0wgFX.js";import"./Button-CWQ4920K.js";import"./small-cross-CtsQGPXk.js";import"./ActionButton-SnW7FFWH.js";import"./Checkbox-D_THPq5z.js";import"./useValueChanged-Bq5vV2O3.js";import"./CollapsiblePanel-iZ3dIyoM.js";import"./MultiColumnSortDialog-DtOySDqq.js";import"./MenuTrigger-C0vIePhh.js";import"./CompositeItem-iDk6P1qU.js";import"./ToolbarRootContext-9nybivRl.js";import"./getDisabledMountTransitionStyles-C2Wnkcdr.js";import"./getPseudoElementBounds-CEgSfOsV.js";import"./chevron-down-C95_Fq08.js";import"./index-CLl-8Y0S.js";import"./error-B4GY5Ke1.js";import"./BaseCbacBanner-DZbBMzdd.js";import"./makeExternalStore-CIehlGBq.js";import"./Tooltip-B8_rEhlp.js";import"./isObject-DIeIJOdU.js";import"./debounce-C-RRrtJp.js";import"./useOsdkClient-DOvJ8crf.js";import"./tick-BzN4aODk.js";import"./DropdownField-CLNenIwJ.js";import"./isEqual-Ce49QXZx.js";import"./_baseIsEqual-BzRnqrWM.js";import"./withOsdkMetrics-DU1BWRzI.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BJLBRZOh.js";import{O as i}from"./object-table-D6XTw50v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwUp_7F1.js";import"./Table-dj-3XM9K.js";import"./index-C9_BYSi8.js";import"./Dialog-w7wPINN3.js";import"./cross-DYYKBVG2.js";import"./svgIconContainer-CQ7lEg_v.js";import"./useBaseUiId-LHwOB3kw.js";import"./InternalBackdrop-Bg95Crdb.js";import"./composite-BxFzj_3L.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./index-DsPo5D0P.js";import"./useEventCallback-D_IWJpWQ.js";import"./SkeletonBar-CA0TLWsN.js";import"./LoadingCell-oMac1VC6.js";import"./ColumnConfigDialog-D8ziylzG.js";import"./DraggableList-D3U2xt4z.js";import"./search-lm4u23Jr.js";import"./Input-DotRyYSg.js";import"./useControlled-DvCQBOjX.js";import"./Button-B1QFNCxV.js";import"./small-cross-s83LmiPv.js";import"./ActionButton-DfBkhzDx.js";import"./Checkbox-Cf1eTA8o.js";import"./useValueChanged-DKvkRZw_.js";import"./CollapsiblePanel-DeNvoW95.js";import"./MultiColumnSortDialog-Bxs_R_QI.js";import"./MenuTrigger-DUpdUHK8.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./getDisabledMountTransitionStyles-CMTlxnVD.js";import"./getPseudoElementBounds-GUEr2WJt.js";import"./chevron-down-PUEKZFzz.js";import"./index-BxHhiHH9.js";import"./error-RXBYB8o8.js";import"./BaseCbacBanner-CqC4EUL0.js";import"./makeExternalStore-BWhFJ2a3.js";import"./Tooltip-BYFoA5Qd.js";import"./PopoverPopup-Cbo8QQ1w.js";import"./debounce-lfKLdo1S.js";import"./useOsdkClient-BnXpdimb.js";import"./tick-G0_utWJZ.js";import"./DropdownField-DLWbrKeC.js";import"./isEqual-Bm2E3Blo.js";import"./withOsdkMetrics-CUH6WGya.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

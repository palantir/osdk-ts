import{f as p,j as e}from"./iframe-QQ9Fs_tc.js";import{O as i}from"./object-table-Qwse69C6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4fYryDC.js";import"./Table-XvNUOy3B.js";import"./index-DkrQDtS2.js";import"./Dialog-BidFhY0J.js";import"./cross-DmvM--6P.js";import"./svgIconContainer-DTxq_i5h.js";import"./useBaseUiId-1r5VJFrp.js";import"./InternalBackdrop-CV3kvSS-.js";import"./composite-2UwVI9RX.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./index-DN5mWcju.js";import"./useEventCallback-UDwFt7_R.js";import"./SkeletonBar-bIWrP7Fa.js";import"./LoadingCell-5E5jRK52.js";import"./ColumnConfigDialog-DsKPIw6u.js";import"./DraggableList-DsZqtxDJ.js";import"./search-BSq4Mlrv.js";import"./Input-CucLW42P.js";import"./useControlled-36aB-sGp.js";import"./Button-DJziOx5S.js";import"./small-cross-CwQDMn6h.js";import"./ActionButton-D_tYhxEf.js";import"./Checkbox-BQqiVQMr.js";import"./useValueChanged-zGcUW3kI.js";import"./CollapsiblePanel-B9w9s6OF.js";import"./MultiColumnSortDialog-CWeOA6_H.js";import"./MenuTrigger-ZsgrxCHv.js";import"./CompositeItem-Bl0uQaQG.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./getDisabledMountTransitionStyles-2ojh7cGB.js";import"./getPseudoElementBounds-DXdFGrw3.js";import"./chevron-down-Bgnu4jc9.js";import"./index-C32oDOmG.js";import"./error-DTTckfDx.js";import"./BaseCbacBanner-D46qbUJD.js";import"./makeExternalStore-kQ-0-i1V.js";import"./Tooltip-BPNAr5X_.js";import"./PopoverPopup-LQKhjub2.js";import"./debounce-Ds7iogVo.js";import"./useOsdkClient-DtjCwYRE.js";import"./tick-fiXJSjT8.js";import"./DropdownField-B-kw3xxE.js";import"./isEqual-DKOAC8cr.js";import"./withOsdkMetrics-MEpQgkcH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

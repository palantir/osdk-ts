import{f as p,j as e}from"./iframe-g7EXj__l.js";import{O as i}from"./object-table-DTbvjMdY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8k1PL_q.js";import"./Table-DJjZEmrh.js";import"./index-STGRTw-I.js";import"./Dialog-XCUIdX4K.js";import"./cross-DMuPKEQ0.js";import"./svgIconContainer-DFRoFWsy.js";import"./useBaseUiId-JhwK1l7S.js";import"./InternalBackdrop-DAPPStaY.js";import"./composite-CTFcElLo.js";import"./index-B0EzKUi-.js";import"./index-C-z8TFzf.js";import"./index-B1IG8Yi1.js";import"./useEventCallback-DRPgLmUn.js";import"./SkeletonBar-D6lZdVq4.js";import"./LoadingCell-CeKAI7DY.js";import"./ColumnConfigDialog-Dqvj4yM_.js";import"./DraggableList-Cv3KZNur.js";import"./search-Dyr6dgW-.js";import"./Input-B51qbm94.js";import"./useControlled-Bl9w2UKC.js";import"./Button-bn5eeaYG.js";import"./small-cross-Cmov1ycc.js";import"./ActionButton-K4ZhL1v-.js";import"./Checkbox-VC0kvEDQ.js";import"./useValueChanged-D8GvB5cP.js";import"./CollapsiblePanel-QedkUBfr.js";import"./MultiColumnSortDialog-Dc4W12HY.js";import"./MenuTrigger-CCgakD4e.js";import"./CompositeItem-C0TLzRF2.js";import"./ToolbarRootContext-BDh1zVyN.js";import"./getDisabledMountTransitionStyles-C2M1pWlv.js";import"./getPseudoElementBounds-CQh8woL5.js";import"./chevron-down-DYMGKjqf.js";import"./index-CuPaLakH.js";import"./error-CiSXC6k7.js";import"./BaseCbacBanner-CnM_N6Ua.js";import"./makeExternalStore-B5gQKQXN.js";import"./Tooltip-CuGUkUwF.js";import"./PopoverPopup-kmYtvjiL.js";import"./debounce-BTft0WlZ.js";import"./useOsdkClient-DDtgbU-m.js";import"./tick-Dss7UdqX.js";import"./DropdownField-vSeRPihM.js";import"./isEqual-B6NaPJsE.js";import"./withOsdkMetrics-DC-0ZtoG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

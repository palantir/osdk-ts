import{f as p,j as e}from"./iframe-BF6_9Xjc.js";import{O as i}from"./object-table-Kgjg2E3o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVsiSqQ7.js";import"./Table-CZHycnjt.js";import"./index-B1Ya2fBr.js";import"./Dialog-KSu_uhqQ.js";import"./cross-_UU9sZ5F.js";import"./svgIconContainer-CQE4WPFB.js";import"./useBaseUiId-s3ehRo10.js";import"./InternalBackdrop-D1tqsc6f.js";import"./composite-BGGp11kx.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./index-eQPCQQYr.js";import"./useEventCallback-n4YXn8jD.js";import"./SkeletonBar-B8Ad8ahg.js";import"./LoadingCell-UE-4NWGG.js";import"./ColumnConfigDialog-C5xWFU6m.js";import"./DraggableList-B8IxaLCR.js";import"./search-BUGVh3PQ.js";import"./Input-RBsPV06C.js";import"./useControlled-BXYuK13Z.js";import"./Button-SD0gx5bd.js";import"./small-cross-B8TwzzPi.js";import"./ActionButton-BpRFGqnw.js";import"./Checkbox-BWIz-lL7.js";import"./useValueChanged-CYAv_T9U.js";import"./CollapsiblePanel-CZ9dHRXC.js";import"./MultiColumnSortDialog-vfixhd_W.js";import"./MenuTrigger-DV1kYIh9.js";import"./CompositeItem-DI8gVSRQ.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./getDisabledMountTransitionStyles-DNoRrnCX.js";import"./getPseudoElementBounds-BD65du9n.js";import"./chevron-down-CVGUePFi.js";import"./index-qnSLgzX3.js";import"./error-Dk0JQDUN.js";import"./BaseCbacBanner-BA3oIRdg.js";import"./makeExternalStore-BGO-jF6d.js";import"./Tooltip-CPZeRJjC.js";import"./PopoverPopup-BBXIONb1.js";import"./debounce-BsKaorv7.js";import"./useOsdkClient-B4LNNlf9.js";import"./tick-BHeRwjB9.js";import"./DropdownField-BB4TjDf4.js";import"./isEqual--GlCyfF0.js";import"./withOsdkMetrics-R2jYMWim.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

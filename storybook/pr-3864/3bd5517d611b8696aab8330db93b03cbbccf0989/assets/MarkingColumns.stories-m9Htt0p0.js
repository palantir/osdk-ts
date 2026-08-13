import{f as p,j as e}from"./iframe-CKmaUc-O.js";import{O as i}from"./object-table-CRq62ily.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CscS6U7X.js";import"./Table-DVRQ-sPW.js";import"./index-CMcZnLz6.js";import"./Dialog-DNkjnae2.js";import"./cross-BALXh9IB.js";import"./svgIconContainer-CegWez8t.js";import"./useBaseUiId-DsDyRBiU.js";import"./InternalBackdrop-SJx0AGfQ.js";import"./composite-C562XDt6.js";import"./index-CIKf3xy6.js";import"./index-BF7pzJIv.js";import"./index-Ka4ymreY.js";import"./useEventCallback-eYCSyrAU.js";import"./SkeletonBar-GS2ZmJl1.js";import"./LoadingCell-B3NoxlTE.js";import"./ColumnConfigDialog-Bgys4H3m.js";import"./DraggableList-CsIjoI6-.js";import"./search-B7xiKcCh.js";import"./Input-XPh25gf6.js";import"./useControlled-DVLJsOQ5.js";import"./Button-DLg7_PpI.js";import"./small-cross-Dl7lp_Ey.js";import"./ActionButton-CydCOtLn.js";import"./Checkbox-DHJNj8N9.js";import"./useValueChanged-Dt88yFTw.js";import"./CollapsiblePanel-DoBfbSRB.js";import"./MultiColumnSortDialog-D4tUSbul.js";import"./MenuTrigger-DWmokvBm.js";import"./CompositeItem-1GI0eeCe.js";import"./ToolbarRootContext-D4A7F4rM.js";import"./getDisabledMountTransitionStyles-6j8GTRV3.js";import"./getPseudoElementBounds-ByMpPU3O.js";import"./chevron-down-B6FJc6l4.js";import"./index-Bn4FIY15.js";import"./error-CuBhF1J1.js";import"./BaseCbacBanner-eO_zya7z.js";import"./makeExternalStore-XgONOm1-.js";import"./Tooltip-ETl6TcVi.js";import"./PopoverPopup-Xkx8d3Rm.js";import"./toNumber-DcvlfLHl.js";import"./useOsdkClient-f9FemdTv.js";import"./tick-CyHVd6Ks.js";import"./DropdownField-1f0jHJ9c.js";import"./withOsdkMetrics-DyRjXdKi.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};

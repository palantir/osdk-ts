import{f as p,j as e}from"./iframe-BV--DL-R.js";import{O as i}from"./object-table-DQHNYxoz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfGADaHb.js";import"./Table-7uiN3oSh.js";import"./index-CpBKC5uG.js";import"./Dialog-CebkHvWH.js";import"./cross-D8EsCuc2.js";import"./svgIconContainer-vnkw8afj.js";import"./useBaseUiId-rbddndRR.js";import"./InternalBackdrop-A29j3Jv_.js";import"./composite-CQeJ_a4C.js";import"./index-EXqXv7zU.js";import"./index-B1MBKIV9.js";import"./index-BxGUdqqq.js";import"./useEventCallback-DLQ-P11x.js";import"./SkeletonBar-CQF-UYPc.js";import"./LoadingCell-C4WppctV.js";import"./ColumnConfigDialog-RLeotKr6.js";import"./DraggableList-CqO_EFJB.js";import"./search-BMQtt1GF.js";import"./Input-CryKSl2-.js";import"./useControlled-CdeR330J.js";import"./Button-D-B9BslW.js";import"./small-cross-DRxw8mHr.js";import"./ActionButton-kVCpi8C7.js";import"./Checkbox-BctEX42o.js";import"./useValueChanged-CJeYGrcH.js";import"./CollapsiblePanel-S4FPv7iH.js";import"./MultiColumnSortDialog-BV6SioqH.js";import"./MenuTrigger-DwsQoCvq.js";import"./CompositeItem-CftYIfuS.js";import"./ToolbarRootContext-BKEdcjiV.js";import"./getDisabledMountTransitionStyles-B1E7AbBw.js";import"./getPseudoElementBounds-Bw9teYEa.js";import"./chevron-down-DLz3NkpP.js";import"./index-BG63AOsT.js";import"./error-CX8ETYns.js";import"./BaseCbacBanner-Cc424hnx.js";import"./makeExternalStore-CbX_-WII.js";import"./Tooltip-CVaWVMU1.js";import"./PopoverPopup-Dab1ytdf.js";import"./debounce-yjhqSwaL.js";import"./useOsdkClient-BpiaH7Up.js";import"./tick-BN4lQriL.js";import"./DropdownField-CqJYsTEQ.js";import"./isEqual-Dx0Yr_9W.js";import"./withOsdkMetrics-bx0PT80C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

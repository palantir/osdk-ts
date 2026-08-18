import{f as p,j as e}from"./iframe-DNLO30Ww.js";import{O as i}from"./object-table-sgCBFiy6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMPS02wq.js";import"./Table-CvdSvmR6.js";import"./index-BXPwi4ll.js";import"./Dialog-BZZOdUSR.js";import"./cross-DyXX2kzu.js";import"./svgIconContainer-BhTCIoRp.js";import"./useBaseUiId-BD76vFJo.js";import"./InternalBackdrop-CgHl6qqD.js";import"./composite-Dh6pm8eM.js";import"./index-ByST95mm.js";import"./index-SmrZ48_U.js";import"./index-D6M7-y6_.js";import"./useEventCallback-CqB29WRK.js";import"./SkeletonBar-Dzoc_fkT.js";import"./LoadingCell-C_ceOiHB.js";import"./ColumnConfigDialog-CjYS5qyG.js";import"./DraggableList-B3aeQJdM.js";import"./search-BPhsSIu0.js";import"./Input-ChfQp7iv.js";import"./useControlled-DrtjR5iX.js";import"./Button-G1G-2Ckd.js";import"./small-cross-BAGSfF0m.js";import"./ActionButton-DPUhH6Lo.js";import"./Checkbox-CZW1Pp-G.js";import"./useValueChanged-DCJA7BE8.js";import"./CollapsiblePanel-BPvxPRY4.js";import"./MultiColumnSortDialog-uD75VtMT.js";import"./MenuTrigger-Cz4PIlaQ.js";import"./CompositeItem-C2jJgszn.js";import"./ToolbarRootContext-CSBtcNyO.js";import"./getDisabledMountTransitionStyles-CaxoHLLt.js";import"./getPseudoElementBounds-C7vUDRr2.js";import"./chevron-down-DkxMLSoH.js";import"./index-DAQea2-r.js";import"./error-DXYf62L2.js";import"./BaseCbacBanner-aHxz9-6a.js";import"./makeExternalStore-DaD-3fW6.js";import"./Tooltip-BOZFqeeI.js";import"./PopoverPopup-Tdg4qabi.js";import"./debounce-spsT2235.js";import"./useOsdkClient-BWnKxiQN.js";import"./tick-BmhstWDK.js";import"./DropdownField-Cqy_ppKQ.js";import"./isEqual-2hh4sGtV.js";import"./withOsdkMetrics-CAvqvWGd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

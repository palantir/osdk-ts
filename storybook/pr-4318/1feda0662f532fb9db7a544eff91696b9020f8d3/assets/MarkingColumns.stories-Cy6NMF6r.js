import{f as p,j as e}from"./iframe-CC2ptI8P.js";import{O as i}from"./object-table-cyl8U4nZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJhSNMV6.js";import"./Table-B2Pl64Eo.js";import"./index-84SYJq0E.js";import"./Dialog-B6ueZDGs.js";import"./cross-6eZZZefX.js";import"./svgIconContainer-aq_zJjvF.js";import"./useBaseUiId-BCidQo4j.js";import"./InternalBackdrop-BYfcK4gR.js";import"./composite-BKy8zjFJ.js";import"./index-DamSmk8t.js";import"./index-DyTGXUkB.js";import"./index-EB8pHHv1.js";import"./useEventCallback-9nnFNI3V.js";import"./SkeletonBar-DyZk7EQt.js";import"./LoadingCell-DicG8Dj_.js";import"./ColumnConfigDialog-BY30hZi8.js";import"./DraggableList-DqtqQ5p0.js";import"./search-CUgQ5xTX.js";import"./Input-_srjMwb1.js";import"./useControlled-DQuDgCM-.js";import"./Button-CefAX4Ei.js";import"./small-cross-BgV8ZaTM.js";import"./ActionButton-BYu3NJY8.js";import"./Checkbox-CcP75v4j.js";import"./useValueChanged-DuD7hXBK.js";import"./CollapsiblePanel-BWf4fg_T.js";import"./MultiColumnSortDialog-Bb7NpcEt.js";import"./MenuTrigger-D1rJZxiT.js";import"./CompositeItem-CDqASXyT.js";import"./ToolbarRootContext-DJFAvWHQ.js";import"./getDisabledMountTransitionStyles-MYkNe9cm.js";import"./getPseudoElementBounds-C_dkJ1tF.js";import"./chevron-down-CoZSOIuk.js";import"./index-DPANitfT.js";import"./error-CdNmuOhr.js";import"./BaseCbacBanner-DQkZsN8i.js";import"./makeExternalStore-LEyTDUuD.js";import"./Tooltip-S4cmKOsn.js";import"./PopoverPopup-DW-tLpwu.js";import"./debounce-Ba7F9S5L.js";import"./useOsdkClient-CyK88aLW.js";import"./tick-tjdhehOt.js";import"./DropdownField-DH29rfQh.js";import"./isEqual-Crk9DI8k.js";import"./withOsdkMetrics-dqavG6zz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

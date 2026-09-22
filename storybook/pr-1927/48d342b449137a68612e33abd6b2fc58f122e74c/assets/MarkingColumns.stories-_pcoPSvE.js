import{f as p,j as e}from"./iframe-DbFL1YKD.js";import{O as i}from"./object-table-E1TD6FiH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPeLqFG0.js";import"./Table-4fjAyFff.js";import"./index-BpVl4HIU.js";import"./Dialog-nIfIufiq.js";import"./cross-BbsbdKVz.js";import"./svgIconContainer-DmqA5_t8.js";import"./useBaseUiId-DpJu2OQl.js";import"./InternalBackdrop-CWJBApus.js";import"./composite-DUwAvhnX.js";import"./index-Dqg20C0A.js";import"./index-BusxuARM.js";import"./index-pnTqVHDC.js";import"./useEventCallback-Dp_d2SUA.js";import"./SkeletonBar-C5Dm8uJU.js";import"./LoadingCell-NDk8zku3.js";import"./ColumnConfigDialog-BEksKmdc.js";import"./DraggableList-7WaRfhpo.js";import"./search-DfBNorlD.js";import"./Input-Z3iSNu5L.js";import"./useControlled-CC7pAFD9.js";import"./Button-DsQQlkgI.js";import"./small-cross-CXtNxeYe.js";import"./ActionButton-DojK71a-.js";import"./Checkbox-C_WkvYth.js";import"./useValueChanged-rzn5oUi-.js";import"./CollapsiblePanel-rxa4K0IB.js";import"./MultiColumnSortDialog-KMu4fX3c.js";import"./MenuTrigger-BPE6GEGI.js";import"./CompositeItem-BFMnxKL4.js";import"./ToolbarRootContext-BGVeLiJB.js";import"./getDisabledMountTransitionStyles-Co12HikA.js";import"./getPseudoElementBounds-C-Gj9_OL.js";import"./chevron-down-BFigfpWF.js";import"./index-Dqpnei48.js";import"./error-B_or4gbN.js";import"./BaseCbacBanner-BAqqImX8.js";import"./makeExternalStore-DCuWZO1g.js";import"./Tooltip-BnTll5Ro.js";import"./PopoverPopup-BpDStnyX.js";import"./debounce-B-7wdJBB.js";import"./useOsdkClient-CwS7VwCc.js";import"./tick-C7lpv1d9.js";import"./DropdownField-DzYuycL4.js";import"./isEqual-BpI-y_2L.js";import"./withOsdkMetrics-CCBEdesf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

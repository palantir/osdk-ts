import{f as p,j as e}from"./iframe-9DMBWr0q.js";import{O as i}from"./object-table-BibkEGbR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DalOHg7w.js";import"./Table-DHLmMlG-.js";import"./index-DQvdaF-W.js";import"./Dialog-Df8qvF-7.js";import"./cross-D2pRmhty.js";import"./svgIconContainer-54MNCtA9.js";import"./useBaseUiId-DsOnJdgo.js";import"./InternalBackdrop-CcIKsClD.js";import"./composite-pdHJBClF.js";import"./index-BmdeRFNN.js";import"./index-DHI41pZJ.js";import"./index-BC9PcR15.js";import"./useEventCallback-W8V2Dont.js";import"./SkeletonBar-B4ODr-AM.js";import"./LoadingCell-ndyblGvj.js";import"./ColumnConfigDialog-BSRPEeCB.js";import"./DraggableList-C2B-3KQT.js";import"./search-D5Zr1HOy.js";import"./Input-EUcX8Uzk.js";import"./useControlled-DytgQJGV.js";import"./Button-DUgj0L3T.js";import"./small-cross-a45cq7g8.js";import"./ActionButton-M4Hg-S07.js";import"./Checkbox-e6pqPY5D.js";import"./useValueChanged-CFHCDrlE.js";import"./CollapsiblePanel-C6jiw36r.js";import"./MultiColumnSortDialog-DA-66R8L.js";import"./MenuTrigger-DWvoMzGe.js";import"./CompositeItem-2UjtZXP3.js";import"./ToolbarRootContext-BPjGDrK2.js";import"./getDisabledMountTransitionStyles-D7rPIBuN.js";import"./getPseudoElementBounds-DhNL39RB.js";import"./chevron-down-CUeEPhCI.js";import"./index-BiO4atOF.js";import"./error-B9BZNthJ.js";import"./BaseCbacBanner-C0rOz-y3.js";import"./makeExternalStore-BHkeYhGJ.js";import"./Tooltip-CsXOXWqo.js";import"./PopoverPopup-yQY21wsF.js";import"./debounce-BXBIjcle.js";import"./useOsdkClient-D6FhjSll.js";import"./tick-zvtGaScm.js";import"./DropdownField-BWnA-PDI.js";import"./isEqual-BJFmr-bs.js";import"./withOsdkMetrics-BsCiBcgq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

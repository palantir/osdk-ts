import{f as p,j as e}from"./iframe-BgvLvKva.js";import{O as i}from"./object-table-C5L2lUHh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1HwKvYQ.js";import"./Table-BlCx7eH_.js";import"./index-C5UyF6W2.js";import"./Dialog-BEorr5lF.js";import"./cross-WN3vBfZU.js";import"./svgIconContainer-CcU0b5d6.js";import"./useBaseUiId-ctMKwW6N.js";import"./InternalBackdrop-BYbSa1OD.js";import"./composite-BYxHSO5E.js";import"./index-DHe1MgcY.js";import"./index-DIEiR9vc.js";import"./index-CZvid9ZQ.js";import"./useEventCallback-BeycNYXS.js";import"./SkeletonBar-Dy9e3NIH.js";import"./LoadingCell-Dwc76lDi.js";import"./ColumnConfigDialog-sp5VdiZD.js";import"./DraggableList-J22w-pzX.js";import"./search-BC3w2ZRf.js";import"./Input-BRpNUPT7.js";import"./useControlled-DJVt1nAj.js";import"./Button-CT3oLFOf.js";import"./small-cross-w8o8YAZK.js";import"./ActionButton-BW77J7ec.js";import"./Checkbox-f__wunET.js";import"./useValueChanged-DomNCZ4R.js";import"./CollapsiblePanel-B9nGBeF-.js";import"./MultiColumnSortDialog-BesTIq8C.js";import"./MenuTrigger-jvhRJjZJ.js";import"./CompositeItem-BIOBD7ED.js";import"./ToolbarRootContext-1Zs9_aIX.js";import"./getDisabledMountTransitionStyles-DDd2v21E.js";import"./getPseudoElementBounds-DZzp9gig.js";import"./chevron-down-Dsbl3RB_.js";import"./index-Dsqet5kS.js";import"./error-MS4gG1j8.js";import"./BaseCbacBanner-B4v3W_qt.js";import"./makeExternalStore-C6g-u5rg.js";import"./Tooltip-CdSKpuHY.js";import"./PopoverPopup-Cs96luoA.js";import"./debounce-DDxQirrc.js";import"./useOsdkClient-CMrBc-CL.js";import"./tick-BQ9Lr4SE.js";import"./DropdownField-CpbgYUlt.js";import"./isEqual-BAMquniX.js";import"./withOsdkMetrics-Ccq9KWbZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

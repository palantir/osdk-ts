import{f as p,j as e}from"./iframe-DmoMQzpD.js";import{O as i}from"./object-table-c_BNjK3P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0xn3Nkw5.js";import"./Table-B64kdof3.js";import"./index-DPXokUby.js";import"./Dialog-VOeWPfhL.js";import"./cross-C9RHIJgp.js";import"./svgIconContainer-C0jxJ_1G.js";import"./useBaseUiId-BxnyJA2P.js";import"./InternalBackdrop-BsBLBzYe.js";import"./composite-RG7e36sI.js";import"./index-DUz5HI9G.js";import"./index-BXiJ_67x.js";import"./index-DmGCqnm3.js";import"./useEventCallback-FACcLVn-.js";import"./SkeletonBar-BhdoBlry.js";import"./LoadingCell-IS5e8M_0.js";import"./ColumnConfigDialog-DG9B0wa6.js";import"./DraggableList-BfGrODX6.js";import"./search-g9MHYdyd.js";import"./Input-CN7AavNu.js";import"./useControlled-C5PyKbe1.js";import"./Button-DawQ6LNI.js";import"./small-cross-B5QHLenC.js";import"./ActionButton-aUTPXbO1.js";import"./Checkbox-eJcqNJpv.js";import"./useValueChanged-BZ44jBcl.js";import"./CollapsiblePanel-C280Av3f.js";import"./MultiColumnSortDialog-1MmNuSWr.js";import"./MenuTrigger-DLJdCz9v.js";import"./CompositeItem-Drfjdgjy.js";import"./ToolbarRootContext-DyHioDsT.js";import"./getDisabledMountTransitionStyles-CJwnQjun.js";import"./getPseudoElementBounds-CFDjab3s.js";import"./chevron-down-vzowt2v5.js";import"./index-BM7Z1UL0.js";import"./error-CSsiItLy.js";import"./BaseCbacBanner-qjoLbGN0.js";import"./makeExternalStore-nzxHrE9v.js";import"./Tooltip-CjVXqByo.js";import"./PopoverPopup-7uRjXaTb.js";import"./debounce-CM9X_VMN.js";import"./useOsdkClient-ZQ1sGaOD.js";import"./tick-B2FvzgWn.js";import"./DropdownField-Cz44kW52.js";import"./isEqual-Df6IwIr9.js";import"./withOsdkMetrics-DGBLah1x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

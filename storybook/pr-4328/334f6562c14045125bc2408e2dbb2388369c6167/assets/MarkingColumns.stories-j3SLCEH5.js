import{f as p,j as e}from"./iframe-DxLxeeBD.js";import{O as i}from"./object-table-CMvLi3AZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7NNhvj1.js";import"./Table-tPx8wRZ3.js";import"./index-DSM2Nmta.js";import"./Dialog-7K7ukV7q.js";import"./cross-Z_oHrjIu.js";import"./svgIconContainer-B6Cb5ptS.js";import"./useBaseUiId-BEhgV5tS.js";import"./InternalBackdrop-BCmz-HrC.js";import"./composite-D1h37npl.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./index-DrEQLJsr.js";import"./useEventCallback-CpuXukHA.js";import"./SkeletonBar-D7VTi4iG.js";import"./LoadingCell-KAKJr_zN.js";import"./ColumnConfigDialog-mkBqXe8j.js";import"./DraggableList-Bd3tF3_V.js";import"./search-BuJ4cv5l.js";import"./Input-CFINwHSJ.js";import"./useControlled-DAtmThLw.js";import"./Button-BOLOFIFE.js";import"./small-cross-CSyQLWSj.js";import"./ActionButton-RMHpWcLm.js";import"./Checkbox-B6ZLBY2Y.js";import"./useValueChanged-O7ZxSsjb.js";import"./CollapsiblePanel-Cba0R3PM.js";import"./MultiColumnSortDialog-Bxz0LRc8.js";import"./MenuTrigger-jD7qjrb3.js";import"./CompositeItem-IyZEpEpW.js";import"./ToolbarRootContext-D7eywLcy.js";import"./getDisabledMountTransitionStyles-D_N2rHM3.js";import"./getPseudoElementBounds-CE6PXmfu.js";import"./chevron-down-DqhD85JK.js";import"./index-bdK4kZrJ.js";import"./error-B99vb4Y2.js";import"./BaseCbacBanner-DuWlNbRS.js";import"./makeExternalStore--BkPrjsd.js";import"./Tooltip-CIkzHwPr.js";import"./isObject-C1XnUciK.js";import"./debounce-DCzHGjeF.js";import"./useOsdkClient-85GRc1g4.js";import"./tick-DWAS6W14.js";import"./DropdownField-D7QCNisd.js";import"./isEqual-DiIZOB07.js";import"./_baseIsEqual-DM2pxxnH.js";import"./withOsdkMetrics-CJ_tbfj8.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

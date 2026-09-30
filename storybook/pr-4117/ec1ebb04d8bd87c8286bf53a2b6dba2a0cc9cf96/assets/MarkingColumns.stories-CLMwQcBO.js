import{f as p,j as e}from"./iframe-DRNk89ZH.js";import{O as i}from"./object-table-DyslRn07.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CL4j9Mgj.js";import"./Table-CCvso8pR.js";import"./index-CS7yPxi2.js";import"./Dialog-DhLNyJn8.js";import"./cross-CdajDpt0.js";import"./svgIconContainer-BYMe6jPQ.js";import"./useBaseUiId-DA__XCsT.js";import"./InternalBackdrop-DyXkqyZv.js";import"./composite-8utJ-QhI.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./index-CR7ijv3D.js";import"./useEventCallback-Dix1JuJQ.js";import"./SkeletonBar-D55GtZ7r.js";import"./LoadingCell-C5WX1ZtT.js";import"./ColumnConfigDialog-D7jswbWW.js";import"./DraggableList-B30xQjvE.js";import"./search-Cy6sHHpP.js";import"./Input-DehlDyjB.js";import"./useControlled-CE505VKa.js";import"./Button-Br4k3ffi.js";import"./small-cross-Blo856Jy.js";import"./ActionButton-ByUIz9Jq.js";import"./Checkbox-BZM4LvUK.js";import"./useValueChanged-BB_kvMD4.js";import"./CollapsiblePanel-Bwzr5sqV.js";import"./MultiColumnSortDialog-BIvzGas2.js";import"./MenuTrigger-C7Mh7EWc.js";import"./CompositeItem-DF-AHu7i.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./getDisabledMountTransitionStyles-BQM7zsXg.js";import"./getPseudoElementBounds-BcErDK4h.js";import"./chevron-down-CphPepB3.js";import"./index-CMtFadZ1.js";import"./error-B_EjGR4-.js";import"./BaseCbacBanner-BeWGcHZq.js";import"./makeExternalStore-B6lEYqi9.js";import"./Tooltip-YY6aadVm.js";import"./PopoverPopup-C0n4VFaw.js";import"./debounce-CZTrh2IE.js";import"./useOsdkClient-Bnc6agZG.js";import"./tick-C69MPngT.js";import"./DropdownField-BLLbuNZd.js";import"./isEqual-BW7L9s0X.js";import"./withOsdkMetrics-B1ACrfWT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

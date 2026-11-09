import{f as p,j as e}from"./iframe-D3hBsnsj.js";import{O as i}from"./object-table-BDCVUGn6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMLOvsmI.js";import"./Table-u1lWsm55.js";import"./index-BFoG3y9f.js";import"./Dialog-CuB9xgJ9.js";import"./cross-zcrYkWBY.js";import"./svgIconContainer-Bz0YpGKi.js";import"./useBaseUiId-Bk-faTDV.js";import"./InternalBackdrop-CS-KNpxJ.js";import"./composite-DWlrqv2G.js";import"./index-CCkpr9rO.js";import"./index-BPny8RHi.js";import"./index-CeAiM1qG.js";import"./useEventCallback-BP_wGY7x.js";import"./SkeletonBar-DI0g9AHe.js";import"./LoadingCell-CT7wzQLK.js";import"./ColumnConfigDialog-w0Tnxbhj.js";import"./DraggableList-BBuYe0yT.js";import"./search-CE7lhKVr.js";import"./Input-DbDZgezU.js";import"./useControlled-D75sOh0K.js";import"./Button-Z7wlB8te.js";import"./small-cross-BH03RGEV.js";import"./ActionButton-P3mRJLVa.js";import"./Checkbox-Cna2c8lA.js";import"./useValueChanged-Dbp_U3FV.js";import"./CollapsiblePanel-By1TCkBA.js";import"./MultiColumnSortDialog-l7mW_WED.js";import"./MenuTrigger-DwCPrNRY.js";import"./CompositeItem-DxaSaYkw.js";import"./ToolbarRootContext-CMXlPgPk.js";import"./getDisabledMountTransitionStyles-DsHQCkew.js";import"./getPseudoElementBounds-BXFF9d0t.js";import"./chevron-down-i4CyxBDw.js";import"./index-DzDp982c.js";import"./error-BUxN-ftl.js";import"./BaseCbacBanner-DSSobXcA.js";import"./makeExternalStore-CKN6mP8s.js";import"./Tooltip-BF8YE5eC.js";import"./isObject-DTGaRAh3.js";import"./debounce-4gosawj0.js";import"./useOsdkClient-CSiMh-gG.js";import"./tick-X_jDyEUZ.js";import"./DropdownField-DgWMbQ5Q.js";import"./isEqual-B7i9BrOq.js";import"./_baseIsEqual-D3i4A-oD.js";import"./withOsdkMetrics-CQ22kB-k.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

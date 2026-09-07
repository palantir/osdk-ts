import{f as p,j as e}from"./iframe-AuAaB4HI.js";import{O as i}from"./object-table-Cd9572Ls.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qH-vyE7r.js";import"./Table-DkVJx52C.js";import"./index-BKkpZaGC.js";import"./Dialog-C8RsVbkF.js";import"./cross-B_t7xRmp.js";import"./svgIconContainer-CNBq2Qvc.js";import"./useBaseUiId-C8uvXzmq.js";import"./InternalBackdrop-BY0s6ZkK.js";import"./composite-OHdH01L1.js";import"./index-De6CDc-m.js";import"./index-BGK8CIIz.js";import"./index-B03wNI31.js";import"./useEventCallback-CPYY-2RY.js";import"./SkeletonBar-DUAi2JRR.js";import"./LoadingCell-ClVQTm05.js";import"./ColumnConfigDialog--oHcFC6T.js";import"./DraggableList-B2jXnvo5.js";import"./search-MZDtJj7T.js";import"./Input-DkM5HnnT.js";import"./useControlled-D-wnjZuk.js";import"./Button-BkBIeHIG.js";import"./small-cross-BIOH-3UI.js";import"./ActionButton-Bce2G-nj.js";import"./Checkbox-CuISlYlI.js";import"./useValueChanged-BzNV50BT.js";import"./CollapsiblePanel-DJjrjh2j.js";import"./MultiColumnSortDialog-23Ke-zpJ.js";import"./MenuTrigger-Cj7fZqKT.js";import"./CompositeItem-BPZ7rSFH.js";import"./ToolbarRootContext-CDLutxqH.js";import"./getDisabledMountTransitionStyles-BoDOk_4Q.js";import"./getPseudoElementBounds-BUuKa4di.js";import"./chevron-down-C-dLVWDH.js";import"./index-fbOZd30r.js";import"./error-CZom1ueN.js";import"./BaseCbacBanner-CexzNDIA.js";import"./makeExternalStore-BZZHokGM.js";import"./Tooltip-DiHHkjyw.js";import"./PopoverPopup-uo-vkHCz.js";import"./debounce-DfeaP7BT.js";import"./useOsdkClient-BVW8BASE.js";import"./tick-DYRfQajR.js";import"./DropdownField-uNE4h0vC.js";import"./isEqual-B-7njsTG.js";import"./withOsdkMetrics-ChC8Do0m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

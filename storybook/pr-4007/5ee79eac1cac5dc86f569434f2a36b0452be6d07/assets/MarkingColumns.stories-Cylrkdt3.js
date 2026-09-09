import{f as p,j as e}from"./iframe-CiHlxZKU.js";import{O as i}from"./object-table-C4dQmNBt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3-eHC6Oh.js";import"./Table-ZtgXk0oU.js";import"./index-DVK1qKBA.js";import"./Dialog-jNCMq-Da.js";import"./cross-DnkNQUkT.js";import"./svgIconContainer-B7oTlJNo.js";import"./useBaseUiId-CYLsHClR.js";import"./InternalBackdrop-BJHbr0kT.js";import"./composite-BmdkrJdi.js";import"./index-DX1yHJ7e.js";import"./index-BpiTLOmA.js";import"./index-DpLMVXlm.js";import"./useEventCallback-7w4Pvi2m.js";import"./SkeletonBar-BXOdSqzb.js";import"./LoadingCell-BZyyuOIV.js";import"./ColumnConfigDialog-BlzoqZbI.js";import"./DraggableList-Bi0BBenO.js";import"./search-DGzvsSxy.js";import"./Input-WrV6nsUm.js";import"./useControlled-CSOYJAwm.js";import"./Button-79zi9HD3.js";import"./small-cross-BzAZpvdB.js";import"./ActionButton-B55oBZFt.js";import"./Checkbox-D3aGbVro.js";import"./useValueChanged-Dq-vng4U.js";import"./CollapsiblePanel-DvgzvRJe.js";import"./MultiColumnSortDialog-CXlcCZMY.js";import"./MenuTrigger-C9tdQe5I.js";import"./CompositeItem-BgmQxoYD.js";import"./ToolbarRootContext-COwKCexa.js";import"./getDisabledMountTransitionStyles-z4-ghzJd.js";import"./getPseudoElementBounds-TrAXZdgf.js";import"./chevron-down-7F-_gONV.js";import"./index-GfXRF7Uq.js";import"./error-BS001LJB.js";import"./BaseCbacBanner-DHTjEXE2.js";import"./makeExternalStore-BMposTlq.js";import"./Tooltip-kEePm4YO.js";import"./PopoverPopup-Dl2GoZ6p.js";import"./debounce-DxTEdiWN.js";import"./useOsdkClient-2Pjo08Xn.js";import"./tick-CIMxzo_S.js";import"./DropdownField-DkSX7_zX.js";import"./isEqual-BXzVZVEC.js";import"./withOsdkMetrics-DOs-_cRC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

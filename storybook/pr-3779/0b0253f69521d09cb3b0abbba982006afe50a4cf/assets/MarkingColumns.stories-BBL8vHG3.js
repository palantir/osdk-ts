import{f as p,j as e}from"./iframe-BH0RiS07.js";import{O as i}from"./object-table-Dw7wP583.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByubuHXR.js";import"./Table-xSzS9mg-.js";import"./index-7v2RjI2w.js";import"./Dialog-BrxKY4U3.js";import"./cross-D9ZUP5Ns.js";import"./svgIconContainer-FtuH6umr.js";import"./useBaseUiId-CUYaSpyz.js";import"./InternalBackdrop-30LaOI8b.js";import"./composite-Bx3ib-QK.js";import"./index-BPstulOd.js";import"./index-C2T1E1t9.js";import"./index-DWOM7wqb.js";import"./useEventCallback-D3r1tBuv.js";import"./SkeletonBar-CHLz7Pge.js";import"./LoadingCell-CHqJC0Jc.js";import"./ColumnConfigDialog-Byj8iSeW.js";import"./DraggableList-BjdYdEPc.js";import"./search-Bk-_LlpL.js";import"./Input-elqhlQ-r.js";import"./useControlled-CIhWFCzo.js";import"./isEqual-vJ1Qj1LB.js";import"./isObject-3i0MZCeP.js";import"./Button-Dpxlhfn0.js";import"./ActionButton-DIeKcdCW.js";import"./Checkbox-B4-NPCZf.js";import"./useValueChanged-gmanHop6.js";import"./CollapsiblePanel-DzvSaaqJ.js";import"./MultiColumnSortDialog-C_rWXuaq.js";import"./MenuTrigger-Bk13KZ3o.js";import"./CompositeItem-YyL2cv7w.js";import"./ToolbarRootContext-Dy6qwQeR.js";import"./getDisabledMountTransitionStyles-DA2haucZ.js";import"./getPseudoElementBounds-Bg_oiIin.js";import"./chevron-down-DuuQaagn.js";import"./index-BkgjoZmi.js";import"./error-BPzajNoT.js";import"./BaseCbacBanner-CSXlxhGL.js";import"./makeExternalStore-Cn2OHyrh.js";import"./Tooltip-BAkr9kah.js";import"./PopoverPopup-D3PXg0cX.js";import"./toNumber-BmEn9jnI.js";import"./useOsdkClient-DVK7fMCH.js";import"./tick-BKXV2n6K.js";import"./DropdownField-BB3NRdoL.js";import"./withOsdkMetrics-BwSBQoqW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

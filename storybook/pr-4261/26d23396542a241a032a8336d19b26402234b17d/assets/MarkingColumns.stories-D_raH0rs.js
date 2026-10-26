import{f as p,j as e}from"./iframe-B2PftgNv.js";import{O as i}from"./object-table-ClDAZpys.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEJ8wrbo.js";import"./Table-HWVEUDWm.js";import"./index-DLh6R3k3.js";import"./Dialog-C0Aqqg6h.js";import"./cross-DUUoKIdp.js";import"./svgIconContainer-BpxY4u4w.js";import"./useBaseUiId-Z6N9hVn8.js";import"./InternalBackdrop-C_Gp7NJL.js";import"./composite-ClzGHvMl.js";import"./index-CKDtR0br.js";import"./index-D5vOugya.js";import"./index-B_Dc_l-I.js";import"./useEventCallback-CQGtLwNK.js";import"./SkeletonBar-DTuV6I9E.js";import"./LoadingCell-Dgm9Srrt.js";import"./ColumnConfigDialog-B4LlJdmt.js";import"./DraggableList-DiiNiM-a.js";import"./search-By7WOD0U.js";import"./Input-BtteuOYK.js";import"./useControlled-CrpHgYxN.js";import"./Button-B8NZKNU8.js";import"./small-cross-BrcFqK6e.js";import"./ActionButton-B6gXvkdC.js";import"./Checkbox-C7Rc1ejm.js";import"./useValueChanged-C-aUTwRA.js";import"./CollapsiblePanel-DYRFEvlw.js";import"./MultiColumnSortDialog-Bz--MVn6.js";import"./MenuTrigger-0kNz5fpY.js";import"./CompositeItem-DXQI1LIg.js";import"./ToolbarRootContext-DSVVLYlD.js";import"./getDisabledMountTransitionStyles-CIcAeq8K.js";import"./getPseudoElementBounds-Bzb7fIgD.js";import"./chevron-down-CZZTKstq.js";import"./index-D12Somt8.js";import"./error-DLN9t7ZG.js";import"./BaseCbacBanner-7hqzmHST.js";import"./makeExternalStore-XDjeZ5H6.js";import"./Tooltip-D-7EvLcH.js";import"./PopoverPopup-bHujGyHj.js";import"./debounce-Dy8J1v9c.js";import"./useOsdkClient-8mR2SN13.js";import"./tick-BHo22fTJ.js";import"./DropdownField-Dj__11WN.js";import"./isEqual-DgLHABrY.js";import"./withOsdkMetrics-CoGkur03.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-zGF2yItg.js";import{O as i}from"./object-table-B-_rm4CA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DKR91DwN.js";import"./Table-B6IMnTKP.js";import"./index-CI0AAd7R.js";import"./Dialog-CWDyspc2.js";import"./cross-BclfVS0V.js";import"./svgIconContainer-CfbP11Km.js";import"./useBaseUiId-D8XkRAoN.js";import"./InternalBackdrop-C8zej5On.js";import"./composite-BhRiZx70.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./index-jHsjLuIA.js";import"./useEventCallback-Cg6-L5Ug.js";import"./SkeletonBar-CzCR3F20.js";import"./LoadingCell-C56P9DI-.js";import"./ColumnConfigDialog-DxlPqZ10.js";import"./DraggableList-CZyDDYiK.js";import"./search-Dr3ly3kj.js";import"./Input-gx0WGAlP.js";import"./useControlled-Bcq_19a7.js";import"./Button-CUzrpo83.js";import"./small-cross-B5aXXuf_.js";import"./ActionButton-Cpin8hGS.js";import"./Checkbox-DKB8j1aW.js";import"./useValueChanged-Bz7hhRgE.js";import"./CollapsiblePanel-CGpSwayQ.js";import"./MultiColumnSortDialog-CDL5uEaa.js";import"./MenuTrigger-DwGkpRY7.js";import"./CompositeItem-BGuYZ8t8.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./getDisabledMountTransitionStyles-C8rPshX7.js";import"./getPseudoElementBounds-_KhoGvMt.js";import"./chevron-down-BYonktV5.js";import"./index-Ce2iCB2D.js";import"./error-rXo5lK8q.js";import"./BaseCbacBanner-qvusjPLY.js";import"./makeExternalStore-BDBIRBp5.js";import"./Tooltip-BDl8XaA7.js";import"./PopoverPopup-BjSro2CC.js";import"./debounce-fRUSIOCu.js";import"./useOsdkClient-DI9zvGd-.js";import"./tick-DAv5Wwbg.js";import"./DropdownField-y9zCIkHo.js";import"./isEqual-tYCzP_Jl.js";import"./withOsdkMetrics-CQPruHu_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-C-tkmioo.js";import{O as i}from"./object-table-BZaq3tn6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfuNKgCp.js";import"./Table-yh79B9Qv.js";import"./index-mhh8JEg6.js";import"./Dialog-B83feRHx.js";import"./cross-C44ftUHc.js";import"./svgIconContainer-CWpp_2jS.js";import"./useBaseUiId-Cm7MFvra.js";import"./InternalBackdrop-D_Y9aPDh.js";import"./composite-C8fhvEre.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./index-B2RSfjfJ.js";import"./useEventCallback-CUGSbf6p.js";import"./SkeletonBar-BiIW-GDj.js";import"./LoadingCell-OT1ynwa9.js";import"./ColumnConfigDialog-BjIWXLI1.js";import"./DraggableList-B6YwMZwa.js";import"./search-i-B1QBlz.js";import"./Input-DLE-7B-W.js";import"./useControlled-C9aUqxO7.js";import"./Button-CGB2DjlW.js";import"./small-cross-CsUjbm9n.js";import"./ActionButton-CSf7aDsX.js";import"./Checkbox-DFI4mm_O.js";import"./useValueChanged-o5jZZ60n.js";import"./CollapsiblePanel-BS6YIswr.js";import"./MultiColumnSortDialog-Dhbg2w2w.js";import"./MenuTrigger-DgLDD6M4.js";import"./CompositeItem-Byuaai_8.js";import"./ToolbarRootContext-BgWudj9O.js";import"./getDisabledMountTransitionStyles-BxVfE1UN.js";import"./getPseudoElementBounds-DRiaJ7G-.js";import"./chevron-down-CDLMbCJ_.js";import"./index-C_kRO_H9.js";import"./error-CXAWYJfd.js";import"./BaseCbacBanner-D9tZInLS.js";import"./makeExternalStore-Bksv4soB.js";import"./Tooltip-B6Q61cjD.js";import"./PopoverPopup-Dh8bwyRK.js";import"./debounce-CzHRNvfy.js";import"./useOsdkClient-CJta-8BD.js";import"./tick-C0oAE1Ij.js";import"./DropdownField-Cbsq4sP1.js";import"./isEqual-DjxLkWRx.js";import"./withOsdkMetrics-vqDit70J.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

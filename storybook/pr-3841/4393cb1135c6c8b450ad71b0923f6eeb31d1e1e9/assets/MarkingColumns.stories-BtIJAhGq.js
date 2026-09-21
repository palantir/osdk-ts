import{f as p,j as e}from"./iframe-BmwK0NB6.js";import{O as i}from"./object-table-BeuJFUAl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJI9HYts.js";import"./Table-ChWSbzv8.js";import"./index-NnjawErR.js";import"./Dialog-Cjov8EJt.js";import"./cross-hgFEJfRa.js";import"./svgIconContainer-DHRvXAx1.js";import"./useBaseUiId-DICqGIOz.js";import"./InternalBackdrop-BNdzkB7f.js";import"./composite-C06v5r-q.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./index-DX06iv2-.js";import"./useEventCallback-DekRZM9z.js";import"./SkeletonBar-cj1km_Ew.js";import"./LoadingCell-ir3KaEX9.js";import"./ColumnConfigDialog-CinlVjur.js";import"./DraggableList-DsMXG4CE.js";import"./search-Dm097x9N.js";import"./Input-Bfu2n9eX.js";import"./useControlled-D_GkEGnz.js";import"./Button-C7GE2_Px.js";import"./small-cross-ZFjbIYNW.js";import"./ActionButton-DO9pXiqf.js";import"./Checkbox-Bm4hlpwh.js";import"./useValueChanged-CYhlDneB.js";import"./CollapsiblePanel-BlAI9gbe.js";import"./MultiColumnSortDialog-DQlwKNla.js";import"./MenuTrigger-CQQrfhyE.js";import"./CompositeItem-BHcZzMjK.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./getDisabledMountTransitionStyles-D6uMoq56.js";import"./getPseudoElementBounds-7hGlU8g7.js";import"./chevron-down-YY61_NRW.js";import"./index-BpeS-KLN.js";import"./error-CHia6_Yv.js";import"./BaseCbacBanner-BxZMmDMR.js";import"./makeExternalStore-RuIAz4L3.js";import"./Tooltip-yGZeBWi0.js";import"./PopoverPopup-CMLgSpj-.js";import"./debounce-CVCv63C4.js";import"./useOsdkClient-UKqs4_2L.js";import"./tick-BXHwy8u9.js";import"./DropdownField-1ya05CQB.js";import"./isEqual-eMF9IvTP.js";import"./withOsdkMetrics-BVS2eODs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

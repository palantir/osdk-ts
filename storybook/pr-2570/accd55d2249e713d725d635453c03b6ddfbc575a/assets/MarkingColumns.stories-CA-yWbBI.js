import{f as p,j as e}from"./iframe-BJ8SXgdR.js";import{O as i}from"./object-table-CWeCoiL5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-V6nC4EeU.js";import"./Table-qAwHNlkQ.js";import"./index-Bw4Jw5oO.js";import"./Dialog-U1Dip0Gr.js";import"./cross-Cg7DwYSC.js";import"./svgIconContainer-CsUfQGRN.js";import"./useBaseUiId-M7m_99-n.js";import"./InternalBackdrop-CabKfl1h.js";import"./composite-BEEWgOuz.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./index-ssIrkCkG.js";import"./useEventCallback-CinkpAtu.js";import"./SkeletonBar-DpuQzJmF.js";import"./LoadingCell-CuzgtItD.js";import"./ColumnConfigDialog-D6wmS011.js";import"./DraggableList-C3UvcNQn.js";import"./search-Dw_fxnZ-.js";import"./Input-Bx9J3YZM.js";import"./useControlled-CjUkOTZX.js";import"./Button-DRmMomPf.js";import"./small-cross-P3lS_YZs.js";import"./ActionButton-D89xaVN-.js";import"./Checkbox-BzzgzOmH.js";import"./useValueChanged-CUJ7FvbC.js";import"./CollapsiblePanel-WrEQ8Aj1.js";import"./MultiColumnSortDialog-D3aS1vk5.js";import"./MenuTrigger-DO4jvPyO.js";import"./CompositeItem-ehmW8yGD.js";import"./ToolbarRootContext-r3sR1laS.js";import"./getDisabledMountTransitionStyles-tfkHieO2.js";import"./getPseudoElementBounds-Dbt1NZMt.js";import"./chevron-down-oM9ZgJIx.js";import"./index-CctNg8Ui.js";import"./error-C-Q6AIHf.js";import"./BaseCbacBanner-DasqhKcc.js";import"./makeExternalStore-CufKkCEE.js";import"./Tooltip-DOYwrPSE.js";import"./PopoverPopup-DomnOyt_.js";import"./debounce-Hk7rnih5.js";import"./useOsdkClient-Dj34DS5Y.js";import"./tick-p2qDXWT_.js";import"./DropdownField-BHqZuFPG.js";import"./isEqual-B9nd0WBh.js";import"./withOsdkMetrics-CteTFdb3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

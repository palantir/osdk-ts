import{f as p,j as e}from"./iframe-Bd2YI4f_.js";import{O as i}from"./object-table-DtWdM-f8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbK45qka.js";import"./Table-CEdDTvki.js";import"./index-Bj2fqRcr.js";import"./Dialog-DnSnZBm1.js";import"./cross-CahcDK0M.js";import"./svgIconContainer-CNqvkdfy.js";import"./useBaseUiId-sg5e61RZ.js";import"./InternalBackdrop-Ci_t8QuG.js";import"./composite-Do-T19t0.js";import"./index-QyRfwHjS.js";import"./index-ByZnXX35.js";import"./index-kM3whwnL.js";import"./useEventCallback-CaosUMx5.js";import"./SkeletonBar-CNiEEHDq.js";import"./LoadingCell-BMG4A14y.js";import"./ColumnConfigDialog-O7ixeZfM.js";import"./DraggableList-BkuXcTUX.js";import"./search-DvsXbyC6.js";import"./Input-CxGxfdRH.js";import"./useControlled-CifkBIG0.js";import"./Button-4-CIF1W1.js";import"./small-cross-BFXkhpYi.js";import"./ActionButton-rIdfbPw7.js";import"./Checkbox-CibPtwGh.js";import"./useValueChanged-qs76lLCO.js";import"./CollapsiblePanel-BAXIEU3S.js";import"./MultiColumnSortDialog-DgAxoJyk.js";import"./MenuTrigger-BUi2_4Ir.js";import"./CompositeItem-C1a6HzSc.js";import"./ToolbarRootContext-CcTA8tLc.js";import"./getDisabledMountTransitionStyles-eLA6B31k.js";import"./getPseudoElementBounds-CM5HIGOw.js";import"./chevron-down-D8kqf24B.js";import"./index-CaI42Rs-.js";import"./error-CA1VPVRX.js";import"./BaseCbacBanner-CyjzlRcm.js";import"./makeExternalStore-D_-udAfm.js";import"./Tooltip--me0TQ5w.js";import"./PopoverPopup-BSkIYUdh.js";import"./debounce-Be_hd9CS.js";import"./useOsdkClient-uOx8gnHF.js";import"./tick-yBx3a1H4.js";import"./DropdownField-B3fLG3Ni.js";import"./isEqual-6whvuwLP.js";import"./withOsdkMetrics-CmXLVGag.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

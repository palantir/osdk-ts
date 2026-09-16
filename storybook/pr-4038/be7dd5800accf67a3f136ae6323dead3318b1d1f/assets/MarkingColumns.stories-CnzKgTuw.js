import{f as p,j as e}from"./iframe-C_0-Ny_N.js";import{O as i}from"./object-table-DGQgtl_w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs_UzwR6.js";import"./Table-Dgvo0A5I.js";import"./index-BCapEaKB.js";import"./Dialog-BbxXOlT6.js";import"./cross-Dhbxwhb2.js";import"./svgIconContainer-DAGFJod5.js";import"./useBaseUiId-B7Keq3x8.js";import"./InternalBackdrop-DSC0itKR.js";import"./composite-BKxtxXCT.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./index-DCJ2O27O.js";import"./useEventCallback-CHNZdE5h.js";import"./SkeletonBar-CoeG_Gyn.js";import"./LoadingCell-DR0WPrbM.js";import"./ColumnConfigDialog-CkHl9bEd.js";import"./DraggableList-Do4A-fJS.js";import"./search-BKcV1gVw.js";import"./Input-BF9DmCeg.js";import"./useControlled-DmQkJsyf.js";import"./Button-g8Y5a3bQ.js";import"./small-cross-CFI7QvS0.js";import"./ActionButton-D9LJ1Y0h.js";import"./Checkbox-CDawQgr1.js";import"./useValueChanged-CdL69oAW.js";import"./CollapsiblePanel-CL0PnPaH.js";import"./MultiColumnSortDialog-C19wCna8.js";import"./MenuTrigger-NDFVm2E2.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./getDisabledMountTransitionStyles-CpRzurrr.js";import"./getPseudoElementBounds-NZN6UuUV.js";import"./chevron-down-C0ibfMMv.js";import"./index-CrSkVWMy.js";import"./error-DAsTyxDt.js";import"./BaseCbacBanner-CdzWkyww.js";import"./makeExternalStore-CXzzR7o8.js";import"./Tooltip-CSoPyId7.js";import"./PopoverPopup-CA1dNHn3.js";import"./debounce-CsMAmyDS.js";import"./useOsdkClient-qcjIUx1B.js";import"./tick-CZldnOuP.js";import"./DropdownField-DvVkFAtM.js";import"./isEqual-dkeqRnY_.js";import"./withOsdkMetrics-rrME1YBQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

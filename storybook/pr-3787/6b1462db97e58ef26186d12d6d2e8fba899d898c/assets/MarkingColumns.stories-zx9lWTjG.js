import{f as p,j as e}from"./iframe-DPayKrhQ.js";import{O as i}from"./object-table-B9Cot5_e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qQf5mZcY.js";import"./Table-DpNUkHqO.js";import"./index-DWKYvG9V.js";import"./Dialog-DLJV3Let.js";import"./cross-C2IePcD5.js";import"./svgIconContainer-ENB8v_KB.js";import"./useBaseUiId-DNI8EcAR.js";import"./InternalBackdrop-_-1pH0uj.js";import"./composite-Cke6VlZT.js";import"./index-Xjpnzzz2.js";import"./index-BrP54DIT.js";import"./index-BDcq1o5X.js";import"./useEventCallback-B4jrKNvR.js";import"./SkeletonBar-BauOl873.js";import"./LoadingCell-B1RE063u.js";import"./ColumnConfigDialog-D8Gevhnq.js";import"./DraggableList-DdgzPp3Y.js";import"./search-DgJNyoZT.js";import"./Input-CNbFsRtW.js";import"./useControlled-SvDubTm2.js";import"./isEqual-C5d_5--M.js";import"./isObject-DL2rK0zG.js";import"./Button-CX965R45.js";import"./ActionButton-Dqf4PoFn.js";import"./Checkbox-DR9VQhFH.js";import"./useValueChanged-XcJizfeE.js";import"./CollapsiblePanel-0zIu0Nif.js";import"./MultiColumnSortDialog-CErS638w.js";import"./MenuTrigger-CL62zHVu.js";import"./CompositeItem-Bb4siO63.js";import"./ToolbarRootContext-2Pb0-xcD.js";import"./getDisabledMountTransitionStyles-CUQ_krqB.js";import"./getPseudoElementBounds-DMPlx4hK.js";import"./chevron-down-oMnKKoWq.js";import"./index-CUEs57Ga.js";import"./error-CXgnUpf7.js";import"./BaseCbacBanner-C-zOFOZW.js";import"./makeExternalStore-DNQ6k_aA.js";import"./Tooltip-B1kqF3D7.js";import"./PopoverPopup-DW1jv2JB.js";import"./toNumber-CJKhmsSm.js";import"./useOsdkClient-1yazevnu.js";import"./tick-Vlw-qjz7.js";import"./DropdownField-C1AjTguU.js";import"./withOsdkMetrics-BEB15fyq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-Djgn3mMp.js";import{O as i}from"./object-table-Cwd88ac2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBzcmrCr.js";import"./Table-DPni56UU.js";import"./index-DMa22myD.js";import"./Dialog-CpMC_SRI.js";import"./cross-P-qahKgk.js";import"./svgIconContainer-BSc8qpEQ.js";import"./useBaseUiId-BpSKPnMp.js";import"./InternalBackdrop-DvFd7PWT.js";import"./composite-v_9iQLjO.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./index-BcsqXVef.js";import"./useEventCallback-BdQ5ayqn.js";import"./SkeletonBar-uqnKmx5p.js";import"./LoadingCell-CsQeYTrB.js";import"./ColumnConfigDialog-YRUvF1AL.js";import"./DraggableList-CRGOc0hi.js";import"./search-BFidPBD3.js";import"./Input-DahsmOdu.js";import"./useControlled-Dodjbhjp.js";import"./Button-CJpjwaeJ.js";import"./small-cross-CoHv2Pfy.js";import"./ActionButton-DtQP3hsQ.js";import"./Checkbox-DbWH43Qv.js";import"./useValueChanged-FTGAX_kt.js";import"./CollapsiblePanel-BN6mK2LP.js";import"./MultiColumnSortDialog-CwBxRogq.js";import"./MenuTrigger-zPgdA44C.js";import"./CompositeItem-9M2opMvG.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./getDisabledMountTransitionStyles-BGe123t6.js";import"./getPseudoElementBounds-B0_03GnG.js";import"./chevron-down-hMfe6qGf.js";import"./index-DXiVbOpv.js";import"./error-C4Sj7yvC.js";import"./BaseCbacBanner-Dgk3xGPG.js";import"./makeExternalStore-B1pTPZCa.js";import"./Tooltip-DcgPgXHU.js";import"./PopoverPopup-Ctx82q43.js";import"./debounce-BNjMaQq1.js";import"./useOsdkClient-Dbnxj5w_.js";import"./tick-Br1OP0c4.js";import"./DropdownField-s6aOcfqL.js";import"./isEqual-CtF3zBG8.js";import"./withOsdkMetrics-DZdRX6WM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

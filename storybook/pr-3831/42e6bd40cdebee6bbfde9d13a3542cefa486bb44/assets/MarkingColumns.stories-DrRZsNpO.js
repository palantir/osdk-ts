import{f as p,j as e}from"./iframe-rtx-0Vyx.js";import{O as i}from"./object-table-DtPmTNdM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bj3BOALb.js";import"./Table-DBfOvOQZ.js";import"./index-DKIcRxjy.js";import"./Dialog-CUepzDAn.js";import"./cross-6kSQG1-7.js";import"./svgIconContainer-B40rfxVj.js";import"./useBaseUiId-CuRyK44H.js";import"./InternalBackdrop-DvMfLZSf.js";import"./composite-Nf4msj3r.js";import"./index-DOmjJjSc.js";import"./index-ITtGThnU.js";import"./index-3_OFjQJp.js";import"./useEventCallback-B9udz5VM.js";import"./SkeletonBar-C-MuLmph.js";import"./LoadingCell-1QXN4pJr.js";import"./ColumnConfigDialog-C9oQO5-G.js";import"./DraggableList-CoZrT756.js";import"./search-Dwc9HsWE.js";import"./Input-B-96zHSB.js";import"./useControlled-D6W72m7H.js";import"./Button-poD_kS0t.js";import"./small-cross-CDz-CGy6.js";import"./ActionButton-CLmSCJDX.js";import"./Checkbox-B6zqZfCp.js";import"./useValueChanged-BOReqqPH.js";import"./CollapsiblePanel-YvE-EakE.js";import"./MultiColumnSortDialog-D_-x7Yam.js";import"./MenuTrigger-fi2dtKt0.js";import"./CompositeItem-BYIrnHf7.js";import"./ToolbarRootContext-CZQywvtv.js";import"./getDisabledMountTransitionStyles-CEdGgCOp.js";import"./getPseudoElementBounds-BpzKuQgE.js";import"./chevron-down-uhEr0Z3V.js";import"./index-CxSdDGJa.js";import"./error-ClD13ltF.js";import"./BaseCbacBanner-CC_Nqmy_.js";import"./makeExternalStore-ColxyoCn.js";import"./Tooltip-CGWRFZRN.js";import"./PopoverPopup-BRQtjEfh.js";import"./toNumber-DfJFvF00.js";import"./useOsdkClient-D3_4QTIG.js";import"./tick-vnDda9AF.js";import"./DropdownField-kN_2pP4G.js";import"./withOsdkMetrics-B-DLHJlS.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};

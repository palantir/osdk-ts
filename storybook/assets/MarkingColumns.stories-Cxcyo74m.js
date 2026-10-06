import{f as p,j as e}from"./iframe-CDH1WiIm.js";import{O as i}from"./object-table-DvV-fhP8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C7k-xA1j.js";import"./index-B7I34VMP.js";import"./Dialog-B00E6QBC.js";import"./cross-DSLkFMBK.js";import"./svgIconContainer-Da2lUN6l.js";import"./useBaseUiId-JwegC6SR.js";import"./InternalBackdrop-Ymvd285K.js";import"./composite-DFKUfi-t.js";import"./index-DCeQ8dAs.js";import"./index-D4yRNX2z.js";import"./index-ByzjRZqg.js";import"./useEventCallback-YXO9hBaK.js";import"./SkeletonBar-vcgWDMUZ.js";import"./LoadingCell-CEa6pU9A.js";import"./ColumnConfigDialog-DlV2mLPY.js";import"./DraggableList-Z0LPk5VF.js";import"./search-X3YzFylv.js";import"./Input-C3uKrLbE.js";import"./useControlled-A612R_Ug.js";import"./Button-BAc-Yi4x.js";import"./small-cross-Y-Ua0rov.js";import"./ActionButton-qDTU_xQE.js";import"./Checkbox-Doix9LyN.js";import"./useValueChanged-CdCPYrMD.js";import"./CollapsiblePanel-HEhJKVUx.js";import"./MultiColumnSortDialog-CSYiplEL.js";import"./MenuTrigger-D0RZOwzK.js";import"./CompositeItem-Bb5XEEzb.js";import"./ToolbarRootContext-C2jXlctC.js";import"./getDisabledMountTransitionStyles-sx84wb4-.js";import"./getPseudoElementBounds-Cyvc7G6J.js";import"./chevron-down-NcW2HNuz.js";import"./index-CWdGZp3O.js";import"./error-CzptjxzD.js";import"./BaseCbacBanner-CPSiiTfE.js";import"./makeExternalStore-BAbkp8fW.js";import"./Tooltip-DNYhKq8H.js";import"./PopoverPopup-DtSASMWY.js";import"./debounce-CKvBdIMZ.js";import"./useOsdkClient-quJN66XR.js";import"./tick-DugjRgsB.js";import"./DropdownField-hs-JPN-J.js";import"./isEqual-SVs-xcCf.js";import"./withOsdkMetrics-BG-JB_sg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

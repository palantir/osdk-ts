import{f as p,j as e}from"./iframe-adBEvIDP.js";import{O as i}from"./object-table-Clg_HF0y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhBV5VvG.js";import"./Table-z7q50Cpk.js";import"./index-BDD5zJf7.js";import"./Dialog-B9w9U6Ch.js";import"./cross-Bif6nOGI.js";import"./svgIconContainer-Bl3q8D9_.js";import"./useBaseUiId-DyFDvApR.js";import"./InternalBackdrop-DN7X8cgl.js";import"./composite-JUgX4sxF.js";import"./index-DMEf-8YF.js";import"./index-OkLbN1Mo.js";import"./index-Cq2vpVq1.js";import"./useEventCallback-Tk2MUqWC.js";import"./SkeletonBar-BcbKwHN-.js";import"./LoadingCell-D8v27LCJ.js";import"./ColumnConfigDialog-THinIGrq.js";import"./DraggableList-BPPX5kOX.js";import"./search-kHOlebpK.js";import"./Input-BDn5fHA0.js";import"./useControlled-CVmz4Ros.js";import"./createLabelsContext-CiP6eikM.js";import"./small-cross-5Y9KWd2p.js";import"./Button-DV46QcLx.js";import"./ActionButton-CXCq-CCl.js";import"./Checkbox-DCH7vFa-.js";import"./useValueChanged-B_9kR55m.js";import"./CollapsiblePanel-DtE8aiLi.js";import"./MultiColumnSortDialog-Ci1KkklX.js";import"./MenuTrigger-UwBkNCHD.js";import"./CompositeItem-CP4Xva_b.js";import"./ToolbarRootContext-MfBf8pTt.js";import"./getDisabledMountTransitionStyles-DLtgxTnY.js";import"./getPseudoElementBounds-BEHW4t2y.js";import"./chevron-down-DGGvLAME.js";import"./index-0Syumzr1.js";import"./error-Bi_YGwJE.js";import"./BaseCbacBanner-X0wpogzT.js";import"./makeExternalStore-0SxKyWnk.js";import"./Tooltip-BNCTPWdV.js";import"./PopoverPopup-B19vtAkQ.js";import"./Combobox-DauBND44.js";import"./useOsdkClient-C-6QWSG5.js";import"./tick-chbWG91L.js";import"./DropdownField-B8gWdr58.js";import"./withOsdkMetrics-0n2sREvo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

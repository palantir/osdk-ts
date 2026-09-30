import{f as p,j as e}from"./iframe-za2gFZm7.js";import{O as i}from"./object-table-BS8MM0wq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B152vIQk.js";import"./Table-DKIXKU0X.js";import"./index-C4E5Dk0R.js";import"./Dialog-BKjUT0WY.js";import"./cross-TTEnlvkl.js";import"./svgIconContainer-Dr6j7alJ.js";import"./useBaseUiId-BpIGGvmI.js";import"./InternalBackdrop-CuWltaZZ.js";import"./composite-D56jxQaX.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./index-BXHLylGJ.js";import"./useEventCallback-B-1PMCAh.js";import"./SkeletonBar-DJX3wRZn.js";import"./LoadingCell-76SMTSbQ.js";import"./ColumnConfigDialog-x5n0fU9Y.js";import"./DraggableList-BN2F7Ttd.js";import"./search-FcuyWSqL.js";import"./Input-B_NAvwoc.js";import"./useControlled-x2G49QSH.js";import"./Button-DwQfUaLn.js";import"./small-cross-Cpr2Bt40.js";import"./ActionButton-yFn7B9Sr.js";import"./Checkbox-Bl7oN82I.js";import"./useValueChanged-CgoAhXS1.js";import"./CollapsiblePanel-f2IrHI_h.js";import"./MultiColumnSortDialog-BAtKqwsE.js";import"./MenuTrigger-DcOti6NU.js";import"./CompositeItem-BDB5_ay2.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./getDisabledMountTransitionStyles-BtrYbTrP.js";import"./getPseudoElementBounds-CYZLYzqG.js";import"./chevron-down-DJF2R6Zo.js";import"./index-CHACBaIH.js";import"./error-Dk8fbBB5.js";import"./BaseCbacBanner-DBUtzZ_e.js";import"./makeExternalStore-C8qXbmFn.js";import"./Tooltip-DpzWRQIQ.js";import"./PopoverPopup-BzwgnfVt.js";import"./debounce-BxVMhpPq.js";import"./useOsdkClient-DPxpEBB0.js";import"./tick-DCTTAhNR.js";import"./DropdownField-DbWdFCIz.js";import"./isEqual-Co-ogKGs.js";import"./withOsdkMetrics-U5yEFT5F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

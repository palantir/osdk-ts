import{f as p,j as e}from"./iframe-CJbOBKBh.js";import{O as i}from"./object-table-C0WNmDxa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLHdcgal.js";import"./Table-BcnA4fIo.js";import"./index-BZGK6RAy.js";import"./Dialog-Bo-c0AOc.js";import"./cross-DXZ7nfx1.js";import"./svgIconContainer-nMosQuRN.js";import"./useBaseUiId-BLfqnsnM.js";import"./InternalBackdrop-I-coYiRS.js";import"./composite-C9nRcOzN.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./index-BIEbhHvU.js";import"./useEventCallback-BXLXlKzm.js";import"./SkeletonBar-Dag5WjEc.js";import"./LoadingCell-Djlq0I6u.js";import"./ColumnConfigDialog-Ch2uVIOq.js";import"./DraggableList-DEf4p0ef.js";import"./search-BiEjqGXz.js";import"./Input-B6hCJoOA.js";import"./useControlled-CZ4YcEAU.js";import"./Button-ChlDUqJf.js";import"./small-cross-DJuRoaKr.js";import"./ActionButton-DP8E2oQU.js";import"./Checkbox-Bu4_rX8p.js";import"./useValueChanged-DMI7G-AI.js";import"./CollapsiblePanel-CQvGKC7K.js";import"./MultiColumnSortDialog-DtBR4rIY.js";import"./MenuTrigger-BRYGwGKp.js";import"./CompositeItem-CstBZeOc.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./getDisabledMountTransitionStyles-ClJ44Vqv.js";import"./getPseudoElementBounds-D2bAA-Mc.js";import"./chevron-down-Cy1gcHm4.js";import"./index-Dxrf0IE0.js";import"./error-SsNWn793.js";import"./BaseCbacBanner-D2xMWTIl.js";import"./makeExternalStore-BjeVU-bl.js";import"./Tooltip-CLlrYrN9.js";import"./PopoverPopup-BrpFbh7n.js";import"./debounce-2qg7QCVU.js";import"./useOsdkClient-BLe4A4YY.js";import"./tick-CDcAZVlx.js";import"./DropdownField-Ig58Wcdc.js";import"./isEqual-BSq_xDkI.js";import"./withOsdkMetrics-PeDqWSVe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

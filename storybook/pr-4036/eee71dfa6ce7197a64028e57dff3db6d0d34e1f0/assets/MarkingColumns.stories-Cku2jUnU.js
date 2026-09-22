import{f as p,j as e}from"./iframe-DALIkhit.js";import{O as i}from"./object-table-BhKt55cA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DctxGWdw.js";import"./Table-DtcDSPkw.js";import"./index-CRXXRxj8.js";import"./Dialog-B_RuCNwj.js";import"./cross-Lsk0KBg0.js";import"./svgIconContainer-spB4tjSy.js";import"./useBaseUiId-DYLAsVU1.js";import"./InternalBackdrop-aOf-2TsU.js";import"./composite-DNV43Yqw.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./index-B4ELnjW2.js";import"./useEventCallback-DYhKCTqd.js";import"./SkeletonBar-DxPKDsZj.js";import"./LoadingCell-DexgFDI-.js";import"./ColumnConfigDialog-BcrcIj4z.js";import"./DraggableList-CN1TXGvD.js";import"./search-DGhvTCsG.js";import"./Input-lOkk4Did.js";import"./useControlled-D3lOoo5c.js";import"./Button-BsqgxFa7.js";import"./small-cross-C0Cw1tJu.js";import"./ActionButton-BxyaPNEd.js";import"./Checkbox-DMRQwsZt.js";import"./useValueChanged-ybVWH_rP.js";import"./CollapsiblePanel-C4equoJ3.js";import"./MultiColumnSortDialog-BWhsqyAr.js";import"./MenuTrigger-CX1MgxOd.js";import"./CompositeItem-jTsd3S2E.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./getDisabledMountTransitionStyles-BGaY7OxB.js";import"./getPseudoElementBounds-ORsAqzKa.js";import"./chevron-down-CAkJr31e.js";import"./index-C_CgxuxZ.js";import"./error-D7k6AgT2.js";import"./BaseCbacBanner-DJyF9NAx.js";import"./makeExternalStore-ByjGMN0z.js";import"./Tooltip-C28mGjrB.js";import"./PopoverPopup-BB9pf0-g.js";import"./debounce-DBBvjiY6.js";import"./useOsdkClient-DRA9qEhw.js";import"./tick-DF-H6RV9.js";import"./DropdownField-DRTmVUHk.js";import"./isEqual-6UGvStcv.js";import"./withOsdkMetrics-YLhbsdmr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

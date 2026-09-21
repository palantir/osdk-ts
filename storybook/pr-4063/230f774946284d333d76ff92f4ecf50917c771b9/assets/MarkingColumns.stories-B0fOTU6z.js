import{f as p,j as e}from"./iframe-DsP96Xjx.js";import{O as i}from"./object-table-TkpdlQXd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DwitJgNj.js";import"./Table-2WnmhRCG.js";import"./index-CCZQyGW1.js";import"./Dialog-BEgGVBxb.js";import"./cross-BeyCouG7.js";import"./svgIconContainer-DK5XvhMp.js";import"./useBaseUiId-CmljmHpR.js";import"./InternalBackdrop-C3nPSiVQ.js";import"./composite-j1sQv_62.js";import"./index-DOmZP-tW.js";import"./index-B7ldO9Ow.js";import"./index-BLLb1gnX.js";import"./useEventCallback-DFq_e--v.js";import"./SkeletonBar-BZJ5t8a8.js";import"./LoadingCell-ByQcafEp.js";import"./ColumnConfigDialog-BeauIrkr.js";import"./DraggableList-DvkSISyE.js";import"./search-CHKIWokO.js";import"./Input-Bp3qfxHC.js";import"./useControlled-OAEAKhSc.js";import"./Button-D7SLUTAS.js";import"./small-cross-DqTpJXLx.js";import"./ActionButton-DdUHOyw7.js";import"./Checkbox-BMAUUPAo.js";import"./useValueChanged-NP9GJqeg.js";import"./CollapsiblePanel-BSmym8_v.js";import"./MultiColumnSortDialog-B2Fk3pAJ.js";import"./MenuTrigger-Bo5akJPw.js";import"./CompositeItem-Bt-RplsU.js";import"./ToolbarRootContext-MS5BqpDI.js";import"./getDisabledMountTransitionStyles-BYYMCiyL.js";import"./getPseudoElementBounds-Bi6nNbbr.js";import"./chevron-down-BXNKs90J.js";import"./index-D94pbFc4.js";import"./error-BrJRNRov.js";import"./BaseCbacBanner-QY9kdETd.js";import"./makeExternalStore-m0KaaoZC.js";import"./Tooltip-80snLRYh.js";import"./PopoverPopup-qu2sjpZ7.js";import"./debounce-DOMkCj-B.js";import"./useOsdkClient-DGSsfpPV.js";import"./tick-DASReF7p.js";import"./DropdownField-CIyOjqZ7.js";import"./isEqual-C-16vm51.js";import"./withOsdkMetrics-CJFmOHw0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

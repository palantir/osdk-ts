import{f as p,j as e}from"./iframe-Zg3agjVA.js";import{O as i}from"./object-table-DtBRANjR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXRBmtzA.js";import"./Table-VcSvCLah.js";import"./index-COc2doys.js";import"./Dialog-DuCup1y3.js";import"./cross-3gwJUULA.js";import"./svgIconContainer-7JSyjSbU.js";import"./useBaseUiId-DRojaVbZ.js";import"./InternalBackdrop-CZBhsVYW.js";import"./composite-CY6EnEDk.js";import"./index-Do1Ejht1.js";import"./index-B1LfTOb2.js";import"./index-DFK3Dggy.js";import"./useEventCallback-B2Brsdpx.js";import"./SkeletonBar-CVhsy3f2.js";import"./LoadingCell-HojjnEqU.js";import"./ColumnConfigDialog-CGSl72f8.js";import"./DraggableList-CoIZMdOK.js";import"./search-i7uPZuYO.js";import"./Input-qYz4RN-U.js";import"./useControlled-CcIGpRzc.js";import"./isEqual-z3tOTpca.js";import"./isObject-C474tTtd.js";import"./Button-BYrujQNz.js";import"./ActionButton-DNbpkLMa.js";import"./Checkbox-CYAdMWyQ.js";import"./useValueChanged-C2Y4VRkm.js";import"./CollapsiblePanel-BajRWGm5.js";import"./MultiColumnSortDialog-BI0weRQX.js";import"./MenuTrigger-C0TksCSi.js";import"./CompositeItem-sHUrGE0o.js";import"./ToolbarRootContext-uC1AZv1t.js";import"./getDisabledMountTransitionStyles-CfZ2kbpR.js";import"./getPseudoElementBounds-CIZC6rE6.js";import"./chevron-down-CtGcJNNE.js";import"./index-BBvO76wk.js";import"./error-BbQ-Z9B4.js";import"./BaseCbacBanner-kvdalyTA.js";import"./makeExternalStore-DLtPHmhK.js";import"./Tooltip-DONLb8VO.js";import"./PopoverPopup-CeLvjh4_.js";import"./toNumber-izRZfRwO.js";import"./useOsdkClient-D3I85USr.js";import"./tick-D3Fn1KVO.js";import"./DropdownField-DIFQ3lkL.js";import"./withOsdkMetrics-Dl0gKApc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

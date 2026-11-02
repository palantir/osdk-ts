import{f as p,j as e}from"./iframe-Cjxg6iNn.js";import{O as i}from"./object-table-Ix73Tn5r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cxg0i_EX.js";import"./Table-K51QDYgB.js";import"./index-C7K0gZWV.js";import"./Dialog-CAFi7SxX.js";import"./cross-B4PrOhV3.js";import"./svgIconContainer-CZvHNGTg.js";import"./useBaseUiId-CnlnTXqN.js";import"./InternalBackdrop-CpFHocTv.js";import"./composite-BjxBGEhF.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./index-DFkF7jqg.js";import"./useEventCallback-uFwCyQiz.js";import"./SkeletonBar-X_1w1HPl.js";import"./LoadingCell-D4lWsGoh.js";import"./ColumnConfigDialog-rqNJs-Cu.js";import"./DraggableList-Bu2LxrUi.js";import"./search-DdTpXEBG.js";import"./Input-BQ8CO2Zx.js";import"./useControlled-DvCyj3QQ.js";import"./Button-DgwxYDBH.js";import"./small-cross-CigndlKD.js";import"./ActionButton-Du7n99Za.js";import"./Checkbox-BGT7pel6.js";import"./useValueChanged-DIJyPS0-.js";import"./CollapsiblePanel-O8dFOxez.js";import"./MultiColumnSortDialog-BqJ7lR5M.js";import"./MenuTrigger-DqSnQGCV.js";import"./CompositeItem-CNr4k86k.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./getDisabledMountTransitionStyles-BvfAIkEV.js";import"./getPseudoElementBounds-DMxNZQvA.js";import"./chevron-down-bhCi1ARW.js";import"./index-D5MyUYDa.js";import"./error-BXzFpfZ4.js";import"./BaseCbacBanner-DkxvvO3y.js";import"./makeExternalStore-CNSVvc9t.js";import"./Tooltip-B5VRIXsW.js";import"./PopoverPopup-BX8ciyA_.js";import"./debounce-C5Se__zz.js";import"./useOsdkClient-AZh_79x-.js";import"./tick-YxVbnp5T.js";import"./DropdownField-DkMSVjea.js";import"./isEqual-BR465NME.js";import"./withOsdkMetrics-BpvOsnqH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

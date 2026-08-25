import{f as p,j as e}from"./iframe-DaheMBBp.js";import{O as i}from"./object-table-0sFqeEZJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ogFyI84a.js";import"./Table-DpONygi1.js";import"./index-C3YYW7Av.js";import"./Dialog-C5hKyCQA.js";import"./cross-Bby6H2na.js";import"./svgIconContainer-B_QTzoaQ.js";import"./useBaseUiId-BLpW-viY.js";import"./InternalBackdrop-DzAttt_G.js";import"./composite-BEI6HnWE.js";import"./index-C2SDphz6.js";import"./index-CLtbVn_M.js";import"./index-DtDtTYps.js";import"./useEventCallback-CiJJ5Lcl.js";import"./SkeletonBar-B6_gKLM1.js";import"./LoadingCell-DVEbX28s.js";import"./ColumnConfigDialog-DjiiQJEk.js";import"./DraggableList-BCVYLE2X.js";import"./search-BihmlxdI.js";import"./Input-Bz5EgY5O.js";import"./useControlled-Dcfr4NOJ.js";import"./Button-tOMZXVUq.js";import"./small-cross-Bh63RFvI.js";import"./ActionButton-_PEshhAj.js";import"./Checkbox-Ch8nntwM.js";import"./useValueChanged-CVQIhm4Y.js";import"./CollapsiblePanel-C_4v9b-F.js";import"./MultiColumnSortDialog-BZ-FEhQI.js";import"./MenuTrigger-BHmjH1Az.js";import"./CompositeItem-CkBG_Idz.js";import"./ToolbarRootContext-DE_UAbqs.js";import"./getDisabledMountTransitionStyles-BcwyM6JI.js";import"./getPseudoElementBounds-D-A00nd4.js";import"./chevron-down-MXNqVixY.js";import"./index-DtzQd4z2.js";import"./error-DQ7GCXA7.js";import"./BaseCbacBanner-CPCuX73W.js";import"./makeExternalStore-CWnObUAx.js";import"./Tooltip-Cxytr_Mg.js";import"./PopoverPopup-CsO8UfgH.js";import"./debounce-nEYC7Ov0.js";import"./useOsdkClient-CN5l5L7Y.js";import"./tick-ZFnf1M-z.js";import"./DropdownField-BLLMqEAK.js";import"./isEqual-Bbl_ErEq.js";import"./withOsdkMetrics-BZUZattY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

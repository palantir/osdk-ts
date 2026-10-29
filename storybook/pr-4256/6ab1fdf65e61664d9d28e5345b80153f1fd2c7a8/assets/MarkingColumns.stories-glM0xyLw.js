import{f as p,j as e}from"./iframe-BUAKey-b.js";import{O as i}from"./object-table-Btb1NcEU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8ONSILo-.js";import"./Table-v9Wirb0W.js";import"./index-C_XWLLnL.js";import"./Dialog-BklgDVkJ.js";import"./cross-DIKNxaCS.js";import"./svgIconContainer-R7EcdMMS.js";import"./useBaseUiId-C8Y4NjI4.js";import"./InternalBackdrop-DBedaqK2.js";import"./composite-B5eojsZ9.js";import"./index-0X59r-jL.js";import"./index-BVUJd12s.js";import"./index-BOoWcbcQ.js";import"./useEventCallback-DB_YKX3R.js";import"./SkeletonBar-DGJh5kUn.js";import"./LoadingCell-CcTUe4FR.js";import"./ColumnConfigDialog-DxUdtHxn.js";import"./DraggableList-WR8qNa8F.js";import"./search-BpOSeHLA.js";import"./Input-XOa6KB6m.js";import"./useControlled-DbbiJxEI.js";import"./Button-BiKKO9jr.js";import"./small-cross-CsGj_6WB.js";import"./ActionButton-DbyswEM_.js";import"./Checkbox-DnMOAb9A.js";import"./useValueChanged-CJ3EpaVI.js";import"./CollapsiblePanel-CJyeuEr2.js";import"./MultiColumnSortDialog-DDLKVEP1.js";import"./MenuTrigger-DWa9A5uG.js";import"./CompositeItem-D3aderF4.js";import"./ToolbarRootContext-CFT1kSbY.js";import"./getDisabledMountTransitionStyles-Ckfz4xV-.js";import"./getPseudoElementBounds-CEULC0ey.js";import"./chevron-down-B1umsHcu.js";import"./index-BxV1QnRa.js";import"./error-K70cMOqt.js";import"./BaseCbacBanner-BfuGodE8.js";import"./makeExternalStore-BoGnPwwN.js";import"./Tooltip-CAd6Fq_j.js";import"./PopoverPopup-B29eQZ64.js";import"./debounce-TB1Vypf1.js";import"./useOsdkClient-De86zlhT.js";import"./tick-DdBTMVZy.js";import"./DropdownField-wtjKeadJ.js";import"./isEqual-DKRu4Yn9.js";import"./withOsdkMetrics-CgOQk5ql.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

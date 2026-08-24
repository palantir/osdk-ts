import{f as p,j as e}from"./iframe-K2lL5yZa.js";import{O as i}from"./object-table-CS1bFxKA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zTJR2VVu.js";import"./Table-OcecaMIa.js";import"./index-DG2QGQKO.js";import"./Dialog-_JApRq-4.js";import"./cross-BBzA-0FD.js";import"./svgIconContainer-LFdnXjkf.js";import"./useBaseUiId-6Oj8SlmF.js";import"./InternalBackdrop-CNYY8FxI.js";import"./composite-D2OvudN1.js";import"./index-DGaoMYYr.js";import"./index-DKnEAJke.js";import"./index-CRubwX-j.js";import"./useEventCallback-ChYCPbxs.js";import"./SkeletonBar-BK3M9MUf.js";import"./LoadingCell-CXbDE-rI.js";import"./ColumnConfigDialog-Bcg9LH1d.js";import"./DraggableList-DfG1W5nU.js";import"./search-uSNLpV_J.js";import"./Input-BCT2mqmz.js";import"./useControlled-BRKOM8iX.js";import"./Button-CMzjLHfg.js";import"./small-cross-DCCFeUk7.js";import"./ActionButton-C3BoQLQ_.js";import"./Checkbox-m7qFNS7J.js";import"./useValueChanged-Bv0S7zcp.js";import"./CollapsiblePanel-CcF9UvWu.js";import"./MultiColumnSortDialog-DsR5yjvH.js";import"./MenuTrigger-D5We7Y0z.js";import"./CompositeItem-QpacyHa1.js";import"./ToolbarRootContext-BNVauRMC.js";import"./getDisabledMountTransitionStyles-Bv2gYzkX.js";import"./getPseudoElementBounds-exFm21_L.js";import"./chevron-down-Ci68Jmqo.js";import"./index-CA4RuaSb.js";import"./error-CKG1y6S7.js";import"./BaseCbacBanner--6koxanl.js";import"./makeExternalStore-CHsvXMvU.js";import"./Tooltip-BG2GxZtn.js";import"./PopoverPopup-Bsp9DcIy.js";import"./debounce-BdkAtH3B.js";import"./useOsdkClient-rjGhEEeG.js";import"./tick-DbTSlkSl.js";import"./DropdownField-jrsNcXWF.js";import"./isEqual-CWNNtG3w.js";import"./withOsdkMetrics-BBCl75ZX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

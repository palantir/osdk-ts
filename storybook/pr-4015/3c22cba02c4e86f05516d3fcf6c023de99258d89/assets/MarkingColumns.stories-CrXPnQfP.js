import{f as p,j as e}from"./iframe-ME9jEV4B.js";import{O as i}from"./object-table-DZvMa9AR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CAlbxuMw.js";import"./Table-DarKb3zl.js";import"./index-BwQPjFr5.js";import"./Dialog-CohVxkkM.js";import"./cross-BDVa-Vs8.js";import"./svgIconContainer-C0iDRr5R.js";import"./useBaseUiId-BRBkTzbz.js";import"./InternalBackdrop-w_eWpjif.js";import"./composite-DGm-qDkX.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./index-D8F1bo2b.js";import"./useEventCallback-DhdZk0w1.js";import"./SkeletonBar-M59GNBZ4.js";import"./LoadingCell-BoyYep22.js";import"./ColumnConfigDialog-ClXNNF41.js";import"./DraggableList-Dr5DtKR-.js";import"./search-Dg6pBwm_.js";import"./Input-CE0w_ENc.js";import"./useControlled-BiaTOKvQ.js";import"./Button-Da4t_kgJ.js";import"./small-cross-D6DBal5p.js";import"./ActionButton-CEmm2wPj.js";import"./Checkbox-D8y-Sj5L.js";import"./useValueChanged-hB8TkC-G.js";import"./CollapsiblePanel-DquoQgDU.js";import"./MultiColumnSortDialog-s4qegvXX.js";import"./MenuTrigger-BG3JFXMo.js";import"./CompositeItem-CxooWEv2.js";import"./ToolbarRootContext-DM1MG67c.js";import"./getDisabledMountTransitionStyles-CzotrHFI.js";import"./getPseudoElementBounds-DGRmUR-d.js";import"./chevron-down-6_LddkfR.js";import"./index-D7oNMiqq.js";import"./error-Y3Mhwjiz.js";import"./BaseCbacBanner-Lj1wfOnk.js";import"./makeExternalStore-DFLhgaAs.js";import"./Tooltip-BEcZHd4g.js";import"./PopoverPopup-DfqLPctH.js";import"./debounce-BRk1tey9.js";import"./useOsdkClient-Dx8qUr5J.js";import"./tick-BEcsmCA5.js";import"./DropdownField-CaUmxcLV.js";import"./isEqual-js4cgbNJ.js";import"./withOsdkMetrics-DcyxtP_A.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

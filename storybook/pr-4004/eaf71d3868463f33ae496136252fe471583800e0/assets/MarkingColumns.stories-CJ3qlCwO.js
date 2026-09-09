import{f as p,j as e}from"./iframe-CSNnL1Y0.js";import{O as i}from"./object-table-DrZtU1b5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PMc3ZHFF.js";import"./Table-B-CWlgGW.js";import"./index-DNTkQvxm.js";import"./Dialog-VL2ZkQk7.js";import"./cross-Bg_IlbQu.js";import"./svgIconContainer-CM8I1f8r.js";import"./useBaseUiId-pX-EM4Dz.js";import"./InternalBackdrop-B8dtNrQn.js";import"./composite-BlH-_uKm.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./index-sKOwD7Lf.js";import"./useEventCallback-D15AXOzW.js";import"./SkeletonBar-CzJzlOLW.js";import"./LoadingCell-ByXqEWok.js";import"./ColumnConfigDialog-YcnoWLiU.js";import"./DraggableList-C268AYO6.js";import"./search-BPPJCzpv.js";import"./Input-bh0XwuT_.js";import"./useControlled-CLpZ-2U1.js";import"./Button-B6Txaqgo.js";import"./small-cross-D9O7TL9e.js";import"./ActionButton-B5fjrdh8.js";import"./Checkbox-8nyxSN9Y.js";import"./useValueChanged-DcOG8dba.js";import"./CollapsiblePanel-QQw2ylt-.js";import"./MultiColumnSortDialog-BXJtnpCu.js";import"./MenuTrigger-CjuSuj7u.js";import"./CompositeItem-DxYljjwU.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./getDisabledMountTransitionStyles-CxBhjcps.js";import"./getPseudoElementBounds-DvtLYcgZ.js";import"./chevron-down-BBAfQF9b.js";import"./index-CP8GV_wH.js";import"./error-BFicHv-u.js";import"./BaseCbacBanner-B9xwQlPo.js";import"./makeExternalStore-19MZWFoq.js";import"./Tooltip-59zWJjq9.js";import"./PopoverPopup-DtGqPexC.js";import"./debounce-BzipLUSU.js";import"./useOsdkClient-CLYLA36V.js";import"./tick-Cl0RaH8k.js";import"./DropdownField-QGFslIVN.js";import"./isEqual-DQCqzWyC.js";import"./withOsdkMetrics-DmF4idxC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

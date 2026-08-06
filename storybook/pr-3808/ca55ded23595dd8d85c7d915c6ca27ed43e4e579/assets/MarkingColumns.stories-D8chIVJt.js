import{f as p,j as e}from"./iframe-B4TxBOgD.js";import{O as i}from"./object-table-BXUU4i3s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BImTr8XW.js";import"./Table-Cl9fVu8V.js";import"./index-CewbiS0-.js";import"./Dialog-BqbO7wc8.js";import"./cross-hsr1UFQF.js";import"./svgIconContainer-BdVqbaHA.js";import"./useBaseUiId-DGDWvpff.js";import"./InternalBackdrop-Cb9YWrJj.js";import"./composite-CdnlLAO5.js";import"./index-Da0oW1Pt.js";import"./index-BQOT9bMM.js";import"./index-yw2IcMRc.js";import"./useEventCallback-C8aiku-x.js";import"./SkeletonBar-DG8Xm3s9.js";import"./LoadingCell-B4nls2yn.js";import"./ColumnConfigDialog-D_K60j1r.js";import"./DraggableList-BPsTmD45.js";import"./search-B3z6PcWR.js";import"./Input-BegfCSSS.js";import"./useControlled-C5WozG_u.js";import"./isEqual-DHGC0vVF.js";import"./isObject-CFmOY1gj.js";import"./Button-C3hoplQB.js";import"./ActionButton-CU3iPuAb.js";import"./Checkbox-Cfg5IKtW.js";import"./useValueChanged-DU2ktiK8.js";import"./CollapsiblePanel-lVLOzwx5.js";import"./MultiColumnSortDialog-D9upH0BI.js";import"./MenuTrigger-C65x4IPJ.js";import"./CompositeItem-D_uU8YUN.js";import"./ToolbarRootContext-SUr-GoJT.js";import"./getDisabledMountTransitionStyles-B_1CmVQ9.js";import"./getPseudoElementBounds-Cqn9HlA0.js";import"./chevron-down-9K24iL1H.js";import"./index-DL0nRe0P.js";import"./error-BpJdqfq0.js";import"./BaseCbacBanner-BxYpzwz6.js";import"./makeExternalStore-7PAAW5FV.js";import"./Tooltip-W37lKcMg.js";import"./PopoverPopup-wxIHZwOO.js";import"./toNumber-CWrjRpqY.js";import"./useOsdkClient-qMlSffSE.js";import"./tick-Cy11cge5.js";import"./DropdownField-Bzz5Z8gc.js";import"./withOsdkMetrics-D8u8gP3a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

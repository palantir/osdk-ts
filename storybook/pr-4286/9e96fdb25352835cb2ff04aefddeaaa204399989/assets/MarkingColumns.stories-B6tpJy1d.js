import{f as p,j as e}from"./iframe-CH27AqHZ.js";import{O as i}from"./object-table-CkoI542e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGi0xS-h.js";import"./Table-CH_NPSwe.js";import"./index-D1s_GF0g.js";import"./Dialog-BO88dVa7.js";import"./cross-wK4dNyGg.js";import"./svgIconContainer-CAAPLquq.js";import"./useBaseUiId-Bqw5UKiE.js";import"./InternalBackdrop-Evn3ET9-.js";import"./composite-C0QdjDW_.js";import"./index-w-QWzjNw.js";import"./index-idKZoric.js";import"./index-lRC7FyDu.js";import"./useEventCallback-BFq5H1RT.js";import"./SkeletonBar-B3ahzSk9.js";import"./LoadingCell-VcDh5duI.js";import"./ColumnConfigDialog-CNI_Akv4.js";import"./DraggableList-DbhEH_qG.js";import"./search-BvrU7tK_.js";import"./Input-BZHUVJPq.js";import"./useControlled-bZT9hVeg.js";import"./Button-C_aQELrm.js";import"./small-cross-20hmyH-H.js";import"./ActionButton-D3WKqPWv.js";import"./Checkbox-DDWJRWmN.js";import"./useValueChanged-NcbXJrC1.js";import"./CollapsiblePanel-BPS1IKxI.js";import"./MultiColumnSortDialog-YjUETmiQ.js";import"./MenuTrigger-CA2X_MRB.js";import"./CompositeItem-Bp-0qryG.js";import"./ToolbarRootContext-CS86aP8Z.js";import"./getDisabledMountTransitionStyles-BC1jSC_a.js";import"./getPseudoElementBounds-CtFtcdYV.js";import"./chevron-down-BknLO_BB.js";import"./index-CyGPth6m.js";import"./error-ADuRb4lm.js";import"./BaseCbacBanner-lOIAIJ4-.js";import"./makeExternalStore-D2OeNChh.js";import"./Tooltip-Bz17X0U3.js";import"./PopoverPopup-dBkoEvm7.js";import"./debounce-DQvh5AcE.js";import"./useOsdkClient-DOGyfDWc.js";import"./tick-BpVCvq9_.js";import"./DropdownField-Xq1F_pI0.js";import"./isEqual-iLCg8Cj2.js";import"./withOsdkMetrics-w7ir5H-Z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

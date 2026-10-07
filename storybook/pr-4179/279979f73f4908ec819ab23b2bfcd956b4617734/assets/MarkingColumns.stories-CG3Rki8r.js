import{f as p,j as e}from"./iframe-Dn-9qR05.js";import{O as i}from"./object-table-RVYWSQVb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEUgRBGl.js";import"./Table-3aCJl_YM.js";import"./index-CShzoPuj.js";import"./Dialog-TK6XzCpV.js";import"./cross-CFJY3pI7.js";import"./svgIconContainer-DN7hY7wX.js";import"./useBaseUiId-DlYLGnbC.js";import"./InternalBackdrop-CSP9tAeZ.js";import"./composite-Dam7p1Gi.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./index-PmTUoQ6e.js";import"./useEventCallback-yrBTKri_.js";import"./SkeletonBar-g7tzeTNf.js";import"./LoadingCell-CeUY9Yie.js";import"./ColumnConfigDialog-D-3H8mRr.js";import"./DraggableList-Clp-stUz.js";import"./search-B9RszC_k.js";import"./Input-Ckj63NR0.js";import"./useControlled-CX6Xi137.js";import"./Button-CD6ruQEI.js";import"./small-cross-CfSIwwvk.js";import"./ActionButton-DJJlGWOS.js";import"./Checkbox-CMMOr2Lt.js";import"./useValueChanged-B9A96Xzu.js";import"./CollapsiblePanel-Banv_PU4.js";import"./MultiColumnSortDialog-fLe92FZV.js";import"./MenuTrigger-ZXE47TlK.js";import"./CompositeItem-DUnPjw9m.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./getDisabledMountTransitionStyles-DhN5fa4D.js";import"./getPseudoElementBounds-aQjcu0Ut.js";import"./chevron-down-fpE-PXKH.js";import"./index-B79Dn3Wp.js";import"./error-Cuq16P9x.js";import"./BaseCbacBanner-DNbN0KCn.js";import"./makeExternalStore-Dqgr7oFO.js";import"./Tooltip-CbEYBBXB.js";import"./PopoverPopup-B_2-3pgb.js";import"./debounce-Bvt0kX1y.js";import"./useOsdkClient-D1GnjUl5.js";import"./tick-CgK3j2VX.js";import"./DropdownField-DC36O3p8.js";import"./isEqual-Dm8G62_o.js";import"./withOsdkMetrics-BQNjNhlw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-p2YICxUI.js";import{O as i}from"./object-table-DXwVoDL-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_d8LugS.js";import"./Table-DoflLJiY.js";import"./index-CsAVedHf.js";import"./Dialog-BpqAGMf3.js";import"./cross-DphGr94_.js";import"./svgIconContainer-ByMgsc6W.js";import"./useBaseUiId-CsBNKmu8.js";import"./InternalBackdrop-Bl4pAqkn.js";import"./composite-BPYrj6eG.js";import"./index-4ZagnSn6.js";import"./index-XAimxDaP.js";import"./index-BvbPlynd.js";import"./useEventCallback-DNjRXV4C.js";import"./SkeletonBar-Da2Aho7B.js";import"./LoadingCell-ChvYeOgu.js";import"./ColumnConfigDialog-Cd2T6Buy.js";import"./DraggableList-DYrbEckZ.js";import"./search-h5TogDUF.js";import"./Input-se4kwers.js";import"./useControlled-DfYpZvNd.js";import"./Button-ByiY3lLu.js";import"./small-cross-CsgJpP59.js";import"./ActionButton-BQ6YslU0.js";import"./Checkbox-DkAhCGWt.js";import"./useValueChanged-Oji2CKci.js";import"./CollapsiblePanel-J0gq_9ov.js";import"./MultiColumnSortDialog-CJeF3pL7.js";import"./MenuTrigger-CThGnNMB.js";import"./CompositeItem-BejJ0cXB.js";import"./ToolbarRootContext-DOpGxQlA.js";import"./getDisabledMountTransitionStyles-B3K2sZ2M.js";import"./getPseudoElementBounds-DoNDWMZt.js";import"./chevron-down-CvKzqnOZ.js";import"./index-BO7UbGKj.js";import"./error-LbvP5jG0.js";import"./BaseCbacBanner-CemxdjR3.js";import"./makeExternalStore-DCD_3Y1Y.js";import"./Tooltip-CaUh6MSb.js";import"./PopoverPopup-BLF-1tn1.js";import"./debounce-fGYFEdED.js";import"./useOsdkClient-i5Bf0XJq.js";import"./tick-Bp4sawQk.js";import"./DropdownField-BezvDOf1.js";import"./isEqual-B-KMF0Li.js";import"./withOsdkMetrics-DKcHZ6W6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

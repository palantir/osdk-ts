import{f as p,j as e}from"./iframe-DcCQS0_6.js";import{O as i}from"./object-table-IW6qzE0i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xWYT_d-N.js";import"./Table-DFemE_x6.js";import"./index-CbMk7YoF.js";import"./Dialog-DpW59sOk.js";import"./cross-CUczp16a.js";import"./svgIconContainer-DW0Yd1WX.js";import"./useBaseUiId-Dh-QEy1V.js";import"./InternalBackdrop-Cjy1b8s5.js";import"./composite-CzrpQp13.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./index-B12KGdMo.js";import"./useEventCallback-uOZ5ZH80.js";import"./SkeletonBar-D5ep4ew5.js";import"./LoadingCell-hpqWg47X.js";import"./ColumnConfigDialog-BzJpbiPU.js";import"./DraggableList-BwYzjIhu.js";import"./search-I8gByOwV.js";import"./Input-DQQsT43v.js";import"./useControlled-DjePpHNj.js";import"./Button-9wNHK-eW.js";import"./small-cross-J9_U438b.js";import"./ActionButton-DUjUq-0F.js";import"./Checkbox--MKRLD2P.js";import"./useValueChanged-LgJH2RSM.js";import"./CollapsiblePanel-Bw4GjZXS.js";import"./MultiColumnSortDialog-D7WAM6sg.js";import"./MenuTrigger-lqNk6ztm.js";import"./CompositeItem-f5BJQE98.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./getDisabledMountTransitionStyles-hcUT6CF_.js";import"./getPseudoElementBounds-hK_15JJS.js";import"./chevron-down-lL-kgNIS.js";import"./index-rRkZkhHF.js";import"./error-DZqUEnyZ.js";import"./BaseCbacBanner-Dl9pCWQu.js";import"./makeExternalStore-D7kaYs9c.js";import"./Tooltip-BhO1PItx.js";import"./PopoverPopup-4ZQ0qIW9.js";import"./debounce-CV8PblDi.js";import"./useOsdkClient-DjIuCtk_.js";import"./tick-B04vkzTg.js";import"./DropdownField-D9LBoico.js";import"./isEqual-qXfBCwDA.js";import"./withOsdkMetrics-CT48WTCf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

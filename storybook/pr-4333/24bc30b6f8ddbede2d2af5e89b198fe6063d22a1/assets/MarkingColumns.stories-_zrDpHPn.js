import{f as p,j as e}from"./iframe-BRIJTziU.js";import{O as i}from"./object-table-BnpwgFJ4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7wNDItT.js";import"./Table-BMKrg_bY.js";import"./index-A6JnTqM7.js";import"./Dialog-CB9ow6MV.js";import"./cross-DvI1_HyP.js";import"./svgIconContainer-CIdhA9rp.js";import"./useBaseUiId-BsprSJc0.js";import"./InternalBackdrop-ZzoKlD0h.js";import"./composite-C9avNQ9h.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./index-CvbNR6cC.js";import"./useEventCallback-DeOB15hi.js";import"./SkeletonBar-BP_l8aax.js";import"./LoadingCell-CZnPc23n.js";import"./ColumnConfigDialog-Be3M2Fo7.js";import"./DraggableList-BuQkq18_.js";import"./search-BB6i5fl7.js";import"./Input-Boj06qte.js";import"./useControlled-C4JFDSuR.js";import"./Button-Dh4qqTQa.js";import"./small-cross-CsMKepR3.js";import"./ActionButton-BicTWFSp.js";import"./Checkbox-BNKjZK3u.js";import"./useValueChanged-CtSiK7PN.js";import"./CollapsiblePanel-D_KuOsno.js";import"./MultiColumnSortDialog-DueHaRDC.js";import"./MenuTrigger-Cbm7cQAI.js";import"./CompositeItem-CJpL3T-F.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./getDisabledMountTransitionStyles-D5TfhzFv.js";import"./getPseudoElementBounds-DSda8EI-.js";import"./chevron-down-DQOobcC7.js";import"./index-D3hbdvY7.js";import"./error-D4dPzE3W.js";import"./BaseCbacBanner-DxgoC11R.js";import"./makeExternalStore-TKjWQKGl.js";import"./Tooltip-CVqCP8mT.js";import"./PopoverPopup-DDFXARkA.js";import"./debounce-C4CbbiU1.js";import"./useOsdkClient-Cymu9CBz.js";import"./tick-B-d2xjTM.js";import"./DropdownField-CzDLyAqa.js";import"./isEqual-Q3A5K1_W.js";import"./withOsdkMetrics-CS23iZYx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

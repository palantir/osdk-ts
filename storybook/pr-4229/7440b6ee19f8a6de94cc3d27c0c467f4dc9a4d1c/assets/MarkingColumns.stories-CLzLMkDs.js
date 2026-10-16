import{f as p,j as e}from"./iframe-B7GNjqYa.js";import{O as i}from"./object-table-BgWTv_dN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAlwY9vI.js";import"./Table-BRmPVvi-.js";import"./index-BS_kYp2J.js";import"./Dialog-BzmIbEh6.js";import"./cross-BiueRdx7.js";import"./svgIconContainer-DoNcIMx3.js";import"./useBaseUiId-CFM8-ppd.js";import"./InternalBackdrop-bYiUgvs9.js";import"./composite-C3LspNj0.js";import"./index-fPGG7RjX.js";import"./index-BCluv78G.js";import"./index-DYS5ByOf.js";import"./useEventCallback-BpccMG2J.js";import"./SkeletonBar-hQaFCQal.js";import"./LoadingCell-DuTsM7kN.js";import"./ColumnConfigDialog-CH6XY5bo.js";import"./DraggableList-1vXWe-Jq.js";import"./search-BPhnv7M1.js";import"./Input-COrKdsAC.js";import"./useControlled-qLlPw49u.js";import"./Button-CuSrXijd.js";import"./small-cross-oDjSfOr6.js";import"./ActionButton-B5nt0qaz.js";import"./Checkbox-BG4Ywwfd.js";import"./useValueChanged-DzwuESFx.js";import"./CollapsiblePanel-B68_k9PR.js";import"./MultiColumnSortDialog-CMbfZFGV.js";import"./MenuTrigger-Cp8wIw32.js";import"./CompositeItem-Bd_Q9u8B.js";import"./ToolbarRootContext-m_MjqPd8.js";import"./getDisabledMountTransitionStyles-DONXlArz.js";import"./getPseudoElementBounds-BHnWaw3k.js";import"./chevron-down-DB4mVzp_.js";import"./index-DsFN0VWM.js";import"./error-zFyncHCE.js";import"./BaseCbacBanner-6hnJ0PhS.js";import"./makeExternalStore-BhSOqX6p.js";import"./Tooltip-CjWFJAs6.js";import"./PopoverPopup-Knmtng0E.js";import"./debounce-CoJau0dS.js";import"./useOsdkClient-B28z3bbk.js";import"./tick-Chptb_Eu.js";import"./DropdownField-GQBEnXYB.js";import"./isEqual-BfM7cD2s.js";import"./withOsdkMetrics-DYcwkBzp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

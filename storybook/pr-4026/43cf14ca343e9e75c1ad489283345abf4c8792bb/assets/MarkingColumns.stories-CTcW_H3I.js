import{f as p,j as e}from"./iframe-BOlAF3V1.js";import{O as i}from"./object-table-OpNOO8Zz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8-M1e1R.js";import"./Table-Cq0xrIAG.js";import"./index-DHGHpbde.js";import"./Dialog-_6UFmCIU.js";import"./cross-4uTXI33L.js";import"./svgIconContainer-BI7oIE-s.js";import"./useBaseUiId-DKEtUdQs.js";import"./InternalBackdrop-jjkmgKoA.js";import"./composite-uQCx7Ami.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./index-VFcxoHMB.js";import"./useEventCallback-CMYz6_v4.js";import"./SkeletonBar-5GsvCwd_.js";import"./LoadingCell-D8PuOjAg.js";import"./ColumnConfigDialog-DzS6ikRu.js";import"./DraggableList-BxtxFZr4.js";import"./search-dtRuG4ZW.js";import"./Input-DPiHLqc9.js";import"./useControlled-XB4dOcfe.js";import"./Button-C_Kq6X6A.js";import"./small-cross-DwQ2wey-.js";import"./ActionButton-D_sarqsj.js";import"./Checkbox-BEdNjDpm.js";import"./useValueChanged-DlyBj6rd.js";import"./CollapsiblePanel-CvEpNxRR.js";import"./MultiColumnSortDialog-BNhhRyLH.js";import"./MenuTrigger-C7Yb8CE4.js";import"./CompositeItem-DUqi3n0Z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./getDisabledMountTransitionStyles-BU9dKP1z.js";import"./getPseudoElementBounds-Bzk92_UN.js";import"./chevron-down-1Vj4zZ-s.js";import"./index-8QnQJeqI.js";import"./error-mE4pvPha.js";import"./BaseCbacBanner-D8MjQjhc.js";import"./makeExternalStore-WrNjm8L9.js";import"./Tooltip-ncr-ughp.js";import"./PopoverPopup-ISkaWBxN.js";import"./debounce-CFrhvngH.js";import"./useOsdkClient-BgqOjygd.js";import"./tick-BB9vOuei.js";import"./DropdownField-DLvbQCQI.js";import"./isEqual-CzFD6Eij.js";import"./withOsdkMetrics-BCE-Yi3C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

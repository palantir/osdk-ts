import{f as p,j as e}from"./iframe-CL4UessJ.js";import{O as i}from"./object-table-CJwFPYLh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-X9tQ-Ro6.js";import"./Table-DO5t5QF4.js";import"./index-CuQscTLS.js";import"./Dialog-DVpuAAE2.js";import"./cross-BrJ6ooB2.js";import"./svgIconContainer-CMOMNq3G.js";import"./useBaseUiId-C0g9vfON.js";import"./InternalBackdrop-00goDF2v.js";import"./composite-C9gZWjPR.js";import"./index-CZ6Gtb-I.js";import"./index-D5nMUh2o.js";import"./index-kfQfKf2J.js";import"./useEventCallback-CA3T4Nsf.js";import"./SkeletonBar-DSJ7-8PM.js";import"./LoadingCell-BgKbszPV.js";import"./ColumnConfigDialog-nG9nW_3F.js";import"./DraggableList-C5JmjFNf.js";import"./search-CFrkmuc2.js";import"./Input-CbgCfohB.js";import"./useControlled-C4g4Ro2e.js";import"./isEqual-hG_4ZrXX.js";import"./isObject-B6GdqpCO.js";import"./Button-DCwXYkIS.js";import"./ActionButton-Bu1kVHNE.js";import"./Checkbox-BqP3g_e1.js";import"./useValueChanged-Ch0VU4Mt.js";import"./CollapsiblePanel-BuDLVEY8.js";import"./MultiColumnSortDialog-DyGiUi9Z.js";import"./MenuTrigger-D3QIkUB3.js";import"./CompositeItem-BJ8h2cBk.js";import"./ToolbarRootContext-YHEW-YfH.js";import"./getDisabledMountTransitionStyles-DzgvcXWi.js";import"./getPseudoElementBounds-BiPncuNY.js";import"./chevron-down-CzML4mqe.js";import"./index-Cy3rUIcf.js";import"./error-DLILtTPf.js";import"./BaseCbacBanner-Caz8BT1D.js";import"./makeExternalStore-Bhe8UyWJ.js";import"./Tooltip-DD4f5V0W.js";import"./PopoverPopup-DUxb0nTQ.js";import"./toNumber-DdBj21PM.js";import"./useOsdkClient-DwhWuET8.js";import"./tick-jILTcEB0.js";import"./DropdownField-C1hWyFZ3.js";import"./withOsdkMetrics-B0fTd-84.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

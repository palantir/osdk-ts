import{f as p,j as e}from"./iframe-C8bv5M5q.js";import{O as i}from"./object-table-qhdt9s5y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Chlg6owb.js";import"./index-aA6dFdbY.js";import"./Dialog-DwRdr4ua.js";import"./cross-BoinwVnp.js";import"./svgIconContainer-D7NvghIU.js";import"./useBaseUiId-DGJFJt6n.js";import"./InternalBackdrop-DkZ9lOZ_.js";import"./composite-BERdqvW-.js";import"./index-BLJUhLms.js";import"./index-CLxUnHEQ.js";import"./index-B9niMrF8.js";import"./useEventCallback-1iMstHZF.js";import"./SkeletonBar-p-WNn0Z9.js";import"./LoadingCell-DW7fm8TM.js";import"./ColumnConfigDialog-DaQ5Tlvf.js";import"./DraggableList-qn1FuzDp.js";import"./search-Bk10Osf-.js";import"./Input-BEhEtBHk.js";import"./useControlled-BCYGQpmo.js";import"./Button-Cl8oC4P3.js";import"./small-cross-C1TCAk_6.js";import"./ActionButton-eSLUE1ej.js";import"./Checkbox-CaoMOKG9.js";import"./useValueChanged-BqyaZZFZ.js";import"./CollapsiblePanel-jOZBbIzK.js";import"./MultiColumnSortDialog-BP_6eN27.js";import"./MenuTrigger-DC1vFj75.js";import"./CompositeItem-CV5yn9v3.js";import"./ToolbarRootContext-C4tMhNXy.js";import"./getDisabledMountTransitionStyles-CW5p-T8b.js";import"./getPseudoElementBounds-Bre6q9eb.js";import"./chevron-down-C7oxNI6k.js";import"./index-BKjCZT87.js";import"./error-GoMWkPTV.js";import"./BaseCbacBanner-CNYwOnwX.js";import"./makeExternalStore-DYR8gV5O.js";import"./Tooltip-BD8zP9iV.js";import"./PopoverPopup-BeJ93K3k.js";import"./debounce-DAbjvxlH.js";import"./useOsdkClient-BiaSRebG.js";import"./tick-xVgIfTGF.js";import"./DropdownField-CYP0zkSP.js";import"./isEqual-BzbyRYS1.js";import"./withOsdkMetrics-CmCV1Tt1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

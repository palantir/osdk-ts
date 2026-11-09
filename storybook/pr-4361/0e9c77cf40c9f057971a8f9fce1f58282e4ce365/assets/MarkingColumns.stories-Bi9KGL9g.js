import{f as p,j as e}from"./iframe-Bz_J2W1Z.js";import{O as i}from"./object-table-Deb5sG0c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ok-MzX3c.js";import"./Table-zqizdMF7.js";import"./index-FW_HsjU0.js";import"./Dialog-CAs4KzzH.js";import"./cross-DddIN5az.js";import"./svgIconContainer-CIyUQzFt.js";import"./useBaseUiId-BhmZfUtN.js";import"./InternalBackdrop-CF2prM0v.js";import"./composite-DlQjNEH4.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./index-Bb43CzD2.js";import"./useEventCallback-DE3O12F-.js";import"./SkeletonBar-DPT4T968.js";import"./LoadingCell-D8jDqrcB.js";import"./ColumnConfigDialog-B_1Wp2XF.js";import"./DraggableList-B5aByQ2k.js";import"./search-LR9m9GUO.js";import"./Input-Bb2RIbvF.js";import"./useControlled-BuUO4LJj.js";import"./Button-DvYR9GFC.js";import"./small-cross-ZW30Jg6L.js";import"./ActionButton-ChwYro4H.js";import"./Checkbox-D3_MAEWy.js";import"./useValueChanged-DKxvjgDx.js";import"./CollapsiblePanel-BDI3hYad.js";import"./MultiColumnSortDialog-ZpntWuD0.js";import"./MenuTrigger-kPQxIawG.js";import"./CompositeItem-BJ3s4VzC.js";import"./ToolbarRootContext-D7Swefso.js";import"./getDisabledMountTransitionStyles-Bi_e2akv.js";import"./getPseudoElementBounds-DL548pPm.js";import"./chevron-down-Cd0pn5Sr.js";import"./index-DLug1g0P.js";import"./error-Cf_kxNf8.js";import"./BaseCbacBanner-BQ1zd7K_.js";import"./makeExternalStore-BAdkPAIU.js";import"./Tooltip-BHCbPk7Z.js";import"./isObject-MrG-9k2y.js";import"./debounce--inhDJEJ.js";import"./useOsdkClient-DzVQoRZo.js";import"./tick-CbkclHuX.js";import"./DropdownField-ZxzfXiCm.js";import"./isEqual-BNrGU-44.js";import"./_baseIsEqual-DNK0k7BI.js";import"./withOsdkMetrics-wwBOvirA.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

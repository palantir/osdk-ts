import{f as p,j as e}from"./iframe-C-TWQ9Dj.js";import{O as i}from"./object-table-DHcCBiR1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SRiQ6y29.js";import"./Table-CS33TpiL.js";import"./index-PmPY8NSw.js";import"./Dialog-CfxjvUNn.js";import"./cross-BVZ0tu48.js";import"./svgIconContainer-lMlNb8_m.js";import"./useBaseUiId-C7aOOgXJ.js";import"./InternalBackdrop-C7xc3x3s.js";import"./composite-D--SIj9q.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./index-D6WX8M0U.js";import"./useEventCallback-WJc4Eyq9.js";import"./SkeletonBar-Dw_l2Y16.js";import"./LoadingCell-SYLzuCyf.js";import"./ColumnConfigDialog-3RjsD2ye.js";import"./DraggableList-FsNhbosm.js";import"./search-CPuRKLWN.js";import"./Input-C724ccD9.js";import"./useControlled-CySHXj1X.js";import"./Button-CBan_F_X.js";import"./small-cross-Djhljs2G.js";import"./ActionButton-LwJEJXUG.js";import"./Checkbox-CUQfcYoc.js";import"./useValueChanged-BgM1xj6e.js";import"./CollapsiblePanel-UW9yX8mw.js";import"./MultiColumnSortDialog-BmuAXou2.js";import"./MenuTrigger-DjOjw-Xw.js";import"./CompositeItem-Dko6wR9I.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./getDisabledMountTransitionStyles-CEUeKr3J.js";import"./getPseudoElementBounds-qfUTeo2P.js";import"./chevron-down-gXZSSvnY.js";import"./index-CEKrq0xG.js";import"./error-C4q3M3Sg.js";import"./BaseCbacBanner-BFXtCQzL.js";import"./makeExternalStore-Lt703n6D.js";import"./Tooltip-BcTTfVEh.js";import"./PopoverPopup-BFE0pvVh.js";import"./debounce-CYsfIW2P.js";import"./useOsdkClient-WmdAhq3S.js";import"./tick-C4vQIE4T.js";import"./DropdownField-HMVghVOX.js";import"./isEqual-C34Y0m9V.js";import"./withOsdkMetrics-DIyUXY1U.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

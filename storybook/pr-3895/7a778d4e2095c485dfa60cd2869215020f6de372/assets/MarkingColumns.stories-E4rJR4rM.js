import{f as p,j as e}from"./iframe-BoqxVsev.js";import{O as i}from"./object-table-CyoB5dNz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Aq8qnvWR.js";import"./Table-BokLmYX5.js";import"./index-hQXIiWom.js";import"./Dialog-C4tVVEXX.js";import"./cross-DvCT72yg.js";import"./svgIconContainer-CJ6zO_Yl.js";import"./useBaseUiId-yvSaUVvb.js";import"./InternalBackdrop-BNQvTeZL.js";import"./composite-BXQWKcxK.js";import"./index-DdyFNYe7.js";import"./index-BB1uKxMJ.js";import"./index-0PmjgZdw.js";import"./useEventCallback-_ANXD1nQ.js";import"./SkeletonBar-D0cKiQMm.js";import"./LoadingCell-C_8XhGmZ.js";import"./ColumnConfigDialog-BOMMTaXm.js";import"./DraggableList-D9_O0MtJ.js";import"./search-DFnmSjiz.js";import"./Input-DVgEeo3Y.js";import"./useControlled-ZG4JZg3B.js";import"./Button-D1EPyyjE.js";import"./small-cross-C8qCf42P.js";import"./ActionButton-DBEpcyJi.js";import"./Checkbox-DA73le-m.js";import"./useValueChanged-nzkPrcRN.js";import"./CollapsiblePanel-DSO7j4jK.js";import"./MultiColumnSortDialog-DSRugA-p.js";import"./MenuTrigger-BGLurAAz.js";import"./CompositeItem-BJ5PlAn8.js";import"./ToolbarRootContext-CoT6phAF.js";import"./getDisabledMountTransitionStyles-DVKQbCZp.js";import"./getPseudoElementBounds-ey_ll9I6.js";import"./chevron-down-BBGQdN8O.js";import"./index-DVhCuea2.js";import"./error-yoGLU_F1.js";import"./BaseCbacBanner-CTDZt5tg.js";import"./makeExternalStore-DUwv-hHr.js";import"./Tooltip-Sz9-sl-s.js";import"./PopoverPopup-BH7V2Ggx.js";import"./debounce-D-AvrQTr.js";import"./useOsdkClient-DUkaUEnF.js";import"./tick-8BKAFT85.js";import"./DropdownField-B_HGlYb7.js";import"./isEqual-DHwOBte8.js";import"./withOsdkMetrics-D2tjX_Ah.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-Bjs833GT.js";import{O as i}from"./object-table-C3IgKZNw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlVzQ63h.js";import"./Table-mE-X7H78.js";import"./index-ouW-uxFy.js";import"./Dialog-CeGZ1o7-.js";import"./cross-odZi7HLt.js";import"./svgIconContainer-B50GNB1l.js";import"./useBaseUiId-azhLq6E8.js";import"./InternalBackdrop-CSh59UaV.js";import"./composite-DAp8GgCU.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./index-gqB7KI61.js";import"./useEventCallback-DAOuva_s.js";import"./SkeletonBar-COXh_K_A.js";import"./LoadingCell-CL6pGTYf.js";import"./ColumnConfigDialog-RzjwFmne.js";import"./DraggableList-Cb1vAsrp.js";import"./search-Bz3i30zB.js";import"./Input-jDIiSSPg.js";import"./useControlled-T6eskrKs.js";import"./Button-Bi0CmGS9.js";import"./small-cross-4PvqsLte.js";import"./ActionButton-BV_FUyjV.js";import"./Checkbox-h8zMlZRj.js";import"./useValueChanged-BcoiLIU-.js";import"./CollapsiblePanel-CEYd-Yeh.js";import"./MultiColumnSortDialog-B-Q3xx7z.js";import"./MenuTrigger-B6rWoPMu.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./getDisabledMountTransitionStyles-DbnX7M-z.js";import"./getPseudoElementBounds-BYukSd76.js";import"./chevron-down-DSKsXuZi.js";import"./index-Ci1PABP6.js";import"./error-D5mhWRkN.js";import"./BaseCbacBanner-BtOiRQiw.js";import"./makeExternalStore-DPdJKiEp.js";import"./Tooltip-Bjp4iv0K.js";import"./PopoverPopup-D62GG8Vu.js";import"./debounce-BQr-vi9c.js";import"./useOsdkClient-Bk2k7B_F.js";import"./tick-ujL-DBFL.js";import"./DropdownField-CCWswJAt.js";import"./isEqual-BarWzeE3.js";import"./withOsdkMetrics-CZSiJ0-9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

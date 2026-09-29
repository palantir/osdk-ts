import{f as p,j as e}from"./iframe-DuWBrnX6.js";import{O as i}from"./object-table-NFC3Qe8f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrgdFKpA.js";import"./Table-DvrpjmJ8.js";import"./index-OYdh6lUD.js";import"./Dialog-Cjzk_wQc.js";import"./cross-C8yX_l8v.js";import"./svgIconContainer-DbzEfa2V.js";import"./useBaseUiId-CdjTAmdC.js";import"./InternalBackdrop-qsctjG9Y.js";import"./composite-CJJfU9AF.js";import"./index-BL6aYYYG.js";import"./index-CVjf0aQc.js";import"./index-D_3yv_eh.js";import"./useEventCallback-myN755vz.js";import"./SkeletonBar-D0aUZjHc.js";import"./LoadingCell-CNxlL_rY.js";import"./ColumnConfigDialog-B-yyMbtv.js";import"./DraggableList-BGGltwRT.js";import"./search-D_dtCoIW.js";import"./Input-BkO3X1te.js";import"./useControlled-CfhHYIWN.js";import"./Button-_WXHae0p.js";import"./small-cross-CA-Fa8Tl.js";import"./ActionButton-BA89Y5HO.js";import"./Checkbox-KYSPHyUo.js";import"./useValueChanged-z4RYagBJ.js";import"./CollapsiblePanel-nkH1KYbY.js";import"./MultiColumnSortDialog-D1o5ebId.js";import"./MenuTrigger-CsX-_ldT.js";import"./CompositeItem-BMOplAgs.js";import"./ToolbarRootContext-rla5WBjp.js";import"./getDisabledMountTransitionStyles-Di8yZzl5.js";import"./getPseudoElementBounds-BpxRKDt_.js";import"./chevron-down-C1ZcStCW.js";import"./index-BrPlemdb.js";import"./error-Ch_37QlI.js";import"./BaseCbacBanner-DAytYK1q.js";import"./makeExternalStore-CjwtTBHZ.js";import"./Tooltip-QYTL3AIS.js";import"./PopoverPopup-xFmMVW0q.js";import"./debounce-Jnl0OpEZ.js";import"./useOsdkClient-DJmRQ5Mp.js";import"./tick-BLa43JG6.js";import"./DropdownField-BG1ZRgQZ.js";import"./isEqual-Eg2TaXkJ.js";import"./withOsdkMetrics-DGxRrW5c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

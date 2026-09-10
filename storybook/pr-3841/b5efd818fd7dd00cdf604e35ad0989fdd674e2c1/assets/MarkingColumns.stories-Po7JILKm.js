import{f as p,j as e}from"./iframe-B9IeBNGg.js";import{O as i}from"./object-table-B-OlF3Bh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClkC783W.js";import"./Table-BhJp9i_V.js";import"./index-DybWhixB.js";import"./Dialog-DLLScnHi.js";import"./cross-BHBvGy8S.js";import"./svgIconContainer-BmjXdC_z.js";import"./useBaseUiId-CH6EGP3F.js";import"./InternalBackdrop-gCLjnSXP.js";import"./composite-boJAotvg.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./index-B4YI5UQN.js";import"./useEventCallback-DbN_DqZs.js";import"./SkeletonBar-C48ZenHQ.js";import"./LoadingCell-CkzG3KX2.js";import"./ColumnConfigDialog-CGw8n6lE.js";import"./DraggableList-BGcE6c7Y.js";import"./search-Deq1gtA1.js";import"./Input-Iq2bz4Jn.js";import"./useControlled-DKviyNQT.js";import"./Button-CoXfleKP.js";import"./small-cross-DIgXmNYJ.js";import"./ActionButton-f-P6g5hs.js";import"./Checkbox-CNcu3hUs.js";import"./useValueChanged-DEPR-2Hx.js";import"./CollapsiblePanel-B5ry5wH_.js";import"./MultiColumnSortDialog-D7NcH3DD.js";import"./MenuTrigger-pRjMlzuQ.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./getDisabledMountTransitionStyles-DCV7TnnH.js";import"./getPseudoElementBounds-DpZ43xVJ.js";import"./chevron-down-CKtjlwoI.js";import"./index-DD1785H2.js";import"./error-Cg3e0-pZ.js";import"./BaseCbacBanner-DrIp1n_M.js";import"./makeExternalStore-B8vFN8aQ.js";import"./Tooltip-BogKNoc8.js";import"./PopoverPopup-Cyw_X9pn.js";import"./debounce-DavaxxZS.js";import"./useOsdkClient-CSJF8avV.js";import"./tick-Dbw2_oO_.js";import"./DropdownField-DXf__6c2.js";import"./isEqual-BGhR7l0w.js";import"./withOsdkMetrics-C0Di3XLY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

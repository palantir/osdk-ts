import{f as p,j as e}from"./iframe-CXk0WqhB.js";import{O as i}from"./object-table-BwIitlZ-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChjBfvhG.js";import"./Table-hlhNPiA-.js";import"./index-ML5mwP3e.js";import"./Dialog-D175c70A.js";import"./cross-BmemhmuM.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./useBaseUiId-DHjZ3Omh.js";import"./InternalBackdrop-BrAyLlt0.js";import"./composite-ytyU9AJN.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./index-Cl3j5frJ.js";import"./useEventCallback-CR9JbWGL.js";import"./SkeletonBar-BtOJaU67.js";import"./LoadingCell-CtVp_NO9.js";import"./ColumnConfigDialog-Cx47VDpv.js";import"./DraggableList-CRlURm1D.js";import"./search-BLVXHNks.js";import"./Input-D9BOnKAN.js";import"./useControlled-Bl28iO0R.js";import"./Button-Dic26hGY.js";import"./small-cross-DrkIqI6L.js";import"./ActionButton-B4JsRdej.js";import"./Checkbox-WVJiQYod.js";import"./useValueChanged-DVvNfwNT.js";import"./CollapsiblePanel-DanBkqbp.js";import"./MultiColumnSortDialog-CSetl6zk.js";import"./MenuTrigger-BtSPx0Au.js";import"./CompositeItem-04P4zIgd.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./getDisabledMountTransitionStyles-DiTcMvjB.js";import"./getPseudoElementBounds-DF3ARm9q.js";import"./chevron-down-DQ2eC5iE.js";import"./index-_eczYP6a.js";import"./error-BWxZwg9W.js";import"./BaseCbacBanner-Bcvicwmd.js";import"./makeExternalStore-Ck8wEGfj.js";import"./Tooltip-CKZmJ4aV.js";import"./PopoverPopup-Cw8ntXH6.js";import"./debounce-B5lQDrQ7.js";import"./useOsdkClient-uAkJXHAY.js";import"./tick-CZjZA-Lg.js";import"./DropdownField-9i-_p9Wp.js";import"./isEqual-_eK1XH0Y.js";import"./withOsdkMetrics-ChxJang_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

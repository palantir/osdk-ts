import{f as p,j as e}from"./iframe-CjrvQ8Eq.js";import{O as i}from"./object-table-D_9iwXl4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPg6l9d3.js";import"./Table-CmY1XOIx.js";import"./index-DB-uoMhr.js";import"./Dialog-DBs5NoZ0.js";import"./cross-CZEvBoD0.js";import"./svgIconContainer-CnoHMalv.js";import"./useBaseUiId-BUaVaBCu.js";import"./InternalBackdrop-Kq278Mqp.js";import"./composite-BdOz1pLd.js";import"./index-BMCwP6lU.js";import"./index-AcJBEuLY.js";import"./index-CFwdS4V_.js";import"./useEventCallback-ClvtAijH.js";import"./SkeletonBar-AiGWLobO.js";import"./LoadingCell-B03LsPyo.js";import"./ColumnConfigDialog-PWQsRQoY.js";import"./DraggableList-ByPe5g9-.js";import"./search-DnFytF8-.js";import"./Input-Pixh_UaU.js";import"./useControlled-nb9nN5WZ.js";import"./Button-BZpeRQKg.js";import"./small-cross-DEflC2UP.js";import"./ActionButton-zDJ9Z3uf.js";import"./Checkbox-D5b8v0Kz.js";import"./useValueChanged-CNswg7ar.js";import"./CollapsiblePanel-Dus4Tcn8.js";import"./MultiColumnSortDialog-BnixZ0ma.js";import"./MenuTrigger-BbIO4AR0.js";import"./CompositeItem-B9gYo-S0.js";import"./ToolbarRootContext-DcQsKFzE.js";import"./getDisabledMountTransitionStyles-zHfXsdqn.js";import"./getPseudoElementBounds-Ba141Nqq.js";import"./chevron-down-CKpFjGQX.js";import"./index-BcucvAIU.js";import"./error-tjFs6guL.js";import"./BaseCbacBanner-D8ERIvGi.js";import"./makeExternalStore-DfWi3bI5.js";import"./Tooltip-Ca7wRcoH.js";import"./PopoverPopup-CGi8wjo9.js";import"./debounce-B7Y7XFK0.js";import"./useOsdkClient-fvP73z5H.js";import"./tick-CSctEYB7.js";import"./DropdownField-C9RkTgUh.js";import"./isEqual-BDvX4IKC.js";import"./withOsdkMetrics-DofP_XMa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-gvVvTYdX.js";import{O as i}from"./object-table-DFjBN_se.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4B8pL_K.js";import"./Table-1Rz47czG.js";import"./index-BKV8xI6r.js";import"./Dialog-DBoNWch_.js";import"./cross-DXV_E_3w.js";import"./svgIconContainer-CbGtxYsB.js";import"./useBaseUiId-fY3jSIio.js";import"./InternalBackdrop-CNqwZwO_.js";import"./composite-U12YfSVj.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./index-DCXWz-bU.js";import"./useEventCallback-DfimSMM1.js";import"./SkeletonBar-CVnxkGMs.js";import"./LoadingCell-DpBxHhHx.js";import"./ColumnConfigDialog-CWwBUXFN.js";import"./DraggableList-qN4wxLC1.js";import"./search-BpBkWvYy.js";import"./Input-B5s_ufnw.js";import"./useControlled-Cz01Hj64.js";import"./Button-CM6iPOlW.js";import"./small-cross-BV4qub4t.js";import"./ActionButton-BgSv7ShY.js";import"./Checkbox-DYgYeeFL.js";import"./useValueChanged-C3nivXet.js";import"./CollapsiblePanel-nOE5zCVh.js";import"./MultiColumnSortDialog-BdNNmNBG.js";import"./MenuTrigger-Q0BQc2_7.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./getDisabledMountTransitionStyles-By9d2gS-.js";import"./getPseudoElementBounds-VG4Ji2N1.js";import"./chevron-down-DNhCoDCr.js";import"./index-Ct7dCOO5.js";import"./error-oahmhnhI.js";import"./BaseCbacBanner-D7bzuDy6.js";import"./makeExternalStore-eDqNkvsc.js";import"./Tooltip-gD2N15mM.js";import"./PopoverPopup-BLoCic10.js";import"./debounce-NgHrS01x.js";import"./useOsdkClient-Bxmva0H0.js";import"./tick-DcPidvDM.js";import"./DropdownField-CySas3qf.js";import"./isEqual-DTkPEdjj.js";import"./withOsdkMetrics-DQiolCAA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

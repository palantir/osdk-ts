import{f as p,j as e}from"./iframe-DfNFuvd8.js";import{O as i}from"./object-table-Bx2po24i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2A7KixS.js";import"./Table-BeuFq0M8.js";import"./index-hJ034l85.js";import"./Dialog-BMihQgwB.js";import"./cross-CBZgOvDJ.js";import"./svgIconContainer-B6TYwpfX.js";import"./useBaseUiId-Bo6GSES5.js";import"./InternalBackdrop-C_nhbKJU.js";import"./composite-D6AWaxnU.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./index-DiD4EhSO.js";import"./useEventCallback-RjnLJur2.js";import"./SkeletonBar-CegOdRAd.js";import"./LoadingCell-DR1jrdbZ.js";import"./ColumnConfigDialog-By6deAV9.js";import"./DraggableList-CawOkJQL.js";import"./search-C0uD-Uv6.js";import"./Input-DQxNJVQ9.js";import"./useControlled-P4f8RlVJ.js";import"./Button-BqZDxH8m.js";import"./small-cross-BYYoKwWX.js";import"./ActionButton-JQL18lz7.js";import"./Checkbox-DhoSAxgA.js";import"./useValueChanged-wyGRNMGl.js";import"./CollapsiblePanel-DRB_PNPV.js";import"./MultiColumnSortDialog-BB2gxRpV.js";import"./MenuTrigger-CB1FawQ6.js";import"./CompositeItem-C2W2AWaC.js";import"./ToolbarRootContext-BppEIMJO.js";import"./getDisabledMountTransitionStyles-BIM2Nojc.js";import"./getPseudoElementBounds-DNQ_Lyqg.js";import"./chevron-down-C8YJ1kBl.js";import"./index-D4IU9xHw.js";import"./error-ThwmBgve.js";import"./BaseCbacBanner-Bxx78FaA.js";import"./makeExternalStore-DLzSgHee.js";import"./Tooltip-CDXk7Z_Y.js";import"./PopoverPopup-YOckH7SE.js";import"./debounce-R5M_pHII.js";import"./useOsdkClient-DrnSR9t9.js";import"./tick-zr2mL_AY.js";import"./DropdownField-Bzzr4tIT.js";import"./isEqual-BmWHZ7sE.js";import"./withOsdkMetrics-CJRcI3lK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

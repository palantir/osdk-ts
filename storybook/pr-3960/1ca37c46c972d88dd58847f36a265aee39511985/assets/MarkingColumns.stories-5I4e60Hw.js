import{f as p,j as e}from"./iframe-NaI848Pw.js";import{O as i}from"./object-table-DGgHE6S2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Da-cK7y6.js";import"./Table-B2aU0OJ_.js";import"./index-ByD4yBnp.js";import"./Dialog-ylH5D2Mp.js";import"./cross-DZQZ8aN4.js";import"./svgIconContainer-ByuHBSGQ.js";import"./useBaseUiId-1fZcoCV9.js";import"./InternalBackdrop-Cv3pqYz2.js";import"./composite-C-xyZ2AO.js";import"./index-DK-1aFjN.js";import"./index-uEx2XW2m.js";import"./index-DcFw2uH3.js";import"./useEventCallback-_nGrLZqG.js";import"./SkeletonBar-Bu2x3QDl.js";import"./LoadingCell-BUGk1zUZ.js";import"./ColumnConfigDialog-DPKcVM17.js";import"./DraggableList-DNjSWAxt.js";import"./search-BU5VoOWM.js";import"./Input-CiWsOGB4.js";import"./useControlled-DJRTNEAD.js";import"./Button-C5kZ5tdC.js";import"./small-cross-DMotjJBE.js";import"./ActionButton-3u2nKuiZ.js";import"./Checkbox-JyHzB6tA.js";import"./useValueChanged-D7TKryoJ.js";import"./CollapsiblePanel-tRloNykG.js";import"./MultiColumnSortDialog-3CJF9g3e.js";import"./MenuTrigger-CpUNPK5g.js";import"./CompositeItem-Ci20bb3i.js";import"./ToolbarRootContext-wPP71u3n.js";import"./getDisabledMountTransitionStyles-B4FRcemG.js";import"./getPseudoElementBounds-B9b_nORq.js";import"./chevron-down-Cd6DrKf8.js";import"./index-C7BYYXHx.js";import"./error-DzctpUji.js";import"./BaseCbacBanner-GlkTUOC4.js";import"./makeExternalStore-BKziC80i.js";import"./Tooltip-C9WwAWNN.js";import"./PopoverPopup-DTLzPYyL.js";import"./debounce-BGQuEffv.js";import"./useOsdkClient-56kdB1m-.js";import"./tick-zOXaxw1M.js";import"./DropdownField-BG_oDUOB.js";import"./isEqual-z-7Yb-t2.js";import"./withOsdkMetrics-Bsb41CEs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

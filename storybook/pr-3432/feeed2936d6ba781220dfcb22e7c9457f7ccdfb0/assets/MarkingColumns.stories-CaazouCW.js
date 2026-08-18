import{f as p,j as e}from"./iframe-DE0qpqxN.js";import{O as i}from"./object-table-DbJ5S0zE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpAaridb.js";import"./Table-CLqUteim.js";import"./index-BKwUwpqE.js";import"./Dialog-CI3zVTB_.js";import"./cross-DXFMmm20.js";import"./svgIconContainer-Ba0TV_kf.js";import"./useBaseUiId-CudlGyea.js";import"./InternalBackdrop-CPiYpBeU.js";import"./composite-DRL_KXF5.js";import"./index-DfV4aiex.js";import"./index-Cck4Ig_M.js";import"./index-BPQvOeFd.js";import"./useEventCallback-BUxjmxXY.js";import"./SkeletonBar-CpvduLJa.js";import"./LoadingCell-DrGN3jNa.js";import"./ColumnConfigDialog-__eVGQmP.js";import"./DraggableList-LLON-zMc.js";import"./search-DXlkRNHA.js";import"./Input-Cn0Hq5K2.js";import"./useControlled-DrRmZYfs.js";import"./Button-DuyCMj3l.js";import"./small-cross-B02hAhCe.js";import"./ActionButton-DsCMa1vM.js";import"./Checkbox-BAKv0TEC.js";import"./useValueChanged-D7N_kAGm.js";import"./CollapsiblePanel-Uz1jEYN9.js";import"./MultiColumnSortDialog-CHy1ErXk.js";import"./MenuTrigger-9iXGtW5k.js";import"./CompositeItem-B_IgawVY.js";import"./ToolbarRootContext-BFw03ENT.js";import"./getDisabledMountTransitionStyles-CXCRcyvB.js";import"./getPseudoElementBounds-BN-ZpLZI.js";import"./chevron-down-mPM57H-_.js";import"./index-DDu7TN_e.js";import"./error-Bj6pw2ZK.js";import"./BaseCbacBanner-DhRcW7ia.js";import"./makeExternalStore-DvJ09sLw.js";import"./Tooltip-7iC2B0Kg.js";import"./PopoverPopup-D2VElQuj.js";import"./debounce-DcBnAUXM.js";import"./useOsdkClient-CZqafrN0.js";import"./tick-Cl1DbdH2.js";import"./DropdownField-BkMkjAtk.js";import"./isEqual-CthcIQ1v.js";import"./withOsdkMetrics-CjTPft6c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

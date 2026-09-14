import{f as p,j as e}from"./iframe-DGk-Gwvb.js";import{O as i}from"./object-table-B1GB1Px_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZHE4yfF.js";import"./Table-CGvoeQiy.js";import"./index-CHt6784l.js";import"./Dialog-CoyTV2xE.js";import"./cross-Bv56pu7B.js";import"./svgIconContainer-DWhpBW2K.js";import"./useBaseUiId-CYF4ttQ0.js";import"./InternalBackdrop-2qC76XrM.js";import"./composite-UKbswMLH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./index-Dmy594Bz.js";import"./useEventCallback-2nXbXvpA.js";import"./SkeletonBar-C2y2uMzP.js";import"./LoadingCell-DsGqRk6L.js";import"./ColumnConfigDialog-BG7xCsyo.js";import"./DraggableList-e-Vui3PK.js";import"./search-DuL1IKxe.js";import"./Input-lpBjDH3J.js";import"./useControlled-BLk_1CnQ.js";import"./Button-D8mEnRQz.js";import"./small-cross-CqqiVSV9.js";import"./ActionButton-DrJeruLF.js";import"./Checkbox-DHlridbE.js";import"./useValueChanged-DAOfQ09L.js";import"./CollapsiblePanel-TiLElam_.js";import"./MultiColumnSortDialog-CLmgSm8M.js";import"./MenuTrigger-D6_BzbAC.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./getDisabledMountTransitionStyles-DzmBA_gO.js";import"./getPseudoElementBounds-Caw7OuxZ.js";import"./chevron-down-F0KSYD0T.js";import"./index-BDWQvtVH.js";import"./error-CNFmOPSg.js";import"./BaseCbacBanner-DS4E-NQX.js";import"./makeExternalStore-DekmBIJm.js";import"./Tooltip-B8a6AeiL.js";import"./PopoverPopup-8NMKP2yH.js";import"./debounce-DdquZemZ.js";import"./useOsdkClient-nqMxZ_CW.js";import"./tick-Co26rO3c.js";import"./DropdownField-BarJItLo.js";import"./isEqual-Bny9H9I6.js";import"./withOsdkMetrics-B38cTpqn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

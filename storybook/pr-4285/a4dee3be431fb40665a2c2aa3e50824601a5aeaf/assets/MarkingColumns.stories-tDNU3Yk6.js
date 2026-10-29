import{f as p,j as e}from"./iframe-B5Ajdn-Z.js";import{O as i}from"./object-table-3ayvbDRz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5yP3JPh.js";import"./Table-Bccy-Hkd.js";import"./index-DILEzbbv.js";import"./Dialog-CUJu7QaY.js";import"./cross-BBK4wgqQ.js";import"./svgIconContainer-DoY_K777.js";import"./useBaseUiId-C1Uihcd0.js";import"./InternalBackdrop-Cqris0fZ.js";import"./composite-CnqlIWYg.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./index-Cpe77fYH.js";import"./useEventCallback-B2QaC4UY.js";import"./SkeletonBar-Kw7gcQkG.js";import"./LoadingCell-DeDiXoLe.js";import"./ColumnConfigDialog-Xum0Hvj9.js";import"./DraggableList-Dwk2htXy.js";import"./search-BuV2lV03.js";import"./Input-BBXfcLrJ.js";import"./useControlled-UxmqIdoS.js";import"./Button-CF8mdfVJ.js";import"./small-cross-DPps9k0B.js";import"./ActionButton-BTL1_xvj.js";import"./Checkbox-CS9i4mqN.js";import"./useValueChanged-CifUOmFK.js";import"./CollapsiblePanel-Dt-j0qol.js";import"./MultiColumnSortDialog-D_wD-lKR.js";import"./MenuTrigger-Cy_7_0_z.js";import"./CompositeItem-CVzNQNnm.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./getDisabledMountTransitionStyles-D8H2JrcK.js";import"./getPseudoElementBounds-Bk-nLSGa.js";import"./chevron-down-BAJRL46i.js";import"./index-xivGH17H.js";import"./error-DVp4qBBx.js";import"./BaseCbacBanner-BnTCPLBo.js";import"./makeExternalStore-2_jyxYjq.js";import"./Tooltip-Bhg5Xees.js";import"./PopoverPopup-BCkS-3aI.js";import"./debounce-DMWFSr1X.js";import"./useOsdkClient-B5semh5Y.js";import"./tick-B-THAU8k.js";import"./DropdownField-DrMdgMG0.js";import"./isEqual-DVVHwUtv.js";import"./withOsdkMetrics-Bk1GhbZz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

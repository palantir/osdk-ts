import{f as p,j as e}from"./iframe-DY1GCbMw.js";import{O as i}from"./object-table-CciFgaiP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBmLF2uv.js";import"./Table-Dow3q7z3.js";import"./index-D14LjQ6n.js";import"./Dialog-2wYgJqJO.js";import"./cross-CmkMCGAt.js";import"./svgIconContainer-BFVaOhpV.js";import"./useBaseUiId-DuGGt2wk.js";import"./InternalBackdrop-JB_AdRkb.js";import"./composite-BpnSt9TV.js";import"./index-w54taWD8.js";import"./index-DRgBoERL.js";import"./index-4S2sOMY0.js";import"./useEventCallback-qdgPO1dc.js";import"./SkeletonBar-BfAdSFd-.js";import"./LoadingCell-CsMIdMuG.js";import"./ColumnConfigDialog-CaoxwqHB.js";import"./DraggableList-CbiS0L-q.js";import"./search-DozuAt7g.js";import"./Input-BHRf24lx.js";import"./useControlled-DgmoUEMa.js";import"./Button-lZzhyPA5.js";import"./small-cross-B-E1H7Wk.js";import"./ActionButton-BgIpSx8W.js";import"./Checkbox-DO-ve-ai.js";import"./useValueChanged-ibk3K4Gh.js";import"./CollapsiblePanel-sgSmAf5J.js";import"./MultiColumnSortDialog-2d02ICXE.js";import"./MenuTrigger-B0Nk20ol.js";import"./CompositeItem-CyVQmu_E.js";import"./ToolbarRootContext-CKGq1FSG.js";import"./getDisabledMountTransitionStyles-CMWWTT10.js";import"./getPseudoElementBounds-PSTXVLkP.js";import"./chevron-down-DwvhxFZN.js";import"./index-Cw53nmwf.js";import"./error-B-msJLHi.js";import"./BaseCbacBanner-BflXDhPC.js";import"./makeExternalStore-CPaZopZ5.js";import"./Tooltip-DfeHQo_2.js";import"./PopoverPopup-KCoGRqZ6.js";import"./toNumber-DUjm83bJ.js";import"./useOsdkClient-BiAMLbqw.js";import"./tick-b9WUc7Jb.js";import"./DropdownField-r9c9LU4A.js";import"./withOsdkMetrics-C-yRlBMm.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};

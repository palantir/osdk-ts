import{f as p,j as e}from"./iframe-DpbVK0Z4.js";import{O as i}from"./object-table-D_55a_1X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMTjOH4m.js";import"./Table-kq4CpFSp.js";import"./index-FV6PMg5w.js";import"./Dialog-HKso5UO8.js";import"./cross-CfOksEOQ.js";import"./svgIconContainer-BopSq90e.js";import"./useBaseUiId-DPGPywgp.js";import"./InternalBackdrop-BkpFCSNm.js";import"./composite-B3hTwjvJ.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./index-Bxy7ANPj.js";import"./useEventCallback-CELKL3T2.js";import"./SkeletonBar-BebtoPD2.js";import"./LoadingCell-DGTzDvme.js";import"./ColumnConfigDialog-5LfAslvW.js";import"./DraggableList-Bh-ur1kT.js";import"./search-Bpcgz7ed.js";import"./Input-AjQ1LbFX.js";import"./useControlled-C8mfwfwA.js";import"./Button-DXRDup3v.js";import"./small-cross-Bd3WaBs1.js";import"./ActionButton-B-neCEMC.js";import"./Checkbox-BfHeZkor.js";import"./useValueChanged-DgVW91ai.js";import"./CollapsiblePanel-DPTDjISk.js";import"./MultiColumnSortDialog-BP7j-gF2.js";import"./MenuTrigger-DPV4rvDp.js";import"./CompositeItem-7xXFyPB2.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./getDisabledMountTransitionStyles-yPHluku3.js";import"./getPseudoElementBounds-0wL7ed4r.js";import"./chevron-down-BPIZ_aJd.js";import"./index-DFzod05J.js";import"./error-Ddzskxi-.js";import"./BaseCbacBanner-DzidXmNq.js";import"./makeExternalStore-hBeqTILr.js";import"./Tooltip-CsGpMJrz.js";import"./PopoverPopup-BKIXB1bp.js";import"./debounce-D12j_pu2.js";import"./useOsdkClient-BbUmDnru.js";import"./tick-L9ql_aPl.js";import"./DropdownField-BbOufXCH.js";import"./isEqual-CUNBvXsF.js";import"./withOsdkMetrics-CogiPj_o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BECIlG-5.js";import{O as i}from"./object-table-Cn80KhAU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv0NrjSm.js";import"./Table-DCEgNBAH.js";import"./index-0SVtXK84.js";import"./Dialog-tJiLD3AL.js";import"./cross-ubVpY3r4.js";import"./svgIconContainer-B-mztRGa.js";import"./useBaseUiId-BynaZof5.js";import"./InternalBackdrop-BZhDjVB7.js";import"./composite-Bb9FNHOi.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./index-smJV3T31.js";import"./useEventCallback-BfSwElrQ.js";import"./SkeletonBar-iQAgIX6_.js";import"./LoadingCell-N0o8dApa.js";import"./ColumnConfigDialog-Y-qZNvwI.js";import"./DraggableList-Cpu3iQ2P.js";import"./search-CxKdELes.js";import"./Input-Bv6R3iZB.js";import"./useControlled-DwAysQOe.js";import"./Button-cPt_jdAf.js";import"./small-cross-DOrp5uSW.js";import"./ActionButton-BElBMuAb.js";import"./Checkbox-C54U06wB.js";import"./useValueChanged-DzzM5aJt.js";import"./CollapsiblePanel-eLA5oT-Y.js";import"./MultiColumnSortDialog-DPkNj1JI.js";import"./MenuTrigger-Cie77Q8I.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./getDisabledMountTransitionStyles-BHt47q_U.js";import"./getPseudoElementBounds-CXr87JiK.js";import"./chevron-down-B_ghTOEG.js";import"./index-BtesBorZ.js";import"./error-W3FJWM_l.js";import"./BaseCbacBanner-LAOQ_TmD.js";import"./makeExternalStore-c840Nimt.js";import"./Tooltip-RYGXYlOF.js";import"./PopoverPopup-C9IPhO-b.js";import"./debounce-CE7uEcJP.js";import"./useOsdkClient-D-IWW227.js";import"./tick-lltI7QIF.js";import"./DropdownField-BFCCzcrd.js";import"./isEqual-Dzk0LpTo.js";import"./withOsdkMetrics-DjCRSE02.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

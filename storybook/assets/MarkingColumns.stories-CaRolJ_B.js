import{f as p,j as e}from"./iframe-CWCaAWug.js";import{O as i}from"./object-table-DNhheKF7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7PEFPsb.js";import"./index-BCUxEitH.js";import"./Dialog-D0tQayuO.js";import"./cross-DIjpr0JB.js";import"./svgIconContainer-B05glsOt.js";import"./useBaseUiId-BW_UtI62.js";import"./InternalBackdrop-T6iq9MEL.js";import"./composite-BR9g6bcx.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./index-BU_p4HZd.js";import"./useEventCallback-BlDNNPjw.js";import"./SkeletonBar-AwAWP3QT.js";import"./LoadingCell-DGngu3K1.js";import"./ColumnConfigDialog-qTe30KBW.js";import"./DraggableList-DUGUB3sg.js";import"./search-CqQdgI04.js";import"./Input-BfCxIW-2.js";import"./useControlled-BTf1PsUt.js";import"./Button-DiqPmqG4.js";import"./small-cross-BB4Y9Jap.js";import"./ActionButton-DMHzSnUh.js";import"./Checkbox-3wkD7hFA.js";import"./useValueChanged-BEwxMfrB.js";import"./CollapsiblePanel-CahaDsZJ.js";import"./MultiColumnSortDialog-CSXBKDEz.js";import"./MenuTrigger-DBWzCSvu.js";import"./CompositeItem-DoJwIv2T.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./getDisabledMountTransitionStyles-2GoPE3mv.js";import"./getPseudoElementBounds-DBJhYukF.js";import"./chevron-down-TdN2wngs.js";import"./index-BctpQ9zM.js";import"./error-B3tx7_Th.js";import"./BaseCbacBanner-7JilAzUJ.js";import"./makeExternalStore-DuyB91Wg.js";import"./Tooltip-CYwiJioN.js";import"./PopoverPopup-BMHfvJBq.js";import"./debounce-Cn_0io8o.js";import"./useOsdkClient-BEPV8xbi.js";import"./tick-C2bp2J2X.js";import"./DropdownField-BfsjfsE0.js";import"./isEqual-CuLZYDbS.js";import"./withOsdkMetrics-IvetZHLX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

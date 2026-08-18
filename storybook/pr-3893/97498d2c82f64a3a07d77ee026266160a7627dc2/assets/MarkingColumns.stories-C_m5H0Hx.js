import{f as p,j as e}from"./iframe-D5CWdNdp.js";import{O as i}from"./object-table-EOud3YSs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs2ER-7-.js";import"./Table-DYPsVii4.js";import"./index-DmRKQ5gu.js";import"./Dialog-Cjmh--Nw.js";import"./cross-YX9QXa6Y.js";import"./svgIconContainer-B6KxKnjw.js";import"./useBaseUiId-ByIiMOew.js";import"./InternalBackdrop-CwmVqkKm.js";import"./composite-u6E42LXc.js";import"./index-DQTlocgX.js";import"./index-DJSWcjtY.js";import"./index-DlctO1Vj.js";import"./useEventCallback-CUdtWi1h.js";import"./SkeletonBar-Dsep6i17.js";import"./LoadingCell-D6KBbW-w.js";import"./ColumnConfigDialog-14XM0LM5.js";import"./DraggableList-20Cr2QMm.js";import"./search-YJzut-LN.js";import"./Input-Dk6BTnFd.js";import"./useControlled-Dp3YziLR.js";import"./Button-CX2uzNBF.js";import"./small-cross-C3BgNwcQ.js";import"./ActionButton-6bJnLdYp.js";import"./Checkbox-B-fBsKCu.js";import"./useValueChanged-RZ5vNT_v.js";import"./CollapsiblePanel-DtWGfqS_.js";import"./MultiColumnSortDialog-CemOIoQQ.js";import"./MenuTrigger-B3SmJQBD.js";import"./CompositeItem-BKjFMUh6.js";import"./ToolbarRootContext-CEpyHN5v.js";import"./getDisabledMountTransitionStyles-BAK-aKJ4.js";import"./getPseudoElementBounds-8DDsxEhD.js";import"./chevron-down-BWXHwUsU.js";import"./index-vLNFJNsx.js";import"./error-BnTb_JyD.js";import"./BaseCbacBanner-q-p8dZVZ.js";import"./makeExternalStore-MWPsIyHx.js";import"./Tooltip-s8Dx_pXA.js";import"./PopoverPopup-CHmR5dlC.js";import"./debounce-B2VVpvOF.js";import"./useOsdkClient-BTWvqW3U.js";import"./tick-WgC55DvX.js";import"./DropdownField-KfOaBG1s.js";import"./isEqual-DojFh0mn.js";import"./withOsdkMetrics-Csrf-Npu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

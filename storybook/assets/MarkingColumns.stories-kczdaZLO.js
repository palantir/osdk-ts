import{f as p,j as e}from"./iframe-ZKDPnRYv.js";import{O as i}from"./object-table-CnDM1U0V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-3jPWWjAw.js";import"./index-DNWYE-f1.js";import"./Dialog-BghOWFAy.js";import"./cross-f6oJQcWu.js";import"./svgIconContainer-DrDKA2Lc.js";import"./useBaseUiId-Ce1gy8Rx.js";import"./InternalBackdrop-Bk7MtY68.js";import"./composite-BmiDYLqb.js";import"./index-CBLMz6-B.js";import"./index-Cb1Rmdlc.js";import"./index-BBP5lmMx.js";import"./useEventCallback-Caii2npr.js";import"./SkeletonBar-Df3vB-p_.js";import"./LoadingCell-BGMW0NlQ.js";import"./ColumnConfigDialog-BKZ3sAGQ.js";import"./DraggableList-BGJGtglx.js";import"./search-BicHh123.js";import"./Input-BVhJywkb.js";import"./useControlled-F5SgWL0g.js";import"./Button-BJSgrwjd.js";import"./small-cross-CLB6s8ng.js";import"./ActionButton-ClL1Aria.js";import"./Checkbox-D5ir3gbv.js";import"./useValueChanged-BSi0Bf_-.js";import"./CollapsiblePanel-G2MoBTxk.js";import"./MultiColumnSortDialog-C-4tvmha.js";import"./MenuTrigger-BIsb4_2t.js";import"./CompositeItem-C1cGzStq.js";import"./ToolbarRootContext-4_ztJASm.js";import"./getDisabledMountTransitionStyles-Bt3-436K.js";import"./getPseudoElementBounds-Bhyrjl8_.js";import"./chevron-down-DWL-RGCQ.js";import"./index-CW4IzwL-.js";import"./error-FVA4fmQK.js";import"./BaseCbacBanner-DnsdBiWC.js";import"./makeExternalStore-CRRSMSB3.js";import"./Tooltip-C6ZYQEwS.js";import"./PopoverPopup-B0pYxYci.js";import"./debounce-C4lP9Ak6.js";import"./useOsdkClient-B1FD65_T.js";import"./tick-CJIFmP2c.js";import"./DropdownField-8SVn-ItU.js";import"./isEqual-CzNo4Xxw.js";import"./withOsdkMetrics-tBsYI7eh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

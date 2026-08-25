import{f as p,j as e}from"./iframe-cVISvyfe.js";import{O as i}from"./object-table-CfPdI04T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV7QtPzK.js";import"./Table-B2UA_DCP.js";import"./index-Cp1JV-_2.js";import"./Dialog-B9Yyrz7z.js";import"./cross-BQcZgDu4.js";import"./svgIconContainer-BLZRnc85.js";import"./useBaseUiId-CkxMnH4M.js";import"./InternalBackdrop-PhrF7f-Y.js";import"./composite-pva2vyCm.js";import"./index-BqMrmVK2.js";import"./index-mfykt0Ga.js";import"./index-CSmwm2LA.js";import"./useEventCallback-QAsE75sQ.js";import"./SkeletonBar-CbuqG1qR.js";import"./LoadingCell-1PHAs7Pa.js";import"./ColumnConfigDialog-CgrHgHAw.js";import"./DraggableList-7Qhjocb-.js";import"./search-Ck4999wE.js";import"./Input-6utg62a_.js";import"./useControlled-_y7ng7_J.js";import"./Button-CXrCi2Zt.js";import"./small-cross-Bd7ODnfC.js";import"./ActionButton-CU5q3Svh.js";import"./Checkbox-DyJCrmM1.js";import"./useValueChanged-Ceh5Fuv-.js";import"./CollapsiblePanel-Tbw4mP0W.js";import"./MultiColumnSortDialog-CciSkKfg.js";import"./MenuTrigger-BbBy_ec1.js";import"./CompositeItem-BIYi67JM.js";import"./ToolbarRootContext-Kuy8kCkh.js";import"./getDisabledMountTransitionStyles-Dff_0x3d.js";import"./getPseudoElementBounds-JGOI8eqt.js";import"./chevron-down-CuCy4Lvp.js";import"./index-BwvBu9MX.js";import"./error-BPDzH4j4.js";import"./BaseCbacBanner-FANvmh6A.js";import"./makeExternalStore-Bt321Qwa.js";import"./Tooltip-C4wgS6jm.js";import"./PopoverPopup-0BqC9snu.js";import"./debounce-beaBvIAK.js";import"./useOsdkClient-TzGlUFiU.js";import"./tick-Nt4YSm9S.js";import"./DropdownField-BZ37aPXN.js";import"./isEqual-DKSKQ7M9.js";import"./withOsdkMetrics-CKuQj_0t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BP2VUYWC.js";import{O as i}from"./object-table-6oVdn4P3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbwyyhLF.js";import"./Table-CUH5qwyP.js";import"./index-B3KCIuhY.js";import"./Dialog-CMrT0k9e.js";import"./cross-DeTD0CpU.js";import"./svgIconContainer-CMKl73gN.js";import"./useBaseUiId-CYXU-WIp.js";import"./InternalBackdrop-r9gAECWy.js";import"./composite-DVGPAs_G.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./index-DaoL6F_8.js";import"./useEventCallback-BDFp3vdh.js";import"./SkeletonBar-9y-j050X.js";import"./LoadingCell-_K4wPDga.js";import"./ColumnConfigDialog-De_gjKut.js";import"./DraggableList-DoZx-BCC.js";import"./search-DINZsCiw.js";import"./Input-DpmPrvJG.js";import"./useControlled-CeB8N0Pd.js";import"./Button-pnZeIBQ4.js";import"./small-cross-RfyOkJqj.js";import"./ActionButton-P7WnwUh9.js";import"./Checkbox-BcbJaqEV.js";import"./useValueChanged-z-dahWB0.js";import"./CollapsiblePanel-BIqJgZTu.js";import"./MultiColumnSortDialog-CVnXS-KB.js";import"./MenuTrigger-Clt4RC5o.js";import"./CompositeItem-CSy4C5-C.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./getDisabledMountTransitionStyles-DOtULwnT.js";import"./getPseudoElementBounds-Blw9_fDf.js";import"./chevron-down-DV6qQJYt.js";import"./index-WcLTZ_9n.js";import"./error-CPXKUEGb.js";import"./BaseCbacBanner-C2sRTlMm.js";import"./makeExternalStore-BtzD4IhM.js";import"./Tooltip-DIJzoANq.js";import"./PopoverPopup-wwj7egFy.js";import"./debounce-2s8xu7yX.js";import"./useOsdkClient-CuR5pRcj.js";import"./tick-Z8pTNBDG.js";import"./DropdownField-GomfOeRU.js";import"./isEqual-DRaFd88J.js";import"./withOsdkMetrics-CDKAmrIU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BjZw4uZx.js";import{O as i}from"./object-table-BB3hzK-D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ORk2FqAe.js";import"./Table-DP-o-U8z.js";import"./index-1W3MQsZX.js";import"./Dialog-BjZqbaKB.js";import"./cross-B7IcoVob.js";import"./svgIconContainer-BFOOKm-2.js";import"./useBaseUiId-C8tvPGb8.js";import"./InternalBackdrop-C46cFkSM.js";import"./composite-D0Ri5kCB.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./index-r0kwR1Gy.js";import"./useEventCallback-CSDQXoK-.js";import"./SkeletonBar-Daru_zCU.js";import"./LoadingCell-B2u1yJgq.js";import"./ColumnConfigDialog-DPonYtjV.js";import"./DraggableList-C6r4jY7G.js";import"./search-H7eFoEJT.js";import"./Input-LhLxUdgb.js";import"./useControlled-CVj57D_o.js";import"./Button-CWwJb2Uz.js";import"./small-cross-bjtS9678.js";import"./ActionButton-CpeH4f8W.js";import"./Checkbox-BdW6PSMV.js";import"./useValueChanged-Dm26sXFI.js";import"./CollapsiblePanel-DjPQRvCu.js";import"./MultiColumnSortDialog-33ABf7qi.js";import"./MenuTrigger-DS-3gBTu.js";import"./CompositeItem-aZoPkaZ5.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./getDisabledMountTransitionStyles-BxHU8rzl.js";import"./getPseudoElementBounds-PRDfHB8H.js";import"./chevron-down-D59bxWeC.js";import"./index-DL1T0XSi.js";import"./error-BcfWkrIR.js";import"./BaseCbacBanner-BLaT_MeG.js";import"./makeExternalStore-NPZJ19CP.js";import"./Tooltip-COufKIaj.js";import"./PopoverPopup-Ba3qL99k.js";import"./debounce-D6KN3GLj.js";import"./useOsdkClient-DAD_fQEy.js";import"./tick-C-xJqvAS.js";import"./DropdownField-ByxMaZrM.js";import"./isEqual-DSKswR02.js";import"./withOsdkMetrics-C2-SGnqg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

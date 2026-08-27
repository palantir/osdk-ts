import{f as p,j as e}from"./iframe-CUYHvNfN.js";import{O as i}from"./object-table-DrGBp4DX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tFZfyB41.js";import"./Table-Ci_Ol0tX.js";import"./index-CZ6Ua3PK.js";import"./Dialog-uScMynOw.js";import"./cross-s4aUx31-.js";import"./svgIconContainer-IAPv6aZQ.js";import"./useBaseUiId-eg1Lg5JC.js";import"./InternalBackdrop-Cur2i6RC.js";import"./composite-DN1Fq3ZM.js";import"./index-BYkORrIW.js";import"./index-Y2zZPE2J.js";import"./index-ZjqTklcj.js";import"./useEventCallback-DyIer7gt.js";import"./SkeletonBar-DZPPGB8l.js";import"./LoadingCell-Zdm3xRwY.js";import"./ColumnConfigDialog-CKfvEO-s.js";import"./DraggableList-vUUsBjlu.js";import"./search-DPxb-PyW.js";import"./Input-DGyagt2e.js";import"./useControlled-CPWUvLNJ.js";import"./Button-BjUF2wxD.js";import"./small-cross-CUJfuqdj.js";import"./ActionButton-B7SOf25_.js";import"./Checkbox-B_FjLsKV.js";import"./useValueChanged-UoQ6tBed.js";import"./CollapsiblePanel-B8lwZmSu.js";import"./MultiColumnSortDialog-D5jORJfI.js";import"./MenuTrigger-gbiYyiHU.js";import"./CompositeItem-C1TWAJDR.js";import"./ToolbarRootContext-D9L-Ml2A.js";import"./getDisabledMountTransitionStyles-BLtyVkg2.js";import"./getPseudoElementBounds-CdcOai2P.js";import"./chevron-down-CUbAZ-_p.js";import"./index-DID_2L9u.js";import"./error-CVq7I-wU.js";import"./BaseCbacBanner-DRX8yyDx.js";import"./makeExternalStore-D3VLDVl3.js";import"./Tooltip-DaDQwg-t.js";import"./PopoverPopup-Bbqol7Np.js";import"./debounce-DC_Wzb4i.js";import"./useOsdkClient-BQEFDs2E.js";import"./tick-eEgrLbkE.js";import"./DropdownField-DZRbqgAH.js";import"./isEqual-V57JVfEj.js";import"./withOsdkMetrics-D-VDYdk6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe--2o31fpS.js";import{O as i}from"./object-table-BSmGQ0OR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGtLG4Ze.js";import"./Table-_NbnqI6p.js";import"./index-CqkP8V1G.js";import"./Dialog-CUnqqWn-.js";import"./cross-11SNaKV0.js";import"./svgIconContainer-C1D02ztO.js";import"./useBaseUiId-DkfG-pIU.js";import"./InternalBackdrop-Cl2iltkm.js";import"./composite-QRzMYoxy.js";import"./index-DVBrMkW3.js";import"./index-DYasKxPB.js";import"./index-WsSVru4g.js";import"./useEventCallback-Bfcmscgt.js";import"./SkeletonBar-dBdl3_Eb.js";import"./LoadingCell-DppxWDb1.js";import"./ColumnConfigDialog-CLPlY36r.js";import"./DraggableList-BCbhifmv.js";import"./search-DCb3eFG7.js";import"./Input-CqReJTw6.js";import"./useControlled-_9g-GziU.js";import"./Button-MFx7ttW0.js";import"./small-cross-CpBPFOEe.js";import"./ActionButton-BxnI5abi.js";import"./Checkbox-7-bZ0hUh.js";import"./useValueChanged-BmRi-Zrz.js";import"./CollapsiblePanel-CaV5vxo-.js";import"./MultiColumnSortDialog-C3WeHFR9.js";import"./MenuTrigger-iYMw9usz.js";import"./CompositeItem-jeolwUWG.js";import"./ToolbarRootContext-B7UKPIgL.js";import"./getDisabledMountTransitionStyles-Coe4unGQ.js";import"./getPseudoElementBounds-CjbEuNK7.js";import"./chevron-down-DQu-ZHpt.js";import"./index-B5Pw0m5Z.js";import"./error-CZE7-qa2.js";import"./BaseCbacBanner-a-FKKl8c.js";import"./makeExternalStore-cJzBmAO1.js";import"./Tooltip-Cb3WfA-U.js";import"./PopoverPopup-BXOF-a2w.js";import"./debounce-CbfdFUk1.js";import"./useOsdkClient-B6Xc0VYo.js";import"./tick-BvZOjkPN.js";import"./DropdownField-DRd1vWmE.js";import"./isEqual-D5Kz6pCE.js";import"./withOsdkMetrics-BZ26a9pj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

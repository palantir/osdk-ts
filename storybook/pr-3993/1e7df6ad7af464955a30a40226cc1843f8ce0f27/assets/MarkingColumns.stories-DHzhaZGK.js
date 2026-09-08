import{f as p,j as e}from"./iframe-K0TCdsde.js";import{O as i}from"./object-table-M3n5hKDi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwgne7Il.js";import"./Table-C1XM_QKS.js";import"./index-DItHkTgY.js";import"./Dialog-B1DayVK3.js";import"./cross-DjsH4BEX.js";import"./svgIconContainer-Gp_WdiNB.js";import"./useBaseUiId-BMvE3UAz.js";import"./InternalBackdrop-D74UPcil.js";import"./composite-BDOTFVh5.js";import"./index-Ce5TUgVz.js";import"./index-BSQQlf89.js";import"./index-CC8neGBv.js";import"./useEventCallback-Bz_plcSd.js";import"./SkeletonBar-Brb8R_mA.js";import"./LoadingCell-BWzyKLCF.js";import"./ColumnConfigDialog-D_yPVd8N.js";import"./DraggableList-BqMr2Fp_.js";import"./search-FP5lKD6I.js";import"./Input-jHELzDU6.js";import"./useControlled-CpHTfHM_.js";import"./Button-vcsLfruM.js";import"./small-cross-vpbYh6K7.js";import"./ActionButton-De6D_lsR.js";import"./Checkbox-DCU9bxEE.js";import"./useValueChanged-wDqDSQMF.js";import"./CollapsiblePanel-CCOarC2c.js";import"./MultiColumnSortDialog-BK-e9qA_.js";import"./MenuTrigger-WTCUNXlT.js";import"./CompositeItem-CKtGokfX.js";import"./ToolbarRootContext-B08lxs8l.js";import"./getDisabledMountTransitionStyles-BmL_QtPR.js";import"./getPseudoElementBounds-DYoZN7nx.js";import"./chevron-down-BkK6PVnf.js";import"./index-DTPy9xIo.js";import"./error-C3B7tWvq.js";import"./BaseCbacBanner-BOLM0JoP.js";import"./makeExternalStore-sZwLQQxf.js";import"./Tooltip-DV12Jp8G.js";import"./PopoverPopup-DfnNNJDY.js";import"./debounce-GmSPsudP.js";import"./useOsdkClient-Cb96qSwW.js";import"./tick-D-0sxjMV.js";import"./DropdownField-D7fdjvLz.js";import"./isEqual-D6N9qcKt.js";import"./withOsdkMetrics-B9tQP4dB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

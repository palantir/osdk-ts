import{f as p,j as e}from"./iframe-mrGpuMKA.js";import{O as i}from"./object-table-BiIiKzx_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bDWJHmtM.js";import"./Table-DqGvWfmy.js";import"./index-hISY08zN.js";import"./Dialog-DpVboJif.js";import"./cross-DPMi-K_N.js";import"./svgIconContainer-C-bY0sdP.js";import"./useBaseUiId-BkHLkay-.js";import"./InternalBackdrop-U3rubu2u.js";import"./composite-7erdXABz.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./index-DYAfevna.js";import"./useEventCallback-BPIHKofH.js";import"./SkeletonBar-DwNj8MYg.js";import"./LoadingCell-DrzDyWTO.js";import"./ColumnConfigDialog-DgOQeC4G.js";import"./DraggableList-D745B4C7.js";import"./search-Yrs_12vc.js";import"./Input-B84oc61c.js";import"./useControlled-Dq35lwdk.js";import"./Button-CQDVf8SZ.js";import"./small-cross-BiLUn5X_.js";import"./ActionButton-BM4rNAaR.js";import"./Checkbox-Bk7WJIlt.js";import"./useValueChanged-BZtpoNnx.js";import"./CollapsiblePanel-DDMWJLSE.js";import"./MultiColumnSortDialog-DNOtZGzF.js";import"./MenuTrigger-BQThW244.js";import"./CompositeItem-DUJu_nDn.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./getDisabledMountTransitionStyles-X6_-V5uQ.js";import"./getPseudoElementBounds-C8xxQ8d5.js";import"./chevron-down-CoivH60m.js";import"./index-OuRiGyxD.js";import"./error-DssOxS7p.js";import"./BaseCbacBanner-dJKflXBI.js";import"./makeExternalStore-Dc6_6-hA.js";import"./Tooltip-C8kXdT26.js";import"./PopoverPopup-QRxeem_z.js";import"./debounce-BKwdeDHg.js";import"./useOsdkClient-D4Z99yZb.js";import"./tick-BcvMJ5PG.js";import"./DropdownField-BqkHAkPF.js";import"./isEqual-D-2vVEF9.js";import"./withOsdkMetrics-MvJWQIwU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

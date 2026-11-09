import{f as p,j as e}from"./iframe-tk5AUZuQ.js";import{O as i}from"./object-table-B_m970Gp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CINJU3SU.js";import"./Table-DC4X-uKs.js";import"./index-DuoNBOcE.js";import"./Dialog-5aT20vLM.js";import"./cross-C-_HClWz.js";import"./svgIconContainer-C5eLdvbo.js";import"./useBaseUiId-DSKlezyU.js";import"./InternalBackdrop-B1AcuPvD.js";import"./composite-LaLb1mLt.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./index-Coh0vjFh.js";import"./useEventCallback-BbRxqcyb.js";import"./SkeletonBar-YPfduG_R.js";import"./LoadingCell-Dcb9Vptb.js";import"./ColumnConfigDialog-DkCfAbb3.js";import"./DraggableList-D8LQyDx5.js";import"./search-CAMWt4DD.js";import"./Input-CZRpfSVM.js";import"./useControlled-BzYqp0YL.js";import"./Button-B5FtVpF4.js";import"./small-cross-B6tNLRU3.js";import"./ActionButton-CSRDKJzd.js";import"./Checkbox-DL47pYZc.js";import"./useValueChanged-Qi24qjjR.js";import"./CollapsiblePanel-BgTDE-ug.js";import"./MultiColumnSortDialog-xg5nxqpK.js";import"./MenuTrigger-D2vzXfUF.js";import"./CompositeItem-CQdT7qYH.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./getDisabledMountTransitionStyles-DcBMmwJ-.js";import"./getPseudoElementBounds-C8QTD5NE.js";import"./chevron-down-D4rOKL_0.js";import"./index-iwECcacA.js";import"./error-CfTX2H1b.js";import"./BaseCbacBanner-CiTwUt4I.js";import"./makeExternalStore-DFFv7LCN.js";import"./Tooltip-_BU6PSEL.js";import"./isObject-Bt_3d07L.js";import"./debounce-Cf1xBobb.js";import"./useOsdkClient-B-_8O7Wa.js";import"./tick-BxfSV4pS.js";import"./DropdownField-Dsmc1z3i.js";import"./isEqual-CSe4j5db.js";import"./_baseIsEqual-DGYeXd6K.js";import"./withOsdkMetrics-4LSmwfdk.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

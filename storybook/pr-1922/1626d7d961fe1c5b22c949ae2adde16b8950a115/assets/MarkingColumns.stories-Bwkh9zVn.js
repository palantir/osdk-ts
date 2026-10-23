import{f as p,j as e}from"./iframe-CxT5Jan_.js";import{O as i}from"./object-table-UW4KPqzS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2aJWYzQ.js";import"./Table-COCtIDyb.js";import"./index-Dtz5PgLF.js";import"./Dialog-CCC2rkEz.js";import"./cross-CN6xf_dQ.js";import"./svgIconContainer-hCqCvGhu.js";import"./useBaseUiId-B-OQdXnZ.js";import"./InternalBackdrop-BNvBplbQ.js";import"./composite-DGmZ6kEt.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./index-VTk_L-CK.js";import"./useEventCallback-DJgEXQnv.js";import"./SkeletonBar-DO5a1Cj6.js";import"./LoadingCell-C99H8f55.js";import"./ColumnConfigDialog-EyJedUwR.js";import"./DraggableList-D8pu-QX3.js";import"./search-CDYNfwYQ.js";import"./Input-uXNf_zLb.js";import"./useControlled-HfGVJvVO.js";import"./Button-g3dA2T-X.js";import"./small-cross-DOBtvqtk.js";import"./ActionButton-Drinm68p.js";import"./Checkbox-C6faQSvd.js";import"./useValueChanged-B-mq1KuU.js";import"./CollapsiblePanel-CS3WD6U4.js";import"./MultiColumnSortDialog-C-bdESQG.js";import"./MenuTrigger-6y7n_vAV.js";import"./CompositeItem-DLM-dgwp.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./getDisabledMountTransitionStyles-BDF0Bffw.js";import"./getPseudoElementBounds-WZiK9BcL.js";import"./chevron-down-CJ808Qtk.js";import"./index-qScKd8ht.js";import"./error-ABOYqx1m.js";import"./BaseCbacBanner-CKAihuJM.js";import"./makeExternalStore-z4BPzaiv.js";import"./Tooltip-BCH3arb9.js";import"./PopoverPopup-BEr_vAbM.js";import"./debounce-BM3c7HzB.js";import"./useOsdkClient-BdjKd_qM.js";import"./tick-B08JakEq.js";import"./DropdownField-j_jVFNln.js";import"./isEqual-D_Z0bU5y.js";import"./withOsdkMetrics-Dv_WEx2y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

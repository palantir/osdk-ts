import{f as p,j as e}from"./iframe-C8mLpNUa.js";import{O as i}from"./object-table-Fn6VhCUz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DcXm066Y.js";import"./Table-DaS1q166.js";import"./index-lplF09tk.js";import"./Dialog-CfN6DPR5.js";import"./cross-D4wCc5t9.js";import"./svgIconContainer-FbWIWLG7.js";import"./useBaseUiId-D95gWc2p.js";import"./InternalBackdrop-Cn1EpYhL.js";import"./composite-CWkYjCVm.js";import"./index-Dg7wmbR-.js";import"./index-Cq9Q8vBH.js";import"./index-BXj5gnEY.js";import"./useEventCallback-CN4ewGuU.js";import"./SkeletonBar-ld154GRO.js";import"./LoadingCell-CA5v2LhZ.js";import"./ColumnConfigDialog-COjR4SK3.js";import"./DraggableList-DeZ7Fjiz.js";import"./search-DYeQ-hhD.js";import"./Input-DiXIdJjT.js";import"./useControlled-Bc3_JC4e.js";import"./Button-FnUnITX8.js";import"./small-cross-BgFinUbq.js";import"./ActionButton-PfDCZTjW.js";import"./Checkbox-DQELhXo6.js";import"./useValueChanged-tRyHrxSy.js";import"./CollapsiblePanel-C1fuzRfs.js";import"./MultiColumnSortDialog-C0Kua6eP.js";import"./MenuTrigger-fIqLLZUS.js";import"./CompositeItem-CcQJlkPk.js";import"./ToolbarRootContext-iYdW5kZP.js";import"./getDisabledMountTransitionStyles-BnS01vxD.js";import"./getPseudoElementBounds-DkmGpNxR.js";import"./chevron-down-Dd1Lw4ZT.js";import"./index-C4XmNQrj.js";import"./error-Bi3sflIe.js";import"./BaseCbacBanner-C_L4y6FS.js";import"./makeExternalStore-BYvHqUPv.js";import"./Tooltip-BUg7Cwnf.js";import"./PopoverPopup-DVQDIUhl.js";import"./debounce-BHPqWnQs.js";import"./useOsdkClient-ClitNGRv.js";import"./tick-0TEkLF7E.js";import"./DropdownField-woqCFHu0.js";import"./isEqual-D1PRrFxr.js";import"./withOsdkMetrics-Dqf6ufdb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

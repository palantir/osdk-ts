import{f as p,j as e}from"./iframe-CJTx5Nc3.js";import{O as i}from"./object-table-DyOqSe-8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-r58fd9.js";import"./Table-DA7olwlr.js";import"./index-C8rYvdZc.js";import"./Dialog-DlZ87JM_.js";import"./cross-CfGQeXwx.js";import"./svgIconContainer-BTsaG1Ft.js";import"./useBaseUiId-BzozfAEW.js";import"./InternalBackdrop-JVLM0CJL.js";import"./composite-Dz_mNTG5.js";import"./index-DGIB4jaL.js";import"./index-eHvJavxO.js";import"./index-CrDmHwix.js";import"./useEventCallback-CvmSibw0.js";import"./SkeletonBar-DnrDBLVU.js";import"./LoadingCell-DP2oEWNp.js";import"./ColumnConfigDialog-BWUt-9yZ.js";import"./DraggableList-DPZEgeQ0.js";import"./search-CjC9oxyN.js";import"./Input-ByoS9MHC.js";import"./useControlled-BBTN_Td4.js";import"./isEqual--jkB0sy4.js";import"./isObject-TJFlXUPA.js";import"./Button-DQWGETyO.js";import"./ActionButton-EZQQ7T9t.js";import"./Checkbox-D1eFT7vV.js";import"./useValueChanged-DBSeOQ5t.js";import"./CollapsiblePanel-CZ65pbEl.js";import"./MultiColumnSortDialog-Ds83I1sR.js";import"./MenuTrigger-CPWE0kcq.js";import"./CompositeItem-BY4abYzO.js";import"./ToolbarRootContext-B0uHWv9_.js";import"./getDisabledMountTransitionStyles-D6YGvq-L.js";import"./getPseudoElementBounds-BM5Y6tz_.js";import"./chevron-down-CXfwTRt6.js";import"./index-IEnbKD5-.js";import"./error-K1PirtOR.js";import"./BaseCbacBanner-BohDFMCb.js";import"./makeExternalStore-Dns-qLi8.js";import"./Tooltip-cN5GRFi4.js";import"./PopoverPopup-mDbyrgV-.js";import"./toNumber-DvrP7yL-.js";import"./useOsdkClient-CFJudYTm.js";import"./tick-Bnbd9C_X.js";import"./DropdownField-C7J7DVpc.js";import"./withOsdkMetrics-CJf0ufYd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

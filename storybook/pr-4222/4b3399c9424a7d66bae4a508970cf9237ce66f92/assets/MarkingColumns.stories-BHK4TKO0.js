import{f as p,j as e}from"./iframe-tVbcsjZa.js";import{O as i}from"./object-table-B0uQ2vYC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y3mk_7AM.js";import"./Table-DJ3-rkk6.js";import"./index-BUwo4Wun.js";import"./Dialog-CA4eBZ3a.js";import"./cross-Cg8bwusU.js";import"./svgIconContainer-D6fQk_si.js";import"./useBaseUiId-DvMZwhQw.js";import"./InternalBackdrop-iKHycqz0.js";import"./composite-OrxFWVZn.js";import"./index-sjIEPV-q.js";import"./index-DRL_czfg.js";import"./index-BWfL3ztK.js";import"./useEventCallback-DPWvOD4-.js";import"./SkeletonBar-xgxIJ15e.js";import"./LoadingCell-BbnxGOil.js";import"./ColumnConfigDialog-CyjCyORM.js";import"./DraggableList-DaPP3yBB.js";import"./search-BhYP5RmD.js";import"./Input-CKwugJU4.js";import"./useControlled-SzLU43Qu.js";import"./Button-BsWA9Md6.js";import"./small-cross-DM3EA47X.js";import"./ActionButton-BiTy67hR.js";import"./Checkbox-BgvVvf8V.js";import"./useValueChanged-CcIn2mPz.js";import"./CollapsiblePanel-BUzPJH96.js";import"./MultiColumnSortDialog-D3Ds34Ko.js";import"./MenuTrigger-BZkIRRu0.js";import"./CompositeItem-G9QZyuPm.js";import"./ToolbarRootContext-BeKKodE4.js";import"./getDisabledMountTransitionStyles-BPk3yLY1.js";import"./getPseudoElementBounds-kLv_VCs0.js";import"./chevron-down-ADlv-Mhp.js";import"./index-CkH4TDjm.js";import"./error-e6srGYm1.js";import"./BaseCbacBanner-CL2sF9mr.js";import"./makeExternalStore-Bo5qeas1.js";import"./Tooltip-CHiDBImr.js";import"./PopoverPopup-DpPqupmM.js";import"./debounce-BpLWDfM1.js";import"./useOsdkClient-1rx9_4le.js";import"./tick-Bh3J60SL.js";import"./DropdownField-Bisnh0x5.js";import"./isEqual-CmNvlTDA.js";import"./withOsdkMetrics-LuX7zwcW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

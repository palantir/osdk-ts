import{f as p,j as e}from"./iframe-BNZD3xWg.js";import{O as i}from"./object-table-By1u_HCG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3FmIxER.js";import"./Table-CFbxZwWj.js";import"./index-DOv_cZ9G.js";import"./Dialog-C7w8W7vF.js";import"./cross-CNjRLxpn.js";import"./svgIconContainer-2ty1idXI.js";import"./useBaseUiId-Dm_OUu_u.js";import"./InternalBackdrop-BFsJkA1x.js";import"./composite-BtkXGRWa.js";import"./index-D51f32rH.js";import"./index-CQVklmSU.js";import"./index-BtQYwxEN.js";import"./useEventCallback-Q_QbXmVH.js";import"./SkeletonBar-DmSABcIx.js";import"./LoadingCell-BcgmtL_W.js";import"./ColumnConfigDialog-7tntoSMi.js";import"./DraggableList-CYBBI1WE.js";import"./search-B_H93lCU.js";import"./Input-QTs7hrar.js";import"./useControlled-izS6CBB9.js";import"./Button-S_R7mlWx.js";import"./small-cross-DBXsh9Ix.js";import"./ActionButton-CuJpLSkR.js";import"./Checkbox-C5pTuN3t.js";import"./useValueChanged-BbIQrdRC.js";import"./CollapsiblePanel-D4Aw1Qj0.js";import"./MultiColumnSortDialog-CDU49QFP.js";import"./MenuTrigger-CEw7tiNK.js";import"./CompositeItem-36LgHZ7r.js";import"./ToolbarRootContext-CS1sgrs1.js";import"./getDisabledMountTransitionStyles-DmpA5T4h.js";import"./getPseudoElementBounds-BO8kaTMX.js";import"./chevron-down-CH0o2x3k.js";import"./index-BZ56AvfN.js";import"./error-_5L66YQC.js";import"./BaseCbacBanner-DdEXiZyu.js";import"./makeExternalStore-XG9GYQLa.js";import"./Tooltip-COOoNd0R.js";import"./PopoverPopup-BpDE3RlV.js";import"./debounce-7pf6IyfH.js";import"./useOsdkClient-GLyZrDFl.js";import"./tick-DVVaLwh_.js";import"./DropdownField-BAuDkUJ8.js";import"./isEqual-CryIdvWn.js";import"./withOsdkMetrics-X-R-b_lc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

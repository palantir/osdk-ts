import{f as p,j as e}from"./iframe-EsVd8uKr.js";import{O as i}from"./object-table-CVwpOI-3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DwIVPlkr.js";import"./index-BGqGRh_w.js";import"./Dialog-DGNCDGE1.js";import"./cross-BAb-KGA7.js";import"./svgIconContainer-CKoutHCt.js";import"./useBaseUiId-MN2jXq2W.js";import"./InternalBackdrop-BJfdLHLT.js";import"./composite-1IP-k403.js";import"./index-Dk_BL0rE.js";import"./index-BIk1hOdK.js";import"./index-B6Ums3yK.js";import"./useEventCallback-wffioqZZ.js";import"./SkeletonBar-mr59Hpvz.js";import"./LoadingCell-URVgcuw-.js";import"./ColumnConfigDialog-6L7UVeRK.js";import"./DraggableList-DI_EZ-AX.js";import"./search-D3m2bIkp.js";import"./Input-n0yDacSG.js";import"./useControlled-D9mCn6KG.js";import"./isEqual-ChaQSh95.js";import"./isObject-CzveNGjM.js";import"./Button-CN-ZsKSm.js";import"./ActionButton-ByslPckg.js";import"./Checkbox-H7yuK3U6.js";import"./useValueChanged-D9Chzcta.js";import"./CollapsiblePanel-BddaWApP.js";import"./MultiColumnSortDialog-nOGxT1KZ.js";import"./MenuTrigger-CZ5pywSw.js";import"./CompositeItem-aLBC2g8K.js";import"./ToolbarRootContext-Bq44IorR.js";import"./getDisabledMountTransitionStyles-DdBlRsOn.js";import"./getPseudoElementBounds-D9GjUDAo.js";import"./chevron-down-DFflXKhs.js";import"./index-BSoSJ7XO.js";import"./error-DWSN8l-7.js";import"./BaseCbacBanner-1et35qbL.js";import"./makeExternalStore-BhrsvHlw.js";import"./Tooltip-Bmgkzn1B.js";import"./PopoverPopup-Bxyq7tkW.js";import"./toNumber-BLNqaA0s.js";import"./useOsdkClient-CcauODOu.js";import"./tick-BHhwfOu2.js";import"./DropdownField-Cl_tjCSy.js";import"./withOsdkMetrics-D6Z_3e9u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

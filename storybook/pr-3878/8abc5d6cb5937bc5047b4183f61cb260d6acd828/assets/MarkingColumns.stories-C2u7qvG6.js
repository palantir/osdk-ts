import{f as p,j as e}from"./iframe-BDguHbPD.js";import{O as i}from"./object-table-hdLdDN5o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7xLPbKmM.js";import"./Table-CCVoIMnP.js";import"./index-C_5MPolp.js";import"./Dialog-COXLOajc.js";import"./cross-D4TeOGZ-.js";import"./svgIconContainer-Z2Julm7W.js";import"./useBaseUiId-bwbz0VU7.js";import"./InternalBackdrop-CbyyzA6w.js";import"./composite-BsxX_L6c.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./index-hw-WZAqz.js";import"./useEventCallback-C9A8Np9g.js";import"./SkeletonBar-CWFv9FmM.js";import"./LoadingCell-CY-ml6Az.js";import"./ColumnConfigDialog-CgmmapDK.js";import"./DraggableList-C3QCD6_U.js";import"./search-B1yR-f_r.js";import"./Input-CXvy1-u2.js";import"./useControlled-B3aVNzWK.js";import"./Button-D2v8_Tej.js";import"./small-cross-Dj8IgHas.js";import"./ActionButton-BN4Q2839.js";import"./Checkbox-BFou0tTv.js";import"./useValueChanged-Djc2nTS9.js";import"./CollapsiblePanel-DwibqjzF.js";import"./MultiColumnSortDialog-Ctf7BEab.js";import"./MenuTrigger-CTrmgruB.js";import"./CompositeItem-5MkrSg_6.js";import"./ToolbarRootContext-CALlmZI0.js";import"./getDisabledMountTransitionStyles-Cs-VaHPm.js";import"./getPseudoElementBounds-_M_XCnOW.js";import"./chevron-down-CHEXQxiW.js";import"./index-CaXJKsDl.js";import"./error-uqFmDj8x.js";import"./BaseCbacBanner-DyjG9k1J.js";import"./makeExternalStore-COwSJhBY.js";import"./Tooltip-B4VmxO0l.js";import"./PopoverPopup-DbEiKLnC.js";import"./debounce-XLiTuY6-.js";import"./useOsdkClient-ZETqGTvY.js";import"./tick-0fLMSfwX.js";import"./DropdownField-CGRpLszH.js";import"./isEqual-Du2vZJ9T.js";import"./withOsdkMetrics-CLLpRdbv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

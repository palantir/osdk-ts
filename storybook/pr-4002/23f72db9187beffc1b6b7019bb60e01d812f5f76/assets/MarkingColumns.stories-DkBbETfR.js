import{f as p,j as e}from"./iframe-BDntCMEH.js";import{O as i}from"./object-table-DkahZF98.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B50VuOmN.js";import"./Table-I_BYhXVu.js";import"./index-B0z8RHyd.js";import"./Dialog-DkKixsHY.js";import"./cross-BH8OF0Bn.js";import"./svgIconContainer-B6ralbiB.js";import"./useBaseUiId-BTqLhW0i.js";import"./InternalBackdrop-3bsfmQ8K.js";import"./composite-BQ7qlaUQ.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./index-BBkRPYMA.js";import"./useEventCallback-CJ1ECKuN.js";import"./SkeletonBar-DhuVeAjE.js";import"./LoadingCell-B4T88guZ.js";import"./ColumnConfigDialog-BBIUIVmY.js";import"./DraggableList-CIf_sqx2.js";import"./search-CYEButG9.js";import"./Input-CXpC2-sJ.js";import"./useControlled-B173rJPI.js";import"./Button-Bpn7C7dn.js";import"./small-cross-Ctkk7cRd.js";import"./ActionButton-t5HQKASd.js";import"./Checkbox-BAC3zYHO.js";import"./useValueChanged-DfkXLlVn.js";import"./CollapsiblePanel-DwIUcnuv.js";import"./MultiColumnSortDialog-F9a2YiSr.js";import"./MenuTrigger-4e4OHRuu.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./getDisabledMountTransitionStyles-karZ8d_E.js";import"./getPseudoElementBounds-C0nyJPqP.js";import"./chevron-down-BxBh9Dqz.js";import"./index-BQKiMfv1.js";import"./error-CAncZcqv.js";import"./BaseCbacBanner-CrHhWkuw.js";import"./makeExternalStore-j3YsZMxz.js";import"./Tooltip-zHG5lzOj.js";import"./PopoverPopup-C4ooFr_6.js";import"./debounce-CkhlBaHF.js";import"./useOsdkClient-R1XeaFqw.js";import"./tick-Dc8_NDDZ.js";import"./DropdownField-B9EyhDn4.js";import"./isEqual-Yrh3LO4w.js";import"./withOsdkMetrics-DaoCVVMK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

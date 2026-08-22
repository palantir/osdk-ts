import{f as p,j as e}from"./iframe-De8gl-wb.js";import{O as i}from"./object-table-Bz2FDPwn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZp3UEUX.js";import"./Table-B1Cak9D7.js";import"./index-yM1iOqxa.js";import"./Dialog-CTd_Fh2m.js";import"./cross-Rb4_YcYg.js";import"./svgIconContainer-O0KE-yUX.js";import"./useBaseUiId-D2bKh7zK.js";import"./InternalBackdrop-CaA3mfgc.js";import"./composite-CsYpzAzm.js";import"./index-CZuFPKTq.js";import"./index-yZ2YDAwx.js";import"./index-adqLLECi.js";import"./useEventCallback-M_gVxY2G.js";import"./SkeletonBar-Cpr1mmtD.js";import"./LoadingCell-B5JUoAiW.js";import"./ColumnConfigDialog-D5-gNagN.js";import"./DraggableList-DWokTizm.js";import"./search-gqOR6dWB.js";import"./Input-jUEOhmQC.js";import"./useControlled-DGI8qUj-.js";import"./Button-C8NRJqZ9.js";import"./small-cross-DCeop5gl.js";import"./ActionButton-9l7y1yGD.js";import"./Checkbox-DBD54aFK.js";import"./useValueChanged-FUmu471A.js";import"./CollapsiblePanel-C9mOk4td.js";import"./MultiColumnSortDialog-DzcM_iH0.js";import"./MenuTrigger-r0ZzgG-T.js";import"./CompositeItem-CLhIql87.js";import"./ToolbarRootContext-RfA3FV7l.js";import"./getDisabledMountTransitionStyles-B1oXkIam.js";import"./getPseudoElementBounds-2piZIYla.js";import"./chevron-down-DwDibcrO.js";import"./index-CEZAAMx5.js";import"./error-DNa-KthT.js";import"./BaseCbacBanner-q7Lsj7j7.js";import"./makeExternalStore-BgPv4tiZ.js";import"./Tooltip-CUSzcSPf.js";import"./PopoverPopup-CQa18L3d.js";import"./debounce-CnDZcNXl.js";import"./useOsdkClient-DVrTO4hw.js";import"./tick-CsI3c4Q2.js";import"./DropdownField-CDqudMgk.js";import"./isEqual-BtVuQz1J.js";import"./withOsdkMetrics-Cqq5lG27.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

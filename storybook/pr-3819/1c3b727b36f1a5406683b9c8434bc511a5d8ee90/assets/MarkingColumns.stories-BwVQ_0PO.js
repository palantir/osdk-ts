import{f as p,j as e}from"./iframe-R5joIy8i.js";import{O as i}from"./object-table-CgNAZxnk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDKQXXQd.js";import"./Table-B80Z2OYT.js";import"./index-BjtK3UNq.js";import"./Dialog-Ca0bgPoe.js";import"./cross-BLMm-Ql7.js";import"./svgIconContainer-KEF34-KT.js";import"./useBaseUiId-DzxPRuTg.js";import"./InternalBackdrop-C-TgLuPD.js";import"./composite-DoPpkoU1.js";import"./index-CV_jH-oS.js";import"./index-BCosmSDy.js";import"./index-CHRpbdDl.js";import"./useEventCallback-LMOxoj5R.js";import"./SkeletonBar-D1JBGL5F.js";import"./LoadingCell-CVulol-P.js";import"./ColumnConfigDialog-gVYcKPvo.js";import"./DraggableList-D0vAnTP4.js";import"./search-C23YmzRD.js";import"./Input-Bw5RXfMb.js";import"./useControlled-r3xQWVHF.js";import"./isEqual-9Rsr_ekw.js";import"./isObject-BMoCLrIv.js";import"./Button-CHY-MXSe.js";import"./ActionButton-Bqq9Ii8S.js";import"./Checkbox-BnjbZCw3.js";import"./useValueChanged-CZgv2A3P.js";import"./CollapsiblePanel-CcsZIIiD.js";import"./MultiColumnSortDialog-IarWhTir.js";import"./MenuTrigger-n3vs8F5z.js";import"./CompositeItem-B4wdPUIk.js";import"./ToolbarRootContext-CE7qJbgG.js";import"./getDisabledMountTransitionStyles-D7o0LPiO.js";import"./getPseudoElementBounds-DPnISsh9.js";import"./chevron-down-Bhu5S3ij.js";import"./index-IjrDNVAE.js";import"./error-BPV8EjSv.js";import"./BaseCbacBanner-rtYlPdLh.js";import"./makeExternalStore-BL3yv_tQ.js";import"./Tooltip-COhZTaOk.js";import"./PopoverPopup-CIuUTinA.js";import"./toNumber-Btv-h7uY.js";import"./useOsdkClient-B33djUjH.js";import"./tick-Cw9Y9tsY.js";import"./DropdownField-BGjG3ep6.js";import"./withOsdkMetrics--n59eel3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

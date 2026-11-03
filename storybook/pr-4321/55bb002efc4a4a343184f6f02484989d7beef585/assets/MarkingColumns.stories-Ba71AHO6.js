import{f as p,j as e}from"./iframe-B5RHZXsu.js";import{O as i}from"./object-table-Dkcx8iw6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tHX7vXiV.js";import"./Table-BhIIsFCs.js";import"./index-UZy2jxQz.js";import"./Dialog-udJgb8ju.js";import"./cross-BlEfWoOy.js";import"./svgIconContainer-B_LjJP-U.js";import"./useBaseUiId-CuPoV62G.js";import"./InternalBackdrop-DQlLfdJE.js";import"./composite-BR00GrWy.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./index-BiYhGcN8.js";import"./useEventCallback-CUl5eVDE.js";import"./SkeletonBar-DP2T5nTp.js";import"./LoadingCell-JwB4v6GZ.js";import"./ColumnConfigDialog-DkMRJkKy.js";import"./DraggableList-BRsM8x8B.js";import"./search-CznqLCy2.js";import"./Input-BXzrXoG1.js";import"./useControlled-DlsNgd8K.js";import"./Button-Cie7BQIA.js";import"./small-cross-D2pF67Rj.js";import"./ActionButton-y0Novnh7.js";import"./Checkbox-CzdYiTdt.js";import"./useValueChanged-BfhksQOL.js";import"./CollapsiblePanel-CCt5xsKY.js";import"./MultiColumnSortDialog-CQ5wDmsr.js";import"./MenuTrigger-CkEwNIFd.js";import"./CompositeItem-XiaPpMq3.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./getDisabledMountTransitionStyles-BCopWTyc.js";import"./getPseudoElementBounds-CkNhuPMZ.js";import"./chevron-down-UdMSp5ir.js";import"./index-BlmshJoj.js";import"./error-BhBB_kyZ.js";import"./BaseCbacBanner-Dc5V3Lie.js";import"./makeExternalStore-82wrc-fZ.js";import"./Tooltip-DlHQ0CXj.js";import"./PopoverPopup-DfYrZwnF.js";import"./debounce-BxIoRoJ-.js";import"./useOsdkClient-ClQGOlrW.js";import"./tick-BcP6gfmV.js";import"./DropdownField-BnK7E9TF.js";import"./isEqual-pJA2XBQu.js";import"./withOsdkMetrics-VuSz_R8I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

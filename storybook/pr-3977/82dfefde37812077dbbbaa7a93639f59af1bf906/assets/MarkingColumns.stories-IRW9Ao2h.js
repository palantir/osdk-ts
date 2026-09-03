import{f as p,j as e}from"./iframe-BjnXfZ9H.js";import{O as i}from"./object-table-DNJIjvBp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bepxIrLy.js";import"./Table-ybsmukH_.js";import"./index-BelFyW9j.js";import"./Dialog-BOJM-McT.js";import"./cross-Ca4hBGJI.js";import"./svgIconContainer-CwvuHzUD.js";import"./useBaseUiId--nXvl9pb.js";import"./InternalBackdrop-BLN5UK4x.js";import"./composite-CmHNarO8.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./index-DuJvB77H.js";import"./useEventCallback-BKqRKbmG.js";import"./SkeletonBar-DfILH45u.js";import"./LoadingCell-yFIpndmd.js";import"./ColumnConfigDialog-zq4SufD-.js";import"./DraggableList-BkF6LG2L.js";import"./search-4U4uPWIz.js";import"./Input-DOBVQBLE.js";import"./useControlled-30IDLW3T.js";import"./Button-87n6zTQD.js";import"./small-cross-D7Hbyjsr.js";import"./ActionButton-CQYbxlLb.js";import"./Checkbox-TZ3IuKyF.js";import"./useValueChanged-A_lNNdYi.js";import"./CollapsiblePanel-CS2mE_oJ.js";import"./MultiColumnSortDialog-CcC31-_u.js";import"./MenuTrigger-Bq4Sdh9Z.js";import"./CompositeItem-DVl86_s7.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./getDisabledMountTransitionStyles-DPwXStNv.js";import"./getPseudoElementBounds-CpUcIsOX.js";import"./chevron-down-C_lHJsgk.js";import"./index-C3tw8knN.js";import"./error-B6h0Ljte.js";import"./BaseCbacBanner-L6j0Cbsw.js";import"./makeExternalStore-C1Xa5Pr9.js";import"./Tooltip-C16yb5G_.js";import"./PopoverPopup-C-RgfkQV.js";import"./debounce-BbeoZOOC.js";import"./useOsdkClient-ByYF3VD2.js";import"./tick-_NQRZlmZ.js";import"./DropdownField-CDdmQF3S.js";import"./isEqual-BQ4IEcpg.js";import"./withOsdkMetrics-9hdMnSaG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-GgX3iuQS.js";import{O as i}from"./object-table-BCgwsQuJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DopDlguM.js";import"./Table-qQ6IkZzA.js";import"./index-2cEc6EpX.js";import"./Dialog-D6t24oV_.js";import"./cross-_o4FWU3M.js";import"./svgIconContainer-DqfRg1i7.js";import"./useBaseUiId-RBpeDYi5.js";import"./InternalBackdrop-BfvvVy03.js";import"./composite-DTJ2CAOA.js";import"./index-CqrWKdwO.js";import"./index-BFiXO6wc.js";import"./index-B6c9dS4m.js";import"./useEventCallback-JA9CtIGH.js";import"./SkeletonBar-DIwIX8Wd.js";import"./LoadingCell-BXZtLt9z.js";import"./ColumnConfigDialog-DI6GpbHs.js";import"./DraggableList-CQtVxoSy.js";import"./search-DiWIaVzY.js";import"./Input-CVnvfPvb.js";import"./useControlled-CcoQ1fix.js";import"./Button-QgQBUZaq.js";import"./small-cross-BbNCGVEJ.js";import"./ActionButton-C4p7Hgw-.js";import"./Checkbox-DQZUq8am.js";import"./useValueChanged-DAQKJS5p.js";import"./CollapsiblePanel-BlAOkLEb.js";import"./MultiColumnSortDialog-ZPWzJcZx.js";import"./MenuTrigger-sgCV-ErZ.js";import"./CompositeItem-CaeojGGt.js";import"./ToolbarRootContext-BWdhq6Lq.js";import"./getDisabledMountTransitionStyles-6p_UzfDx.js";import"./getPseudoElementBounds-Bwsxs8-C.js";import"./chevron-down-BhZlmI0F.js";import"./index-nxvIp1-k.js";import"./error-DEuyLPP2.js";import"./BaseCbacBanner-TU4zaPAq.js";import"./makeExternalStore-DX9YQrWu.js";import"./Tooltip-bTH8sLKK.js";import"./PopoverPopup-BGdXC6LF.js";import"./debounce-CWF4YRYe.js";import"./useOsdkClient-DzwfnAlk.js";import"./tick-D8vs_8Jl.js";import"./DropdownField-BmZNq9zA.js";import"./isEqual-Z_mCcB6L.js";import"./withOsdkMetrics-BW_V9voC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

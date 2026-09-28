import{f as p,j as e}from"./iframe-C0Xv1P5p.js";import{O as i}from"./object-table-B4FUOYcx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DK2j5cbT.js";import"./Table-CU1Qyt0T.js";import"./index-D6d1RC22.js";import"./Dialog-ChKuLAfw.js";import"./cross-C73iH-uw.js";import"./svgIconContainer-D6QpYyks.js";import"./useBaseUiId-DyrVnx3i.js";import"./InternalBackdrop-a7BFb5yp.js";import"./composite-DpnK5-9R.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./index-DIBkcKPQ.js";import"./useEventCallback-BBtLdhG6.js";import"./SkeletonBar-CsuhaBVh.js";import"./LoadingCell-CG3DXpJr.js";import"./ColumnConfigDialog-C0j_b73w.js";import"./DraggableList-CetpfoCD.js";import"./search-BS7q0In0.js";import"./Input-C9L75zsf.js";import"./useControlled-qTk4_Vdn.js";import"./Button-CQxPIDLb.js";import"./small-cross-Bj0EFv1l.js";import"./ActionButton-DGf5lIp9.js";import"./Checkbox-HVh17jbi.js";import"./useValueChanged-CfD_n30e.js";import"./CollapsiblePanel-CIp9LNN3.js";import"./MultiColumnSortDialog-DhjXyduh.js";import"./MenuTrigger-ihJMW9zG.js";import"./CompositeItem-BRH5qaMr.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./getDisabledMountTransitionStyles-DTtgGuxo.js";import"./getPseudoElementBounds-CnBSmlCQ.js";import"./chevron-down-Buq4H8ml.js";import"./index-DuGDHKhx.js";import"./error-DoPz0IgF.js";import"./BaseCbacBanner-BIlKvGdQ.js";import"./makeExternalStore-qN6iSkao.js";import"./Tooltip-ClUPMWTl.js";import"./PopoverPopup-C3x1U_f_.js";import"./debounce-Bf-s2Lqp.js";import"./useOsdkClient-DanPI2Ge.js";import"./tick-Bve5oyKY.js";import"./DropdownField-BY3LIDfC.js";import"./isEqual-BHWxWtGu.js";import"./withOsdkMetrics-BlIQDFpZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-CNas8tCV.js";import{O as i}from"./object-table-C8i8aDbO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrLgTqj6.js";import"./Table-B7ttLNKA.js";import"./index-D7Ojgd4V.js";import"./Dialog-DeiQybmE.js";import"./cross-Cv9-zzS9.js";import"./svgIconContainer-Dzsoi_4S.js";import"./useBaseUiId-X471mJCy.js";import"./InternalBackdrop-Dlgf3ivC.js";import"./composite-CS_tSE92.js";import"./index-BTiHVZ1L.js";import"./index-BtptK3eI.js";import"./index-4W1N-_A-.js";import"./useEventCallback-D3bYPUkP.js";import"./SkeletonBar-BjIT0SZR.js";import"./LoadingCell-Df87zf6s.js";import"./ColumnConfigDialog-3HnFFO5a.js";import"./DraggableList-uSYcJ8Kc.js";import"./search-DUqjPedA.js";import"./Input-CU35V2TL.js";import"./useControlled-Cjala1q6.js";import"./Button-C6s7oiSJ.js";import"./small-cross-S20y_pnE.js";import"./ActionButton-BYItjPf7.js";import"./Checkbox-B9KqAtRO.js";import"./useValueChanged-CaoL13K8.js";import"./CollapsiblePanel-Beb9dGYt.js";import"./MultiColumnSortDialog-CFQ7cdiD.js";import"./MenuTrigger-BF5ACnWZ.js";import"./CompositeItem-DXu_k_QL.js";import"./ToolbarRootContext-DOnJZ6Oo.js";import"./getDisabledMountTransitionStyles-D9ttWYyq.js";import"./getPseudoElementBounds-C9ugQgZF.js";import"./chevron-down-Bdgupgh4.js";import"./index-dIUVuF_Q.js";import"./error-DC-jftfn.js";import"./BaseCbacBanner-CrucHGLg.js";import"./makeExternalStore-Bw1hiMWb.js";import"./Tooltip-CIpDyo_p.js";import"./PopoverPopup-DDaiQ5QG.js";import"./debounce-B3uOQazY.js";import"./useOsdkClient-B6N5Ynfx.js";import"./tick-olxLAyAM.js";import"./DropdownField-BX-yMOW5.js";import"./isEqual-BUaS9dIL.js";import"./withOsdkMetrics-DBguGQ7e.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

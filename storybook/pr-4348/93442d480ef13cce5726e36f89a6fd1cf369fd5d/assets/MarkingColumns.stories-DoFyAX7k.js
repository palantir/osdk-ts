import{f as p,j as e}from"./iframe-DsqGSzyQ.js";import{O as i}from"./object-table-BbRF0HYo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2TDGnFx.js";import"./Table-C5PRAfzS.js";import"./index-CVVe8LYW.js";import"./Dialog-BJXvX1Qz.js";import"./cross-OIVk5Jqz.js";import"./svgIconContainer-BTnUylTl.js";import"./useBaseUiId-CLwdfekz.js";import"./InternalBackdrop-Bcj0VMJA.js";import"./composite-KVqYkGkg.js";import"./index-BUfWM760.js";import"./index-CQfkRNgK.js";import"./index-DFzEYbU7.js";import"./useEventCallback-BUxfyhL3.js";import"./SkeletonBar-OWdeOMzd.js";import"./LoadingCell-GFteHhjq.js";import"./ColumnConfigDialog-pOwuJCVA.js";import"./DraggableList-DHD8gNGM.js";import"./search-Dp0YAnmc.js";import"./Input-DxF0Wzlw.js";import"./useControlled-DnGJzKUi.js";import"./Button-CG3H6I69.js";import"./small-cross-yxECI3O6.js";import"./ActionButton-DOoFHg12.js";import"./Checkbox-8MqZzppI.js";import"./useValueChanged-DmOLE1TI.js";import"./CollapsiblePanel-CENIho0X.js";import"./MultiColumnSortDialog-CAA_Gl6u.js";import"./MenuTrigger-CfVe1Fj6.js";import"./CompositeItem-D_FxDdAh.js";import"./ToolbarRootContext-Bbhq9Lsc.js";import"./getDisabledMountTransitionStyles-DTGPpCwR.js";import"./getPseudoElementBounds-DHuKM7P-.js";import"./chevron-down-DbLJwh-Y.js";import"./index-C-t9nxqw.js";import"./error-CSEdl-5d.js";import"./BaseCbacBanner-D_4wVm3C.js";import"./makeExternalStore-CwrRFGw-.js";import"./Tooltip-C8RXxpoJ.js";import"./PopoverPopup-DDE-QaKN.js";import"./debounce--Ga5NP20.js";import"./useOsdkClient-BfsVu55M.js";import"./tick-BSaw4Ihw.js";import"./DropdownField-Hwe25ldg.js";import"./isEqual-zvTcHIVY.js";import"./withOsdkMetrics-nmEcK_Vs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

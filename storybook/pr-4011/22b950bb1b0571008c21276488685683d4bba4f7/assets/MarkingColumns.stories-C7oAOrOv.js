import{f as p,j as e}from"./iframe-MqLOwkyt.js";import{O as i}from"./object-table-BHkETUN5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BI4FsuTE.js";import"./Table-DqqKcIb5.js";import"./index-CYsLXWAq.js";import"./Dialog-_xEsZnGL.js";import"./cross-CrEHvwXy.js";import"./svgIconContainer-CpAJhJ6x.js";import"./useBaseUiId-xxBCoKYK.js";import"./InternalBackdrop-wUQuVyKv.js";import"./composite-NEozLeoL.js";import"./index-B53EBtE1.js";import"./index-DYFGinsg.js";import"./index-C3pKlSiY.js";import"./useEventCallback-Cw57MZdH.js";import"./SkeletonBar-BnG9_9qz.js";import"./LoadingCell-D1NCsd33.js";import"./ColumnConfigDialog-D2wyI7o0.js";import"./DraggableList-CWMagUrS.js";import"./search-CxS15Af3.js";import"./Input-CquXhMGI.js";import"./useControlled-DHUJWjTK.js";import"./Button-CBsI2feD.js";import"./small-cross-CvOnK5fR.js";import"./ActionButton-_HVLo196.js";import"./Checkbox-CCqzArHE.js";import"./useValueChanged-e8AMyRv1.js";import"./CollapsiblePanel-C5mk5Aup.js";import"./MultiColumnSortDialog-XR2vQqAi.js";import"./MenuTrigger-Dw8fe9Ph.js";import"./CompositeItem-cvG07j6P.js";import"./ToolbarRootContext-YqisKJxJ.js";import"./getDisabledMountTransitionStyles-B3gQ57ui.js";import"./getPseudoElementBounds-BRF46eiy.js";import"./chevron-down-CCwfXTdl.js";import"./index-D1QWFyFj.js";import"./error-CN-8K1J8.js";import"./BaseCbacBanner-BMffm3ay.js";import"./makeExternalStore-DNVCbBN4.js";import"./Tooltip-CMpFEXG9.js";import"./PopoverPopup-ixK-S_Jv.js";import"./debounce-DCOl06T4.js";import"./useOsdkClient-DyeTERCd.js";import"./tick-3f1cvuZk.js";import"./DropdownField-BVO8q73p.js";import"./isEqual-ZdngOk8z.js";import"./withOsdkMetrics-D3nMdfcR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-w9F8Brjw.js";import{O as i}from"./object-table-B20ii03U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gOuIvRG0.js";import"./Table-D6xWvbkx.js";import"./index-BX6-ktEu.js";import"./Dialog-4zHFT5hi.js";import"./cross-Bsja6aaP.js";import"./svgIconContainer-52lfJd2c.js";import"./useBaseUiId-C3CWNnun.js";import"./InternalBackdrop-DWe5YV-b.js";import"./composite-DJjHoSCt.js";import"./index-CuwPgqye.js";import"./index-DeR9tbl3.js";import"./index-XFCS0tZr.js";import"./useEventCallback-BRjx0IL1.js";import"./SkeletonBar-ib1NEa7A.js";import"./LoadingCell-Dre-6LuM.js";import"./ColumnConfigDialog-Nirjm6-T.js";import"./DraggableList-CE3kxa99.js";import"./search-CJlgZYNJ.js";import"./Input-BI7HWStD.js";import"./useControlled-1YClOBeG.js";import"./Button-C0Dxr-Rp.js";import"./small-cross-Xk1Ycd4l.js";import"./ActionButton-CtedR1c9.js";import"./Checkbox-B0jqNeGa.js";import"./useValueChanged-mPynHNuh.js";import"./CollapsiblePanel-aj87wu0f.js";import"./MultiColumnSortDialog-D1DBA-gw.js";import"./MenuTrigger-BlnZU8w2.js";import"./CompositeItem-CaktBZ-x.js";import"./ToolbarRootContext-CPJg8Zy4.js";import"./getDisabledMountTransitionStyles-DbidhjV6.js";import"./getPseudoElementBounds-DNWW3lak.js";import"./chevron-down-alluwZla.js";import"./index-yG1LfRf4.js";import"./error-rgHAMUMi.js";import"./BaseCbacBanner-CVYQc2Pt.js";import"./makeExternalStore-BPJfeWP7.js";import"./Tooltip-D4WB2rF9.js";import"./PopoverPopup-Ce3dI16V.js";import"./debounce-Ckhswbkw.js";import"./useOsdkClient-DM5pv681.js";import"./tick-DO8XqzsE.js";import"./DropdownField-BXhKp9ja.js";import"./isEqual-DxnFqG6z.js";import"./withOsdkMetrics-Brc0TCIF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

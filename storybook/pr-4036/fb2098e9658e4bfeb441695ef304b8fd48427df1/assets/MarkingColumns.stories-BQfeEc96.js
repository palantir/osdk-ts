import{f as p,j as e}from"./iframe-D_qRpeHj.js";import{O as i}from"./object-table-CKBjSPJ8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_9N_6Hv.js";import"./Table-BIBvJY_n.js";import"./index-ze-4_PID.js";import"./Dialog-CgqoPhCB.js";import"./cross-BxS6mKVf.js";import"./svgIconContainer-CoeSRgcf.js";import"./useBaseUiId-By5i2rdz.js";import"./InternalBackdrop-Dc_uxBhE.js";import"./composite-C0V0hw5E.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./index-C-sm0l73.js";import"./useEventCallback-Cv2yWZv2.js";import"./SkeletonBar-EN4eDWhb.js";import"./LoadingCell-CHXjbNSr.js";import"./ColumnConfigDialog-DB0wjUE8.js";import"./DraggableList-DWmayQdU.js";import"./search-BGYV6IKj.js";import"./Input-BNbV4MTG.js";import"./useControlled-Y53AopBQ.js";import"./Button-BV5h0__V.js";import"./small-cross-C2VJaSVZ.js";import"./ActionButton-Bs7eblYb.js";import"./Checkbox-CLK566Z3.js";import"./useValueChanged-DldrlgwL.js";import"./CollapsiblePanel-PgBvtzuh.js";import"./MultiColumnSortDialog-Brfh71ie.js";import"./MenuTrigger-DGpOysmP.js";import"./CompositeItem-B_Ho19nn.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./getDisabledMountTransitionStyles-ml_2UbZr.js";import"./getPseudoElementBounds-Dt8npt-l.js";import"./chevron-down-4vjSc27s.js";import"./index-DMf8On8K.js";import"./error-CushKjuF.js";import"./BaseCbacBanner-lQbmrV5k.js";import"./makeExternalStore-Cgf26SsV.js";import"./Tooltip-BDUJFrAT.js";import"./PopoverPopup-BEmt1_nM.js";import"./debounce-BbOjOfo_.js";import"./useOsdkClient-BidZgNy-.js";import"./tick-D_JbwVBf.js";import"./DropdownField-DV5YVhPE.js";import"./isEqual-WH4uvIP0.js";import"./withOsdkMetrics-B7kRIAyY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

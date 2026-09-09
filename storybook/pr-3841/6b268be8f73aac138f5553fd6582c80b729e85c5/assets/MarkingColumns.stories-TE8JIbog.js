import{f as p,j as e}from"./iframe-b_8xiy3W.js";import{O as i}from"./object-table-DrPIl3Zi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0v6g8Db.js";import"./Table-DJR5OCUI.js";import"./index-oZ2AYheq.js";import"./Dialog-DznRX8R1.js";import"./cross-CALAWLOA.js";import"./svgIconContainer-ByDmaFbM.js";import"./useBaseUiId-DT31E3Yo.js";import"./InternalBackdrop-CLpVUHm8.js";import"./composite-cYMewAOc.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./index-BMWwnwmI.js";import"./useEventCallback-CAsu19Vq.js";import"./SkeletonBar-Bd96z6dI.js";import"./LoadingCell-Cu9MSHwe.js";import"./ColumnConfigDialog-BFWSuhw9.js";import"./DraggableList-xBM_bTxf.js";import"./search-CbAtzBKJ.js";import"./Input-Co7UsBkP.js";import"./useControlled-CAq9EV0h.js";import"./Button-CQKahg2d.js";import"./small-cross-BNQLIIyh.js";import"./ActionButton-CodfAc7s.js";import"./Checkbox-cHmIGIFt.js";import"./useValueChanged-CeFg2HVM.js";import"./CollapsiblePanel-D3gQHqx1.js";import"./MultiColumnSortDialog-CH-TfZDd.js";import"./MenuTrigger-CHuFRbAt.js";import"./CompositeItem-O5ez4ulJ.js";import"./ToolbarRootContext-BKksKq4U.js";import"./getDisabledMountTransitionStyles-CCClTCas.js";import"./getPseudoElementBounds-nU4-wp7y.js";import"./chevron-down-DItPxyzq.js";import"./index-BHrpVXex.js";import"./error-BHsdjMmH.js";import"./BaseCbacBanner-g3o59pg6.js";import"./makeExternalStore-c0rjbvLB.js";import"./Tooltip-Bamtogyy.js";import"./PopoverPopup-BtxX0L1I.js";import"./debounce-B2LvOlKd.js";import"./useOsdkClient-yfgmgRbP.js";import"./tick-HvfLanm4.js";import"./DropdownField-BCzLIobc.js";import"./isEqual-Cz2f4b96.js";import"./withOsdkMetrics-BpRFFsXx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

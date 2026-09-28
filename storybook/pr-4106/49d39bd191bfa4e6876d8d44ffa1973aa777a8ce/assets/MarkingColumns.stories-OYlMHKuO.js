import{f as p,j as e}from"./iframe-xlXCZ1ws.js";import{O as i}from"./object-table-CmsAhSfg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qqQQlHro.js";import"./Table-BUq2GEQj.js";import"./index-0LV67TMp.js";import"./Dialog-gQXrXHak.js";import"./cross-CR59a-Oy.js";import"./svgIconContainer-CuvK47Ur.js";import"./useBaseUiId-BGTxIfXW.js";import"./InternalBackdrop-B_15Ngja.js";import"./composite-CRMLjWFi.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./index-COgWwI6H.js";import"./useEventCallback-C6MHTMfG.js";import"./SkeletonBar-BnHpQoIH.js";import"./LoadingCell-JiBKO40X.js";import"./ColumnConfigDialog-C0e1aTZU.js";import"./DraggableList-DoqqQWJG.js";import"./search-C6I7AzRf.js";import"./Input-BoJ1ruei.js";import"./useControlled-BnjR3wqV.js";import"./Button-BsW3xUOI.js";import"./small-cross-odVg3Ngs.js";import"./ActionButton-BCxwpleN.js";import"./Checkbox-CYMQvQpq.js";import"./useValueChanged-C6fdlLGU.js";import"./CollapsiblePanel-DQQNXkbu.js";import"./MultiColumnSortDialog-Bdr5AO2z.js";import"./MenuTrigger-JiNystqw.js";import"./CompositeItem-BYik2Kor.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./getDisabledMountTransitionStyles-C6rGsGDU.js";import"./getPseudoElementBounds-DCb81mxx.js";import"./chevron-down-gZxsFq9N.js";import"./index-kTsIio2O.js";import"./error-1_b5vZEY.js";import"./BaseCbacBanner-A6lL-nhH.js";import"./makeExternalStore-BkPioVOv.js";import"./Tooltip-CVfnB-bd.js";import"./PopoverPopup-CcQbR00T.js";import"./debounce-CDE_4Xvo.js";import"./useOsdkClient-Bcj4c6xw.js";import"./tick-DX5clgfv.js";import"./DropdownField-DRz8c_L3.js";import"./isEqual-B3JIeK92.js";import"./withOsdkMetrics-Cc_kPS0s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

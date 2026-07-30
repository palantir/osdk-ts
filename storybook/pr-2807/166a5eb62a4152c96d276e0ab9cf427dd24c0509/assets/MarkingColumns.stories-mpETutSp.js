import{f as p,j as e}from"./iframe-CuiGp-Dt.js";import{O as i}from"./object-table-B7uvWIw8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SMMH4kyg.js";import"./Table-CLWCpSj8.js";import"./index-CCPD4c0K.js";import"./Dialog-CMWSmxiX.js";import"./cross-CqlThrbh.js";import"./svgIconContainer-D37Tnjck.js";import"./useBaseUiId-dJ6_umyu.js";import"./InternalBackdrop-CCnfXl4v.js";import"./composite-FY18TxQF.js";import"./index-DDW4Db7g.js";import"./index-cGGpA_xq.js";import"./index-CAyJQP-c.js";import"./useEventCallback-D_nZVAgt.js";import"./SkeletonBar-DSIq-YUs.js";import"./LoadingCell-fEViiG9H.js";import"./ColumnConfigDialog-CxA8RUHD.js";import"./DraggableList-CSzrfUqu.js";import"./search-BVtYeN3h.js";import"./Input-CSq1qZza.js";import"./useControlled-BQU4YQHh.js";import"./isEqual-BAaGBZAh.js";import"./isObject-C4mu_IpK.js";import"./Button-CHWa0SfK.js";import"./ActionButton-rfmGaQx6.js";import"./Checkbox-aRNMXRNJ.js";import"./useValueChanged-BE6yVMji.js";import"./CollapsiblePanel-DGuJ-eTT.js";import"./MultiColumnSortDialog-B6im6FhY.js";import"./MenuTrigger-ChQxOJcf.js";import"./CompositeItem-O6Z2TQDF.js";import"./ToolbarRootContext-D7hBI_DT.js";import"./getDisabledMountTransitionStyles-DTh42eTs.js";import"./getPseudoElementBounds-Bszm0I6K.js";import"./chevron-down-5QkSvcpX.js";import"./index-D5uc652e.js";import"./error-DmBa7_lJ.js";import"./BaseCbacBanner-BkLaiyVr.js";import"./makeExternalStore-CNEnZVLO.js";import"./Tooltip-BwaQ8jJh.js";import"./PopoverPopup-Bz0Ltawp.js";import"./toNumber-C1CexwWJ.js";import"./useOsdkClient-BjfarLwZ.js";import"./tick-LANHlESD.js";import"./DropdownField-8Hpa1OBm.js";import"./withOsdkMetrics-IOnx9SUw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

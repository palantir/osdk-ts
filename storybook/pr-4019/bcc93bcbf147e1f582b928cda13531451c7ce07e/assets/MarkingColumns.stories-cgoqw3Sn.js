import{f as p,j as e}from"./iframe-CbWKQTAd.js";import{O as i}from"./object-table-MR0jbZG5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BodAnLGY.js";import"./Table-CYjFiXE1.js";import"./index-tkyBrQAe.js";import"./Dialog-mAFF5Qnl.js";import"./cross-DgoT9wry.js";import"./svgIconContainer-DOikMtqk.js";import"./useBaseUiId-XRd770-U.js";import"./InternalBackdrop-aJh4Cj33.js";import"./composite-DcG51BnW.js";import"./index-CvOYyjqx.js";import"./index-B9_31cVf.js";import"./index-Bln6Sg35.js";import"./useEventCallback-0naykCU3.js";import"./SkeletonBar-DsGaioLv.js";import"./LoadingCell-Dx6PyYMV.js";import"./ColumnConfigDialog-BTsF37nb.js";import"./DraggableList-HQiyRzPU.js";import"./search-DGKjGcgN.js";import"./Input-DFzbl_7I.js";import"./useControlled-Lsl_hIqj.js";import"./Button-BKLVv1MD.js";import"./small-cross-BUr6qJjI.js";import"./ActionButton-DcAqfgCZ.js";import"./Checkbox-CfG5f4Qa.js";import"./useValueChanged-DvUqsBxA.js";import"./CollapsiblePanel-doEvfhG5.js";import"./MultiColumnSortDialog-By9Zwthb.js";import"./MenuTrigger-CLQngVNg.js";import"./CompositeItem-C2HqLZ_Z.js";import"./ToolbarRootContext-0YQDLW37.js";import"./getDisabledMountTransitionStyles-GXdrPdpy.js";import"./getPseudoElementBounds-B4n-FV3q.js";import"./chevron-down-eXF_jIno.js";import"./index-b_e1xyL7.js";import"./error-CW2P3uO4.js";import"./BaseCbacBanner-CGjwljHM.js";import"./makeExternalStore-DdKrBv4a.js";import"./Tooltip-d_DmM_MB.js";import"./PopoverPopup-Btctsiv_.js";import"./debounce-5-704DJU.js";import"./useOsdkClient-IqzxIclx.js";import"./tick-BitNuW6k.js";import"./DropdownField-BhWFFRno.js";import"./isEqual-D_hpX-EQ.js";import"./withOsdkMetrics-C5qCRIWi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

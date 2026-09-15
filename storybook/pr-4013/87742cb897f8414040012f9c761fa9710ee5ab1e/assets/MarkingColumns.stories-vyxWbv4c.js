import{f as p,j as e}from"./iframe-B-0GKdAh.js";import{O as i}from"./object-table-4MXRKBvo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BxGs137T.js";import"./Table-BGrCnd1u.js";import"./index-CeTv2GEb.js";import"./Dialog-DHj971QP.js";import"./cross-ysBsIoNl.js";import"./svgIconContainer-D680pERF.js";import"./useBaseUiId-CuPeP6_V.js";import"./InternalBackdrop-Dx-S1k2g.js";import"./composite-LajQ-4YU.js";import"./index-B28VTjrg.js";import"./index-Bvaqc28t.js";import"./index-C_O2JK4N.js";import"./useEventCallback-C4lws8eU.js";import"./SkeletonBar-BCo3EIVq.js";import"./LoadingCell-BIQAzAUj.js";import"./ColumnConfigDialog-BIKG8kyF.js";import"./DraggableList-CzmIkfU7.js";import"./search-wHoqdl81.js";import"./Input-m2Y-zZM0.js";import"./useControlled-CvXSRSaz.js";import"./Button-DglVf80r.js";import"./small-cross-D9tlZ127.js";import"./ActionButton-BL9rXH5v.js";import"./Checkbox-C5FmCcuS.js";import"./useValueChanged-CJf6xuTk.js";import"./CollapsiblePanel-uVUj59mq.js";import"./MultiColumnSortDialog-BRMpCFl2.js";import"./MenuTrigger-BM4AmwEZ.js";import"./CompositeItem-nISr-y05.js";import"./ToolbarRootContext-CwO2Drzb.js";import"./getDisabledMountTransitionStyles-D6yAx4Zz.js";import"./getPseudoElementBounds-0hkPmral.js";import"./chevron-down-CJ1qMpgz.js";import"./index-CChF4OqZ.js";import"./error-z9s112Ur.js";import"./BaseCbacBanner-DwijsOT0.js";import"./makeExternalStore-CNR6geF1.js";import"./Tooltip-DTEpkTPa.js";import"./PopoverPopup-C6laaofs.js";import"./debounce-D7txzNNR.js";import"./useOsdkClient-C5XwldCE.js";import"./tick-C2VLoN1r.js";import"./DropdownField-BT9Qh08E.js";import"./isEqual-C0dOwFPi.js";import"./withOsdkMetrics-DXKy8BiX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

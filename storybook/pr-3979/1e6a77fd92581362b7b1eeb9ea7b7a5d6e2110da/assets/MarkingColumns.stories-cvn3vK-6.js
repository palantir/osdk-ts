import{f as p,j as e}from"./iframe-E5iWaRrU.js";import{O as i}from"./object-table-DYYLM9YB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dqk_s4rt.js";import"./Table-SRHZ8Wnm.js";import"./index-C3_SZq7Z.js";import"./Dialog-CPf2pgV9.js";import"./cross-JL-akl7t.js";import"./svgIconContainer-DEuUBUqq.js";import"./useBaseUiId-D4npvdT-.js";import"./InternalBackdrop-DDD6NSDl.js";import"./composite-Bz9wP40Z.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./index-D75HgB7Y.js";import"./useEventCallback-CyXvLOTQ.js";import"./SkeletonBar-YbzI2HU-.js";import"./LoadingCell-CZW3NZst.js";import"./ColumnConfigDialog-C84EhSb0.js";import"./DraggableList-Dzp4AhOv.js";import"./search-ChBTd86p.js";import"./Input-C3CP2H26.js";import"./useControlled-Df4M33J1.js";import"./Button-Cat6_J_5.js";import"./small-cross-WUKc4wzh.js";import"./ActionButton-CxLb80et.js";import"./Checkbox-Dyq6vKsd.js";import"./useValueChanged-EVQifgYs.js";import"./CollapsiblePanel-BrkpisiN.js";import"./MultiColumnSortDialog-DT7WuJBk.js";import"./MenuTrigger-Bi3Tv-Yx.js";import"./CompositeItem-DMa2K3iN.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./getDisabledMountTransitionStyles-yQAdsL-J.js";import"./getPseudoElementBounds-CQAue5bo.js";import"./chevron-down-BkyonfV4.js";import"./index-DSBMRtFR.js";import"./error-DXOYczi7.js";import"./BaseCbacBanner-BKWsBk-N.js";import"./makeExternalStore-HEA345T9.js";import"./Tooltip-BMHXT91H.js";import"./PopoverPopup-CPj_RJ75.js";import"./debounce-B9bcrHjS.js";import"./useOsdkClient-CYVurRKB.js";import"./tick-BpTe-h6v.js";import"./DropdownField-Cjcq2217.js";import"./isEqual-DrYLE_W0.js";import"./withOsdkMetrics-h-AdLa11.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

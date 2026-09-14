import{f as p,j as e}from"./iframe-B0U1IQX4.js";import{O as i}from"./object-table-DU-i9Wwo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DiPVcWmm.js";import"./Table-DSvTXIVi.js";import"./index-D1KZRywE.js";import"./Dialog-C-t3ZORO.js";import"./cross-DuFcQq4i.js";import"./svgIconContainer-C5UOcoAR.js";import"./useBaseUiId-BYy3PLTZ.js";import"./InternalBackdrop-CR_tzpk3.js";import"./composite-CsiVeWul.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./index-cymf7Sk-.js";import"./useEventCallback-psrziwfU.js";import"./SkeletonBar-DG8DA1lc.js";import"./LoadingCell-DMH3wxy0.js";import"./ColumnConfigDialog-CAmdKZOw.js";import"./DraggableList-DIROkhvc.js";import"./search-TA6KQkXz.js";import"./Input-DxzIDyUo.js";import"./useControlled-CRRNdgyj.js";import"./Button-xPZvVWHf.js";import"./small-cross-BpMsA5cq.js";import"./ActionButton-0i0W7jAV.js";import"./Checkbox--a3P63C2.js";import"./useValueChanged-DjbPPhzb.js";import"./CollapsiblePanel-CDvcpi1D.js";import"./MultiColumnSortDialog-knebl6ML.js";import"./MenuTrigger-fTPJ_Gc5.js";import"./CompositeItem-DHef4_L4.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./getDisabledMountTransitionStyles-B-Kz2nRd.js";import"./getPseudoElementBounds-CGPWBcaM.js";import"./chevron-down-DeePtBa4.js";import"./index-DF7Hoa49.js";import"./error-jOboOslV.js";import"./BaseCbacBanner-D30NdAjZ.js";import"./makeExternalStore-f14_qRGB.js";import"./Tooltip-B8U1i2GM.js";import"./PopoverPopup-CZIoD0Rp.js";import"./debounce-Cx5RzNC6.js";import"./useOsdkClient-B7fDZnt9.js";import"./tick-C4uqHxqI.js";import"./DropdownField-B4i07c_b.js";import"./isEqual-Ck562tyb.js";import"./withOsdkMetrics-CSt3jXAU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

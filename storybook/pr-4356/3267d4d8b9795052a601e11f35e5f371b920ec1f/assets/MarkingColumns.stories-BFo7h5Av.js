import{f as p,j as e}from"./iframe-DlzpeYey.js";import{O as i}from"./object-table-C3WOyg8I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D49cnuzB.js";import"./Table-BmHypVxk.js";import"./index-CLOJWpvR.js";import"./Dialog-D3-qdmWW.js";import"./cross-C9f-NEvt.js";import"./svgIconContainer-s_VNNREI.js";import"./useBaseUiId-0fwu-5sC.js";import"./InternalBackdrop-BdCqNoVQ.js";import"./composite-CPVo-XsX.js";import"./index-Dp-4F4Kh.js";import"./index-B42S07sI.js";import"./index-D3s6HNJ8.js";import"./useEventCallback-CaMWJsnE.js";import"./SkeletonBar-D3xHVWjV.js";import"./LoadingCell-i-aIbsnK.js";import"./ColumnConfigDialog-BoSVEN-Y.js";import"./DraggableList-CPrXcwGW.js";import"./search-DvttvRVv.js";import"./Input-BI9FrHdv.js";import"./useControlled-fZuEx10T.js";import"./Button-D-qtDRYT.js";import"./small-cross-BcmD9yuk.js";import"./ActionButton-BiduotiH.js";import"./Checkbox-DS43D_dC.js";import"./useValueChanged-CQX5dJbx.js";import"./CollapsiblePanel-C1C1qN6R.js";import"./MultiColumnSortDialog-DG8VRwWc.js";import"./MenuTrigger-DGDDqRMW.js";import"./CompositeItem-B1K0j6t8.js";import"./ToolbarRootContext-DdMsogNF.js";import"./getDisabledMountTransitionStyles-BEQmNbl0.js";import"./getPseudoElementBounds-CXg8W_NX.js";import"./chevron-down-wlUp9z9T.js";import"./index-Dx8CT-jt.js";import"./error-DWCk07vu.js";import"./BaseCbacBanner-9BoiPuMq.js";import"./makeExternalStore-BPbjLuQ9.js";import"./Tooltip-BkSwqWQp.js";import"./PopoverPopup-B006mch8.js";import"./debounce-DsTd2nve.js";import"./useOsdkClient-B09kdwnn.js";import"./tick-DFD3L9EA.js";import"./DropdownField-Bg0Jakwy.js";import"./isEqual-C-Thiike.js";import"./withOsdkMetrics-Bqhu_QPV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

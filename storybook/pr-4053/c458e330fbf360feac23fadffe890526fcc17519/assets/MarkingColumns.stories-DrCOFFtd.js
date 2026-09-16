import{f as p,j as e}from"./iframe-C1CKZi3d.js";import{O as i}from"./object-table-DcBSNvfE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjKKPLuI.js";import"./Table-D3YAmEYz.js";import"./index-22zkYmfP.js";import"./Dialog-dWuSBYO5.js";import"./cross-DgfaXAP1.js";import"./svgIconContainer-5vjXCpW3.js";import"./useBaseUiId-kwR7401f.js";import"./InternalBackdrop-CQIAa_cE.js";import"./composite-BHop2ulG.js";import"./index-BaUESoup.js";import"./index-TnDt-8d7.js";import"./index-Z2n3umrQ.js";import"./useEventCallback-BlUSuMKe.js";import"./SkeletonBar-DxYmE8LG.js";import"./LoadingCell-3i-RVTzi.js";import"./ColumnConfigDialog-B8E6aKW_.js";import"./DraggableList-IaJYya1-.js";import"./search-Crhz7pqe.js";import"./Input-B9v9dpXG.js";import"./useControlled-DsloswUn.js";import"./Button-C8GCJke3.js";import"./small-cross-HkAOyTJK.js";import"./ActionButton-fTBY13Di.js";import"./Checkbox-y9WdOHPb.js";import"./useValueChanged-CDUxAEZl.js";import"./CollapsiblePanel-DEPs9Vux.js";import"./MultiColumnSortDialog-Biocbc61.js";import"./MenuTrigger-BuXfTXAg.js";import"./CompositeItem-D6jDCgAH.js";import"./ToolbarRootContext-DaCQoKRW.js";import"./getDisabledMountTransitionStyles-BEchivte.js";import"./getPseudoElementBounds-BNheb4Iy.js";import"./chevron-down-x4h-9kMe.js";import"./index-Bxl9BKgt.js";import"./error-CvIXlX6i.js";import"./BaseCbacBanner-as2b2fdQ.js";import"./makeExternalStore-B-NF9qcV.js";import"./Tooltip-D_3BkBEK.js";import"./PopoverPopup-CDFsG2BZ.js";import"./debounce-D14wviNn.js";import"./useOsdkClient-CZN2Sm0O.js";import"./tick-Bf2DRJjf.js";import"./DropdownField-CnUC2D2t.js";import"./isEqual-DOxjg893.js";import"./withOsdkMetrics-DM8OHQYr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

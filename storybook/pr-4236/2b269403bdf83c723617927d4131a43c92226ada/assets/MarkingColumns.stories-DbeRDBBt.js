import{f as p,j as e}from"./iframe-htyY8WGh.js";import{O as i}from"./object-table-CxeVRikb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZEQ7CCm.js";import"./Table-CBPb2Ax7.js";import"./index-9XAE-P5N.js";import"./Dialog-FXtxmKtu.js";import"./cross-zUtY8fYt.js";import"./svgIconContainer-DDCQ6k8x.js";import"./useBaseUiId-B5naUVoF.js";import"./InternalBackdrop-sMqyjWxo.js";import"./composite-DLA5e3bM.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./index-DMt3BqCf.js";import"./useEventCallback-BPbziyI1.js";import"./SkeletonBar-Dr30uUnV.js";import"./LoadingCell-BZHL109m.js";import"./ColumnConfigDialog-BAxrkWGM.js";import"./DraggableList-Dw72zyKo.js";import"./search-BARUS6xQ.js";import"./Input-B_148gGT.js";import"./useControlled-jlfCPDon.js";import"./Button-CugfLHha.js";import"./small-cross-BG5UjiFv.js";import"./ActionButton-BGplWwX2.js";import"./Checkbox-CxNTxawd.js";import"./useValueChanged-BuXRFnHI.js";import"./CollapsiblePanel-D5f1Ks-a.js";import"./MultiColumnSortDialog-9e9gOjI_.js";import"./MenuTrigger-CM187Vaj.js";import"./CompositeItem-CuUp7unb.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./getDisabledMountTransitionStyles-DNIZXeN8.js";import"./getPseudoElementBounds-ehODIuKj.js";import"./chevron-down-CPTHUdZ2.js";import"./index-DWZoNjEc.js";import"./error-B5cHozqr.js";import"./BaseCbacBanner-BVUw-7jj.js";import"./makeExternalStore-CvyNaZuu.js";import"./Tooltip-wud2Jc0O.js";import"./PopoverPopup-VfPjnT9d.js";import"./debounce-BFJO43v6.js";import"./useOsdkClient-bA8p7394.js";import"./tick-Oy4Dyy5w.js";import"./DropdownField-BgjFXt3p.js";import"./isEqual-CwYdE02M.js";import"./withOsdkMetrics-B5xof_Ab.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

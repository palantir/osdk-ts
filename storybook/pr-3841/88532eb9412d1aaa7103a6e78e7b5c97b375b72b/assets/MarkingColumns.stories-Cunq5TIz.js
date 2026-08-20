import{f as p,j as e}from"./iframe-Bbl8xWS4.js";import{O as i}from"./object-table-Csi300vr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUAbRzmt.js";import"./Table-C6stjXeD.js";import"./index-BrhvBMro.js";import"./Dialog-CxqhZeM9.js";import"./cross-D1K3qdEd.js";import"./svgIconContainer-C49n10_C.js";import"./useBaseUiId-Cmt5VEHx.js";import"./InternalBackdrop-DQJVIwhZ.js";import"./composite-BZ5wkolO.js";import"./index-Dg_zHENz.js";import"./index-CHJ1j1l2.js";import"./index-CE5JSKtI.js";import"./useEventCallback-BqyCjoBA.js";import"./SkeletonBar-BtzllBK1.js";import"./LoadingCell-DJj0Q7IJ.js";import"./ColumnConfigDialog-DepBJ68H.js";import"./DraggableList-DT97Kib1.js";import"./search-BoObENrO.js";import"./Input-C7X_QVu0.js";import"./useControlled-DGf-N-MW.js";import"./Button-vDgXwn6I.js";import"./small-cross-DTh3t08g.js";import"./ActionButton-B0l2nlsG.js";import"./Checkbox-C7FrLcjj.js";import"./useValueChanged-1sJEL3iN.js";import"./CollapsiblePanel-j2kmvttF.js";import"./MultiColumnSortDialog-CAbQuHe5.js";import"./MenuTrigger-BHWoM-Q_.js";import"./CompositeItem-UpHYLeRj.js";import"./ToolbarRootContext-mlwQOMjb.js";import"./getDisabledMountTransitionStyles-DYMa362i.js";import"./getPseudoElementBounds-r4lx2DpE.js";import"./chevron-down-CguzkHKU.js";import"./index-Cg7IxkTK.js";import"./error-BL4iX6t3.js";import"./BaseCbacBanner-BYnRSoLP.js";import"./makeExternalStore-k_EKqWBg.js";import"./Tooltip-d-UN8rHt.js";import"./PopoverPopup-CwfkGrBk.js";import"./debounce-BFaUKRpC.js";import"./useOsdkClient-BVIzgYNI.js";import"./tick-CSFR0LjW.js";import"./DropdownField-DdP67yjj.js";import"./isEqual-v8lWUpOV.js";import"./withOsdkMetrics-D-pE8QrY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

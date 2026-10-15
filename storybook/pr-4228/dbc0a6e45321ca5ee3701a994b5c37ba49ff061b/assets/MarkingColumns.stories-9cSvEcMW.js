import{f as p,j as e}from"./iframe-CQsOKhp1.js";import{O as i}from"./object-table-BodawAB7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QCVrcnhn.js";import"./Table-eIUm1pnh.js";import"./index-Cfn5HHSj.js";import"./Dialog-CMVDjiQT.js";import"./cross-D4ZfN4mf.js";import"./svgIconContainer-qEMrR21W.js";import"./useBaseUiId-D94WIrG_.js";import"./InternalBackdrop-nIseF9Rd.js";import"./composite-blMZk3SM.js";import"./index-vi3ICmyv.js";import"./index-BeDrSC4b.js";import"./index-BLmYOq2n.js";import"./useEventCallback-Dg67wvUV.js";import"./SkeletonBar-tDQdvh_L.js";import"./LoadingCell-DnFFhmJl.js";import"./ColumnConfigDialog-CUy4jjTS.js";import"./DraggableList-BEe5wMUr.js";import"./search-BBkEdcYr.js";import"./Input-B-8EoJIN.js";import"./useControlled-BDZq96US.js";import"./Button-CPVt0M1Q.js";import"./small-cross-BAocrqgT.js";import"./ActionButton-BNS2aQod.js";import"./Checkbox-CzCCIDzo.js";import"./useValueChanged-DLXr5Lvo.js";import"./CollapsiblePanel-VrGZTHLb.js";import"./MultiColumnSortDialog-DybXdH_L.js";import"./MenuTrigger-CfjWuOh8.js";import"./CompositeItem-D0ilUgR4.js";import"./ToolbarRootContext-C5qJ1QrY.js";import"./getDisabledMountTransitionStyles-DrVS-sy5.js";import"./getPseudoElementBounds-q7Ny88y9.js";import"./chevron-down-BU_Ll11Q.js";import"./index-C1wW_rI9.js";import"./error-B_L6yULe.js";import"./BaseCbacBanner-TXSR6ONf.js";import"./makeExternalStore-IEAykGhy.js";import"./Tooltip-GVNd_jLu.js";import"./PopoverPopup-C0eQ0X_f.js";import"./debounce-XFs4JFin.js";import"./useOsdkClient-GTGeHZWx.js";import"./tick-CTireopl.js";import"./DropdownField-B28BWeII.js";import"./isEqual-DmuAvewm.js";import"./withOsdkMetrics-DTL1iOoJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

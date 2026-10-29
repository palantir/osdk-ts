import{f as p,j as e}from"./iframe-B4MgyMWl.js";import{O as i}from"./object-table-DH_X6CMQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUOdkVYn.js";import"./Table-DzrzPrUN.js";import"./index-CWrwK-HJ.js";import"./Dialog-CDzhEmLD.js";import"./cross-DeZ5LgCs.js";import"./svgIconContainer-DSK9BMKz.js";import"./useBaseUiId-cePy-Fka.js";import"./InternalBackdrop-DCdVc_fO.js";import"./composite-CAyP_TTE.js";import"./index-fmJhNd3L.js";import"./index-CyhRYA9d.js";import"./index-DqbVp-Pn.js";import"./useEventCallback-D3NXkfC-.js";import"./SkeletonBar-cG_KH1yq.js";import"./LoadingCell-BjBvMitl.js";import"./ColumnConfigDialog-CQQCXpXv.js";import"./DraggableList-D4-pid7-.js";import"./search-DD9Ps7Xi.js";import"./Input-DyGREfir.js";import"./useControlled-CqJ99-8o.js";import"./Button-CpaCdx-9.js";import"./small-cross-DDNekb4S.js";import"./ActionButton-C6ToF_1u.js";import"./Checkbox-gRAq5P8_.js";import"./useValueChanged-Dv5oraiV.js";import"./CollapsiblePanel-ECfDnot5.js";import"./MultiColumnSortDialog-Bsdkp2ea.js";import"./MenuTrigger-BHmlE0S3.js";import"./CompositeItem-Brr5mEPn.js";import"./ToolbarRootContext-BOMUT60A.js";import"./getDisabledMountTransitionStyles-CXsfR7z_.js";import"./getPseudoElementBounds-DxzYEc8w.js";import"./chevron-down-ie3vWH8s.js";import"./index-iqc6oGJg.js";import"./error-6geuwXkd.js";import"./BaseCbacBanner-ncoZ0sEj.js";import"./makeExternalStore-DUbcYQez.js";import"./Tooltip-D9C0Qo0s.js";import"./PopoverPopup-Cokuf9G4.js";import"./debounce-CCX8N0To.js";import"./useOsdkClient-D1uuFUvl.js";import"./tick-xz3SeBYf.js";import"./DropdownField-ksl0RW3R.js";import"./isEqual-Bqyg8bbd.js";import"./withOsdkMetrics-DM07Q-qZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

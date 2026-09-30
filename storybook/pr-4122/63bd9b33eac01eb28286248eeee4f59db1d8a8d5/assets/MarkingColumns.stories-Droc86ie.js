import{f as p,j as e}from"./iframe-CUZRoNNv.js";import{O as i}from"./object-table-B7I8IXEY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CrAnAkNd.js";import"./Table-C3wyRrA6.js";import"./index-DyJF2RgL.js";import"./Dialog-Cn9uzKiW.js";import"./cross-CSe3kma4.js";import"./svgIconContainer-grpv7WkD.js";import"./useBaseUiId-BjYXt-Y8.js";import"./InternalBackdrop-B1oT2L8M.js";import"./composite-LGakJTZC.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./index-DyQ1LTEo.js";import"./useEventCallback-CRtaVkZD.js";import"./SkeletonBar-Cs_FVwUF.js";import"./LoadingCell-CRr7-OyQ.js";import"./ColumnConfigDialog-C3mzEEmr.js";import"./DraggableList-DueAX1k6.js";import"./search-XLYepbmJ.js";import"./Input-Db-zmbeF.js";import"./useControlled-SgSnNk_-.js";import"./Button-C0zF-FQF.js";import"./small-cross-DkU4qrA6.js";import"./ActionButton-Fv9YojAp.js";import"./Checkbox-B0LYl5tM.js";import"./useValueChanged-QEA79Kem.js";import"./CollapsiblePanel-CQdqgiNL.js";import"./MultiColumnSortDialog-DV5SVo22.js";import"./MenuTrigger-C_v7Fax_.js";import"./CompositeItem-BcoPKNgT.js";import"./ToolbarRootContext-8UU7wnms.js";import"./getDisabledMountTransitionStyles-CKffQk5p.js";import"./getPseudoElementBounds-C_t6F_mK.js";import"./chevron-down-GCVDTzTT.js";import"./index-DGzm9vGw.js";import"./error-DiHuZvPy.js";import"./BaseCbacBanner-DXPAW_JB.js";import"./makeExternalStore-BolJxNvY.js";import"./Tooltip-DSblGONh.js";import"./PopoverPopup-VaXrb5EK.js";import"./debounce-0YKxs7_M.js";import"./useOsdkClient-BzUYs6XV.js";import"./tick-BB3AulHS.js";import"./DropdownField-ChFA6G-L.js";import"./isEqual-CYQ9gmnQ.js";import"./withOsdkMetrics-CXfpKFLb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BcJO5Es9.js";import{O as i}from"./object-table-CXB6ageE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNqrSMrD.js";import"./Table-Ct6H-Odv.js";import"./index-D8zcFWOc.js";import"./Dialog-Cq0luLg-.js";import"./cross--P-I0ZkN.js";import"./svgIconContainer-0GuNzj2t.js";import"./useBaseUiId-C-k1aU7Y.js";import"./InternalBackdrop-Daw3hx3z.js";import"./composite-DPnLVqwa.js";import"./index-Cz5vlqVU.js";import"./index-DGYuc6nD.js";import"./index-CgaU1Mv5.js";import"./useEventCallback-qQBTb4zt.js";import"./SkeletonBar-SloCT5_B.js";import"./LoadingCell-BlzvGQe9.js";import"./ColumnConfigDialog-Df5ImCwa.js";import"./DraggableList-DwoSnA8e.js";import"./search-Q8aG5QMJ.js";import"./Input-8svXG8BP.js";import"./useControlled-CHN1pvcO.js";import"./Button-CmxEtBkN.js";import"./small-cross-DwoR8P_C.js";import"./ActionButton-Dd7X93sQ.js";import"./Checkbox-D5yelIY9.js";import"./useValueChanged-RvJvZ_Cg.js";import"./CollapsiblePanel-Cbn1Pxju.js";import"./MultiColumnSortDialog-CXxzUhP5.js";import"./MenuTrigger-pcHAjet2.js";import"./CompositeItem-B0brZGqV.js";import"./ToolbarRootContext-Bz5wpC0n.js";import"./getDisabledMountTransitionStyles-D45SEq1w.js";import"./getPseudoElementBounds-D8yU25vd.js";import"./chevron-down-BeaiUZln.js";import"./index-BGEt1deN.js";import"./error-D43ZO7i7.js";import"./BaseCbacBanner-DfZjQn6s.js";import"./makeExternalStore-CxoTebDy.js";import"./Tooltip-DQHXhc1k.js";import"./PopoverPopup-BVaQ5qjk.js";import"./debounce-Dvhb1WX-.js";import"./useOsdkClient-Du4zQHa2.js";import"./tick-9lyxa2jh.js";import"./DropdownField-C9_fke66.js";import"./isEqual-DDTFGPGr.js";import"./withOsdkMetrics-V7GcuCIR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

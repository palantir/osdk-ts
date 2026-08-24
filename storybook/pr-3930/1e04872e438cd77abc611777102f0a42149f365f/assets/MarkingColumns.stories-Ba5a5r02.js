import{f as p,j as e}from"./iframe-PnDOzCid.js";import{O as i}from"./object-table-D4EwzI8j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHN2PTV1.js";import"./Table-Dhykx4ye.js";import"./index-CTuOq2_n.js";import"./Dialog-nsTWjBko.js";import"./cross-CR6LhqMg.js";import"./svgIconContainer-DY8hFB-6.js";import"./useBaseUiId-Br9Pyha2.js";import"./InternalBackdrop-CuNeBhky.js";import"./composite-ssNpx6D9.js";import"./index-BBtHZFB8.js";import"./index-BPz2iuz0.js";import"./index-DmaFqf5D.js";import"./useEventCallback-CD9glGCH.js";import"./SkeletonBar-D4GaeW64.js";import"./LoadingCell-CozaopMH.js";import"./ColumnConfigDialog-5JVMlay9.js";import"./DraggableList-CM5iWscv.js";import"./search-C0Gxo9Ly.js";import"./Input-C2eDGT_k.js";import"./useControlled-B8PotZCC.js";import"./Button-ClDfXYXt.js";import"./small-cross-6gjgiPBS.js";import"./ActionButton-Cxcvr76B.js";import"./Checkbox-DXeuKucW.js";import"./useValueChanged-DvWNgcqY.js";import"./CollapsiblePanel-CgXH4PmC.js";import"./MultiColumnSortDialog-BBj9KWuk.js";import"./MenuTrigger-CzMzu05o.js";import"./CompositeItem-JOSb0DW0.js";import"./ToolbarRootContext-MEy76afQ.js";import"./getDisabledMountTransitionStyles-Bu2kofYy.js";import"./getPseudoElementBounds-C6qHOPfm.js";import"./chevron-down-B6MD1Z1F.js";import"./index-Sp2kgai2.js";import"./error-ChR6Rzxj.js";import"./BaseCbacBanner-BJuG5Mgr.js";import"./makeExternalStore-D0koECKe.js";import"./Tooltip-BvRJQXfz.js";import"./PopoverPopup-DtBxplNL.js";import"./debounce-DSTpoPBU.js";import"./useOsdkClient-Bwd7OyF1.js";import"./tick-_BdQKNVX.js";import"./DropdownField-CkGZrtLk.js";import"./isEqual-5k6Ef4JB.js";import"./withOsdkMetrics-CyQcXoDt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

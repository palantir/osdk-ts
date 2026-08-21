import{f as p,j as e}from"./iframe-BbGTTDAj.js";import{O as i}from"./object-table-BDL8CTE7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BnxT1wyu.js";import"./index-IgulouNK.js";import"./Dialog-nlhw3diw.js";import"./cross-DhMDfvf2.js";import"./svgIconContainer-CVfAB6vd.js";import"./useBaseUiId-CQunNH1M.js";import"./InternalBackdrop-Hm20khzg.js";import"./composite-CR123KzM.js";import"./index-C8Uf5ELJ.js";import"./index-Df7q0QUE.js";import"./index-BUXx6su9.js";import"./useEventCallback-B2gRlxXx.js";import"./SkeletonBar-Ds_YvgAw.js";import"./LoadingCell-kYVMT4tS.js";import"./ColumnConfigDialog-CtClxv69.js";import"./DraggableList-DNiVSkcY.js";import"./search-CnT_vxoB.js";import"./Input-DnyVFM7E.js";import"./useControlled-BHPRGL2o.js";import"./Button-CN3p9mDI.js";import"./small-cross-Drx8-h4e.js";import"./ActionButton-DyvnNkxo.js";import"./Checkbox-BdyDWm05.js";import"./useValueChanged-CBTjuxmu.js";import"./CollapsiblePanel-Dga8aJEk.js";import"./MultiColumnSortDialog-D2nXUlx0.js";import"./MenuTrigger-DrbldR93.js";import"./CompositeItem-DyOo-XaB.js";import"./ToolbarRootContext-YNljF2Js.js";import"./getDisabledMountTransitionStyles-eCx2DT2T.js";import"./getPseudoElementBounds-CqmJdcHl.js";import"./chevron-down-wz6-g0K-.js";import"./index-Bjc-9Q8Y.js";import"./error-BllpxWel.js";import"./BaseCbacBanner-C7sNo_hZ.js";import"./makeExternalStore-B_7bdAjg.js";import"./Tooltip-CUzSWWIO.js";import"./PopoverPopup-x705-9aP.js";import"./debounce-DgBX7KpR.js";import"./useOsdkClient-B319hJFg.js";import"./tick-bTbyimze.js";import"./DropdownField-C5jrXGNu.js";import"./isEqual-BirJE5rZ.js";import"./withOsdkMetrics-CwndHWS3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-DZ1IfAc9.js";import{O as i}from"./object-table-n4fDDaZs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FioNmaYc.js";import"./Table-DAy0iIvq.js";import"./index-DlgarWWe.js";import"./Dialog-D6NnjYzR.js";import"./cross-9jSrVJX7.js";import"./svgIconContainer-BMPgpSIt.js";import"./useBaseUiId-D5mFLOde.js";import"./InternalBackdrop-71qlqQsM.js";import"./composite-naZtYWyA.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./index-D8BPITj7.js";import"./useEventCallback-CivKyEqa.js";import"./SkeletonBar-Poc6NUlG.js";import"./LoadingCell-C25Ly4Io.js";import"./ColumnConfigDialog-Bv-NYj8T.js";import"./DraggableList-DTTybYEG.js";import"./search-DX_EHnIw.js";import"./Input-BVSO0T6H.js";import"./useControlled-CK492yS4.js";import"./Button-CEdONvfh.js";import"./small-cross-k0iuPUUj.js";import"./ActionButton-C59C2SC2.js";import"./Checkbox-B4MDdy_R.js";import"./useValueChanged-DOaXJk-l.js";import"./CollapsiblePanel-DFS5HvYG.js";import"./MultiColumnSortDialog-D2Zs5eyA.js";import"./MenuTrigger-BMDKhIr4.js";import"./CompositeItem-BRIYvu0B.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./getDisabledMountTransitionStyles-CbTtYX3G.js";import"./getPseudoElementBounds-oqBrWOWr.js";import"./chevron-down-ClTS_TF6.js";import"./index-DqffqbdW.js";import"./error-CK66UUTY.js";import"./BaseCbacBanner-MlktgPHb.js";import"./makeExternalStore-DT9sfKcd.js";import"./Tooltip-BVGKe7Gt.js";import"./isObject-BzWFEdJL.js";import"./debounce--VQS0Dqu.js";import"./useOsdkClient-G1l4twLo.js";import"./tick-DJ6zublk.js";import"./DropdownField-Co-1Lqep.js";import"./isEqual-DYFiJ8mG.js";import"./_baseIsEqual-CfKgNQ0W.js";import"./withOsdkMetrics-DkI7OiMa.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

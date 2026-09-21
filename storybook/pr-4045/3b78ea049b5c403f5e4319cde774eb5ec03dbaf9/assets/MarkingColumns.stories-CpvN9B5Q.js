import{f as p,j as e}from"./iframe-DGxn_FfA.js";import{O as i}from"./object-table-BxRemYk8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-K_1Peegk.js";import"./Table-CbxiFHKY.js";import"./index-DRUA9-Xo.js";import"./Dialog-jSwZKnpK.js";import"./cross-BbLFpAfM.js";import"./svgIconContainer-BTT_iTBU.js";import"./useBaseUiId-CmBmMESo.js";import"./InternalBackdrop-GnU91IOM.js";import"./composite-DsQ0vKV8.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./index-BM9tlzVi.js";import"./useEventCallback-DuO9QBbh.js";import"./SkeletonBar-CDppLlgJ.js";import"./LoadingCell-QjotfTLw.js";import"./ColumnConfigDialog-Bv7VfvsR.js";import"./DraggableList-CpRUxk29.js";import"./search-D7bJBEOM.js";import"./Input-vHhrLUUa.js";import"./useControlled-SGdv5sh_.js";import"./Button-dnprDbN8.js";import"./small-cross-kJ_hIE7y.js";import"./ActionButton-Can6ePob.js";import"./Checkbox-Bn2M37w9.js";import"./useValueChanged-DwzXRX5T.js";import"./CollapsiblePanel-DkNf_69s.js";import"./MultiColumnSortDialog-CtiTwMcM.js";import"./MenuTrigger-B96hJs3R.js";import"./CompositeItem-CqRwnn1g.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./getDisabledMountTransitionStyles-Bg4xxQbV.js";import"./getPseudoElementBounds-C1aLo5q2.js";import"./chevron-down-kbFfOEdC.js";import"./index-BzK3-5ei.js";import"./error-GM-hvFd6.js";import"./BaseCbacBanner-BJef3Sds.js";import"./makeExternalStore-Bpd5p4CZ.js";import"./Tooltip-Jif4AIdv.js";import"./PopoverPopup-D6mETjM4.js";import"./debounce-CkaWxo8p.js";import"./useOsdkClient-qyzcppCx.js";import"./tick-Ddjt3-Xj.js";import"./DropdownField-CN6UkTVW.js";import"./isEqual-DDUfx3V0.js";import"./withOsdkMetrics-S3mu6MhE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

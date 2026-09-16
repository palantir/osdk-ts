import{f as p,j as e}from"./iframe-CPLN-ZbK.js";import{O as i}from"./object-table-DKcSgb8t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cut80g1D.js";import"./index-Cjge5u51.js";import"./Dialog-hcu_H2b0.js";import"./cross-DkzWzcR0.js";import"./svgIconContainer-DJorehzp.js";import"./useBaseUiId-BCid-a8z.js";import"./InternalBackdrop-H5MHz81r.js";import"./composite-DajkLm6o.js";import"./index-CcftVgrB.js";import"./index-CTI5qcoR.js";import"./index-8miuT5ZT.js";import"./useEventCallback-CwloqOs8.js";import"./SkeletonBar-BsNNEfxd.js";import"./LoadingCell-CUCPZmF_.js";import"./ColumnConfigDialog-CQjmuqWg.js";import"./DraggableList-DXMqTDes.js";import"./search-vlNNCCei.js";import"./Input-DTYOcpRg.js";import"./useControlled-CjsGTJEt.js";import"./Button-CwRu4Y7L.js";import"./small-cross-vfsVsU9u.js";import"./ActionButton-DQdOoyph.js";import"./Checkbox-C_skPkNa.js";import"./useValueChanged-D-cfwHFM.js";import"./CollapsiblePanel-D7FGbcZd.js";import"./MultiColumnSortDialog-6_vgxtTp.js";import"./MenuTrigger-DJI3OVra.js";import"./CompositeItem-2xQpagLs.js";import"./ToolbarRootContext-Bf2tT3Hj.js";import"./getDisabledMountTransitionStyles-BAd08XlN.js";import"./getPseudoElementBounds-CVyFvNKv.js";import"./chevron-down-jQvrZLIb.js";import"./index-C_Kl0KC7.js";import"./error-CfVtgGYX.js";import"./BaseCbacBanner-C0Cuvy9a.js";import"./makeExternalStore-GKMGQTfP.js";import"./Tooltip-D82cN-2b.js";import"./PopoverPopup-B1UMbbjh.js";import"./debounce-BHYl5DP-.js";import"./useOsdkClient-DQiZ2tYF.js";import"./tick-COEqwA56.js";import"./DropdownField-BZy0Vjfn.js";import"./isEqual-Jd-qeLdg.js";import"./withOsdkMetrics-DxyXNPGX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

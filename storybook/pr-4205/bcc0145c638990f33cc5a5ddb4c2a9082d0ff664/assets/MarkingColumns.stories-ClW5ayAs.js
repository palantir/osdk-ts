import{f as p,j as e}from"./iframe-Dmb-mlzV.js";import{O as i}from"./object-table-BvPbr9V5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MIGgaMld.js";import"./Table-DBxmMaHT.js";import"./index-Ds3o4atQ.js";import"./Dialog-Cx8yE6Zj.js";import"./cross-_swrXFsE.js";import"./svgIconContainer-DAFeyB5Y.js";import"./useBaseUiId-Bl-3cYCN.js";import"./InternalBackdrop-Ckq1He5X.js";import"./composite-6EKatbQT.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./index-BSTL75vv.js";import"./useEventCallback-BF2Zplqh.js";import"./SkeletonBar-Cl_UfBJ6.js";import"./LoadingCell-C0Ss7wVX.js";import"./ColumnConfigDialog-BcQK_pJk.js";import"./DraggableList-C6Z51B2x.js";import"./search-DMyFpELI.js";import"./Input-CBzkX4z8.js";import"./useControlled-BM7SnBgs.js";import"./Button-8xVTVGsk.js";import"./small-cross-CQzmVcPc.js";import"./ActionButton-BcxqHeYY.js";import"./Checkbox-CPQeqY_8.js";import"./useValueChanged-DaiSG_CT.js";import"./CollapsiblePanel-TUHNx-2l.js";import"./MultiColumnSortDialog-D3guv5lw.js";import"./MenuTrigger-BC5LGWiT.js";import"./CompositeItem-BWXXLF3M.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./getDisabledMountTransitionStyles-CxV8SjgV.js";import"./getPseudoElementBounds-ZV-MtXgM.js";import"./chevron-down-BZ7oFKmu.js";import"./index-DZas1VAi.js";import"./error-XRi8aH0l.js";import"./BaseCbacBanner-B6NVk--o.js";import"./makeExternalStore-gkjC6p4e.js";import"./Tooltip-DA3P9wam.js";import"./PopoverPopup-CXUJ3lCx.js";import"./debounce-DOzDLznc.js";import"./useOsdkClient-DIHMDKUR.js";import"./tick-CFwIKfat.js";import"./DropdownField-DuGjp-tV.js";import"./isEqual-BPWMISy8.js";import"./withOsdkMetrics-CiUTqFkS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

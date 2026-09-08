import{f as p,j as e}from"./iframe-lO6oHnL4.js";import{O as i}from"./object-table-9DuCQ3cd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZ1zKWtp.js";import"./Table-DMY1ZxT7.js";import"./index-Dl6F1U12.js";import"./Dialog-BmnLqCjA.js";import"./cross-CmTyvcmm.js";import"./svgIconContainer-BCDfPS-8.js";import"./useBaseUiId-B846_agE.js";import"./InternalBackdrop-CRBsd0Rp.js";import"./composite-BjZ2VOoR.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./index-BxwWnAcj.js";import"./useEventCallback-KTIDuvyR.js";import"./SkeletonBar-C2FZeoWT.js";import"./LoadingCell-CgqmsXgw.js";import"./ColumnConfigDialog-e8Nvt7tr.js";import"./DraggableList-DGwYVxk8.js";import"./search-BNOG_dw_.js";import"./Input-oxwV_krW.js";import"./useControlled-D27zJnZ2.js";import"./Button-8GX9Y-dN.js";import"./small-cross-BcxRCy93.js";import"./ActionButton-O8N4TA40.js";import"./Checkbox-BKHMpGsH.js";import"./useValueChanged-Cwy5ekip.js";import"./CollapsiblePanel-CYfUcVRr.js";import"./MultiColumnSortDialog-nvRpfudt.js";import"./MenuTrigger-DXR1k6sj.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./getDisabledMountTransitionStyles-Cx8i-UAD.js";import"./getPseudoElementBounds-CicDtyQT.js";import"./chevron-down-0zZDUaq4.js";import"./index-Cx18vdAy.js";import"./error-CA5mje1x.js";import"./BaseCbacBanner-IhJ9we9x.js";import"./makeExternalStore-CjtvZY1y.js";import"./Tooltip-BlvnSvUU.js";import"./PopoverPopup-ci5-n8v2.js";import"./debounce-CgoayCyT.js";import"./useOsdkClient-DHPHVa2B.js";import"./tick-xT1qICzH.js";import"./DropdownField-Db4HRbpT.js";import"./isEqual-GLgBae2P.js";import"./withOsdkMetrics-BoEX6J3t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-c92eWBTm.js";import{O as i}from"./object-table-Urt2J0sH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_mEB70A.js";import"./Table-D1liNC7d.js";import"./index-BNyL3dmc.js";import"./Dialog-BIitP0kQ.js";import"./cross-DLdKHUYj.js";import"./svgIconContainer-BR-sWY_B.js";import"./useBaseUiId-CZByDVJ8.js";import"./InternalBackdrop-Cjgj0ob4.js";import"./composite-DB4Ar6eT.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./index-CE_IpDOF.js";import"./useEventCallback-SiGShz6K.js";import"./SkeletonBar-5Mr_eOxZ.js";import"./LoadingCell-6WPtGaJN.js";import"./ColumnConfigDialog-CebDBM7r.js";import"./DraggableList-DI6uBsNq.js";import"./search-DUI8Keyd.js";import"./Input-DX2QK7C5.js";import"./useControlled-Caf6eOHS.js";import"./Button-BhSQs9el.js";import"./small-cross-B-PGSW1r.js";import"./ActionButton-D2-2fNqp.js";import"./Checkbox-BgbSeEa4.js";import"./useValueChanged-BTnCsynL.js";import"./CollapsiblePanel-B-G40PCw.js";import"./MultiColumnSortDialog-yr4c3WdG.js";import"./MenuTrigger-11hVYbaR.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./getDisabledMountTransitionStyles-CX00gzMZ.js";import"./getPseudoElementBounds-9oMqqWVm.js";import"./chevron-down-Bx1a8QAg.js";import"./index-wu_kXnGO.js";import"./error-10PygTue.js";import"./BaseCbacBanner-C6A-9fTV.js";import"./makeExternalStore-D7JaTI9q.js";import"./Tooltip-g3VbHlYI.js";import"./PopoverPopup-OY5zmnj_.js";import"./debounce-Q6oraD_R.js";import"./useOsdkClient-C_evHfwa.js";import"./tick-paWTMZXM.js";import"./DropdownField-B_YoHs2i.js";import"./isEqual-DfwbMjk2.js";import"./withOsdkMetrics-3UcJmunM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

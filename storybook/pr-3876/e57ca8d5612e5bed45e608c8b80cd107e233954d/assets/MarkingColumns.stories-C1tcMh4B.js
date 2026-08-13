import{f as p,j as e}from"./iframe-DqgxXeY0.js";import{O as i}from"./object-table-BHsz3jip.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-swuqDPIZ.js";import"./Table-m-MxvkKL.js";import"./index-Fs4ToPVt.js";import"./Dialog-C78ZhMnJ.js";import"./cross-B3HJExXl.js";import"./svgIconContainer-DJKRTo9s.js";import"./useBaseUiId-BHCjvXGp.js";import"./InternalBackdrop-ilFJBb7D.js";import"./composite-CgO0yOYX.js";import"./index-Bz8pQAXU.js";import"./index-Ber0h4Jn.js";import"./index-DvJQf8Bx.js";import"./useEventCallback-Cl40EsWw.js";import"./SkeletonBar-dk6L44dy.js";import"./LoadingCell-C7i2-eJ3.js";import"./ColumnConfigDialog-CKDDhK2e.js";import"./DraggableList-BajbNLhq.js";import"./search-Xkmq_vNk.js";import"./Input-hYuVgO52.js";import"./useControlled-CXVHehbk.js";import"./Button-D3n3BMyb.js";import"./small-cross-D9cFuYQm.js";import"./ActionButton-Dx0u_s-J.js";import"./Checkbox-BVtxtd_T.js";import"./useValueChanged-CWSAXj-_.js";import"./CollapsiblePanel-yGA5DenS.js";import"./MultiColumnSortDialog-GOKqrKQb.js";import"./MenuTrigger-BnVfq4xJ.js";import"./CompositeItem-Bs3OF5D8.js";import"./ToolbarRootContext-CCZNhx4y.js";import"./getDisabledMountTransitionStyles-L5cNDrBv.js";import"./getPseudoElementBounds-B1lSVoga.js";import"./chevron-down-CeLBV2f1.js";import"./index-LCxHta6h.js";import"./error-CoHaOVWU.js";import"./BaseCbacBanner-jP_LHP__.js";import"./makeExternalStore-iwrJkOaf.js";import"./Tooltip-B7aaw0SK.js";import"./PopoverPopup-C6-qD3UD.js";import"./debounce-15J3RxBk.js";import"./useOsdkClient-CqjG4PWJ.js";import"./tick-O_u0mHop.js";import"./DropdownField-BwOzQWj7.js";import"./isEqual-BckK8J1Q.js";import"./withOsdkMetrics-Bsc7ScXm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

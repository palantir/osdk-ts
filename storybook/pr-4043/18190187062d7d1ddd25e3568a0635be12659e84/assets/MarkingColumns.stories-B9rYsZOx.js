import{f as p,j as e}from"./iframe-B7clUVHt.js";import{O as i}from"./object-table-B0OtmNEY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CUPfdM8_.js";import"./Table-C0j8mc77.js";import"./index-BJuITS90.js";import"./Dialog-BIO7p1cc.js";import"./cross-CmeT_My2.js";import"./svgIconContainer-BJLnErPQ.js";import"./useBaseUiId-DVrDHycI.js";import"./InternalBackdrop-BrQ7JKiG.js";import"./composite-DyK7yBlQ.js";import"./index-aq1Wm6Yn.js";import"./index-DD_iU2uX.js";import"./index-BsCvtptR.js";import"./useEventCallback-F6nzKXN_.js";import"./SkeletonBar-BLBNPoWa.js";import"./LoadingCell-vkjPFnAM.js";import"./ColumnConfigDialog-_2TwZLuM.js";import"./DraggableList-z0kMSsrK.js";import"./search-D5J8qnAm.js";import"./Input-CT_I8RKH.js";import"./useControlled-ccc4EKlt.js";import"./Button-BsEC03FF.js";import"./small-cross-BzBsHkLR.js";import"./ActionButton-CExZP-4d.js";import"./Checkbox-DctbVVEh.js";import"./useValueChanged-AsMuu_TV.js";import"./CollapsiblePanel-DR3Y8xjv.js";import"./MultiColumnSortDialog-C-vqjMra.js";import"./MenuTrigger-DnWS9EPS.js";import"./CompositeItem-DVh6-70_.js";import"./ToolbarRootContext-CjbBLH2h.js";import"./getDisabledMountTransitionStyles-2ly5ruH9.js";import"./getPseudoElementBounds-DC3vRuQo.js";import"./chevron-down-M1DCZVuw.js";import"./index-CjqIP0d4.js";import"./error-gkpqEfzK.js";import"./BaseCbacBanner-xMQZC0n7.js";import"./makeExternalStore-B3i8xKry.js";import"./Tooltip-CVdygfxv.js";import"./PopoverPopup-f3NfI19W.js";import"./debounce-B63E3hZn.js";import"./useOsdkClient-DBK_pZWR.js";import"./tick-CUlYlvRp.js";import"./DropdownField-B6cnd6bN.js";import"./isEqual-Dzm4OVig.js";import"./withOsdkMetrics-Tq1KK3ST.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

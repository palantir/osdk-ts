import{f as p,j as e}from"./iframe-BEK1shVf.js";import{O as i}from"./object-table-DwHvn_qH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuTZfPnC.js";import"./Table-DcNIkTh8.js";import"./index-BqkMqHUK.js";import"./Dialog-Dq_d4Qtr.js";import"./cross-eaaked_u.js";import"./svgIconContainer-B5e6FaMs.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./InternalBackdrop-Cyl8hjr5.js";import"./composite-_69CGg7n.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./index-X00-2pcl.js";import"./useEventCallback-D28FIM1T.js";import"./SkeletonBar-CHkjVGry.js";import"./LoadingCell-evw95-eh.js";import"./ColumnConfigDialog-AGFxXMn5.js";import"./DraggableList-CbW3a6g-.js";import"./search-BfhK71_u.js";import"./Input-p3RqWT-8.js";import"./useControlled-BrC9O3tj.js";import"./Button-BBBCKJre.js";import"./small-cross-BhzWxaHt.js";import"./ActionButton-CHEQyLj1.js";import"./Checkbox-DyoJb9ro.js";import"./useValueChanged-BMvgoEYe.js";import"./CollapsiblePanel-GTDy2Nz0.js";import"./MultiColumnSortDialog-BtXwT3vH.js";import"./MenuTrigger-BpOvNlAT.js";import"./CompositeItem-Zu9n7Vbm.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./getDisabledMountTransitionStyles-DhYgXSRI.js";import"./getPseudoElementBounds-COWWUprC.js";import"./chevron-down-DvnARLJ3.js";import"./index-CzyW3VIg.js";import"./error-BmGg8gRf.js";import"./BaseCbacBanner-C0RjraHn.js";import"./makeExternalStore-BMPgGjGI.js";import"./Tooltip-D9vmNOqa.js";import"./PopoverPopup-Ct5pPHVu.js";import"./debounce-DTuDZiq3.js";import"./useOsdkClient-CEA25Zmd.js";import"./tick-DpOTzWq3.js";import"./DropdownField-C02A1fDn.js";import"./isEqual-D1kWq22X.js";import"./withOsdkMetrics-Ckzv-T2_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

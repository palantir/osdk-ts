import{f as p,j as e}from"./iframe-D7EFQRRI.js";import{O as i}from"./object-table-PFoV4XE0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBMS08LA.js";import"./Table-BuA6YCn1.js";import"./index-B9Qvampu.js";import"./Dialog-DCtf_D6v.js";import"./cross-DpjEKdZW.js";import"./svgIconContainer-C7NvX0SX.js";import"./useBaseUiId-COi7p9FR.js";import"./InternalBackdrop-4x9DkIt7.js";import"./composite-Cv-Bf0NV.js";import"./index-rAm3g95R.js";import"./index-DDeQJ70A.js";import"./index-Y14U1RM4.js";import"./useEventCallback-GjhSB_CQ.js";import"./SkeletonBar-DW4oEvsQ.js";import"./LoadingCell-CE7jzKHL.js";import"./ColumnConfigDialog-COGB6M-r.js";import"./DraggableList-DS8uCYa1.js";import"./search-BPccI-R0.js";import"./Input-HTLW9b7o.js";import"./useControlled-Cf-FNH0o.js";import"./Button-CJHmLXwA.js";import"./small-cross-DDGaf3lk.js";import"./ActionButton-CCZJngrN.js";import"./Checkbox-BUPWu2pp.js";import"./useValueChanged-uhgfqj97.js";import"./CollapsiblePanel-CBYHu2Hi.js";import"./MultiColumnSortDialog-DWJA7UWz.js";import"./MenuTrigger-ClAX1aQN.js";import"./CompositeItem-CD0LNPn5.js";import"./ToolbarRootContext-D62k46w9.js";import"./getDisabledMountTransitionStyles-CFJHuyCX.js";import"./getPseudoElementBounds-BOIO0YwO.js";import"./chevron-down-i0CR3gCi.js";import"./index-Bs537rs3.js";import"./error-BRWfMQ2f.js";import"./BaseCbacBanner-CT8gtaHE.js";import"./makeExternalStore-BbrBxZRi.js";import"./Tooltip-D15tO1qp.js";import"./PopoverPopup-C_I4MKVN.js";import"./debounce-r8k1w_qp.js";import"./useOsdkClient-BEOdzoOt.js";import"./tick-CI4-naJe.js";import"./DropdownField-DMJHlGEY.js";import"./isEqual-DaJSkNti.js";import"./withOsdkMetrics-B9e4IhYZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

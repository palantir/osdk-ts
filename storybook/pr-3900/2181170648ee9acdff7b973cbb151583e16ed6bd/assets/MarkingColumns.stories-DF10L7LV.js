import{f as p,j as e}from"./iframe-m2fxxn3a.js";import{O as i}from"./object-table-Co-Q6jHl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wkPSwmAr.js";import"./Table-CJbVUNcD.js";import"./index-ByBw6x6u.js";import"./Dialog-CHI7KPwp.js";import"./cross-BjXIqjCw.js";import"./svgIconContainer-DSI33hOY.js";import"./useBaseUiId-DUlaUAbC.js";import"./InternalBackdrop-6ROzrmGv.js";import"./composite-BrA88D7Q.js";import"./index-DSw-eeDJ.js";import"./index-D_9lQBmv.js";import"./index-BNBfbysQ.js";import"./useEventCallback-B49kAxyt.js";import"./SkeletonBar-DSTs_14a.js";import"./LoadingCell-BZScBSiV.js";import"./ColumnConfigDialog-CaiccqAZ.js";import"./DraggableList-AYblD6NO.js";import"./search-CdVtB6NL.js";import"./Input-D0L01xSu.js";import"./useControlled-B65cfgNR.js";import"./Button-DeKiGiVH.js";import"./small-cross-BQdIyLz0.js";import"./ActionButton-Mjq4BYrm.js";import"./Checkbox-DicxMHcf.js";import"./useValueChanged-Bp4t2mo-.js";import"./CollapsiblePanel-BLUOZyAb.js";import"./MultiColumnSortDialog-DruHNqzX.js";import"./MenuTrigger-qcf8JcB3.js";import"./CompositeItem-CV8z8cEs.js";import"./ToolbarRootContext-CrhCu0KJ.js";import"./getDisabledMountTransitionStyles-qUK7fg53.js";import"./getPseudoElementBounds-CwvcssCs.js";import"./chevron-down-CsrzPGt_.js";import"./index-CyxliH8w.js";import"./error-E41DUfY_.js";import"./BaseCbacBanner-BK8GeR-x.js";import"./makeExternalStore-CtrMLH82.js";import"./Tooltip-DmuQYm1m.js";import"./PopoverPopup-wwpAfRbw.js";import"./debounce-D8Y2PRcP.js";import"./useOsdkClient-CVjbyjiN.js";import"./tick-Mt7tAvfN.js";import"./DropdownField-BsPjmbhu.js";import"./isEqual-BtYEUQSq.js";import"./withOsdkMetrics-6b_qk_af.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

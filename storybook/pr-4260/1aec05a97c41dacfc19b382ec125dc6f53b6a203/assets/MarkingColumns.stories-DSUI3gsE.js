import{f as p,j as e}from"./iframe-DQPhK9GU.js";import{O as i}from"./object-table-u1t353el.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BexD08qU.js";import"./Table-D0VrqxVa.js";import"./index-D7bWxKkV.js";import"./Dialog-DYMU0A_Q.js";import"./cross-Bz5ncAg7.js";import"./svgIconContainer-C-2S33jf.js";import"./useBaseUiId-BcnbbCrD.js";import"./InternalBackdrop-3e5_1pLw.js";import"./composite-D8rz_NRd.js";import"./index-COKR49Jt.js";import"./index-nU_uKQML.js";import"./index-BPuMxoe3.js";import"./useEventCallback-Ak9Y6Sg_.js";import"./SkeletonBar-BQMpvI0c.js";import"./LoadingCell-Q2SMPZFJ.js";import"./ColumnConfigDialog-BTMr9kD8.js";import"./DraggableList-D7WIyWaj.js";import"./search-DEKkH3rw.js";import"./Input-C-_mqWVh.js";import"./useControlled-wY0jaWl-.js";import"./Button-BMvHZDY9.js";import"./small-cross-DF-5DtWu.js";import"./ActionButton-DIbN-5yx.js";import"./Checkbox-DZ0ffxz9.js";import"./useValueChanged-D8JCzrrE.js";import"./CollapsiblePanel-CP7h0CHU.js";import"./MultiColumnSortDialog-C76o3UFs.js";import"./MenuTrigger-BD_E06dV.js";import"./CompositeItem-D17QBVCs.js";import"./ToolbarRootContext-DUYvPpGK.js";import"./getDisabledMountTransitionStyles-CPz_8zQf.js";import"./getPseudoElementBounds-DNc_fjpY.js";import"./chevron-down-CEtDqD55.js";import"./index-ueYSc4xO.js";import"./error-CMvmkLKQ.js";import"./BaseCbacBanner-BC4eJkdb.js";import"./makeExternalStore-BK4AXna6.js";import"./Tooltip-DCFHObTT.js";import"./PopoverPopup-BMwOXxZm.js";import"./debounce-BzHe_40F.js";import"./useOsdkClient-Ddu_dn5L.js";import"./tick-Dknq3fKL.js";import"./DropdownField-CW3rWXJa.js";import"./isEqual-BK6H-Cg9.js";import"./withOsdkMetrics-BToX27Ix.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

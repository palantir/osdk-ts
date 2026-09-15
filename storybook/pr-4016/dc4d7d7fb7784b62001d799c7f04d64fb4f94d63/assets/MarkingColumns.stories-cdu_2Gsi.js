import{f as p,j as e}from"./iframe-jTK2SxfT.js";import{O as i}from"./object-table-DuYdPEbq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qQ4kAc2Q.js";import"./Table-CI6bE9BX.js";import"./index-Pz1htbT9.js";import"./Dialog-CxrPO91E.js";import"./cross-DrKqX7p4.js";import"./svgIconContainer-GdUN0nSr.js";import"./useBaseUiId--4cJ9Rmo.js";import"./InternalBackdrop-CqMji1ba.js";import"./composite-iOJ2PvUN.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./index-BIecch-_.js";import"./useEventCallback-BXSFSqbt.js";import"./SkeletonBar-DhQdItRf.js";import"./LoadingCell-C_9TppnX.js";import"./ColumnConfigDialog-BYyn2yAH.js";import"./DraggableList-CocgqlAW.js";import"./search-DswSvB8a.js";import"./Input-C57k62_6.js";import"./useControlled-qZTm53K2.js";import"./Button-DS-hfsg1.js";import"./small-cross-dkyGS67d.js";import"./ActionButton-DQzcN8W-.js";import"./Checkbox-CAINAHVp.js";import"./useValueChanged-BPMD3jVI.js";import"./CollapsiblePanel-XMUuL-v2.js";import"./MultiColumnSortDialog-CGjau2t9.js";import"./MenuTrigger-DP_-62i6.js";import"./CompositeItem-Cq-oGUuG.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./getDisabledMountTransitionStyles-D6i264P_.js";import"./getPseudoElementBounds-DVNAWduU.js";import"./chevron-down-B-85uVWr.js";import"./index-DyHfw1UB.js";import"./error-BtNAl0M5.js";import"./BaseCbacBanner-DyeqWZGP.js";import"./makeExternalStore-Cfa2Qg1q.js";import"./Tooltip-BbpwuXGl.js";import"./PopoverPopup-BLKdDIb7.js";import"./debounce-DtxvrnBI.js";import"./useOsdkClient-CQTQjoea.js";import"./tick-jbVXP2LR.js";import"./DropdownField-Bvdotu43.js";import"./isEqual-Duv6Tt10.js";import"./withOsdkMetrics-DXkox581.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

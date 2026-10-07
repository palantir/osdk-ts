import{f as p,j as e}from"./iframe-Cwq9LQgh.js";import{O as i}from"./object-table-DUYwzwT-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwR6Pfp9.js";import"./Table-DBQdFyjh.js";import"./index-CtMIqXL_.js";import"./Dialog-BtzdOpOy.js";import"./cross-Dfvafrcv.js";import"./svgIconContainer-Dbb1xWM-.js";import"./useBaseUiId-D-o9ssMY.js";import"./InternalBackdrop-W9C_vQZ5.js";import"./composite-CN6FxDtP.js";import"./index-DWCgAU1r.js";import"./index-BEyE-4n9.js";import"./index-C6OOeUvK.js";import"./useEventCallback-Dvol8fVg.js";import"./SkeletonBar-ZRgqtK8J.js";import"./LoadingCell-BJ2ttYqs.js";import"./ColumnConfigDialog-Bt3KOXHF.js";import"./DraggableList-PJTZj0V4.js";import"./search-DyrwlR15.js";import"./Input-COyT4omE.js";import"./useControlled-BO63cc37.js";import"./Button-C7rjw-Q7.js";import"./small-cross-CmJytNPv.js";import"./ActionButton-DGHUEF7_.js";import"./Checkbox-CyIf6GSG.js";import"./useValueChanged-DfaWuJmu.js";import"./CollapsiblePanel-fliMZylf.js";import"./MultiColumnSortDialog-D-Dhg4ie.js";import"./MenuTrigger-C2camDfs.js";import"./CompositeItem-B62zciM4.js";import"./ToolbarRootContext-nSskdiih.js";import"./getDisabledMountTransitionStyles-EwNk7y8k.js";import"./getPseudoElementBounds-coD1VMym.js";import"./chevron-down-Cm38Y6L5.js";import"./index-C9VhUtVl.js";import"./error-DXeSegvi.js";import"./BaseCbacBanner-CYI7KT6N.js";import"./makeExternalStore-DDN6NSWJ.js";import"./Tooltip-BfRGVA3r.js";import"./PopoverPopup-CiWAYdx8.js";import"./debounce-VeRvPs6A.js";import"./useOsdkClient-CYpWzT_O.js";import"./tick-Stga4Wt2.js";import"./DropdownField-pOrv2Wux.js";import"./isEqual-DTFGN-6w.js";import"./withOsdkMetrics-CKuskwhT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

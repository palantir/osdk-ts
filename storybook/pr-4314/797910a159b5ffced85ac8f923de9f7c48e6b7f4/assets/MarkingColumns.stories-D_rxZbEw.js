import{f as p,j as e}from"./iframe-Cu1bkUV2.js";import{O as i}from"./object-table-DurmvQoB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByBgFQo4.js";import"./Table-Y1FWE3IE.js";import"./index-D8Vgs137.js";import"./Dialog-DVWo0jsn.js";import"./cross-CpkrEpF5.js";import"./svgIconContainer-Dtkj8beD.js";import"./useBaseUiId-CsOE9eY7.js";import"./InternalBackdrop-C8f9FJlV.js";import"./composite-CI-SY_Qx.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./index-CUR5Eq6E.js";import"./useEventCallback-BtQ8PHNi.js";import"./SkeletonBar-Bq8PEonM.js";import"./LoadingCell-zA0x8rnT.js";import"./ColumnConfigDialog-Bm2LYWhb.js";import"./DraggableList-BKF9Kuwl.js";import"./search-DrsueRnd.js";import"./Input-DJ6MiMh_.js";import"./useControlled-ZBCcjOJi.js";import"./Button-DZYZZvZz.js";import"./small-cross-B1S7LnfD.js";import"./ActionButton-DH9h44Al.js";import"./Checkbox-CJqLusV1.js";import"./useValueChanged-DYWR0khf.js";import"./CollapsiblePanel-zk9ZxzpR.js";import"./MultiColumnSortDialog-CUpRvVWU.js";import"./MenuTrigger-B1Lm0LL5.js";import"./CompositeItem-h8YISAEh.js";import"./ToolbarRootContext-BY5M87wV.js";import"./getDisabledMountTransitionStyles-Butv2vF5.js";import"./getPseudoElementBounds-BRoXmMe-.js";import"./chevron-down-BybrbSIU.js";import"./index-BqaXp55y.js";import"./error-IUDeQ-Lf.js";import"./BaseCbacBanner-0mX1MplM.js";import"./makeExternalStore-3zKJ5_AP.js";import"./Tooltip-CT4INsO4.js";import"./PopoverPopup-D2wQ8s1I.js";import"./debounce-BB3252tl.js";import"./useOsdkClient-BSCp6sZ5.js";import"./tick-BzU5rGKz.js";import"./DropdownField-Cx1jh9K8.js";import"./isEqual-DKH62cLk.js";import"./withOsdkMetrics-DT7zQxuO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

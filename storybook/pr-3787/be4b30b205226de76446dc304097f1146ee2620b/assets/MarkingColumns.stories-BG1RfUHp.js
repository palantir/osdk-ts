import{f as p,j as e}from"./iframe-CsnoPo4e.js";import{O as i}from"./object-table-Dldqrjjm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UQcfqh8j.js";import"./Table-BTxYy1_w.js";import"./index-DZ3qlG1l.js";import"./Dialog-5YgEm-s6.js";import"./cross-BPR_-69Q.js";import"./svgIconContainer-CFRCp5eS.js";import"./useBaseUiId-Dk3ss80W.js";import"./InternalBackdrop-BY7A23Y2.js";import"./composite-BdrpEZOa.js";import"./index-BFy79Amf.js";import"./index-Bq5UoBBM.js";import"./index-BYQYU-5a.js";import"./useEventCallback-Cx9_0ZLB.js";import"./SkeletonBar-Dzn2oFUr.js";import"./LoadingCell-D7DEjcGg.js";import"./ColumnConfigDialog-BoXAbGCb.js";import"./DraggableList-eg49cQQG.js";import"./search-CZllTW2C.js";import"./Input-CSBvwDxa.js";import"./useControlled-CZuH-mvg.js";import"./isEqual-C_gmFGsA.js";import"./isObject-BWSgJwU1.js";import"./Button-DLN9VIMw.js";import"./ActionButton-BA8Yg624.js";import"./Checkbox-WULFa6we.js";import"./useValueChanged-DyrHwSjM.js";import"./CollapsiblePanel-h2tgmdHK.js";import"./MultiColumnSortDialog-CemaFyHy.js";import"./MenuTrigger-CvpENYNt.js";import"./CompositeItem-Bd6jvFk6.js";import"./ToolbarRootContext-DniWRCBD.js";import"./getDisabledMountTransitionStyles-DOU6cUq0.js";import"./getPseudoElementBounds-mePDcOZc.js";import"./chevron-down-2qd0pr4B.js";import"./index-JQtzoL2b.js";import"./error-GZDgkGyI.js";import"./BaseCbacBanner-CzbfLvv9.js";import"./makeExternalStore-3T-oM2Ef.js";import"./Tooltip-CN-YZsrK.js";import"./PopoverPopup-D2DNd5Pp.js";import"./toNumber-f0pSYljt.js";import"./useOsdkClient-u5ArgWr9.js";import"./tick-CXkXamOG.js";import"./DropdownField-DDmAlRJk.js";import"./withOsdkMetrics-D6nE0GJ0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

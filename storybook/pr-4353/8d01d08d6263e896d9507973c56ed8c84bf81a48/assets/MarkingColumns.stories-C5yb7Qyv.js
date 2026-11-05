import{f as p,j as e}from"./iframe-2CZ5tyet.js";import{O as i}from"./object-table-DpRFI095.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PdhlwSnk.js";import"./Table-CznV6T2W.js";import"./index-BEbGGmzC.js";import"./Dialog-CeWRMnMF.js";import"./cross-L_JwSQIU.js";import"./svgIconContainer-CNOiLZ-C.js";import"./useBaseUiId-DmeaPkXN.js";import"./InternalBackdrop-AEMlst0F.js";import"./composite-D3k21xgh.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./index-BLLQpwjF.js";import"./useEventCallback-BSE4SjR3.js";import"./SkeletonBar-CZIrexgF.js";import"./LoadingCell-hl43yvOQ.js";import"./ColumnConfigDialog-gbHfBktU.js";import"./DraggableList-D8xTIljs.js";import"./search-DVGk6bce.js";import"./Input-nyDT7hKf.js";import"./useControlled-Dh1VVbb0.js";import"./Button-eNpy85xj.js";import"./small-cross-DldLH4C7.js";import"./ActionButton-Bj84kgPY.js";import"./Checkbox-NvzeqK8d.js";import"./useValueChanged-B3VhTAWV.js";import"./CollapsiblePanel-DSL9tbZc.js";import"./MultiColumnSortDialog-haCwcxAA.js";import"./MenuTrigger-BEDWfK89.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./getDisabledMountTransitionStyles-Gd7L8Xae.js";import"./getPseudoElementBounds-Xqurqd99.js";import"./chevron-down-9zPbKgFH.js";import"./index-DlBbVzYN.js";import"./error-_JBSJ8K6.js";import"./BaseCbacBanner-CtN12RyV.js";import"./makeExternalStore-47_tyIYI.js";import"./Tooltip-BmclmkMF.js";import"./PopoverPopup-BaNCTG4D.js";import"./debounce-C66p6rWC.js";import"./useOsdkClient-CiuR1H2l.js";import"./tick-BDMTisIM.js";import"./DropdownField-dfStdW8W.js";import"./isEqual-DYEOAiyn.js";import"./withOsdkMetrics-CV77OAmc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

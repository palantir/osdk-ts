import{f as p,j as e}from"./iframe-C0MgyNRE.js";import{O as i}from"./object-table-BLliszwm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQoH0Nuo.js";import"./Table-BqUvw1je.js";import"./index---acoC-r.js";import"./Dialog-DhukfYta.js";import"./cross-CDqB6Pmb.js";import"./svgIconContainer-BKLjPPf4.js";import"./useBaseUiId-Q4ONINdB.js";import"./InternalBackdrop-rlHdNk5g.js";import"./composite-BfZwON16.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./index-DVx8jUCi.js";import"./useEventCallback-D9l2Sgfp.js";import"./SkeletonBar-CTwZ2QYa.js";import"./LoadingCell-DxXNh-zl.js";import"./ColumnConfigDialog-DxvHuOv6.js";import"./DraggableList-DP2OraGG.js";import"./search-CnqYke8S.js";import"./Input-BAC6a1Nu.js";import"./useControlled-BBrJL19c.js";import"./Button-DPYKSMTC.js";import"./small-cross-gL4Blcc6.js";import"./ActionButton-DcSbKUFA.js";import"./Checkbox-DWFxIo3E.js";import"./useValueChanged-rqsds79W.js";import"./CollapsiblePanel-DBgZ58Ev.js";import"./MultiColumnSortDialog-D0RWAJ94.js";import"./MenuTrigger-CCqSXm39.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./getDisabledMountTransitionStyles-DOeog0sh.js";import"./getPseudoElementBounds-f4HbG8Fm.js";import"./chevron-down-3JGU9uXG.js";import"./index-DLQpaEnR.js";import"./error-DWVeEt8h.js";import"./BaseCbacBanner-BCZLghhn.js";import"./makeExternalStore-CJPI6JTX.js";import"./Tooltip-BhEegg2P.js";import"./isObject-BQeCy5y1.js";import"./debounce-Bi1ZMfOq.js";import"./useOsdkClient-Ccq50_Dk.js";import"./tick-8uJq1GYC.js";import"./DropdownField-GlOSN0XT.js";import"./isEqual-DYvTBXV4.js";import"./_baseIsEqual-CEtqIxGI.js";import"./withOsdkMetrics-DhnlLT_e.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

import{f as p,j as e}from"./iframe-CHlNqADV.js";import{O as i}from"./object-table-Bz1O0psn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChuInVZg.js";import"./Table-DSVdoqZo.js";import"./index-Bf2fBgJU.js";import"./Dialog-CUe0f-N6.js";import"./cross-CuFYXv7r.js";import"./svgIconContainer-BDP_fhkF.js";import"./useBaseUiId-DYvtoeJl.js";import"./InternalBackdrop-L9tv4-K0.js";import"./composite-DktMQB3d.js";import"./index-ChdJCR6a.js";import"./index-A-SGLt67.js";import"./index-BH1I75dT.js";import"./useEventCallback-DjyoxhV1.js";import"./SkeletonBar-Bqq4C_Xz.js";import"./LoadingCell-EwnPi-q5.js";import"./ColumnConfigDialog-DxDbIYPV.js";import"./DraggableList-C8q6Bo9V.js";import"./search-kgQIq9W2.js";import"./Input-CRkTA9js.js";import"./useControlled-D7wM_LXO.js";import"./Button-C2n7qnnT.js";import"./small-cross-DxzGq3IE.js";import"./ActionButton-DeQmFSZA.js";import"./Checkbox-BStfIwWS.js";import"./useValueChanged-DNlrhM8D.js";import"./CollapsiblePanel-CqIVhAsV.js";import"./MultiColumnSortDialog-CBGhSZ7z.js";import"./MenuTrigger-CbvpRhV-.js";import"./CompositeItem-Cfdppx_k.js";import"./ToolbarRootContext-CUs10wim.js";import"./getDisabledMountTransitionStyles-B6MFKsrU.js";import"./getPseudoElementBounds-Dzxtf5td.js";import"./chevron-down-DJ0NZq7q.js";import"./index-BCBHNrII.js";import"./error-B_eFesCr.js";import"./BaseCbacBanner-L5OpTRFG.js";import"./makeExternalStore-C006dyrV.js";import"./Tooltip-BybVAEch.js";import"./PopoverPopup-CPS07fp6.js";import"./debounce-C1-IqOWQ.js";import"./useOsdkClient-BUpa-g5c.js";import"./tick-BGYvlHNw.js";import"./DropdownField-BHM3Py0i.js";import"./isEqual-5lz-MWW-.js";import"./withOsdkMetrics-Dhrl7hco.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

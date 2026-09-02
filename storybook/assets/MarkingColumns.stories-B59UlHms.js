import{f as p,j as e}from"./iframe-CnAEf3IJ.js";import{O as i}from"./object-table-CVC6DRWA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-gdJyLBjs.js";import"./index-B8Nz7JJW.js";import"./Dialog-D5gMprTa.js";import"./cross-Dt0cGPfd.js";import"./svgIconContainer-BIdExII8.js";import"./useBaseUiId-CeIC7NO6.js";import"./InternalBackdrop-YQuz4Vbl.js";import"./composite-CL6haQa-.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./index-Cig9tftr.js";import"./useEventCallback-BWgthKhM.js";import"./SkeletonBar-BTUrihaF.js";import"./LoadingCell-D8x3FqkS.js";import"./ColumnConfigDialog-cy0zOBw1.js";import"./DraggableList-BzcZwy3J.js";import"./search-CEklk6Yi.js";import"./Input-x_02lyVD.js";import"./useControlled-B_4lFiHq.js";import"./Button-C2qyHp3c.js";import"./small-cross-BLoBHL9y.js";import"./ActionButton-DZsexcaK.js";import"./Checkbox-DdiUBOXq.js";import"./useValueChanged-Ch6t91n6.js";import"./CollapsiblePanel-Di9dac_w.js";import"./MultiColumnSortDialog-7Aw90Y90.js";import"./MenuTrigger-CW4cqosj.js";import"./CompositeItem-ByBfsUTK.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./getDisabledMountTransitionStyles-DPIKQDtQ.js";import"./getPseudoElementBounds-DpmHiwP5.js";import"./chevron-down-Bwa7GCIs.js";import"./index-FiIn5sfi.js";import"./error-1wJ1mTzx.js";import"./BaseCbacBanner-CuOgkWVK.js";import"./makeExternalStore-DBD3eHtk.js";import"./Tooltip-bXPrz9QG.js";import"./PopoverPopup-CUX5PsPP.js";import"./debounce-CxmUTlgJ.js";import"./useOsdkClient-Cy9h7b-X.js";import"./tick-IIhkou4I.js";import"./DropdownField-DKvh0G9S.js";import"./isEqual-D4BavgyG.js";import"./withOsdkMetrics-B8y7kht9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

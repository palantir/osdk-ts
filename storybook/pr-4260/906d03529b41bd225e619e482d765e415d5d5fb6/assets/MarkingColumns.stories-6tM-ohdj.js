import{f as p,j as e}from"./iframe-BrTF0wQy.js";import{O as i}from"./object-table-CgrulwW1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrgL7riq.js";import"./Table-D8WRhJfJ.js";import"./index-CLIofpuq.js";import"./Dialog-CIyT0sDx.js";import"./cross-Dlqc_1ZY.js";import"./svgIconContainer-_Twg2KpW.js";import"./useBaseUiId-paQZpqMq.js";import"./InternalBackdrop-DTqnKF8D.js";import"./composite-CeMPnKRZ.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./index-BWpmmqhl.js";import"./useEventCallback-VkT7yqal.js";import"./SkeletonBar-BHt2XqQp.js";import"./LoadingCell-BYbY2f0u.js";import"./ColumnConfigDialog-CqVp89in.js";import"./DraggableList-BekO45lD.js";import"./search-CqSH1asp.js";import"./Input-BxbCwGL8.js";import"./useControlled-DhGBxpYo.js";import"./Button-BnRJeVMr.js";import"./small-cross-aXc1L9EQ.js";import"./ActionButton-C44yj7_9.js";import"./Checkbox-9FLkIUOf.js";import"./useValueChanged-BughKinG.js";import"./CollapsiblePanel-D86cBPU8.js";import"./MultiColumnSortDialog-CrH_UI_g.js";import"./MenuTrigger-JJndQNlM.js";import"./CompositeItem-Cz4Nt1SP.js";import"./ToolbarRootContext-vcL9onuR.js";import"./getDisabledMountTransitionStyles-BNArIVjE.js";import"./getPseudoElementBounds-_r6Nu2cP.js";import"./chevron-down-K7i3qdrh.js";import"./index-D3KaSgKX.js";import"./error-Csk-3gAP.js";import"./BaseCbacBanner-ewOQcDaW.js";import"./makeExternalStore-BDEao_Ea.js";import"./Tooltip-49_4-YPv.js";import"./PopoverPopup-CXeUmeNO.js";import"./debounce-DdMg5vR0.js";import"./useOsdkClient-CbbaCk5h.js";import"./tick-Bd4yE76w.js";import"./DropdownField-BdwvDz8K.js";import"./isEqual-BRp4klEC.js";import"./withOsdkMetrics-DXsXQf0j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

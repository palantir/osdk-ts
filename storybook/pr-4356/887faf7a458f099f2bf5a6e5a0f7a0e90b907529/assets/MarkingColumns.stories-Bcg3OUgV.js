import{f as p,j as e}from"./iframe-CO_TqB81.js";import{O as i}from"./object-table-DnstM0F_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cb9TEUNK.js";import"./Table-CDGzwZIs.js";import"./index-BG1T9Qar.js";import"./Dialog-Bs62LDef.js";import"./cross-BWp6Y9Mg.js";import"./svgIconContainer-9GB5-wwK.js";import"./useBaseUiId-CQDh8HZx.js";import"./InternalBackdrop-XEvqPvZO.js";import"./composite-ksiLQPWX.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./index-C44jrtj9.js";import"./useEventCallback-Da1PZug2.js";import"./SkeletonBar-DfcLnHzw.js";import"./LoadingCell-7218JQWL.js";import"./ColumnConfigDialog-BKLIJzqe.js";import"./DraggableList-DcN0PPA5.js";import"./search-CL2g-V2W.js";import"./Input-C4_accH4.js";import"./useControlled-BzsK2z1m.js";import"./Button-DcLBkUW1.js";import"./small-cross-DJUC3vxT.js";import"./ActionButton-B2_yFJBm.js";import"./Checkbox-CQerHbWk.js";import"./useValueChanged-BRD8TdqI.js";import"./CollapsiblePanel-D_HvnvuL.js";import"./MultiColumnSortDialog-C12-E6um.js";import"./MenuTrigger-wpkt9osl.js";import"./CompositeItem-DiNcRYV6.js";import"./ToolbarRootContext-C89jM3yj.js";import"./getDisabledMountTransitionStyles-BDEY_Zeb.js";import"./getPseudoElementBounds-DqXRckai.js";import"./chevron-down-Cz7E_Xzc.js";import"./index-CZb0rJv3.js";import"./error-CQK0rvpI.js";import"./BaseCbacBanner-BfvZcEHl.js";import"./makeExternalStore-BrsByTNH.js";import"./Tooltip-9tmkcTTw.js";import"./PopoverPopup-CHZBqC1j.js";import"./debounce-qC38IiRW.js";import"./useOsdkClient-CJEtUc7d.js";import"./tick-DMb7PR_x.js";import"./DropdownField-DKbARUIc.js";import"./isEqual-B5R3h5go.js";import"./withOsdkMetrics-DUnq64Xh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

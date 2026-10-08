import{f as p,j as e}from"./iframe-Ds_0fUNG.js";import{O as i}from"./object-table-CDMrvtYv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rl_3IysT.js";import"./Table-NV-Z6jrK.js";import"./index-CfHbFnsm.js";import"./Dialog-QtB8jaP-.js";import"./cross-CPIn0YCt.js";import"./svgIconContainer-Bnjtz_zA.js";import"./useBaseUiId-BTcKJi-m.js";import"./InternalBackdrop-DglM94TH.js";import"./composite-BQp92XLf.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./index--pKFQ4Lz.js";import"./useEventCallback-Bj0Lmw5H.js";import"./SkeletonBar-L7SILJmc.js";import"./LoadingCell-CHvHj1gL.js";import"./ColumnConfigDialog-0chAKSCD.js";import"./DraggableList-C23oUVV2.js";import"./search-D8R0XkDu.js";import"./Input-DML-f9Nt.js";import"./useControlled-BJ5XCIhk.js";import"./Button-BIMxSH7M.js";import"./small-cross-Dz6lKUNI.js";import"./ActionButton-Bt69IyHY.js";import"./Checkbox-N-ofHEBa.js";import"./useValueChanged-DNt4iD_c.js";import"./CollapsiblePanel-aLSMls02.js";import"./MultiColumnSortDialog-CdsAFBTS.js";import"./MenuTrigger-B5iErPwW.js";import"./CompositeItem-Cd9-IsCw.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./getDisabledMountTransitionStyles-Dx8Now2z.js";import"./getPseudoElementBounds-DMltA1Ta.js";import"./chevron-down-QYpALvW6.js";import"./index-Xp60VzFy.js";import"./error-BqmstoPM.js";import"./BaseCbacBanner-AJhvy395.js";import"./makeExternalStore-pijIp4DO.js";import"./Tooltip-C_aXZE6C.js";import"./PopoverPopup-ByN3B_TH.js";import"./debounce-Biv857Xj.js";import"./useOsdkClient-MZwKjimd.js";import"./tick-AwKzn_MI.js";import"./DropdownField-DsGQRL42.js";import"./isEqual-Cje0TKXT.js";import"./withOsdkMetrics-Bofw38ai.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

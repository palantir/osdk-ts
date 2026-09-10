import{f as p,j as e}from"./iframe-CJdhljqY.js";import{O as i}from"./object-table-C15HZsK6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dt50QPrM.js";import"./Table-66i0ylnA.js";import"./index-C_XWhVsk.js";import"./Dialog-VSy_iTM4.js";import"./cross-xpJwG0PM.js";import"./svgIconContainer-DfUk_uW1.js";import"./useBaseUiId-DhLXeG5Q.js";import"./InternalBackdrop-BZc-gUEh.js";import"./composite-CMxCP_fe.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./index-B0u6fGpW.js";import"./useEventCallback-BSb5aBsV.js";import"./SkeletonBar-Do_BGkRf.js";import"./LoadingCell-DDr-ObVZ.js";import"./ColumnConfigDialog-CYwlsrqG.js";import"./DraggableList-Cw8pOFJj.js";import"./search-KsJ5YUkQ.js";import"./Input-MNhthrzu.js";import"./useControlled-DxG1_BRX.js";import"./Button-BW0xuowo.js";import"./small-cross-4RRmn2cJ.js";import"./ActionButton-NXakpU_-.js";import"./Checkbox-CCMcLkD6.js";import"./useValueChanged-WbLrwhHG.js";import"./CollapsiblePanel-Cc53AZ9G.js";import"./MultiColumnSortDialog-HRkDiJIo.js";import"./MenuTrigger-Dh02swDl.js";import"./CompositeItem-D1aj4ASS.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./getDisabledMountTransitionStyles-DjY5DFv9.js";import"./getPseudoElementBounds-DjMkCYmI.js";import"./chevron-down-HDas2nyI.js";import"./index-JTXg-Z1T.js";import"./error-De8eomlR.js";import"./BaseCbacBanner-Cbq547lz.js";import"./makeExternalStore-JX4u0CWz.js";import"./Tooltip-DXKWPKVU.js";import"./PopoverPopup-JStXvDFZ.js";import"./debounce-DmZlAZ0B.js";import"./useOsdkClient-DoLuxURC.js";import"./tick-9_KQHHd1.js";import"./DropdownField-BRJuo5am.js";import"./isEqual-DrMdl6cL.js";import"./withOsdkMetrics-C23PGbte.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

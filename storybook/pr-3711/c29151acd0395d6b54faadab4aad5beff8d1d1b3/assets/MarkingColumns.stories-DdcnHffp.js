import{f as p,j as e}from"./iframe-ZHqX7REe.js";import{O as i}from"./object-table-Vh8oW-A8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpRAMuu6.js";import"./Table-Bhp-1ap9.js";import"./index-DfuwNCPz.js";import"./Dialog-Dw_2bPK3.js";import"./cross-BUpcGnSD.js";import"./svgIconContainer-CC2LHwK5.js";import"./useBaseUiId-CdVqE1St.js";import"./InternalBackdrop-5lRnhn2o.js";import"./composite-CPaOU4SS.js";import"./index-CMA1bUGM.js";import"./index-CJEXUC9y.js";import"./index-CaZ74q2f.js";import"./useEventCallback-DFAhL_tG.js";import"./SkeletonBar-B2lE7s5X.js";import"./LoadingCell-CN31CTiH.js";import"./ColumnConfigDialog-CyHjOFI_.js";import"./DraggableList-CuTzQGX5.js";import"./search-CfloQI9l.js";import"./Input-IE_JMD0V.js";import"./useControlled-CHDgDBvG.js";import"./isEqual-BVUaQcCA.js";import"./isObject-o4IhnsZF.js";import"./Button-kvIzLk26.js";import"./ActionButton-C2hfiwJt.js";import"./Checkbox-CFm9nvIc.js";import"./useValueChanged-Dpe9rZ1M.js";import"./CollapsiblePanel-DlY8HxoV.js";import"./MultiColumnSortDialog-D5Bn8DZi.js";import"./MenuTrigger-BTNXv_zW.js";import"./CompositeItem-CcRiLlTv.js";import"./ToolbarRootContext-27hv10N9.js";import"./getDisabledMountTransitionStyles-CV8tv2vS.js";import"./getPseudoElementBounds--oSEcpTd.js";import"./chevron-down-CZw5ptDU.js";import"./index-B7WI6jJb.js";import"./error-C_CdPU4N.js";import"./BaseCbacBanner-DfkU_8sF.js";import"./makeExternalStore-wzNUqb3R.js";import"./Tooltip-CzymwUB3.js";import"./PopoverPopup-ISI5MjGj.js";import"./toNumber-Ch8TQdeh.js";import"./useOsdkClient-Ujjfp2Zh.js";import"./tick-BjB7092B.js";import"./DropdownField-CaRb33S8.js";import"./withOsdkMetrics-DT1hhMh4.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

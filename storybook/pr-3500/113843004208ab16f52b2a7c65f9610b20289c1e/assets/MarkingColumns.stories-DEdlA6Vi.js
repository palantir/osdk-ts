import{f as n,j as t}from"./iframe-CUQ0qbyF.js";import{O as p}from"./object-table-BmmXU1lB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-Wc_5Ee.js";import"./Table-BdW9CqtL.js";import"./index-DryuTDyv.js";import"./Dialog-Bv18yf4C.js";import"./cross-D6dKkpU2.js";import"./svgIconContainer-ds5IMsUl.js";import"./useBaseUiId-BPEm72Vf.js";import"./InternalBackdrop-BkDqO-y4.js";import"./composite-DBJej9Y-.js";import"./index-5zNwloNO.js";import"./index-CwxNHNOO.js";import"./index-DB4kvDLN.js";import"./useEventCallback-BcyrUx-j.js";import"./SkeletonBar-B00rF3bq.js";import"./LoadingCell-BMv4Enny.js";import"./ColumnConfigDialog-zHi8ctuC.js";import"./DraggableList-Cr4tqpo8.js";import"./Input-DPpzVQIt.js";import"./useControlled-BuvaKmuN.js";import"./Button-CLDweaBF.js";import"./small-cross-B4YM-MfO.js";import"./ActionButton-1FPUKEC0.js";import"./Checkbox-CLDSYnuj.js";import"./minus-DDKkgXNN.js";import"./useValueChanged-CSJ4XsVa.js";import"./caret-down-ChvvPd6Q.js";import"./CollapsiblePanel-9w0uxEtW.js";import"./MultiColumnSortDialog-Cj3heAEA.js";import"./MenuTrigger-DHXjApW_.js";import"./CompositeItem-CoORs69-.js";import"./ToolbarRootContext-B7e0hFDq.js";import"./getDisabledMountTransitionStyles-CF23q7I-.js";import"./getPseudoElementBounds-B4eyjSOu.js";import"./chevron-down-CjITBNlh.js";import"./index-CWwhIJtL.js";import"./error-D-4knIf5.js";import"./BaseCbacBanner-B4CaMcbh.js";import"./makeExternalStore-zVDBRZXp.js";import"./Tooltip-CqBt_UJJ.js";import"./PopoverPopup-BKc4HZnG.js";import"./toNumber-3nL4eJe_.js";import"./useOsdkClient-TDJnxEXm.js";import"./DropdownField-C6EiUOot.js";import"./useStableShapeDefinition-BV3QRfN_.js";import"./withOsdkMetrics-DLsZYHBc.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};

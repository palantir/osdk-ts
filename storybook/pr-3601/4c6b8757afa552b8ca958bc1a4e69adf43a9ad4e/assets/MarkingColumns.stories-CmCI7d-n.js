import{f as n,j as t}from"./iframe-Dd1szrMe.js";import{O as p}from"./object-table-ByyVStWL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZyFS72ZM.js";import"./Table-CmCk-nxt.js";import"./index-CAgK9jdg.js";import"./Dialog-D3nB_ru_.js";import"./cross-BeLIa3lb.js";import"./svgIconContainer-DPEIWJyX.js";import"./useBaseUiId-CdR77v15.js";import"./InternalBackdrop-DoaG4Rx0.js";import"./composite-CRt9kzf5.js";import"./index-xmtrJ4Wy.js";import"./index-DVO_ZVIo.js";import"./index-KowEa9Wo.js";import"./useRole-CzpuBIVL.js";import"./useEventCallback-DEA-eNwN.js";import"./SkeletonBar-CzkqjuZY.js";import"./LoadingCell-DMRfmPxw.js";import"./ColumnConfigDialog-CbQ0y6Xr.js";import"./DraggableList-BIDN5R6H.js";import"./Input-Q-5ZuT0B.js";import"./useControlled-BTPSGAsV.js";import"./Button-l18qNjs5.js";import"./small-cross-JpTA8Rh3.js";import"./ActionButton-D3a_ECys.js";import"./Checkbox-C9s3WWQo.js";import"./minus-Bf1z5Rn7.js";import"./useValueChanged-S_evbTp3.js";import"./FieldItemContext-J9aJqATq.js";import"./caret-down-DQiaAbiM.js";import"./CollapsiblePanel-CRhgB0vs.js";import"./MultiColumnSortDialog-N7_-sFLH.js";import"./MenuTrigger-CMgqmmuh.js";import"./useCompositeListItem-v6wc-tSZ.js";import"./ToolbarRootContext-BkGiyAqi.js";import"./getDisabledMountTransitionStyles-DAaVavr6.js";import"./safePolygon-KnWuve3F.js";import"./getPseudoElementBounds-uH9JAnTs.js";import"./CompositeItem-DUaJ13IJ.js";import"./chevron-down-3KBMvkMf.js";import"./index-B2yaQToS.js";import"./error-CopeXtfB.js";import"./BaseCbacBanner-CrRDEtby.js";import"./makeExternalStore-zyoeQ_fU.js";import"./Tooltip-DcK9HFHA.js";import"./PopoverPopup-B-PflWL9.js";import"./toNumber-CsUJxXbS.js";import"./useOsdkClient-CkCBiAip.js";import"./Combobox-CshTXg-9.js";import"./DropdownField-Bw0I1LOg.js";import"./useOsdkObjects-OuzqvCbg.js";import"./withOsdkMetrics-lY_6dVPX.js";const mr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const sr=["MarkingColumns"];export{r as MarkingColumns,sr as __namedExportsOrder,mr as default};

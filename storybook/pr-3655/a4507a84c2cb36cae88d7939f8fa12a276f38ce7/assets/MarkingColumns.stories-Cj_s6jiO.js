import{f as n,j as t}from"./iframe-DNRcMBZD.js";import{O as p}from"./object-table-AqDRrgNk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-oKXGpHch.js";import"./Table-DANJlyhc.js";import"./index-BPvPtxPo.js";import"./Dialog-DQ7YTzrQ.js";import"./cross-CrdAzGMb.js";import"./svgIconContainer-DDF2oHmG.js";import"./useBaseUiId-CMaG5Z45.js";import"./InternalBackdrop-CHoa73UE.js";import"./composite-vXuHsZnZ.js";import"./index-CS1bPxeW.js";import"./index-BZztfqY_.js";import"./index-CcVLrQts.js";import"./useEventCallback-D242y6lm.js";import"./SkeletonBar-D0SVntPq.js";import"./LoadingCell-I5i0IqRs.js";import"./ColumnConfigDialog-B8Sh2_0b.js";import"./DraggableList-n8e3xNgK.js";import"./search-UZlhYXJb.js";import"./Input-3LKNZXCU.js";import"./useControlled-BzPgC_LT.js";import"./Button-CgEwxHBt.js";import"./small-cross-DJrPlXkP.js";import"./ActionButton-DyFLoaST.js";import"./Checkbox-CEpVP12m.js";import"./useValueChanged-BJLP2sOC.js";import"./CollapsiblePanel-D-KWlYCV.js";import"./MultiColumnSortDialog-CLcJPrKh.js";import"./MenuTrigger-DSeC64HV.js";import"./CompositeItem-DwWbMrCR.js";import"./ToolbarRootContext-6W3FX-E6.js";import"./getDisabledMountTransitionStyles-LKuTDiNB.js";import"./getPseudoElementBounds-Btj6OOH9.js";import"./chevron-down-eEDxuWgs.js";import"./index-BJkgBzMX.js";import"./error-xzz4-F0w.js";import"./BaseCbacBanner-BMqa4Mft.js";import"./makeExternalStore-Byn9118x.js";import"./Tooltip-CbCqFpyC.js";import"./PopoverPopup-Cy0cuiJH.js";import"./toNumber-ego8m5eX.js";import"./useOsdkClient-D726wbR3.js";import"./tick-C4g_-nx6.js";import"./DropdownField-yUdtL67R.js";import"./withOsdkMetrics-D-DbaOzw.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};

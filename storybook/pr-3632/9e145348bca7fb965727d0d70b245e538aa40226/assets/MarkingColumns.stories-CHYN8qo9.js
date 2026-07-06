import{f as n,j as t}from"./iframe-DFoPknXU.js";import{O as p}from"./object-table-ai6TQJGr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-P8RJdbRd.js";import"./Table-DLGsj4Q7.js";import"./index-Crav-2Ze.js";import"./Dialog-CLUcmM2Q.js";import"./cross-C5mIiswO.js";import"./svgIconContainer-DL62bZwE.js";import"./useBaseUiId-B5Di5_ER.js";import"./InternalBackdrop-lkKHC9zA.js";import"./composite-DfVs64wC.js";import"./index-vFeHJhls.js";import"./index-B4kgFmW1.js";import"./index-DRSYIdAe.js";import"./useEventCallback-CJmzA_Od.js";import"./SkeletonBar-C_pSBXQO.js";import"./LoadingCell-B5C9rVww.js";import"./ColumnConfigDialog-CM3iRc0f.js";import"./DraggableList-DocTinej.js";import"./search-CH77HEFC.js";import"./Input-Ddmrj3iK.js";import"./useControlled-DXLhnqRG.js";import"./Button-VEekTMI-.js";import"./small-cross-zqscrqd_.js";import"./ActionButton-DI9hgj8v.js";import"./Checkbox-DrDh1A7Y.js";import"./useValueChanged-BVgasBEh.js";import"./CollapsiblePanel-BrLAmJnl.js";import"./MultiColumnSortDialog-ziQgpwF9.js";import"./MenuTrigger-wrdq-s_8.js";import"./CompositeItem-DotHPe8U.js";import"./ToolbarRootContext-MwQIDNFU.js";import"./getDisabledMountTransitionStyles-BHt6PBZ-.js";import"./getPseudoElementBounds-DxDIeaM-.js";import"./chevron-down-Hrsc9QPw.js";import"./index-BxUBQmT5.js";import"./error-BcnnJbxY.js";import"./BaseCbacBanner-USAwFeKU.js";import"./makeExternalStore-fJE6jgN0.js";import"./Tooltip-n4LfOcqM.js";import"./PopoverPopup-DutMb8Vn.js";import"./toNumber-DNRDPBrb.js";import"./useOsdkClient-CdVk3ABv.js";import"./tick-Bkbc1rwx.js";import"./DropdownField-DSGBwtKN.js";import"./withOsdkMetrics-CLGKFGT7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

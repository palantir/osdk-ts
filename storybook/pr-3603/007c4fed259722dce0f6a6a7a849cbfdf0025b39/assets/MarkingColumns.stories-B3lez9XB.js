import{f as n,j as t}from"./iframe-B-N2-r-P.js";import{O as p}from"./object-table-_fbsy6dU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4Q0vOys.js";import"./Table-Bya1lDge.js";import"./index-Bo0hoe2f.js";import"./Dialog-DXd_1Yoc.js";import"./cross-Dj5vzrKC.js";import"./svgIconContainer-BP_Cyky3.js";import"./useBaseUiId-RRwSV0tF.js";import"./InternalBackdrop-DZCbNm3h.js";import"./composite-33K9WpJB.js";import"./index-DGpxl1lF.js";import"./index-Byx-03Es.js";import"./index-DEaJRpmz.js";import"./useEventCallback-DMShMpKI.js";import"./SkeletonBar-DWUI-Mzt.js";import"./LoadingCell-tbnkos6I.js";import"./ColumnConfigDialog-BGWYEQ3m.js";import"./DraggableList-Cm36A5XS.js";import"./search-DUpQ9VPH.js";import"./Input-B4_FJ4FZ.js";import"./useControlled-Bs9QYkJN.js";import"./Button-6zOkUJKB.js";import"./small-cross-DlV2wPTV.js";import"./ActionButton-CRtQoTxR.js";import"./Checkbox-DdpgXF4Z.js";import"./minus-qMa9QIgZ.js";import"./tick-SshItay0.js";import"./useValueChanged-BY9nod_a.js";import"./caret-down-CcRq_LZX.js";import"./CollapsiblePanel-2_KSJbBo.js";import"./MultiColumnSortDialog-BmcIpZa5.js";import"./MenuTrigger-jerYu0NQ.js";import"./CompositeItem-BXK3omay.js";import"./ToolbarRootContext-J4sGFDfu.js";import"./getDisabledMountTransitionStyles-DgWtRyxN.js";import"./getPseudoElementBounds-kFcYL4u5.js";import"./chevron-down-BQ_F75_V.js";import"./index-zUJNAcfu.js";import"./error-NjgVHdy_.js";import"./BaseCbacBanner-BdOocO2p.js";import"./makeExternalStore-DzKj_2bA.js";import"./Tooltip-Be8ah-o6.js";import"./PopoverPopup-CBSw_bgP.js";import"./toNumber-BJJSNncG.js";import"./useOsdkClient-CEtKxgQY.js";import"./DropdownField-ByvxgQg4.js";import"./withOsdkMetrics-D-Yn5mSP.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};

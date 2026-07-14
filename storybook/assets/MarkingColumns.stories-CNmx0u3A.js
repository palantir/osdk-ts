import{f as n,j as t}from"./iframe-BncAYKvK.js";import{O as p}from"./object-table-DrPXhzr6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CPHL3h5J.js";import"./index-7LyXPGbp.js";import"./Dialog-CPj6J-IG.js";import"./cross-BI768WoZ.js";import"./svgIconContainer-DBpeHANf.js";import"./useBaseUiId-Du33E_DH.js";import"./InternalBackdrop-wCwyogGL.js";import"./composite-C-bLnivD.js";import"./index-BAe5NMOG.js";import"./index-CrmXeU5p.js";import"./index-Cc1HBZvI.js";import"./useEventCallback-CIDmOtek.js";import"./SkeletonBar-BB7ajzrp.js";import"./LoadingCell-Cw3XkWvU.js";import"./ColumnConfigDialog-C9pEuwVs.js";import"./DraggableList-BNejiX-8.js";import"./search-Cyb0DYxi.js";import"./Input-DTgi_HGu.js";import"./useControlled-FXWKuML8.js";import"./Button-BvME9L7I.js";import"./small-cross-DfeG7Yqb.js";import"./ActionButton-By8_O-qL.js";import"./Checkbox-CHsAZLb1.js";import"./useValueChanged-DoqDY0AJ.js";import"./CollapsiblePanel-BK-SaFZj.js";import"./MultiColumnSortDialog-DuSExUCB.js";import"./MenuTrigger-BmjO7LYH.js";import"./CompositeItem-BFQVMeRx.js";import"./ToolbarRootContext-Dg-i_yql.js";import"./getDisabledMountTransitionStyles-DW7DHsHy.js";import"./getPseudoElementBounds-nWWN7f7o.js";import"./chevron-down-DasYJXja.js";import"./index-DAv_sCsL.js";import"./error-C6DkJKLG.js";import"./BaseCbacBanner-DkupaGuW.js";import"./makeExternalStore-ZIouT9sm.js";import"./Tooltip-KiU_sszL.js";import"./PopoverPopup-DWRmGtip.js";import"./toNumber-D2YzJNm2.js";import"./useOsdkClient-cKCNfklX.js";import"./tick-a9XZOg-F.js";import"./DropdownField-B3tcZ3Sm.js";import"./withOsdkMetrics--BZUpgUR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

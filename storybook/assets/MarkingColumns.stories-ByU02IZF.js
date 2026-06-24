import{f as n,j as t}from"./iframe-BHH5oXms.js";import{O as p}from"./object-table-CvR5XZst.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DGrJYIf3.js";import"./index-BgJAfSkc.js";import"./Dialog-4pm4iTaX.js";import"./cross-lNa8ctLW.js";import"./svgIconContainer-kKNfJCP_.js";import"./useBaseUiId-CwkBF8oJ.js";import"./InternalBackdrop-CLBB5K0l.js";import"./composite-BUMme9kZ.js";import"./index-Cvr7cDOz.js";import"./index-BkZzOscd.js";import"./index-DwYKenYO.js";import"./useEventCallback-iDaO5RcB.js";import"./SkeletonBar-M0w4a5Xx.js";import"./LoadingCell-hoLqcBKN.js";import"./ColumnConfigDialog-bPXeQiYr.js";import"./DraggableList-C_GH0i0v.js";import"./Input-DlioPdaF.js";import"./useControlled-pi1OAFb_.js";import"./Button-DVfRPTAL.js";import"./small-cross-B6sURQke.js";import"./ActionButton-CrxAmnE9.js";import"./Checkbox-DaTbAazU.js";import"./minus-BEmAJnAQ.js";import"./useValueChanged-D2lDmKpa.js";import"./caret-down-kfvae0pM.js";import"./CollapsiblePanel-Df-A87vf.js";import"./MultiColumnSortDialog-66xur8hN.js";import"./MenuTrigger-CWyXodKM.js";import"./CompositeItem-D9UxTgf0.js";import"./ToolbarRootContext-CBOnoqze.js";import"./getDisabledMountTransitionStyles-BMJogpxe.js";import"./getPseudoElementBounds-Bmc-d5Mv.js";import"./chevron-down-ByEocyUL.js";import"./index-DsvQTTq0.js";import"./error-B2M42nQ_.js";import"./BaseCbacBanner-CKqER_f_.js";import"./makeExternalStore-C-WEuJ6v.js";import"./Tooltip-Df1EIg5h.js";import"./PopoverPopup-BB6qHe44.js";import"./toNumber-f36Qym6k.js";import"./useOsdkClient-BJChez03.js";import"./DropdownField-ReX8NgL3.js";import"./withOsdkMetrics-DOxXHKa4.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

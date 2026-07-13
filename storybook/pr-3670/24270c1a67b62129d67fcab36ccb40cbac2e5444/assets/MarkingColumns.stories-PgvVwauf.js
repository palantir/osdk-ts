import{f as n,j as t}from"./iframe-3qSeowKt.js";import{O as p}from"./object-table-D9ughJ7i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ntUbbqbv.js";import"./Table-BKeQQkG2.js";import"./index-CvXzK1Ze.js";import"./Dialog-D8WLZeaY.js";import"./cross-BD2jsSpc.js";import"./svgIconContainer-DrkH_pK4.js";import"./useBaseUiId-DZexMm2d.js";import"./InternalBackdrop-DNwiKCfV.js";import"./composite-BtTVONXM.js";import"./index-DmWAq4WA.js";import"./index-CMYYXOi8.js";import"./index-BUvWXhf-.js";import"./useEventCallback-CALcAkTo.js";import"./SkeletonBar-VlmCn84E.js";import"./LoadingCell-CQFFpKcM.js";import"./ColumnConfigDialog-Jt-V6rnO.js";import"./DraggableList-B9iwudVv.js";import"./search-C55SF0Ui.js";import"./Input-Cba3EN-v.js";import"./useControlled-DJ0m2Fyu.js";import"./Button-CuYgFcjq.js";import"./small-cross-DeSc8_EJ.js";import"./ActionButton-BhZyamBg.js";import"./Checkbox-DXTpQ86q.js";import"./useValueChanged-DEJUvr7G.js";import"./CollapsiblePanel-Dn823A2X.js";import"./MultiColumnSortDialog-CgquaHIk.js";import"./MenuTrigger-DminSTNN.js";import"./CompositeItem-Fy8Xf1qx.js";import"./ToolbarRootContext-BbwFvlAX.js";import"./getDisabledMountTransitionStyles-Tjd9ZiaB.js";import"./getPseudoElementBounds-DyHUQiHW.js";import"./chevron-down-BwQXiMfc.js";import"./index-FvABRkCD.js";import"./error-DVqayGTz.js";import"./BaseCbacBanner-DCHfBZ85.js";import"./makeExternalStore-3JH7QD64.js";import"./Tooltip-BLm90XoF.js";import"./PopoverPopup-BPpZger3.js";import"./toNumber-CDFmJYIX.js";import"./useOsdkClient-Be92vCY9.js";import"./tick-BwDasbf6.js";import"./DropdownField-zTdv33kn.js";import"./withOsdkMetrics-EfSZ0pPz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

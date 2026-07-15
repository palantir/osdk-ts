import{f as n,j as t}from"./iframe-X3f60bvr.js";import{O as p}from"./object-table-B1bTUEg-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BM2xafaU.js";import"./Table-BiGanK-j.js";import"./index-DRTRMMLL.js";import"./Dialog-CEyW0Xz_.js";import"./cross-DlsSWWII.js";import"./svgIconContainer-DFK0Cv_M.js";import"./useBaseUiId-BX0dL2u6.js";import"./InternalBackdrop-DB8KeoYK.js";import"./composite-Cb4jmYR3.js";import"./index-Dr4t6YVH.js";import"./index-CojZOBk9.js";import"./index-DbGTQrV-.js";import"./useEventCallback-Cs5nyCM9.js";import"./SkeletonBar-C5swJWSS.js";import"./LoadingCell-_6bBY6Q-.js";import"./ColumnConfigDialog-D-IW1Uk8.js";import"./DraggableList-DgjvpcxC.js";import"./search-LkiYhKHU.js";import"./Input-Cb8HwdrG.js";import"./useControlled-KSbcmYKr.js";import"./Button-Bj-PVnUC.js";import"./small-cross-t-fnYxNq.js";import"./ActionButton-MYdfDCqe.js";import"./Checkbox-CQsWrANU.js";import"./useValueChanged-CiQzzfE5.js";import"./CollapsiblePanel-BNuIbtPC.js";import"./MultiColumnSortDialog-C99vsgrq.js";import"./MenuTrigger-BZ4iU00T.js";import"./CompositeItem-DLoJyw1H.js";import"./ToolbarRootContext-B0R5guIp.js";import"./getDisabledMountTransitionStyles-B1mkkzyy.js";import"./getPseudoElementBounds-C1QqKtxa.js";import"./chevron-down-DchIwrTX.js";import"./index-CBMI0VRi.js";import"./error-Cb5UoREL.js";import"./BaseCbacBanner-XNJJAH8O.js";import"./makeExternalStore-DYoapTb2.js";import"./Tooltip-B4ll62gd.js";import"./PopoverPopup-BpU-jUzg.js";import"./toNumber-hROUx1Zm.js";import"./useOsdkClient-C1WMdY3n.js";import"./tick-M6mkAFLN.js";import"./DropdownField-C6iRl5ty.js";import"./withOsdkMetrics-DWHUQHjv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

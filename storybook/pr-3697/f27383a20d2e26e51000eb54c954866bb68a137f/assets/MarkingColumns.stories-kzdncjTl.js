import{f as n,j as t}from"./iframe-BEe86n4U.js";import{O as p}from"./object-table-D3bK0xh5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEIWHMRh.js";import"./Table-YF2Uuna7.js";import"./index-BRPS5kQN.js";import"./Dialog-BsqCdrap.js";import"./cross-CGE59l7y.js";import"./svgIconContainer-BSAbTZeZ.js";import"./useBaseUiId-COFpfmx-.js";import"./InternalBackdrop-Bbyztf9B.js";import"./composite-M2AhhIdq.js";import"./index-9tHl4QLQ.js";import"./index-CUqsLrV_.js";import"./index-CFU7E__T.js";import"./useEventCallback-pvIUGJ3U.js";import"./SkeletonBar-D8GYqCJs.js";import"./LoadingCell-DC4_KheS.js";import"./ColumnConfigDialog-CEzCrz1H.js";import"./DraggableList-R8owu7NJ.js";import"./search-BXLW1X4v.js";import"./Input-DR5ncoJh.js";import"./useControlled-BaRzcD7g.js";import"./Button-BRKltiu1.js";import"./small-cross-CREnvszv.js";import"./ActionButton-2hvjBSdZ.js";import"./Checkbox-BPfKFUPW.js";import"./useValueChanged-CB58YuvK.js";import"./CollapsiblePanel-DAzVOwwy.js";import"./MultiColumnSortDialog-DYBUtlrk.js";import"./MenuTrigger-BwL5aEy_.js";import"./CompositeItem-DsazHw-F.js";import"./ToolbarRootContext-LTTvJeUA.js";import"./getDisabledMountTransitionStyles-ZuSivMX1.js";import"./getPseudoElementBounds-Cb-punMf.js";import"./chevron-down-DdOOrteF.js";import"./index-J5AGxzO_.js";import"./error-CApQS-Gj.js";import"./BaseCbacBanner-Cnp-s4-J.js";import"./makeExternalStore-CHd-KfbE.js";import"./Tooltip-D4ILXtbb.js";import"./PopoverPopup-BO4u0aFX.js";import"./toNumber-DSEuvXpJ.js";import"./useOsdkClient-if-6C0ow.js";import"./tick-zFi1znjf.js";import"./DropdownField-DBq1vGil.js";import"./withOsdkMetrics-qx1-RMV_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

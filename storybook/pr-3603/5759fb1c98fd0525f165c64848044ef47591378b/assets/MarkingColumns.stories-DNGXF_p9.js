import{f as n,j as t}from"./iframe-B1o_HM3e.js";import{O as p}from"./object-table-Cna1vPxa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLneRF-5.js";import"./Table-Code8Np3.js";import"./index-DQJ_Mips.js";import"./Dialog-DQU0hL0H.js";import"./cross-Dy0KHpn-.js";import"./svgIconContainer-SCKnx8mv.js";import"./useBaseUiId-BTvkIz_9.js";import"./InternalBackdrop-BYf-LqLk.js";import"./composite-B4vc5f3B.js";import"./index-C6oZuFHK.js";import"./index-BFqI2iWm.js";import"./index-BlQ_np7F.js";import"./useEventCallback-B0vMEuv-.js";import"./SkeletonBar-C8dASP17.js";import"./LoadingCell-BiY1m0Lt.js";import"./ColumnConfigDialog-DLwRdu-M.js";import"./DraggableList-aEpr5KMg.js";import"./search-BX6NTUq-.js";import"./Input-2gT9MM9i.js";import"./useControlled-reVxsWrk.js";import"./Button-X1eKFvis.js";import"./small-cross-Bs3zyzt9.js";import"./ActionButton-DOPw_tWb.js";import"./Checkbox-DSp6V7ct.js";import"./minus-BCrXrXbY.js";import"./tick-CSreC1u9.js";import"./useValueChanged-BYdSrB1K.js";import"./caret-down-BmxFjjQN.js";import"./CollapsiblePanel-CZbJVx7q.js";import"./MultiColumnSortDialog-ZWCf-0m8.js";import"./MenuTrigger-CWshcgkW.js";import"./CompositeItem-p_pExXHP.js";import"./ToolbarRootContext-CASyr8OY.js";import"./getDisabledMountTransitionStyles-BGuUm0lq.js";import"./getPseudoElementBounds-eU2wOyU-.js";import"./chevron-down-BxX8zzC2.js";import"./index-DGHWC0lM.js";import"./error-B99a3_sw.js";import"./BaseCbacBanner-DeKeFsW5.js";import"./makeExternalStore-D-0yZnT6.js";import"./Tooltip-92umf-wC.js";import"./PopoverPopup-RWNwj8K1.js";import"./toNumber-Cfw-h37Q.js";import"./useOsdkClient-CXXydos7.js";import"./DropdownField-D7e9cb8z.js";import"./withOsdkMetrics--GIbPR5k.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

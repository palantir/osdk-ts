import{f as n,j as t}from"./iframe-CAVo3KSD.js";import{O as p}from"./object-table-7MErNazy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CFVJ55Xe.js";import"./index-CETWgizZ.js";import"./Dialog-BdLVc5Ly.js";import"./cross-BRimsVDJ.js";import"./svgIconContainer-CdCxXVW4.js";import"./useBaseUiId-BEKvCZTk.js";import"./InternalBackdrop-CmmhjUoM.js";import"./composite-BhUpeWne.js";import"./index-CE9quRvV.js";import"./index-BdN5IhYD.js";import"./index-BIL6uGL_.js";import"./useEventCallback-BnbrQWCo.js";import"./SkeletonBar-BX57y30e.js";import"./LoadingCell-C9rlbTrM.js";import"./ColumnConfigDialog-COzvYWHQ.js";import"./DraggableList-BGWAniPG.js";import"./search-CO76evE2.js";import"./Input-BgQCEDQn.js";import"./useControlled-BqgK97pU.js";import"./Button-DzqbCr4c.js";import"./small-cross-xF_n1Jkr.js";import"./ActionButton-BlI0cw9K.js";import"./Checkbox-D8ENjaRS.js";import"./useValueChanged-Dic-5wT9.js";import"./CollapsiblePanel-BGiZ1_8Y.js";import"./MultiColumnSortDialog-BPMqQ_Xn.js";import"./MenuTrigger-BNcYMO21.js";import"./CompositeItem-BLFgh2AD.js";import"./ToolbarRootContext-sUAEkKPf.js";import"./getDisabledMountTransitionStyles-C_IG2sRC.js";import"./getPseudoElementBounds-MnS0pFmz.js";import"./chevron-down-nzZ4GhdY.js";import"./index-D7fAChCW.js";import"./error-Bef6_Y6B.js";import"./BaseCbacBanner-iw0jrmHa.js";import"./makeExternalStore-9GNLJugC.js";import"./Tooltip-DrIkL1YM.js";import"./PopoverPopup-vwXtUK14.js";import"./toNumber-Bas8H12e.js";import"./useOsdkClient-B07bWZ1J.js";import"./tick-G9d3hSI5.js";import"./DropdownField-Bnt-Zy_F.js";import"./withOsdkMetrics-hCWMK_0J.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

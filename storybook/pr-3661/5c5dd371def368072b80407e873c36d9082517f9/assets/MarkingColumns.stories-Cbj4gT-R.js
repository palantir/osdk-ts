import{f as n,j as t}from"./iframe-B8pB1bJY.js";import{O as p}from"./object-table-BMMzP9pT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DXZ8dl6a.js";import"./Table-DQl-g1P4.js";import"./index-Cct9Hzyk.js";import"./Dialog-CdKXD5Av.js";import"./cross-DT9_3V5M.js";import"./svgIconContainer-CoYMcxhp.js";import"./useBaseUiId-hbqorb2C.js";import"./InternalBackdrop-CmCeozM3.js";import"./composite-B3ZXUS7R.js";import"./index-BWu2MeTs.js";import"./index-Dr9KdU4I.js";import"./index-BjGuZNF2.js";import"./useEventCallback-C9g6BFmY.js";import"./SkeletonBar-B2q4ElyM.js";import"./LoadingCell-Eb76HUxR.js";import"./ColumnConfigDialog-BNPNn-0i.js";import"./DraggableList-BfoDhciT.js";import"./search-BSMZLluX.js";import"./Input-mD30rmJY.js";import"./useControlled-DrYY3vU9.js";import"./Button-GtjGt5F3.js";import"./small-cross-BfmMb7q-.js";import"./ActionButton-CHCp7m3N.js";import"./Checkbox-CR9-8RGI.js";import"./useValueChanged-CelK5b0Z.js";import"./CollapsiblePanel-m5ysI4-y.js";import"./MultiColumnSortDialog-CpXJSeFe.js";import"./MenuTrigger-1Tas0aoj.js";import"./CompositeItem-BYF7NSQK.js";import"./ToolbarRootContext-BRiMAfYn.js";import"./getDisabledMountTransitionStyles-BtBdaacH.js";import"./getPseudoElementBounds-Ctp0mDIz.js";import"./chevron-down-BBglpfYU.js";import"./index-CTRDrVhu.js";import"./error-DhkniUj3.js";import"./BaseCbacBanner-BLUhJ4zd.js";import"./makeExternalStore-DL_nt-sT.js";import"./Tooltip-3dZgSM1I.js";import"./PopoverPopup-C_cisDW6.js";import"./toNumber-DIAATGYs.js";import"./useOsdkClient-BEiD1g6Z.js";import"./tick-CIEXnMMA.js";import"./DropdownField-DH73ERTG.js";import"./withOsdkMetrics-CnndoLRa.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

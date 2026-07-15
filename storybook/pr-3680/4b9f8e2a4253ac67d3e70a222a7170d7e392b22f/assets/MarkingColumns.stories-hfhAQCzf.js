import{f as n,j as t}from"./iframe-CxBuRuZT.js";import{O as p}from"./object-table-BJVwag-m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKlLlV4L.js";import"./Table-7l1ILzWy.js";import"./index-Dm1AhSPd.js";import"./Dialog-DZ5PAB7i.js";import"./cross-eZd0XRRK.js";import"./svgIconContainer-BN5I9dUw.js";import"./useBaseUiId-B_g5EDL1.js";import"./InternalBackdrop-RdaR9FzT.js";import"./composite-DgJMS31U.js";import"./index-PgXnUZ6T.js";import"./index-Bf9pteT-.js";import"./index-tLZVhYtz.js";import"./useEventCallback-CM2a10EJ.js";import"./SkeletonBar-B8kqLyt4.js";import"./LoadingCell-Cfrq_bQw.js";import"./ColumnConfigDialog-C1ZrB3kd.js";import"./DraggableList-BJfm7tsC.js";import"./search-bomuUYil.js";import"./Input-u_JFcwHL.js";import"./useControlled-Cp0M8Tx1.js";import"./Button-D6Lf0eZd.js";import"./small-cross-BgCy3Ley.js";import"./ActionButton-DtFu6F6B.js";import"./Checkbox-4XdcM4Kd.js";import"./useValueChanged-CClMU3p4.js";import"./CollapsiblePanel-YQGI0brq.js";import"./MultiColumnSortDialog-BxaAmnnt.js";import"./MenuTrigger-YM1HyDEF.js";import"./CompositeItem-CsypoJ1W.js";import"./ToolbarRootContext-2U_PyGcG.js";import"./getDisabledMountTransitionStyles-BP-hllXX.js";import"./getPseudoElementBounds-vYhEf5F8.js";import"./chevron-down-jocrG32E.js";import"./index-BkU9QJkZ.js";import"./error-BQE7CTFl.js";import"./BaseCbacBanner-urKV_0P9.js";import"./makeExternalStore-BD3oFxaN.js";import"./Tooltip-BtrECgMK.js";import"./PopoverPopup-C_KjtFJ3.js";import"./toNumber-DX_-oLKs.js";import"./useOsdkClient-BgeTWPax.js";import"./tick-DXorhXkh.js";import"./DropdownField-B3CQjxCI.js";import"./withOsdkMetrics-C0xfDblt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-2pngh1Rs.js";import{O as p}from"./object-table-gz3SHil4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CG8d724h.js";import"./Table-BMS_hbXf.js";import"./index-DoLrcSFS.js";import"./Dialog-DfBi7d-y.js";import"./cross-QeX5l1qW.js";import"./svgIconContainer-Dz9aGjPQ.js";import"./useBaseUiId-D2X0nhPh.js";import"./InternalBackdrop-Bmnln8PI.js";import"./composite-FrGOJff3.js";import"./index-B3lZ1DGZ.js";import"./index-BTbdItMS.js";import"./index-BNsTXB9r.js";import"./useEventCallback-tMTzd65f.js";import"./SkeletonBar-CsBN3sz7.js";import"./LoadingCell-BiDdDtTq.js";import"./ColumnConfigDialog-DgwCuib1.js";import"./DraggableList-fjYAB-t5.js";import"./search-D4EMTx6V.js";import"./Input-pzJCWXrM.js";import"./useControlled-DKX0vwB-.js";import"./Button-CHBFkWEg.js";import"./small-cross-D_c64zDF.js";import"./ActionButton-BHpFxdG_.js";import"./Checkbox-BaKG-YDL.js";import"./useValueChanged-nr19lKO4.js";import"./CollapsiblePanel-DComTiuQ.js";import"./MultiColumnSortDialog-DEXzhw-F.js";import"./MenuTrigger-sB_h_R9s.js";import"./CompositeItem-3UU-yOXx.js";import"./ToolbarRootContext-CBQFrsGy.js";import"./getDisabledMountTransitionStyles-Cqo9nENB.js";import"./getPseudoElementBounds-DCbiHDOP.js";import"./chevron-down-CZ7isOC9.js";import"./index-B1RupX0X.js";import"./error-DU4AEtX8.js";import"./BaseCbacBanner-BIEyclZD.js";import"./makeExternalStore-_p5KoIlo.js";import"./Tooltip-C6SwcLQ5.js";import"./PopoverPopup-Bv6XTuQt.js";import"./toNumber-CK6mvJ4-.js";import"./useOsdkClient-BQ6MkRkL.js";import"./tick-uLdbBl1o.js";import"./DropdownField-DK7yfko2.js";import"./withOsdkMetrics-BRYLmxO3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

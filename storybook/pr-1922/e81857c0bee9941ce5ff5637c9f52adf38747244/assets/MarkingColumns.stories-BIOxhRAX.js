import{f as n,j as t}from"./iframe-C_1Cl5gK.js";import{O as p}from"./object-table-43tZZClG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrD8VVQ_.js";import"./Table-O7I3W1m9.js";import"./index-oTCuQgfo.js";import"./Dialog-j7w96EWg.js";import"./cross-BR9oscPP.js";import"./svgIconContainer-B4pNJQZ5.js";import"./useBaseUiId-D56E2IuH.js";import"./InternalBackdrop-D5JolbRM.js";import"./composite-o6AQsqAM.js";import"./index-CzCOCiZR.js";import"./index-CkuCP6M2.js";import"./index-BqSDMYVN.js";import"./useEventCallback-BSAfLkY2.js";import"./SkeletonBar-DhaIYC2m.js";import"./LoadingCell-Bs2m1zE_.js";import"./ColumnConfigDialog-yk5_TlOR.js";import"./DraggableList-Dku9H1rS.js";import"./search-BNIXhj49.js";import"./Input-DAfZ_JxV.js";import"./useControlled-HZY0Ts_x.js";import"./Button-CEjuqdrt.js";import"./small-cross-CSnRnaeP.js";import"./ActionButton-FxD1Sr8M.js";import"./Checkbox-CYXOe5KK.js";import"./useValueChanged-v9pZwBM0.js";import"./CollapsiblePanel-D9H9tihz.js";import"./MultiColumnSortDialog-Btrj-sj_.js";import"./MenuTrigger-DkW8mXxo.js";import"./CompositeItem-WjuDsuCI.js";import"./ToolbarRootContext-CzeEh-Av.js";import"./getDisabledMountTransitionStyles-DmHJoR8R.js";import"./getPseudoElementBounds-LokADv5Z.js";import"./chevron-down-XIg47Arq.js";import"./index-BgB3QU8p.js";import"./error-DqlNJLIc.js";import"./BaseCbacBanner-nLcEcQUc.js";import"./makeExternalStore-Bhwc6Kwv.js";import"./Tooltip-D5DebLJb.js";import"./PopoverPopup-BqMLFJIb.js";import"./toNumber-CxcfPbvd.js";import"./useOsdkClient-XQIXJt8c.js";import"./tick-DGWTpzk6.js";import"./DropdownField-BJgvWEPO.js";import"./withOsdkMetrics-BgUyyyzT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

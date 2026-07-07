import{f as n,j as t}from"./iframe-C9wefhiD.js";import{O as p}from"./object-table-DFqxhDsl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdStPaCr.js";import"./Table-BM5fxa2m.js";import"./index-DYvyfpkP.js";import"./Dialog-BuTk1x_w.js";import"./cross-C_z7P1QJ.js";import"./svgIconContainer-CtjfKo_Y.js";import"./useBaseUiId-CquS-9BM.js";import"./InternalBackdrop-ChY80ITP.js";import"./composite-CWVo6FMX.js";import"./index-BLFQUimI.js";import"./index-DfrJEj7e.js";import"./index-DzUri8lp.js";import"./useEventCallback-CDScmR0t.js";import"./SkeletonBar-BlJFYMB_.js";import"./LoadingCell-PSHiWymO.js";import"./ColumnConfigDialog-iZMvoe52.js";import"./DraggableList-ukuudcUP.js";import"./search-BjM5NTG3.js";import"./Input-ZNHR_BPN.js";import"./useControlled-COGXDOr8.js";import"./Button-Bd-82nYV.js";import"./small-cross-BZZ8A8bI.js";import"./ActionButton-BUU3TPl3.js";import"./Checkbox-BoAY2emC.js";import"./useValueChanged-C7SFEu0t.js";import"./CollapsiblePanel-LVhEXGhC.js";import"./MultiColumnSortDialog-C1qo5PU3.js";import"./MenuTrigger-T6Ude9Ls.js";import"./CompositeItem-CiIi7DoF.js";import"./ToolbarRootContext-D9YlFow_.js";import"./getDisabledMountTransitionStyles-Dhv-NkkG.js";import"./getPseudoElementBounds-CHRkr-dC.js";import"./chevron-down-DfJ300jj.js";import"./index-CMD5w3qF.js";import"./error-C7D9Q9qf.js";import"./BaseCbacBanner-D3vuHJ_C.js";import"./makeExternalStore-7e75TOza.js";import"./Tooltip-BT1OUcfv.js";import"./PopoverPopup-BXFTPO4n.js";import"./toNumber-BohPF7dH.js";import"./useOsdkClient-Bq3hPv2W.js";import"./tick-CfcwN_br.js";import"./DropdownField-5nlYVfKU.js";import"./withOsdkMetrics-DowTPyMU.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

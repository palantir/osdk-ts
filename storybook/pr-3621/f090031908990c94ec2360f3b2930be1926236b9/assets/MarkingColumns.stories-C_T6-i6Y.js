import{f as n,j as t}from"./iframe-BuaThpCY.js";import{O as p}from"./object-table-_KjG2PoH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDPJP__E.js";import"./Table-S_Q083n6.js";import"./index-Bfa5fFlh.js";import"./Dialog-fyprW7_d.js";import"./cross-DRuNW182.js";import"./svgIconContainer-1C1jOQ0R.js";import"./useBaseUiId-DSybLx0z.js";import"./InternalBackdrop-CSZFyIzx.js";import"./composite-BsEo-LBr.js";import"./index-CccI9Mtb.js";import"./index-Bopn5WYv.js";import"./index-7T4oSQIU.js";import"./useEventCallback-Bud9vefP.js";import"./SkeletonBar-B8GA1hUw.js";import"./LoadingCell-C6_CSUZA.js";import"./ColumnConfigDialog-DrYkqIFL.js";import"./DraggableList-BM2oW5cB.js";import"./search-D5LGh93M.js";import"./Input-DauCBVrW.js";import"./useControlled-CX-ZF3Hm.js";import"./Button-DDFnyr2M.js";import"./small-cross-D33YLf1A.js";import"./ActionButton-B3AJr4-F.js";import"./Checkbox-DrrngAn8.js";import"./useValueChanged-zhEpBd3F.js";import"./CollapsiblePanel-BgSv5-PI.js";import"./MultiColumnSortDialog-B9NhSVDk.js";import"./MenuTrigger-DIlEvoUR.js";import"./CompositeItem-UqhqC17s.js";import"./ToolbarRootContext-DfriOFVL.js";import"./getDisabledMountTransitionStyles-CTxR0o8M.js";import"./getPseudoElementBounds-zoqz-8A0.js";import"./chevron-down-DaBbmd4Q.js";import"./index-ByWKtKHT.js";import"./error-Cb1Tru8b.js";import"./BaseCbacBanner-BHI3EQ-z.js";import"./makeExternalStore-CpuGo_RY.js";import"./Tooltip-Ds-EooAn.js";import"./PopoverPopup-HV-P1tpi.js";import"./toNumber-CWN_nL8d.js";import"./useOsdkClient-BfjJVEnp.js";import"./tick-6w-RVTpg.js";import"./DropdownField-CHvOboTA.js";import"./withOsdkMetrics-LCqWI8sO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-BrPzj4JS.js";import{O as p}from"./object-table-D-tXuRGI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs48bxEq.js";import"./Table-Des2dqW8.js";import"./index-KRJwl6lJ.js";import"./Dialog-l3yQuk3n.js";import"./cross-BTKNx0tq.js";import"./svgIconContainer-Dpfdk41P.js";import"./useBaseUiId-C1IVEUu0.js";import"./InternalBackdrop-tN6qROS8.js";import"./composite-c1IVu92X.js";import"./index-CnJmd38Y.js";import"./index-Bd7k9Zqu.js";import"./index-C4o_Wtik.js";import"./useEventCallback-BiiJkovA.js";import"./SkeletonBar-CDOqISR0.js";import"./LoadingCell-DNl1AQse.js";import"./ColumnConfigDialog-atUfa3hO.js";import"./DraggableList-DQ0bymxX.js";import"./search-C96msPus.js";import"./Input-Bq7aAMSS.js";import"./useControlled-81B9KEVs.js";import"./Button-CG6gF7Jm.js";import"./small-cross-DE1FAV0m.js";import"./ActionButton-Bu4etPS3.js";import"./Checkbox-CDYuSOg2.js";import"./useValueChanged-BZ11tiTL.js";import"./CollapsiblePanel-Btn3Un6F.js";import"./MultiColumnSortDialog-Cs2tXU2t.js";import"./MenuTrigger-CF-nDXfz.js";import"./CompositeItem-BHoTN6nd.js";import"./ToolbarRootContext-B9kw_RNO.js";import"./getDisabledMountTransitionStyles-CtDZ2CZ5.js";import"./getPseudoElementBounds-BChkVo7v.js";import"./chevron-down-Cg8-4eUy.js";import"./index-DQ5gmqne.js";import"./error-C68wTVTT.js";import"./BaseCbacBanner-DzKNMe1H.js";import"./makeExternalStore-BoSV2dxm.js";import"./Tooltip-Bzba47c8.js";import"./PopoverPopup-Bn8KVduJ.js";import"./toNumber-Bf-7vlIM.js";import"./useOsdkClient-DN4Y6ynv.js";import"./tick-CqydA0sl.js";import"./DropdownField-Dz7_Wt_N.js";import"./withOsdkMetrics-Ym8zEuUE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

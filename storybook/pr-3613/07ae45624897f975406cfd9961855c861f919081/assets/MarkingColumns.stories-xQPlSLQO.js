import{f as n,j as t}from"./iframe-CDwmHXYT.js";import{O as p}from"./object-table-C5pM0A7q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9B9hJn3.js";import"./Table-dm0sUPtw.js";import"./index-r3Emod_r.js";import"./Dialog-CfPjgyeB.js";import"./cross-CdZe6H37.js";import"./svgIconContainer-Cc1vfjJj.js";import"./useBaseUiId-DdBbRpKP.js";import"./InternalBackdrop-DI3tD8nv.js";import"./composite-DOjV8TaF.js";import"./index-Dj9nPgEg.js";import"./index-CXMdXDeY.js";import"./index-CGZhwNQV.js";import"./useEventCallback-CDVsYqJQ.js";import"./SkeletonBar-DLN7ApSX.js";import"./LoadingCell-CLtSOMhV.js";import"./ColumnConfigDialog-C4qS1fiH.js";import"./DraggableList-MM-yPQ9c.js";import"./search-EnUpa1x3.js";import"./Input-Yzk3Xuy6.js";import"./useControlled-B1reAt19.js";import"./Button-IyoK4gpS.js";import"./small-cross-Di99LbfS.js";import"./ActionButton-DGtBT1vT.js";import"./Checkbox-D6ypgPNI.js";import"./useValueChanged-CYAL_iOb.js";import"./CollapsiblePanel-Bfv91DMZ.js";import"./MultiColumnSortDialog-VCS3TuBi.js";import"./MenuTrigger-D9iNP_PD.js";import"./CompositeItem-CO6BV4SO.js";import"./ToolbarRootContext-D3avpCmA.js";import"./getDisabledMountTransitionStyles-ButXKcgd.js";import"./getPseudoElementBounds-D1qP45dD.js";import"./chevron-down-BOoZfQL9.js";import"./index-Cqlx1xMM.js";import"./error-DHp74l6C.js";import"./BaseCbacBanner-DihrTad7.js";import"./makeExternalStore-OcR9GPOD.js";import"./Tooltip-D1_6SE7z.js";import"./PopoverPopup-D7LoTAEB.js";import"./toNumber-Czn5Fl3k.js";import"./useOsdkClient-BjZAw83j.js";import"./tick-Wl536-Oc.js";import"./DropdownField-CsBO-PB-.js";import"./withOsdkMetrics-kNFPB2RF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

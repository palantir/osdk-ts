import{f as n,j as t}from"./iframe-CLbUNDDQ.js";import{O as p}from"./object-table-CuuVT9ev.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ddvl-xLL.js";import"./Table-JOBTwLzG.js";import"./index-DdSZk3vu.js";import"./Dialog-DshYN0R_.js";import"./cross-Bvgv53c_.js";import"./svgIconContainer-bWFwhvyx.js";import"./useBaseUiId-Duy4oCBe.js";import"./InternalBackdrop-BwARBFHX.js";import"./composite-DWZ-xHoQ.js";import"./index-jgSOSH1p.js";import"./index-BWIEmGIo.js";import"./index-B-4S9GGK.js";import"./useEventCallback-BqjZcdZb.js";import"./SkeletonBar-Bp0nzIS9.js";import"./LoadingCell-D-xjQPsS.js";import"./ColumnConfigDialog-CM_oNPQ2.js";import"./DraggableList-DuPg5WZM.js";import"./search-CYwpcKR9.js";import"./Input-BKJXytVV.js";import"./useControlled-Bmx5uuBa.js";import"./Button-Bqk3M9e4.js";import"./small-cross-CSDp80lk.js";import"./ActionButton-DuwGztn6.js";import"./Checkbox-DtLTuUr6.js";import"./useValueChanged-CZGSzN5r.js";import"./CollapsiblePanel-D6vzvP9y.js";import"./MultiColumnSortDialog-C0LKm0xp.js";import"./MenuTrigger-nWjPMBsu.js";import"./CompositeItem-CF7zNtiQ.js";import"./ToolbarRootContext-4PSRkTRf.js";import"./getDisabledMountTransitionStyles-DFFXKTxY.js";import"./getPseudoElementBounds-BZIjlYHk.js";import"./chevron-down-D5iTV8xG.js";import"./index-Bum4KHd8.js";import"./error-Cwe5UK3L.js";import"./BaseCbacBanner-CqVzqhkF.js";import"./makeExternalStore-C653oAyg.js";import"./Tooltip-DWVh-X4w.js";import"./PopoverPopup-DbwjwqXm.js";import"./toNumber-riHn02yU.js";import"./useOsdkClient-BJSWtTvW.js";import"./tick-D8aZ0Iwi.js";import"./DropdownField-D_9_MHJv.js";import"./withOsdkMetrics-GOg6BWns.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

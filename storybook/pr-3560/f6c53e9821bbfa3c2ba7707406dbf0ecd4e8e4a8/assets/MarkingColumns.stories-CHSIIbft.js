import{f as n,j as t}from"./iframe-CTNzOQ9s.js";import{O as p}from"./object-table-CxPR0yWW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsFSaJDQ.js";import"./Table-hTC8RkuQ.js";import"./index-DRPEg90p.js";import"./Dialog-BCcBWg6Q.js";import"./cross-BFoVgfWv.js";import"./svgIconContainer-CXoapGnl.js";import"./useBaseUiId-Cq11xQXq.js";import"./InternalBackdrop-I-0IlH_Y.js";import"./composite-DwkHALDz.js";import"./index-DgKpQYO5.js";import"./index-BawSb6he.js";import"./index-lXwysK22.js";import"./useEventCallback-Dn5T_-YR.js";import"./SkeletonBar-B-1UU7Ib.js";import"./LoadingCell-DRW2tYpv.js";import"./ColumnConfigDialog-CSLmKDrS.js";import"./DraggableList-NyoOFC7X.js";import"./Input-B1wS8Yws.js";import"./useControlled-7QRHi1zA.js";import"./Button-BUqLG1Cm.js";import"./small-cross-AvIUsQOU.js";import"./ActionButton-B7iHugSe.js";import"./Checkbox-BzHAyZx4.js";import"./minus-BUOAMNzz.js";import"./useValueChanged-DyTnKZIk.js";import"./caret-down-C0ALeRyL.js";import"./CollapsiblePanel-BtuRhur0.js";import"./MultiColumnSortDialog-Wew8kTC6.js";import"./MenuTrigger-DST2G_Zy.js";import"./CompositeItem-D8NR5hxe.js";import"./ToolbarRootContext-CxcYMuqJ.js";import"./getDisabledMountTransitionStyles-BQCH_J9Y.js";import"./getPseudoElementBounds-252qpKR0.js";import"./chevron-down-BH7P-HUK.js";import"./index-Bh2vCdyB.js";import"./error-Icev8rRj.js";import"./BaseCbacBanner-D5u1Evu2.js";import"./makeExternalStore-CYxDp44O.js";import"./Tooltip-DfePDKye.js";import"./PopoverPopup-BxBaPW88.js";import"./toNumber-VixFY9Iw.js";import"./useOsdkClient-D2V_r5_J.js";import"./DropdownField-DQbBbbr1.js";import"./withOsdkMetrics-D3SbJ5bl.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-D3GVN_xa.js";import{O as p}from"./object-table-Bol73k5v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hn1q1Oc_.js";import"./Table-6_4pVzMb.js";import"./index-Du2n5QFe.js";import"./Dialog-Beh83bn1.js";import"./cross-TBdfKQjD.js";import"./svgIconContainer-CTACS-sh.js";import"./useBaseUiId-BPfzsPcC.js";import"./InternalBackdrop-DRkNEvum.js";import"./composite-BhDt9Oq3.js";import"./index-Dgu5oJ6_.js";import"./index-BGu-opW5.js";import"./index-DlJ37ujC.js";import"./useEventCallback-CXoSUrtf.js";import"./SkeletonBar-BDkfHXue.js";import"./LoadingCell-BrIvQXm4.js";import"./ColumnConfigDialog-B4ZBvlb9.js";import"./DraggableList-CbZX-FOY.js";import"./search-BKNRRqyz.js";import"./Input-DzfXYv_n.js";import"./useControlled-xCemqxSk.js";import"./Button-Bq15im3B.js";import"./small-cross-Diy4Xxbm.js";import"./ActionButton-DQHtMRH9.js";import"./Checkbox-ueshpuip.js";import"./useValueChanged-B8nuWkLV.js";import"./CollapsiblePanel-C1efFxcA.js";import"./MultiColumnSortDialog-Cx8K2C93.js";import"./MenuTrigger-BvqEYF7G.js";import"./CompositeItem-COql2-Hh.js";import"./ToolbarRootContext-BEk3VuK8.js";import"./getDisabledMountTransitionStyles-vURRj64J.js";import"./getPseudoElementBounds-Bd_TvEbw.js";import"./chevron-down-BCeJV8GF.js";import"./index-DAmtkWaU.js";import"./error-DC9uaIIx.js";import"./BaseCbacBanner-DzgYTqUC.js";import"./makeExternalStore-CGt4Tg8e.js";import"./Tooltip-CE1boCJg.js";import"./PopoverPopup-BWKi0GS9.js";import"./toNumber-sgJz6d61.js";import"./useOsdkClient-xObGp8vp.js";import"./tick-DZtpx84s.js";import"./DropdownField-BTzQmaMN.js";import"./withOsdkMetrics-D3VcJmau.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

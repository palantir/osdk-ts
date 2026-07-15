import{f as n,j as t}from"./iframe-BSWU-B_t.js";import{O as p}from"./object-table-CxuUhCym.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BP69itpM.js";import"./Table-ClxkV53c.js";import"./index-DCPm6e7t.js";import"./Dialog-CxpmYK6p.js";import"./cross-BqFGV5fX.js";import"./svgIconContainer-DYKXPmKq.js";import"./useBaseUiId-DgZLNkcV.js";import"./InternalBackdrop-CFryOhwR.js";import"./composite-xK3OdJJN.js";import"./index-BxbANLHm.js";import"./index-CSS1hzAc.js";import"./index-B78EWLQq.js";import"./useEventCallback-_URStdDY.js";import"./SkeletonBar-DeOC8U6S.js";import"./LoadingCell-NiJp7niC.js";import"./ColumnConfigDialog-o_2Fsjbg.js";import"./DraggableList-CUOL-aXY.js";import"./search-DC42LciC.js";import"./Input-C-SAhLrm.js";import"./useControlled-e9A-MeLW.js";import"./Button-C7DF1eS8.js";import"./small-cross-DvvR_Lxs.js";import"./ActionButton-b1R9gfoC.js";import"./Checkbox-NuF0zaYj.js";import"./useValueChanged-B_pJiHnJ.js";import"./CollapsiblePanel-BLNp64Gw.js";import"./MultiColumnSortDialog-DnK1WFUZ.js";import"./MenuTrigger-eG-ukvHv.js";import"./CompositeItem-BD3XvVOF.js";import"./ToolbarRootContext-CzwBSefm.js";import"./getDisabledMountTransitionStyles-q1CySqzv.js";import"./getPseudoElementBounds-BpvUEGkW.js";import"./chevron-down-DJwyIqCh.js";import"./index-BsLHq-Z8.js";import"./error-1J8Hl7Xk.js";import"./BaseCbacBanner-CgSQCKgx.js";import"./makeExternalStore-ChJ3m9QU.js";import"./Tooltip-C8w1cIBa.js";import"./PopoverPopup-UAd0OIAS.js";import"./toNumber-sSUlRf_y.js";import"./useOsdkClient-BncCvxjc.js";import"./tick-CwTnBEro.js";import"./DropdownField-DDTa8mDh.js";import"./withOsdkMetrics-B-cyLij9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

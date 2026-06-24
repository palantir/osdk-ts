import{f as n,j as t}from"./iframe-x2-cfQxg.js";import{O as p}from"./object-table-BnXOIbvV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLkIcpwq.js";import"./Table-CT3VMMxo.js";import"./index-B84hqV3p.js";import"./Dialog-BNr3EdB3.js";import"./cross-sQjrSNhE.js";import"./svgIconContainer-BRmFBXVT.js";import"./useBaseUiId-RxZWVLhz.js";import"./InternalBackdrop-B2PU8IVf.js";import"./composite-iIR3UcfH.js";import"./index-aRK24jVF.js";import"./index-DLpspjDb.js";import"./index-4g0ELqnU.js";import"./useEventCallback-BctdSjeq.js";import"./SkeletonBar-CnVgmZQC.js";import"./LoadingCell-LFPU6OZV.js";import"./ColumnConfigDialog-BOhzJ1YU.js";import"./DraggableList-2j6e8gZF.js";import"./Input-CELaRZCY.js";import"./useControlled-BLeoY5Oc.js";import"./Button-DtFdx_p9.js";import"./small-cross-y6n8TBfC.js";import"./ActionButton-CNnE2Jyl.js";import"./Checkbox-BT4HiG2J.js";import"./minus-D_05B2qj.js";import"./useValueChanged-iIMkG3Q5.js";import"./caret-down-CDyUL3QQ.js";import"./CollapsiblePanel-A5f0qdfO.js";import"./MultiColumnSortDialog-BqpY7GdF.js";import"./MenuTrigger-DB7BEUUN.js";import"./CompositeItem-Dqy6AQwb.js";import"./ToolbarRootContext-BTnwJXb-.js";import"./getDisabledMountTransitionStyles-C8tCkG5u.js";import"./getPseudoElementBounds-CZjTc9BT.js";import"./chevron-down-B6ZXDnXt.js";import"./index-cEubUTa-.js";import"./error-CeV8yWLv.js";import"./BaseCbacBanner-BaoMuX_b.js";import"./makeExternalStore-BFySga81.js";import"./Tooltip-C_u-3ZQQ.js";import"./PopoverPopup-BdYdTnOl.js";import"./toNumber-DdOUM5-z.js";import"./useOsdkClient-BC4HbXEJ.js";import"./DropdownField-DWT-oCk5.js";import"./withOsdkMetrics-BCm2-y3y.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

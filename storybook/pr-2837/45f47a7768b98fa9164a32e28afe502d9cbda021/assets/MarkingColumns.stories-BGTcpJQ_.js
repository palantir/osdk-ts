import{f as n,j as t}from"./iframe-DA_4jhIo.js";import{O as p}from"./object-table-CSJ4txk9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6F9FSIZ.js";import"./Table-DgmDnt-r.js";import"./index-BTHg_M1G.js";import"./Dialog-3XWYlTBy.js";import"./cross-CByxZKRa.js";import"./svgIconContainer-J_lvtdTR.js";import"./useBaseUiId-K0QFAQjB.js";import"./InternalBackdrop-DSb_Z3NR.js";import"./composite-xMjmZTG5.js";import"./index-DNtqp29a.js";import"./index-DqQol2AI.js";import"./index-B-FX1cz4.js";import"./useEventCallback-Bo6CXQIl.js";import"./SkeletonBar-Ce3WikFt.js";import"./LoadingCell-DpKVR0d4.js";import"./ColumnConfigDialog-CKsm1dYW.js";import"./DraggableList-D5OpgL-8.js";import"./Input-DrnqmiMh.js";import"./useControlled-BPddVxgx.js";import"./Button-g0YtIT_5.js";import"./small-cross-Dg47dwv9.js";import"./ActionButton-q5BTdw5V.js";import"./Checkbox-D3LJs9F2.js";import"./minus-Bk6KVfwv.js";import"./useValueChanged-CkaKxI-p.js";import"./caret-down-D3Azw1AT.js";import"./CollapsiblePanel-BHGRF96m.js";import"./MultiColumnSortDialog-YGN5yqjh.js";import"./MenuTrigger-CjsTMDqZ.js";import"./CompositeItem-B4sm-J4F.js";import"./ToolbarRootContext-B6v9w_Sz.js";import"./getDisabledMountTransitionStyles-DwT3PaUy.js";import"./getPseudoElementBounds-BFzVoM1n.js";import"./chevron-down-CB9njjnl.js";import"./index-H0_dl8P2.js";import"./error-pyqmCDE7.js";import"./BaseCbacBanner-BXM2ZEFb.js";import"./makeExternalStore-BeEa2RXQ.js";import"./Tooltip-lShFEXeU.js";import"./PopoverPopup-Djp6578F.js";import"./toNumber-BHoKg2sp.js";import"./useOsdkClient-DierMDfT.js";import"./DropdownField-Nd8VySRY.js";import"./useShape-CoK4tO7v.js";import"./withOsdkMetrics-DKMeLrAC.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};

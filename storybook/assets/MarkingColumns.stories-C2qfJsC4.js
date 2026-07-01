import{f as n,j as t}from"./iframe-CKFk0arE.js";import{O as p}from"./object-table-CMqNqcE8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CZVHKIr_.js";import"./index-BjQgtYP9.js";import"./Dialog-D3AUol0J.js";import"./cross-fbZdFG_D.js";import"./svgIconContainer-BAT-Ac90.js";import"./useBaseUiId-DAw5VlH9.js";import"./InternalBackdrop-BGYD01M3.js";import"./composite-EscgZUjl.js";import"./index-BLoK5Iyu.js";import"./index-BPzeTJNp.js";import"./index-BQOiH8-N.js";import"./useEventCallback-B23bYEbg.js";import"./SkeletonBar-BBh5BiZW.js";import"./LoadingCell-N308t6eM.js";import"./ColumnConfigDialog-BNix9NWX.js";import"./DraggableList-D4xIW7L-.js";import"./search-BLu0EWyQ.js";import"./Input-VZxUx3mR.js";import"./useControlled-BmBr0tvV.js";import"./Button-c1BMMVFp.js";import"./small-cross-C_slTsDW.js";import"./ActionButton-BqBo569N.js";import"./Checkbox-BFZHIrw4.js";import"./minus-BiUPw5-m.js";import"./tick-ByAIYd8F.js";import"./useValueChanged-DdU8FLRh.js";import"./caret-down-DYKasZ1f.js";import"./CollapsiblePanel-BSzY6CAU.js";import"./MultiColumnSortDialog-CgJTgj8X.js";import"./MenuTrigger-CgCxlE4x.js";import"./CompositeItem-2K-NRXeL.js";import"./ToolbarRootContext-DC7lKy46.js";import"./getDisabledMountTransitionStyles-vjd7JeGK.js";import"./getPseudoElementBounds-C5wa_slk.js";import"./chevron-down-CdZBYj4j.js";import"./index-rXGyYBlQ.js";import"./error-BaydBvcG.js";import"./BaseCbacBanner-BCgZFns7.js";import"./makeExternalStore-DbZaAZFO.js";import"./Tooltip-cpbz2-_L.js";import"./PopoverPopup-Bo4pCaqv.js";import"./toNumber-BUvJd81v.js";import"./useOsdkClient-Bn93AzCF.js";import"./DropdownField-BXqyYdqr.js";import"./withOsdkMetrics-CSIAdfM7.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};

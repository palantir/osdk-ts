import{f as n,j as t}from"./iframe-zteb0Xyj.js";import{O as p}from"./object-table-B-s3dnDh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnLc9qFN.js";import"./Table-DFBCVy3t.js";import"./index-dSjsE8RW.js";import"./Dialog-C0sZ1kmM.js";import"./cross-D1yyTTFq.js";import"./svgIconContainer-J10G18tu.js";import"./useBaseUiId-DlSM7y6E.js";import"./InternalBackdrop-yk22S0bW.js";import"./composite-B96iUAZi.js";import"./index-d7u9CeiR.js";import"./index-DDFyyXsy.js";import"./index-DNsswrem.js";import"./useEventCallback-CWHMd5ZO.js";import"./SkeletonBar-BluwBrg2.js";import"./LoadingCell-BNSOIrks.js";import"./ColumnConfigDialog-BzMQe6Hk.js";import"./DraggableList-tKOE2dJe.js";import"./Input-g3v5n7GW.js";import"./useControlled-BEA61zL3.js";import"./Button-BLu70Vo5.js";import"./small-cross-BKMb4d64.js";import"./ActionButton-CXdgvyeI.js";import"./Checkbox-Dd2II8YR.js";import"./minus-2kKXYvCz.js";import"./useValueChanged-Bl1vx3FC.js";import"./caret-down-CWgevMN4.js";import"./CollapsiblePanel-YluHbTR5.js";import"./MultiColumnSortDialog-BPnNBxfF.js";import"./MenuTrigger-BVgjtksF.js";import"./CompositeItem-C1poiRt6.js";import"./ToolbarRootContext-Bvbv37Tp.js";import"./getDisabledMountTransitionStyles-Clw85uYd.js";import"./getPseudoElementBounds-DKDEhIXf.js";import"./chevron-down-0GMk4d7M.js";import"./index-CNpyvC6R.js";import"./error-C4fzOD38.js";import"./BaseCbacBanner-BBIKTAES.js";import"./makeExternalStore-CZtlm_Df.js";import"./Tooltip-CO_lm3Gv.js";import"./PopoverPopup-9_PriITS.js";import"./toNumber-nM7NBtWX.js";import"./useOsdkClient-B8rgPq6Z.js";import"./DropdownField-CMmh8hB0.js";import"./withOsdkMetrics-CwI3g_U6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

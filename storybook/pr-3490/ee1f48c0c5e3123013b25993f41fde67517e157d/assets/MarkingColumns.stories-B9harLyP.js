import{f as n,j as t}from"./iframe-C5LVRbsy.js";import{O as p}from"./object-table-BT8Ac0oQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-K1ylsg2m.js";import"./Table-B4a_9DEB.js";import"./index-BEkT1F7H.js";import"./Dialog-CbcheREs.js";import"./cross-DbX0Gn7n.js";import"./svgIconContainer-DcjXl59C.js";import"./useBaseUiId-Cex6lMBa.js";import"./InternalBackdrop-CLXYuIrG.js";import"./composite-Bvfbgvr6.js";import"./index-BrY-UWMk.js";import"./index-CoTPiixG.js";import"./index--8R4rgbm.js";import"./useEventCallback-CJLqrufe.js";import"./SkeletonBar-Bm8_31ik.js";import"./LoadingCell-RPoJaTLX.js";import"./ColumnConfigDialog-BTxV2uRg.js";import"./DraggableList-C9sVslZg.js";import"./Input-E-Lsewxd.js";import"./useControlled-Dv3XRtLo.js";import"./Button-CFO0hH20.js";import"./small-cross-DarlYaZj.js";import"./ActionButton-jAfM1c_2.js";import"./Checkbox-Cy3qLuEL.js";import"./minus-CkAc4Zjo.js";import"./useValueChanged-BGdmROTD.js";import"./caret-down-B6bDXZDL.js";import"./CollapsiblePanel-jZD52qbq.js";import"./MultiColumnSortDialog-DuELXTq-.js";import"./MenuTrigger-4CG6FkIu.js";import"./CompositeItem-RqoJNm3t.js";import"./ToolbarRootContext-D4qe3WEg.js";import"./getDisabledMountTransitionStyles-DKCZf36K.js";import"./getPseudoElementBounds-CMQaDoVv.js";import"./chevron-down-h7zqAvrF.js";import"./index-CXYDNjXC.js";import"./error-g8Js0Gy8.js";import"./BaseCbacBanner-C5cX60Bm.js";import"./makeExternalStore-CZe88uh1.js";import"./Tooltip-COvecdxD.js";import"./PopoverPopup-DbbuOs4d.js";import"./toNumber-CMXM86nv.js";import"./useOsdkClient-DLLoIgI_.js";import"./DropdownField-BNgX09f1.js";import"./withOsdkMetrics-CjR-Lgtt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

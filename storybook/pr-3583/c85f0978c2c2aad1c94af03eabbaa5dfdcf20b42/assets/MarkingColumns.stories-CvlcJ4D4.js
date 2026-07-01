import{f as n,j as t}from"./iframe-BWK3j4Bc.js";import{O as p}from"./object-table-B5H4oTbl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dfe5MO2u.js";import"./Table-DqOm1dFD.js";import"./index-DxqGnzK1.js";import"./Dialog-AwDLv8th.js";import"./cross-DbLWNhwv.js";import"./svgIconContainer-D1lCxR_S.js";import"./useBaseUiId-DOMurdeY.js";import"./InternalBackdrop-DkasvxJc.js";import"./composite-Dfu_j4_V.js";import"./index-Dq5qOt3A.js";import"./index-BVFGLqJ0.js";import"./index-CmTDeJsN.js";import"./useEventCallback-D6RTmQqa.js";import"./SkeletonBar-furSyzu_.js";import"./LoadingCell-D8E9jlkd.js";import"./ColumnConfigDialog--cKNBoxs.js";import"./DraggableList-B6DVLwpL.js";import"./search-DGv78-ya.js";import"./Input-CivS3tPx.js";import"./useControlled-Bt-xtMWt.js";import"./Button-CYcagvus.js";import"./small-cross-C08jVvKd.js";import"./ActionButton-D-cyifGH.js";import"./Checkbox-DTuDo_k1.js";import"./minus-hpdP53eT.js";import"./tick-BfpQeNVU.js";import"./useValueChanged-yKxErBpy.js";import"./caret-down-TCOLLt_8.js";import"./CollapsiblePanel-CH1lara0.js";import"./MultiColumnSortDialog-Dj7XfRbU.js";import"./MenuTrigger-DAmaUz7R.js";import"./CompositeItem-DuBjebRr.js";import"./ToolbarRootContext-C0rt45Xb.js";import"./getDisabledMountTransitionStyles-E26QfBiY.js";import"./getPseudoElementBounds-C2zreZjK.js";import"./chevron-down-Bsx7mpFG.js";import"./index-Cyil71YA.js";import"./error-Bk9VHHeM.js";import"./BaseCbacBanner-pg0-_YJN.js";import"./makeExternalStore-BR11O0-P.js";import"./Tooltip-B6Xv27oz.js";import"./PopoverPopup-msbaWyOv.js";import"./toNumber-DYByPN90.js";import"./useOsdkClient-B480YshP.js";import"./DropdownField-FUuLd2nG.js";import"./withOsdkMetrics-DxB6oO2V.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-Bp-w4XXC.js";import{O as p}from"./object-table-D-n0fUK_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xWKdJkiM.js";import"./Table-H713A1aV.js";import"./index-B7bIJSDH.js";import"./Dialog-vVB_NoqD.js";import"./cross-CrDm0Alz.js";import"./svgIconContainer-CSCKJR5t.js";import"./useBaseUiId-DQ1ASmMv.js";import"./InternalBackdrop-D1y_lLrR.js";import"./composite-PUDp5kDy.js";import"./index-D6sC94tK.js";import"./index-fgfHQ-7r.js";import"./index-Cq-jMVXE.js";import"./useEventCallback-CTCEgZl-.js";import"./SkeletonBar-DKcxH2im.js";import"./LoadingCell-DtEm2bgb.js";import"./ColumnConfigDialog-Cx0yXGie.js";import"./DraggableList-DEbGbqTW.js";import"./search-BUrfmuEy.js";import"./Input-DmylTWlW.js";import"./useControlled-DY_ug2Fp.js";import"./Button-8Rk-0cug.js";import"./small-cross-w1rX4lHV.js";import"./ActionButton-BBtNu-VS.js";import"./Checkbox-CNUlJw6K.js";import"./useValueChanged-BG0-y8ir.js";import"./CollapsiblePanel-CfD1_IZ-.js";import"./MultiColumnSortDialog-BgCTwTNl.js";import"./MenuTrigger-D6rEtrMg.js";import"./CompositeItem-DMnhy0UE.js";import"./ToolbarRootContext-CXHKCxpH.js";import"./getDisabledMountTransitionStyles-CYuwjyTN.js";import"./getPseudoElementBounds-BZN5VWob.js";import"./chevron-down-B6OodRkj.js";import"./index-D9pAKDuv.js";import"./error-Dc1dazY_.js";import"./BaseCbacBanner-VQ_i2zTK.js";import"./makeExternalStore-CWKTfQZs.js";import"./Tooltip-B_eg6rwW.js";import"./PopoverPopup-DWs_mw7A.js";import"./toNumber-D0PCD-_S.js";import"./useOsdkClient-BT-jPxnr.js";import"./tick-CCgZu23k.js";import"./DropdownField-D3pTRxPI.js";import"./withOsdkMetrics-CtjhTCRY.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

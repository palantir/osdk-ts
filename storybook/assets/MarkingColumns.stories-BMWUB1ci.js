import{f as n,j as t}from"./iframe-CQqcNnwi.js";import{O as p}from"./object-table-BxiAXAz7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BFcuNwcI.js";import"./index-BGqNz3HP.js";import"./Dialog-CsKFRitx.js";import"./cross-C6Rm_Lrn.js";import"./svgIconContainer-IQ0gBQ0C.js";import"./useBaseUiId-81HNnwRN.js";import"./InternalBackdrop-Cg4UhYKA.js";import"./composite-Du3fY-K0.js";import"./index-BFZh7uCY.js";import"./index-C4QRzzj4.js";import"./index-Dbx2WRpg.js";import"./useEventCallback-zi5J63Yc.js";import"./SkeletonBar-ClzIpiDk.js";import"./LoadingCell-BCAIHQVc.js";import"./ColumnConfigDialog-CDH_IF5R.js";import"./DraggableList-DxZ-7_gS.js";import"./search-T4DuTzMx.js";import"./Input-B_Q9krhW.js";import"./useControlled-D_CwS4tB.js";import"./Button-D78VRn98.js";import"./small-cross-CJePShLT.js";import"./ActionButton-CEleWzrZ.js";import"./Checkbox-BW7whx4O.js";import"./minus-DGBq1uHg.js";import"./tick-Dx88n3jL.js";import"./useValueChanged-C3UxWEWM.js";import"./caret-down-C7tUwnbq.js";import"./CollapsiblePanel-DmtebVDB.js";import"./MultiColumnSortDialog-Dl2rylL1.js";import"./MenuTrigger-CR54dlXa.js";import"./CompositeItem-Byt82z5M.js";import"./ToolbarRootContext-on_UmCVp.js";import"./getDisabledMountTransitionStyles-CdIgwyH4.js";import"./getPseudoElementBounds-Bd9GqyuT.js";import"./chevron-down-DQ9a4skg.js";import"./index-CsF8MjB7.js";import"./error-Cw0E_S2M.js";import"./BaseCbacBanner-BBS2sTPn.js";import"./makeExternalStore-C7H6nJI4.js";import"./Tooltip-C0WvHN5Q.js";import"./PopoverPopup-BCNaGLsH.js";import"./toNumber-BHVLWmFE.js";import"./useOsdkClient-DLVAuYaT.js";import"./DropdownField-B7zxWFL9.js";import"./withOsdkMetrics-DvpJoQW9.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-C-Wr9VZl.js";import{O as p}from"./object-table-t-eL8YUe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMwxQW-0.js";import"./Table-k6z8vcjF.js";import"./index-CITtb26w.js";import"./Dialog-B1vV4hpI.js";import"./cross-CJDfqCM7.js";import"./svgIconContainer-zPYJv1Bz.js";import"./useBaseUiId-deFCLU8y.js";import"./InternalBackdrop-MK_KDUKs.js";import"./composite-BPT2hDEZ.js";import"./index-rD-ZbUoc.js";import"./index-7qVEtzBc.js";import"./index-1GipIr9Y.js";import"./useEventCallback-BwncYRrP.js";import"./SkeletonBar-CdAGS77x.js";import"./LoadingCell-BLlwONGX.js";import"./ColumnConfigDialog-CExf4IrD.js";import"./DraggableList-BCQ6BUzk.js";import"./search-CwutRYPM.js";import"./Input-uZlEy4vY.js";import"./useControlled-B8-8z5Bx.js";import"./Button-X8ZqtMOT.js";import"./small-cross-Dprtsj-K.js";import"./ActionButton-Dnf4F-mY.js";import"./Checkbox-D_0r7L3O.js";import"./minus-BX7A4y_i.js";import"./tick-DmfpEYtK.js";import"./useValueChanged-BDbziuGE.js";import"./caret-down-B6Lbg7DT.js";import"./CollapsiblePanel-UX2lLoJL.js";import"./MultiColumnSortDialog-vNOssYUS.js";import"./MenuTrigger-DwvOAmv5.js";import"./CompositeItem-DXr-uad3.js";import"./ToolbarRootContext-BGgBDtJM.js";import"./getDisabledMountTransitionStyles-CbqHRRPn.js";import"./getPseudoElementBounds-B7GEyelV.js";import"./chevron-down-BLyaED5-.js";import"./index-C1MojZX-.js";import"./error-BZTWQ_lk.js";import"./BaseCbacBanner-CbQ7iEDE.js";import"./makeExternalStore-DTvjkhm6.js";import"./Tooltip-f73KAdQ4.js";import"./PopoverPopup-1rNXlMQJ.js";import"./toNumber-LgptQeMB.js";import"./useOsdkClient-DNl-Vk8X.js";import"./DropdownField-BFF7exW1.js";import"./withOsdkMetrics-CGhUM_zY.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

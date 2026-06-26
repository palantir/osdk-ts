import{f as n,j as t}from"./iframe-Bf-sHAx5.js";import{O as p}from"./object-table-BQDJTwBe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-COGtrc4V.js";import"./index-CPYufUPv.js";import"./Dialog-CeMT2chU.js";import"./cross-CKUL4fQQ.js";import"./svgIconContainer-D94XRhPf.js";import"./useBaseUiId-BtnOSHgT.js";import"./InternalBackdrop-D9EVtWlk.js";import"./composite-BJBTp0LG.js";import"./index-CBOjLJdB.js";import"./index-CjByY2wF.js";import"./index-DDM5LG3P.js";import"./useEventCallback-BxzNz2NZ.js";import"./SkeletonBar-Dy6B_GXk.js";import"./LoadingCell-6QkdVwqD.js";import"./ColumnConfigDialog-B1B_1mQC.js";import"./DraggableList-6ZRbY_ME.js";import"./search-C6C64LDd.js";import"./Input-ggDyi7pA.js";import"./useControlled-Dgh6Ve4V.js";import"./Button-CjmRQsvR.js";import"./small-cross-Da-5WtOj.js";import"./ActionButton-BvM2V58M.js";import"./Checkbox-CEXgNBQM.js";import"./minus-B1jkT18P.js";import"./tick-yF22DCqx.js";import"./useValueChanged-Btvy0N1B.js";import"./caret-down-Bruc2G-l.js";import"./CollapsiblePanel-DXwBkIWE.js";import"./MultiColumnSortDialog-DY5PqCng.js";import"./MenuTrigger-BRWelcJD.js";import"./CompositeItem-go0BGcIT.js";import"./ToolbarRootContext-CUq4CBDE.js";import"./getDisabledMountTransitionStyles-jl5SsFvN.js";import"./getPseudoElementBounds-Dr8kB9Qn.js";import"./chevron-down-B7JXcLji.js";import"./index-DMzYbXTE.js";import"./error-Dce34fJA.js";import"./BaseCbacBanner-DMwuaCZx.js";import"./makeExternalStore-DeFTrL_D.js";import"./Tooltip-HaGk1c6U.js";import"./PopoverPopup-DD6okCen.js";import"./toNumber-CmFFoWfC.js";import"./useOsdkClient-Bihn-JDs.js";import"./DropdownField-6mJvcjo1.js";import"./withOsdkMetrics-CoqdMLh8.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

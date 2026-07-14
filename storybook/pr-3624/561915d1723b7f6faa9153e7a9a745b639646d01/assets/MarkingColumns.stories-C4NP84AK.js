import{f as n,j as t}from"./iframe-IM5MKsNo.js";import{O as p}from"./object-table-BuC0x0Uv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkOZHUYy.js";import"./Table-BEVGo6_L.js";import"./index-yiVv8N5R.js";import"./Dialog-CiaK0Xdu.js";import"./cross-C1wCax7T.js";import"./svgIconContainer-BZvVBooi.js";import"./useBaseUiId-BFRilBEC.js";import"./InternalBackdrop-BNELkcb6.js";import"./composite-CiTvp-Ft.js";import"./index-_kOz-9LW.js";import"./index-CXNLKzTV.js";import"./index-tLvtOeMs.js";import"./useEventCallback-faogPHKV.js";import"./SkeletonBar-Dnx4Q0AH.js";import"./LoadingCell-DVuLp-3q.js";import"./ColumnConfigDialog-CO49QkfG.js";import"./DraggableList-Dq0BuA1P.js";import"./search-BB-S2IIC.js";import"./Input-DbPZgDd-.js";import"./useControlled-DRL4ydof.js";import"./Button-CQtPSfFd.js";import"./small-cross-BuLFpNTy.js";import"./ActionButton-TuGAsCi4.js";import"./Checkbox-CY-bvp43.js";import"./useValueChanged-Z-NzdwpK.js";import"./CollapsiblePanel-DF0rTnEU.js";import"./MultiColumnSortDialog-DTEPZSMm.js";import"./MenuTrigger-U3D92DDS.js";import"./CompositeItem-BCynY363.js";import"./ToolbarRootContext-wNHw0rqX.js";import"./getDisabledMountTransitionStyles-Cr6-ZV8S.js";import"./getPseudoElementBounds-pet6iz4W.js";import"./chevron-down-BwAY1etc.js";import"./index-CuyH1L8L.js";import"./error-C-1VgRxM.js";import"./BaseCbacBanner-DLjpesIj.js";import"./makeExternalStore-DA9gjpUy.js";import"./Tooltip-CobiL-b-.js";import"./PopoverPopup-avjuB8R_.js";import"./toNumber-DZ3UKji5.js";import"./useOsdkClient-APXd2M-f.js";import"./tick-DsGRiVye.js";import"./DropdownField-CKdmMCGp.js";import"./withOsdkMetrics-DqzhxCRf.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

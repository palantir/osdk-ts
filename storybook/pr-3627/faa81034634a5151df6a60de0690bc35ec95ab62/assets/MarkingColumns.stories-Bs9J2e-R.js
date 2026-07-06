import{f as n,j as t}from"./iframe-DSQxWpEG.js";import{O as p}from"./object-table-B8XWg04X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKI0la7c.js";import"./Table-L2ZehDi1.js";import"./index-Yx2NrZhE.js";import"./Dialog-BHPq0Q5i.js";import"./cross-BGnIbKJe.js";import"./svgIconContainer-BrlbKQ-C.js";import"./useBaseUiId-afGmRM5V.js";import"./InternalBackdrop-DiexikUA.js";import"./composite-DI-GZpC1.js";import"./index-BrRDEOU4.js";import"./index-CUc3ubfl.js";import"./index-D-tI-8jJ.js";import"./useEventCallback-DGc5JVfV.js";import"./SkeletonBar-BEKs2kaJ.js";import"./LoadingCell-xNxBJIuM.js";import"./ColumnConfigDialog-BKYTygMK.js";import"./DraggableList-DvcnIl1L.js";import"./search-CbIjbFBw.js";import"./Input-Cll8RmXv.js";import"./useControlled-fIuaNnjT.js";import"./Button-DT9QUUB5.js";import"./small-cross-3MkYHVaT.js";import"./ActionButton-Cyi5AQGe.js";import"./Checkbox-C3uojc83.js";import"./useValueChanged-B0o2KWWE.js";import"./CollapsiblePanel-DhVMvx0U.js";import"./MultiColumnSortDialog-BLHdFtyN.js";import"./MenuTrigger-DsefZAmc.js";import"./CompositeItem-DkpU-y6g.js";import"./ToolbarRootContext-0t2MeBsN.js";import"./getDisabledMountTransitionStyles-8bUhtWQi.js";import"./getPseudoElementBounds-Dm1ZPuO4.js";import"./chevron-down-BaQD7-Xj.js";import"./index-CR25DbLz.js";import"./error-CtwIf2_-.js";import"./BaseCbacBanner-X5WTSOVY.js";import"./makeExternalStore-B21q_WfP.js";import"./Tooltip-COKPhoWo.js";import"./PopoverPopup-CNb9b467.js";import"./toNumber-Cn51QXpI.js";import"./useOsdkClient-iC4Emv2h.js";import"./tick-KXB6Iqe8.js";import"./DropdownField-GucJ6QbV.js";import"./withOsdkMetrics-DpOGBXCo.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

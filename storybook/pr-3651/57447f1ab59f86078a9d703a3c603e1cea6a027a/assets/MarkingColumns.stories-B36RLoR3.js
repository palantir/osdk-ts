import{f as n,j as t}from"./iframe-CsWLXGze.js";import{O as p}from"./object-table-BF2Jp1RF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSH4YltX.js";import"./Table-HhXM9Oub.js";import"./index-M4a-IfHf.js";import"./Dialog-DW3IHBNE.js";import"./cross-BKDbV3FK.js";import"./svgIconContainer-1YcTNdfv.js";import"./useBaseUiId-fgChwSGu.js";import"./InternalBackdrop-BNpx8wum.js";import"./composite-DhVg6KqB.js";import"./index-BIwVsCzG.js";import"./index-sdEV9Iuk.js";import"./index-DbUjE1JE.js";import"./useEventCallback-UY2v0UaL.js";import"./SkeletonBar-CYKMWdpM.js";import"./LoadingCell-CV5Qc6So.js";import"./ColumnConfigDialog-DeS7jCjp.js";import"./DraggableList-BT4PZqTf.js";import"./search-5ko9ULaH.js";import"./Input-BIXIYg13.js";import"./useControlled-CGa31_jc.js";import"./Button-C4uLPH9T.js";import"./small-cross-CCfAvtSS.js";import"./ActionButton-tgMQSAXk.js";import"./Checkbox-6FQl010u.js";import"./useValueChanged-DGVPUxDt.js";import"./CollapsiblePanel-p_0IVO0X.js";import"./MultiColumnSortDialog-C8-Ij8_0.js";import"./MenuTrigger-DzOBCAOK.js";import"./CompositeItem-ZcMj5C8j.js";import"./ToolbarRootContext-By5rr9Ue.js";import"./getDisabledMountTransitionStyles-Cpjy482Z.js";import"./getPseudoElementBounds-BEV-jVND.js";import"./chevron-down-B_D-AKx7.js";import"./index-cr7KvQ6p.js";import"./error-i0f4hEhy.js";import"./BaseCbacBanner-C9y6PPlH.js";import"./makeExternalStore-C7HN_2a4.js";import"./Tooltip-D0JohZEL.js";import"./PopoverPopup-DNxYjEIm.js";import"./toNumber-COgzXkBT.js";import"./useOsdkClient-BEyUaLN-.js";import"./tick-DRkIgeMu.js";import"./DropdownField-iVQeWGBO.js";import"./withOsdkMetrics-BQkvG7az.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

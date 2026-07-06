import{f as n,j as t}from"./iframe-imDcv3EE.js";import{O as p}from"./object-table-C1YUpFkj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjCSWK-q.js";import"./Table-J5CDp6bx.js";import"./index-C2OczkEn.js";import"./Dialog-D1m-NFeX.js";import"./cross-CPQt21ib.js";import"./svgIconContainer-BOc0yvFF.js";import"./useBaseUiId-D2KkWekG.js";import"./InternalBackdrop-C7Fgz1CR.js";import"./composite-8p9Up6Ka.js";import"./index-Dfldg5-W.js";import"./index-BM76lNlW.js";import"./index-Dy0KEo3_.js";import"./useEventCallback-9ekN3fTL.js";import"./SkeletonBar-D0-6FANe.js";import"./LoadingCell-CYgJFe0S.js";import"./ColumnConfigDialog-CbwSiKV4.js";import"./DraggableList-Cx9pzM8A.js";import"./search-DzJfoJ0q.js";import"./Input-dYWTrWFv.js";import"./useControlled-BKI12usK.js";import"./Button-BnEd-1lG.js";import"./small-cross-CN9mjFvM.js";import"./ActionButton-C3KmljvQ.js";import"./Checkbox-Db35IUaH.js";import"./useValueChanged-_Hq8Nots.js";import"./CollapsiblePanel-CJ5C2iSy.js";import"./MultiColumnSortDialog-DpHgLPE0.js";import"./MenuTrigger-B8dcPUcy.js";import"./CompositeItem-DmHakhaD.js";import"./ToolbarRootContext-oIfP4tq4.js";import"./getDisabledMountTransitionStyles-CBZXx8t1.js";import"./getPseudoElementBounds-DVMk7mg8.js";import"./chevron-down-9lO7rILy.js";import"./index-DpAblQg1.js";import"./error-C367ak0g.js";import"./BaseCbacBanner-Ke_Ja61U.js";import"./makeExternalStore-BHc2qmYS.js";import"./Tooltip-xMIoSwv-.js";import"./PopoverPopup-BrWfw7oU.js";import"./toNumber-_gQ5WcpO.js";import"./useOsdkClient-Dv1nQO7R.js";import"./tick-BUIrxpP6.js";import"./DropdownField-CXdwmS9Y.js";import"./withOsdkMetrics-BdGcualC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

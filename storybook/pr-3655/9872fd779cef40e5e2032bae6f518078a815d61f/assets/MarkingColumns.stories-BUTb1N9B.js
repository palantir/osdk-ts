import{f as n,j as t}from"./iframe-D0J7mvwf.js";import{O as p}from"./object-table-Cau0N0z-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl-ArobV.js";import"./Table-CyoAegy9.js";import"./index-JCCSuvRf.js";import"./Dialog-CxT4Ps6v.js";import"./cross-5za6xxk1.js";import"./svgIconContainer-EWzEFUVq.js";import"./useBaseUiId-uSeeHaZq.js";import"./InternalBackdrop-BSnAN3hN.js";import"./composite-04wTDi4A.js";import"./index-BUvLHK9q.js";import"./index-B_PUeEtr.js";import"./index-B_ZYQs5I.js";import"./useEventCallback-ZW5Ma2la.js";import"./SkeletonBar-CBROfOAC.js";import"./LoadingCell-CR8vpB0L.js";import"./ColumnConfigDialog-DNEYjoPu.js";import"./DraggableList-CtU9YbWB.js";import"./search-CW-V3zmM.js";import"./Input-TtJujKT2.js";import"./useControlled-Dha8GtVW.js";import"./Button-6l-XGgCt.js";import"./small-cross-DY7MkSNI.js";import"./ActionButton-CW2ScApZ.js";import"./Checkbox-CqAy6ZKP.js";import"./useValueChanged-BwKQgtnf.js";import"./CollapsiblePanel-DEal_KXG.js";import"./MultiColumnSortDialog-DjgzzzXG.js";import"./MenuTrigger-CqlfWa41.js";import"./CompositeItem-BBxqubBV.js";import"./ToolbarRootContext-BEOjFBql.js";import"./getDisabledMountTransitionStyles-zcpZxIbS.js";import"./getPseudoElementBounds-DQ-V3GiK.js";import"./chevron-down-DhY6CzD7.js";import"./index-BVt2qsnI.js";import"./error-TSq0w6FZ.js";import"./BaseCbacBanner-DJ7PNbh-.js";import"./makeExternalStore-BWTJsXcH.js";import"./Tooltip--LL81Yir.js";import"./PopoverPopup-BtFJG_sK.js";import"./toNumber-BxpT86pB.js";import"./useOsdkClient-Cu2eyhWM.js";import"./tick-M7-Osp8C.js";import"./DropdownField-D_VKJ-UW.js";import"./withOsdkMetrics-bp6FdzRh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

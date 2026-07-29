import{f as n,j as t}from"./iframe-RbWuU-Ny.js";import{O as p}from"./object-table-BjKSTkZR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQSfTAnY.js";import"./Table-lpNEp0wE.js";import"./index-8mgYkofC.js";import"./Dialog-C5eOhz7f.js";import"./cross-DTfrm9mT.js";import"./svgIconContainer-BC8OZ-Bp.js";import"./useBaseUiId-B0-pnvFt.js";import"./InternalBackdrop-BGTH7_oB.js";import"./composite-Au_BPDO-.js";import"./index-DTt_JGmY.js";import"./index-BzXFP0Tm.js";import"./index-Bm0JC4IX.js";import"./useEventCallback-DdMw32SW.js";import"./SkeletonBar-D-dnhMPj.js";import"./LoadingCell-DJ92BbYM.js";import"./ColumnConfigDialog-LuzXgptC.js";import"./DraggableList-CkATbFoI.js";import"./Input-B0Z_XHiX.js";import"./useControlled-BahZzzVl.js";import"./Button-DDneG5w9.js";import"./small-cross-Dm9ubKG9.js";import"./ActionButton-CPeBEI7b.js";import"./Checkbox-B3QfaBHt.js";import"./minus-B9y747D7.js";import"./useValueChanged-DKBmPon8.js";import"./caret-down-Dh4V0ghq.js";import"./CollapsiblePanel-D-xnOiYj.js";import"./MultiColumnSortDialog-BYc4iLyG.js";import"./MenuTrigger-CNgmQGwc.js";import"./CompositeItem-Crgijm42.js";import"./ToolbarRootContext-DlZk8wxY.js";import"./getDisabledMountTransitionStyles-Cj6nY8Ls.js";import"./getPseudoElementBounds-ChRqN95h.js";import"./chevron-down-yVkdmnBr.js";import"./index-DZfkFBsM.js";import"./error-C7pQnthJ.js";import"./BaseCbacBanner-lWqLT5mh.js";import"./makeExternalStore-ZJephQQb.js";import"./Tooltip-Br9SrFqm.js";import"./PopoverPopup-B5vprKjF.js";import"./toNumber-CIHcbnfu.js";import"./useOsdkClient-RJ85swZw.js";import"./DropdownField-CSjw4c0K.js";import"./useShape-Dq3MT2tJ.js";import"./withOsdkMetrics-4DAfqP69.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};

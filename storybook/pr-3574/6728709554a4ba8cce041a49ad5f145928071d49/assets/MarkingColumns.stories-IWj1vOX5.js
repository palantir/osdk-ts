import{f as n,j as t}from"./iframe-CRZjd_wK.js";import{O as p}from"./object-table-BX0VFaB5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-g7EjKyGs.js";import"./Table-B_JHeGDa.js";import"./index-DIm3kFay.js";import"./Dialog-BjM805Xt.js";import"./cross-BmtPWYvy.js";import"./svgIconContainer-JVD8PsJ2.js";import"./useBaseUiId-DRDRKeIW.js";import"./InternalBackdrop-bYsLYojc.js";import"./composite-DPEAXIJl.js";import"./index-BQJ2olD1.js";import"./index-DLUJQgli.js";import"./index-Cn6z1dl5.js";import"./useEventCallback-1TQGWOiJ.js";import"./SkeletonBar-3hDLlTdS.js";import"./LoadingCell-DQDpqzvm.js";import"./ColumnConfigDialog-2u3KKTnY.js";import"./DraggableList-B0iEeev5.js";import"./search-Dk6PpOs4.js";import"./Input-DabpMDer.js";import"./useControlled-Diz88oBw.js";import"./Button-CoeT5dYf.js";import"./small-cross-Cdt6bMDh.js";import"./ActionButton-z0DOa-na.js";import"./Checkbox-z1LYKVIn.js";import"./minus-C8rYlcj-.js";import"./tick-CyzKu7cJ.js";import"./useValueChanged-D12rhLyT.js";import"./caret-down-BYeCOAJh.js";import"./CollapsiblePanel-DWou65QT.js";import"./MultiColumnSortDialog-Sd1g6Scg.js";import"./MenuTrigger-DuQIEYI1.js";import"./CompositeItem-81Vi6zKM.js";import"./ToolbarRootContext-K2YYrXnR.js";import"./getDisabledMountTransitionStyles-DRolBh5K.js";import"./getPseudoElementBounds-Dopvs4p_.js";import"./chevron-down-Cc92ou7D.js";import"./index-BVm8JfJv.js";import"./error-CXgL35Qb.js";import"./BaseCbacBanner-D8bQv1xY.js";import"./makeExternalStore-CjXQtrKi.js";import"./Tooltip-CkH3ttjO.js";import"./PopoverPopup-m-zP7m5_.js";import"./toNumber-jlqpaXJ6.js";import"./useOsdkClient-DeLwXY7y.js";import"./DropdownField-DlM30DHR.js";import"./withOsdkMetrics-CX-vMa76.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

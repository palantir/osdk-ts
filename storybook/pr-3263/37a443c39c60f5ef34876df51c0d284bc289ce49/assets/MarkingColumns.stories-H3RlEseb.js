import{f as n,j as t}from"./iframe-xswAJePX.js";import{O as p}from"./object-table-eWQFBU9d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKHMy5CR.js";import"./Table-D_6rVJQa.js";import"./index-DAjMsKJb.js";import"./Dialog-BftW7lqZ.js";import"./cross-CIe7vil1.js";import"./svgIconContainer-CQT9RbU9.js";import"./useBaseUiId-DY2za2CZ.js";import"./InternalBackdrop-CYF_lSRL.js";import"./composite-DG_A6kuR.js";import"./index-Ctl8Fu8W.js";import"./index-BeM6-y7H.js";import"./index-D4MHJKgz.js";import"./useEventCallback-DCv0kylj.js";import"./SkeletonBar-D385H8VJ.js";import"./LoadingCell-IC5hpU-x.js";import"./ColumnConfigDialog-CfMq4ubd.js";import"./DraggableList-mJfN1d5d.js";import"./Input-DK-tkflJ.js";import"./useControlled-FLzszgGx.js";import"./Button-CLXxvZVY.js";import"./small-cross-Dc3qmIzn.js";import"./ActionButton-CE_Hl5kf.js";import"./Checkbox-CVLi1lUC.js";import"./minus-CU2-42CY.js";import"./useValueChanged-8ymq9JkV.js";import"./caret-down-Dr6t-cg-.js";import"./CollapsiblePanel-B-xuGwsO.js";import"./MultiColumnSortDialog-Db254ORj.js";import"./MenuTrigger-DwImZ-sx.js";import"./CompositeItem-DpvT_5oZ.js";import"./ToolbarRootContext-BtFMR77E.js";import"./getDisabledMountTransitionStyles-Cj0LhbCQ.js";import"./getPseudoElementBounds-5FdkPWmG.js";import"./chevron-down-Zqm0lJTT.js";import"./index-BrZErRHI.js";import"./error-DaoyZik_.js";import"./BaseCbacBanner-DKpv-Fkb.js";import"./makeExternalStore-Daju7tCG.js";import"./Tooltip-Cyn1ti3O.js";import"./PopoverPopup-Dllognbw.js";import"./toNumber-DShsHSUk.js";import"./useOsdkClient-BOwoXaF9.js";import"./DropdownField-BL692wbL.js";import"./withOsdkMetrics-DTxzja4K.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

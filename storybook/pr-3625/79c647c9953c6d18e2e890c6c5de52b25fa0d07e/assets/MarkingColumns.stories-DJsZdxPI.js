import{f as n,j as t}from"./iframe--BTIj_Lo.js";import{O as p}from"./object-table-BIYJNZPY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEmb-Q6f.js";import"./Table-C4eD3X8F.js";import"./index-5QzPu0zS.js";import"./Dialog-B11gp1as.js";import"./cross-BVyqMvNZ.js";import"./svgIconContainer-C8rvkcgB.js";import"./useBaseUiId-DSI_fwKo.js";import"./InternalBackdrop-mGWLJxDz.js";import"./composite-T6EOkG9k.js";import"./index-DfEVhqks.js";import"./index-L2eSYA45.js";import"./index-C4NeL8n3.js";import"./useEventCallback-BQlw9-QA.js";import"./SkeletonBar-C9mU17UI.js";import"./LoadingCell-BOzmB6vC.js";import"./ColumnConfigDialog-CZg5qiUW.js";import"./DraggableList-D74Lto_g.js";import"./search-CP4GV30M.js";import"./Input-BB8CG86K.js";import"./useControlled-CmpAGulH.js";import"./Button-BuCVTh2L.js";import"./small-cross-BkHLR8gD.js";import"./ActionButton-BrdsOqWv.js";import"./Checkbox-CbAh5OH5.js";import"./useValueChanged-P6b5TF8Y.js";import"./CollapsiblePanel-s2HT7sNF.js";import"./MultiColumnSortDialog-DKQUPqII.js";import"./MenuTrigger-BNbeqff8.js";import"./CompositeItem-BRO1zZpY.js";import"./ToolbarRootContext-D91fkyhg.js";import"./getDisabledMountTransitionStyles-BaYCzZGd.js";import"./getPseudoElementBounds-X_geufzJ.js";import"./chevron-down-BWTwUwIH.js";import"./index-Dz-4UQu6.js";import"./error-BmvmUc1M.js";import"./BaseCbacBanner-B9wVxPB3.js";import"./makeExternalStore-DzurZ1Cf.js";import"./Tooltip-CYTH1wPK.js";import"./PopoverPopup-DIkTznfG.js";import"./toNumber-b_2HAfbk.js";import"./useOsdkClient-Dyw1dsoW.js";import"./tick-Dcfkv1-Q.js";import"./DropdownField-BKsRGtTg.js";import"./withOsdkMetrics-DnOZdfps.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

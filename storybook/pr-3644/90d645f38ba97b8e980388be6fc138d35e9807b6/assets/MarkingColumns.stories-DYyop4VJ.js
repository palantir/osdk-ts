import{f as n,j as t}from"./iframe-Cf98Ygjx.js";import{O as p}from"./object-table-BE4ScZa3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGRkhuZN.js";import"./Table-bCdfGj8K.js";import"./index-C57_PxWD.js";import"./Dialog-C1DfGzzI.js";import"./cross-mzQtB7o4.js";import"./svgIconContainer-BrKn5b2n.js";import"./useBaseUiId-D80nceuW.js";import"./InternalBackdrop-Ci-Z1tQl.js";import"./composite-DvQhtj_T.js";import"./index-BX5iKx4l.js";import"./index-MubPeqKE.js";import"./index-DDcuG2Vu.js";import"./useEventCallback-C5btUZFK.js";import"./SkeletonBar-DBdtwvg_.js";import"./LoadingCell-CgRhMSdE.js";import"./ColumnConfigDialog-D8gmyMV7.js";import"./DraggableList-Dlud8IKQ.js";import"./search-Dsux-3Yf.js";import"./Input-CrmRjvgu.js";import"./useControlled-DM-C6ML_.js";import"./Button-CYF7X31R.js";import"./small-cross-ByrVnOpi.js";import"./ActionButton-Ei3gAu24.js";import"./Checkbox-DKysDqKr.js";import"./useValueChanged-BNQbpavl.js";import"./CollapsiblePanel-LYZJefVb.js";import"./MultiColumnSortDialog-D2IoFSZp.js";import"./MenuTrigger-6kgeQk_F.js";import"./CompositeItem-D3T_1VOe.js";import"./ToolbarRootContext-BRbv9aQv.js";import"./getDisabledMountTransitionStyles-BTyi3IkN.js";import"./getPseudoElementBounds-hyWipp0M.js";import"./chevron-down-I1Fk3xaX.js";import"./index-CqbQTdqb.js";import"./error-C4hBYiMW.js";import"./BaseCbacBanner-DkjXL8Zt.js";import"./makeExternalStore-BZ1D_0-9.js";import"./Tooltip-CAz1FoMc.js";import"./PopoverPopup-CxEVNg9q.js";import"./toNumber-BR0OLPsK.js";import"./useOsdkClient-BEA8LhAr.js";import"./tick-1I6fqCo9.js";import"./DropdownField-DLzs02D4.js";import"./withOsdkMetrics-DPosZT8S.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

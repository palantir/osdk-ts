import{f as n,j as t}from"./iframe-DTDlIEF3.js";import{O as p}from"./object-table-epgYOhIj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-GK6Onh.js";import"./Table-BSSeotNN.js";import"./index-BCtj5pCU.js";import"./Dialog-BXU0Lkkw.js";import"./cross-P3ZQZf6k.js";import"./svgIconContainer-xuabE_nM.js";import"./useBaseUiId-17W_kuvC.js";import"./InternalBackdrop-B9mpdOOu.js";import"./composite-Dk9pNs_-.js";import"./index-Ymg_sJwo.js";import"./index-DQDqZSz_.js";import"./index-BIOHZxnc.js";import"./useEventCallback-BRUedlRv.js";import"./SkeletonBar-I8rVrL29.js";import"./LoadingCell-DMfamuR3.js";import"./ColumnConfigDialog-DRr8MxS5.js";import"./DraggableList-CdYYiVjX.js";import"./search-D-mdeHPp.js";import"./Input-Df2Zd1-W.js";import"./useControlled-BKxb4fja.js";import"./Button-Dz1aAZ_7.js";import"./small-cross-C-p6soxa.js";import"./ActionButton-BkpU15Ly.js";import"./Checkbox-D2HaOK_p.js";import"./useValueChanged-CcFFxvRs.js";import"./CollapsiblePanel-Cf2yvOqv.js";import"./MultiColumnSortDialog-CfbPk_GB.js";import"./MenuTrigger-Daxa-SMM.js";import"./CompositeItem-C2Pr1U_7.js";import"./ToolbarRootContext-DFtUaAH_.js";import"./getDisabledMountTransitionStyles-ByG8CVJ2.js";import"./getPseudoElementBounds-Cq5bEXFz.js";import"./chevron-down-DIvYzKk5.js";import"./index-fLwEaIYu.js";import"./error-DKQDRJZx.js";import"./BaseCbacBanner-CUktCFHE.js";import"./makeExternalStore-CcWA4QXC.js";import"./Tooltip-DavdEx_U.js";import"./PopoverPopup-CrNG5qXf.js";import"./toNumber-BHQKsZFZ.js";import"./useOsdkClient-ox2XfPMp.js";import"./tick-DTsbC-Rw.js";import"./DropdownField-DU99TCdN.js";import"./withOsdkMetrics-BqXMiMN_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

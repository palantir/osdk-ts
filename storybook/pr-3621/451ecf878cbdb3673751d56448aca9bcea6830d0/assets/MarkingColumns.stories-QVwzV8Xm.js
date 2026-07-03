import{f as n,j as t}from"./iframe-uTXwVL4F.js";import{O as p}from"./object-table-DIOzTOxW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BL2Rlz3w.js";import"./Table-Duq8Hmw4.js";import"./index-CedNq3PH.js";import"./Dialog-CNE99CMV.js";import"./cross-BiHialsl.js";import"./svgIconContainer-Cygaw58B.js";import"./useBaseUiId-kneBe7Np.js";import"./InternalBackdrop-CXSedJtY.js";import"./composite-DGATLN9V.js";import"./index-HeZ0ZZML.js";import"./index-CKWuL0RK.js";import"./index-wbk6F8X-.js";import"./useEventCallback-CKwon-xu.js";import"./SkeletonBar-og5HTItT.js";import"./LoadingCell-CpzUzyqw.js";import"./ColumnConfigDialog-qWBheQUH.js";import"./DraggableList-CB2N_HsJ.js";import"./search-DACJTo3N.js";import"./Input-lAt0QBYx.js";import"./useControlled-C-sFKJDs.js";import"./Button-B7QYvEdy.js";import"./small-cross-R6H9P0zm.js";import"./ActionButton-BUuotsqZ.js";import"./Checkbox-CHE-Ihw7.js";import"./useValueChanged-DQd6cYmY.js";import"./CollapsiblePanel-BwWhdUOV.js";import"./MultiColumnSortDialog-DcabJEWv.js";import"./MenuTrigger-CGtmwGtr.js";import"./CompositeItem-CVK_sYIm.js";import"./ToolbarRootContext-CstOX0ey.js";import"./getDisabledMountTransitionStyles-B7MI1c3Y.js";import"./getPseudoElementBounds-BStDqau5.js";import"./chevron-down-dkj0UCKy.js";import"./index-CNJYjch8.js";import"./error-B6vwRxa-.js";import"./BaseCbacBanner-DfQdHEwb.js";import"./makeExternalStore-c8aY4eVN.js";import"./Tooltip-BTvyZa1d.js";import"./PopoverPopup-DrR5AD0B.js";import"./toNumber-Dg5nR7Lp.js";import"./useOsdkClient-DcJ176uE.js";import"./tick-A18DrOGJ.js";import"./DropdownField-VGeBPz4c.js";import"./withOsdkMetrics-C7DoBq42.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-CtgL4xj4.js";import{O as p}from"./object-table-CpApc6X1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHDvq_ar.js";import"./Table-BUbhztd6.js";import"./index-AtMm9zWS.js";import"./Dialog-DYRuG3j_.js";import"./cross-f45D0A3A.js";import"./svgIconContainer-D4l1QMgu.js";import"./useBaseUiId-QWUXXX1M.js";import"./InternalBackdrop-BQO87iva.js";import"./composite-CWIPiL3D.js";import"./index-84alof9E.js";import"./index-CtYJhe2r.js";import"./index-DkCgy6qn.js";import"./useEventCallback-A2PwdkUE.js";import"./SkeletonBar-BYJrTHZf.js";import"./LoadingCell-B0VZqOwC.js";import"./ColumnConfigDialog-DbfIE3lK.js";import"./DraggableList-Dl2H6q6v.js";import"./Input-u3Y7Zave.js";import"./useControlled-B_1CkLFa.js";import"./Button-CcpMrQt-.js";import"./small-cross-P8ZeCzmN.js";import"./ActionButton-B-i78SEB.js";import"./Checkbox-DElkWh89.js";import"./minus-Cfd5yj0y.js";import"./useValueChanged-BH-tv7fW.js";import"./caret-down-CZbwlcnY.js";import"./CollapsiblePanel-CqfxHRfy.js";import"./MultiColumnSortDialog-JKS6fnt2.js";import"./MenuTrigger-Dqkb_un4.js";import"./CompositeItem-Boyq0DjL.js";import"./ToolbarRootContext-Cq4KNRHc.js";import"./getDisabledMountTransitionStyles-Cf3RuWCN.js";import"./getPseudoElementBounds-BLn2NMZx.js";import"./chevron-down-ab_vVMpq.js";import"./index-ti0-Y0UP.js";import"./error-CKQMpXpr.js";import"./BaseCbacBanner-CJJpVLtO.js";import"./makeExternalStore-D9_-9heV.js";import"./Tooltip-CM1HXkQf.js";import"./PopoverPopup-CVgD9Mfn.js";import"./toNumber-ByhPd8yQ.js";import"./useOsdkClient-D00ozrO3.js";import"./DropdownField-DEsOS7e2.js";import"./withOsdkMetrics-CdkXH-n-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

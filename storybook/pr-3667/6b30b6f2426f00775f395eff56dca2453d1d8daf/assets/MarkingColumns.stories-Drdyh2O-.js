import{f as n,j as t}from"./iframe-CZjmNuvW.js";import{O as p}from"./object-table--4LewK9I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwjyFM2k.js";import"./Table-CHpvpSNK.js";import"./index-zekgW7T_.js";import"./Dialog-ClOvmhHN.js";import"./cross-CqtQFt8D.js";import"./svgIconContainer-jJn2f_24.js";import"./useBaseUiId-B329C4dW.js";import"./InternalBackdrop-MnYdtQ6I.js";import"./composite-DhizpSIQ.js";import"./index-DNc_ov5y.js";import"./index-D7QsBhqV.js";import"./index-D9XLT-UB.js";import"./useEventCallback-C7nOSH6U.js";import"./SkeletonBar-DLWoh2A2.js";import"./LoadingCell-IbLV77ew.js";import"./ColumnConfigDialog-Dn-Ywv81.js";import"./DraggableList-D84Q1leT.js";import"./Input-CKRwcQSK.js";import"./useControlled-CZZVahEL.js";import"./Button-B6FwUNRJ.js";import"./small-cross-CmsBdQEB.js";import"./ActionButton-mAMMA7p6.js";import"./Checkbox-C5iepXhe.js";import"./minus-B8fjxFLy.js";import"./useValueChanged-CjqOd_Qg.js";import"./caret-down-Bdbgi89X.js";import"./CollapsiblePanel-COUqJsuS.js";import"./MultiColumnSortDialog-BBNpecwY.js";import"./MenuTrigger-DSRUvVhT.js";import"./CompositeItem-CRbq-g-0.js";import"./ToolbarRootContext-Cj-IpAxj.js";import"./getDisabledMountTransitionStyles-DG5obmBt.js";import"./getPseudoElementBounds-0S2-gmLV.js";import"./chevron-down-CI7WQt4v.js";import"./index-CI-dN7aE.js";import"./error-CVYkY9YG.js";import"./BaseCbacBanner-Be-_8izY.js";import"./makeExternalStore-DrgtFWgr.js";import"./Tooltip-BENnZ7Fn.js";import"./PopoverPopup-ssUKowOT.js";import"./toNumber-xyP7l8hv.js";import"./useOsdkClient-D_aq-H_z.js";import"./DropdownField-Dyddi5CO.js";import"./withOsdkMetrics-CK5h1V6B.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

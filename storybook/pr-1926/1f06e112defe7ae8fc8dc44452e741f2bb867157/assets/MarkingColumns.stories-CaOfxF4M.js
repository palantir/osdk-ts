import{f as n,j as t}from"./iframe-Cbvz--ap.js";import{O as p}from"./object-table-CnMFYuu0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FkStB5Zs.js";import"./Table-DA2qUa9y.js";import"./index-CvbvMARM.js";import"./Dialog-5pJsw2QK.js";import"./cross-CBeCnkf0.js";import"./svgIconContainer-DyoXLVNM.js";import"./useBaseUiId-Df_vl-3Z.js";import"./InternalBackdrop-D7R4kN7a.js";import"./composite-Bcrw3nO4.js";import"./index-QV0aMfVF.js";import"./index-CP3ZTFUy.js";import"./index-Dd0Wv14X.js";import"./useEventCallback-CTQCIkgL.js";import"./SkeletonBar-Bma0FLFX.js";import"./LoadingCell-BeIEhqD1.js";import"./ColumnConfigDialog-DvdHquRM.js";import"./DraggableList-TEoMhKot.js";import"./search-CE0tvX4w.js";import"./Input-D2cwtccY.js";import"./useControlled--RTYo_QZ.js";import"./Button-CG_Kv4Or.js";import"./small-cross-Bw61aFea.js";import"./ActionButton-Crm7nPLN.js";import"./Checkbox-BMQ79okI.js";import"./useValueChanged-4m0Pgfqe.js";import"./CollapsiblePanel-kNIZ0C5I.js";import"./MultiColumnSortDialog-CH_zI2gJ.js";import"./MenuTrigger-C0k_YFE8.js";import"./CompositeItem-DPkyiQny.js";import"./ToolbarRootContext-ISXILCdO.js";import"./getDisabledMountTransitionStyles-BSw9YK5_.js";import"./getPseudoElementBounds-5xBcV3Rf.js";import"./chevron-down-DcPxx9A3.js";import"./index-DnwSP-ip.js";import"./error-DxlZumZ3.js";import"./BaseCbacBanner-jf9M9t-z.js";import"./makeExternalStore-C3eOyFVJ.js";import"./Tooltip-CNXREI4u.js";import"./PopoverPopup-C80TxVJP.js";import"./toNumber-C-6iLVei.js";import"./useOsdkClient-CwL5Wg_L.js";import"./tick-D5czJg9q.js";import"./DropdownField-CppfQ4J5.js";import"./withOsdkMetrics-CgzEmCLz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

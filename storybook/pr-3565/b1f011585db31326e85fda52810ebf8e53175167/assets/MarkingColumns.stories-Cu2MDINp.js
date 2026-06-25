import{f as n,j as t}from"./iframe-Bv5r9rLr.js";import{O as p}from"./object-table-DucZScZ5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDCW8K5k.js";import"./Table-D1NVf6uj.js";import"./index-JNh3QgoF.js";import"./Dialog-zUNONGvk.js";import"./cross-DMVhXqWl.js";import"./svgIconContainer-DHhUGoMR.js";import"./useBaseUiId-CJpolwEo.js";import"./InternalBackdrop-UpbQNFdT.js";import"./composite-o6L-Ahbi.js";import"./index-DnraKvOI.js";import"./index-D_S_MII7.js";import"./index-D2lyK-Xx.js";import"./useEventCallback-B8I_cvKq.js";import"./SkeletonBar-_Fbivt9f.js";import"./LoadingCell-C0TVxK_T.js";import"./ColumnConfigDialog-CuK02Wb_.js";import"./DraggableList-dar0KyKU.js";import"./Input-D93OIh33.js";import"./useControlled-Bi6-J1Gs.js";import"./Button-DHS_w5Yw.js";import"./small-cross-DLf8ewEl.js";import"./ActionButton-BWhuL6t-.js";import"./Checkbox-Dl5zo747.js";import"./minus-CLzzWU-0.js";import"./useValueChanged-Cdwx92Rs.js";import"./caret-down-BDBEyKxv.js";import"./CollapsiblePanel-Bu-G890m.js";import"./MultiColumnSortDialog-DdeAMiL2.js";import"./MenuTrigger-D66RzB2L.js";import"./CompositeItem-B3gaU_YE.js";import"./ToolbarRootContext-Dx5TQc3l.js";import"./getDisabledMountTransitionStyles-BiMeu4u0.js";import"./getPseudoElementBounds-BFb_035t.js";import"./chevron-down-CObDGJK0.js";import"./index-DdnH95hg.js";import"./error-B4qmv8RY.js";import"./BaseCbacBanner-BUrOb6v6.js";import"./makeExternalStore-BK49hpUy.js";import"./Tooltip-zh4DwUZR.js";import"./PopoverPopup-DZ07P1F1.js";import"./toNumber-m03PtBIn.js";import"./useOsdkClient-es8EVs08.js";import"./DropdownField-BVHUypRk.js";import"./withOsdkMetrics-CHM8Yj4G.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

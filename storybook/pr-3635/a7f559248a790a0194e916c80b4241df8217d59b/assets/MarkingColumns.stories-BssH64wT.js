import{f as n,j as t}from"./iframe-DGvxDu2V.js";import{O as p}from"./object-table-Bf4lwtpZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjwweEI9.js";import"./Table-kUFD30rj.js";import"./index-BLI4KS2e.js";import"./Dialog-CB06YhHy.js";import"./cross-48xujm3y.js";import"./svgIconContainer-CklyPDEC.js";import"./useBaseUiId-U8qJsqeA.js";import"./InternalBackdrop-BdhmS_g8.js";import"./composite-Cjf3r8sg.js";import"./index-Dkw8b54F.js";import"./index-BX44DUfM.js";import"./index-BdRfoSxd.js";import"./useEventCallback-Bv5nck4Q.js";import"./SkeletonBar-D6HGVbPo.js";import"./LoadingCell-Cp48Fr0_.js";import"./ColumnConfigDialog-BOWOiaE0.js";import"./DraggableList-KQGjT5mQ.js";import"./search-CB6PS3R5.js";import"./Input-B1mSGRcb.js";import"./useControlled-BkBZLlyH.js";import"./Button-CguTijQF.js";import"./small-cross-B-bEBOV4.js";import"./ActionButton-XZVt-YXJ.js";import"./Checkbox-DlkWPp-M.js";import"./useValueChanged-Dnb_Y1dT.js";import"./CollapsiblePanel-BdfHeAgR.js";import"./MultiColumnSortDialog-C_WwbAsI.js";import"./MenuTrigger-36v2_i4Z.js";import"./CompositeItem-DHHLz0tQ.js";import"./ToolbarRootContext-C1NypoNo.js";import"./getDisabledMountTransitionStyles-BHZfwrV3.js";import"./getPseudoElementBounds-rwPJlJBf.js";import"./chevron-down-HUhZiKdq.js";import"./index-DHSiX2cU.js";import"./error-CKgHHedm.js";import"./BaseCbacBanner-C2iW0iF3.js";import"./makeExternalStore-BQx10Vzl.js";import"./Tooltip-C5iRv9gy.js";import"./PopoverPopup-DJerwdIi.js";import"./toNumber-PrnGGJqh.js";import"./useOsdkClient-D1FSpQ01.js";import"./tick-CH6XYxCR.js";import"./DropdownField-DR8r1sva.js";import"./withOsdkMetrics-BUeU_N-i.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

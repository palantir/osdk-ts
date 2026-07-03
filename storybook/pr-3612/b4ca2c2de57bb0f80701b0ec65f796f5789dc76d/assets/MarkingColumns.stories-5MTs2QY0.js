import{f as n,j as t}from"./iframe-B067mJJD.js";import{O as p}from"./object-table-BDveMK8_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-aRVleQ9n.js";import"./Table-oB3IMNKH.js";import"./index-CXujijaa.js";import"./Dialog-BmG9ZvL8.js";import"./cross-Dtg5Zx2w.js";import"./svgIconContainer-BLpqKIxS.js";import"./useBaseUiId-en620839.js";import"./InternalBackdrop-CIOyj4o_.js";import"./composite-C_8lS0YD.js";import"./index-DsXIJ6vq.js";import"./index-owqdD4rE.js";import"./index-Btugp6o-.js";import"./useEventCallback-C_wS2ktV.js";import"./SkeletonBar-Mq9-rKPR.js";import"./LoadingCell-ChIEJf03.js";import"./ColumnConfigDialog-XkVuE9Zl.js";import"./DraggableList-BZlnkJn1.js";import"./search-Bnkq9xxo.js";import"./Input-DC_kXmOS.js";import"./useControlled-CvBct5IX.js";import"./Button-dOwtzEcM.js";import"./small-cross-B3hmZna4.js";import"./ActionButton-CQhsltx8.js";import"./Checkbox-Cjk9MyaO.js";import"./useValueChanged-FKC42X19.js";import"./CollapsiblePanel-DW6TcbMm.js";import"./MultiColumnSortDialog-Cmy0liRA.js";import"./MenuTrigger-Bifc7tvM.js";import"./CompositeItem-05lTREnB.js";import"./ToolbarRootContext-IgAccb3_.js";import"./getDisabledMountTransitionStyles-UQY1vEa1.js";import"./getPseudoElementBounds-EPn6AeJW.js";import"./chevron-down-DbRcCkwb.js";import"./index-Bh98dWqx.js";import"./error-1vaoDyk6.js";import"./BaseCbacBanner-BXqE491R.js";import"./makeExternalStore-DN-iw-FW.js";import"./Tooltip-CwEyF_Jt.js";import"./PopoverPopup-DGmhuHbn.js";import"./toNumber-xQjqFC1D.js";import"./useOsdkClient-DnjYG_lR.js";import"./tick-DVjlUdkT.js";import"./DropdownField-qVtD84mN.js";import"./withOsdkMetrics-D6KobcbQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-X6aRn_A_.js";import{O as p}from"./object-table-BOGAzNJ7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVpfEQS6.js";import"./Table-nSiHVTc-.js";import"./index-Cyl8tkUH.js";import"./Dialog-BELv6Bui.js";import"./cross-U21mFULk.js";import"./svgIconContainer-DEQ-IdoH.js";import"./useBaseUiId-d62_61Z8.js";import"./InternalBackdrop-DOTUmcqT.js";import"./composite-B6kCikc_.js";import"./index-mIA1XLzv.js";import"./index-B5lMo9VV.js";import"./index-CoB9cpBB.js";import"./useEventCallback-BB90yF-Q.js";import"./SkeletonBar-BwifJ0Tx.js";import"./LoadingCell-OxF8Tmul.js";import"./ColumnConfigDialog-DoNKSF8A.js";import"./DraggableList-8-4vW4MD.js";import"./search-DbrdMPT_.js";import"./Input-BrrEA2gh.js";import"./useControlled-D_rRgLsE.js";import"./Button-A56P5X5x.js";import"./small-cross-BchK_TBw.js";import"./ActionButton-BSgBn2-K.js";import"./Checkbox-BstvJPK9.js";import"./useValueChanged-Cg67RaKs.js";import"./CollapsiblePanel--fD4wpGl.js";import"./MultiColumnSortDialog-CFBDmVnb.js";import"./MenuTrigger-BeQmaV2q.js";import"./CompositeItem-wTkB1J4Z.js";import"./ToolbarRootContext-qs1Vhlbe.js";import"./getDisabledMountTransitionStyles-ibdF5f8p.js";import"./getPseudoElementBounds-4jpAj3pw.js";import"./chevron-down-D7ddD8SZ.js";import"./index-Dfl2Narl.js";import"./error-aHjvdeV3.js";import"./BaseCbacBanner-Tqa37gua.js";import"./makeExternalStore-Ckt6fzv-.js";import"./Tooltip-CjehJzWC.js";import"./PopoverPopup-B0J4Z5Rk.js";import"./toNumber-BZ4gMB2i.js";import"./useOsdkClient-B-5BeN2M.js";import"./tick-NP84hYxt.js";import"./DropdownField-BKdRq2JA.js";import"./withOsdkMetrics-CJci1eTx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

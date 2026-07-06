import{f as n,j as t}from"./iframe-B_8Tdiwq.js";import{O as p}from"./object-table-BspOCb4d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOfrlXOZ.js";import"./Table-CT2rsR2p.js";import"./index-CTX6u9ZC.js";import"./Dialog-6rLu_0cK.js";import"./cross-L-54tVNU.js";import"./svgIconContainer-BAxZkWy9.js";import"./useBaseUiId-CQrfvGx0.js";import"./InternalBackdrop-BWAiJT6P.js";import"./composite-D5JAaSqe.js";import"./index-DhcNtvER.js";import"./index-DtiyW2Zd.js";import"./index-D1CQQTEk.js";import"./useEventCallback-DO1oXWYB.js";import"./SkeletonBar-BBnydTos.js";import"./LoadingCell-oWoSrE1Y.js";import"./ColumnConfigDialog-BbN84tgQ.js";import"./DraggableList-DSL08Tyf.js";import"./search-CvqqJReO.js";import"./Input-C-jAekTx.js";import"./useControlled-CQZQnwLO.js";import"./Button-mEt_ne7q.js";import"./small-cross-zIm_1DAH.js";import"./ActionButton-CT4KneOk.js";import"./Checkbox-CB6lyvyK.js";import"./useValueChanged-D9A1IT5H.js";import"./CollapsiblePanel-C0FCseTF.js";import"./MultiColumnSortDialog-DWYizqMq.js";import"./MenuTrigger-DfzcY-tj.js";import"./CompositeItem-DiZjPaJ2.js";import"./ToolbarRootContext-BO1IXY4-.js";import"./getDisabledMountTransitionStyles-3MzkyhZ8.js";import"./getPseudoElementBounds-B6av9XNp.js";import"./chevron-down-CEjIFaBz.js";import"./index-A2wA4OZ0.js";import"./error-D7rzQlXT.js";import"./BaseCbacBanner-Bo-7iRMk.js";import"./makeExternalStore-DX9rolj1.js";import"./Tooltip-DT09RXmv.js";import"./PopoverPopup-Bm-esaO9.js";import"./toNumber-ifC8lwC0.js";import"./useOsdkClient-CwfQDp3v.js";import"./tick-B9cDaran.js";import"./DropdownField-BuN3PcPe.js";import"./withOsdkMetrics-gXXjHvCf.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

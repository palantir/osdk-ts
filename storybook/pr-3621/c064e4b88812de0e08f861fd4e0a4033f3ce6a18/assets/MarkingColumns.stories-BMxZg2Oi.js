import{f as n,j as t}from"./iframe-D6uAZQ-t.js";import{O as p}from"./object-table-B2izX9OS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdOAka1X.js";import"./Table-DkOnlzBu.js";import"./index-C8tgWidK.js";import"./Dialog-C5cInuDA.js";import"./cross-w5jXLu7z.js";import"./svgIconContainer-YgwrVtGN.js";import"./useBaseUiId-CHplPgw2.js";import"./InternalBackdrop-DdBVTOjz.js";import"./composite-Cjiz17uD.js";import"./index-CZByGFHJ.js";import"./index-ByAaIBA4.js";import"./index-BmUPb3Ve.js";import"./useEventCallback-Xdmhvu8S.js";import"./SkeletonBar-C-hb6JOS.js";import"./LoadingCell-B-sxUZnR.js";import"./ColumnConfigDialog-BA-sxNjp.js";import"./DraggableList-hpJnLLyE.js";import"./search-BCit2sgz.js";import"./Input-BnPRqQwh.js";import"./useControlled-BsgEThCx.js";import"./Button-DPQwhogD.js";import"./small-cross-D0D9NlVc.js";import"./ActionButton-i8WPorPN.js";import"./Checkbox-BiNzLPgv.js";import"./useValueChanged-C4capIk1.js";import"./CollapsiblePanel-CoqYBtrb.js";import"./MultiColumnSortDialog-S-cGxySv.js";import"./MenuTrigger-C0JilB9d.js";import"./CompositeItem-C2tqayvA.js";import"./ToolbarRootContext-EzvTSpsY.js";import"./getDisabledMountTransitionStyles-B_NN51KF.js";import"./getPseudoElementBounds-GMwiiPgl.js";import"./chevron-down-Dg6n9Wzs.js";import"./index-1fcxd6d8.js";import"./error-DTT3LO5u.js";import"./BaseCbacBanner-Dk-zFNPJ.js";import"./makeExternalStore-cdyw-GS6.js";import"./Tooltip-KMJyXn7S.js";import"./PopoverPopup-coF7Zc-l.js";import"./toNumber-CH79Z_AS.js";import"./useOsdkClient-DKoW_yWs.js";import"./tick-CLzuCJYy.js";import"./DropdownField-BfAUtXZj.js";import"./withOsdkMetrics-DVbOuHeQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

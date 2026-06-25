import{f as n,j as t}from"./iframe-C5T8ZJmx.js";import{O as p}from"./object-table-BCnDwBxp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B40apXti.js";import"./Table-DhMY1kX6.js";import"./index-CkwpQw24.js";import"./Dialog-Cqag_km9.js";import"./cross-rCHPUp3Y.js";import"./svgIconContainer-AfL0pezU.js";import"./useBaseUiId-BzHNQ0DG.js";import"./InternalBackdrop-eEtgaL4W.js";import"./composite-BEhgNUjB.js";import"./index-_psxr5R0.js";import"./index-9b9VxlJE.js";import"./index-DI75IfKh.js";import"./useEventCallback-FpSADlFv.js";import"./SkeletonBar-CriYY7yx.js";import"./LoadingCell-_SLMx_Xi.js";import"./ColumnConfigDialog-CjJj_1XK.js";import"./DraggableList-CUPYV1TF.js";import"./Input-BzXr3RzA.js";import"./useControlled-E4oZ3htf.js";import"./Button-ChnENkYF.js";import"./small-cross-DmOpGcQF.js";import"./ActionButton-DjMrpI0z.js";import"./Checkbox-DL8ok4Mk.js";import"./minus-Ca57LE1i.js";import"./useValueChanged-BrN8TJao.js";import"./caret-down-DZNas2VF.js";import"./CollapsiblePanel-ysGcdv2f.js";import"./MultiColumnSortDialog-BzAZ8e4g.js";import"./MenuTrigger-C2uyU5rb.js";import"./CompositeItem-Rq2w9QJb.js";import"./ToolbarRootContext-fP6aJ7ko.js";import"./getDisabledMountTransitionStyles-CmZ_jan9.js";import"./getPseudoElementBounds-CoG71JWG.js";import"./chevron-down-C0nr4-Mb.js";import"./index-BYq2xU2f.js";import"./error-B5wRnmSw.js";import"./BaseCbacBanner-CfJ4onMq.js";import"./makeExternalStore-Dwhz8Rkc.js";import"./Tooltip-Dyd1l8CB.js";import"./PopoverPopup-CBC2Wp2K.js";import"./toNumber-DLkA7Zvf.js";import"./useOsdkClient-DXToc4st.js";import"./DropdownField-vZ4_9tVr.js";import"./withOsdkMetrics-CKrvGdLx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

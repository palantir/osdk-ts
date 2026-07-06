import{f as n,j as t}from"./iframe-BpDeShyS.js";import{O as p}from"./object-table-CPoGOWO7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-0wrbxX.js";import"./Table-DOS9HXaT.js";import"./index-CYxuTrkm.js";import"./Dialog-c095ZJF2.js";import"./cross-DIrqZ5WP.js";import"./svgIconContainer-CJ-G1u9Y.js";import"./useBaseUiId-Bh4Yjb1r.js";import"./InternalBackdrop-Bew-aMod.js";import"./composite-DbX2upHH.js";import"./index-B2BkSIhx.js";import"./index-tuiBHj_E.js";import"./index-vOg0xmdr.js";import"./useEventCallback-DSmEVjsu.js";import"./SkeletonBar-BEH-T4PO.js";import"./LoadingCell-L60LzNfg.js";import"./ColumnConfigDialog-BQfQSC3m.js";import"./DraggableList-B-XfaLSi.js";import"./search-D3juWUDm.js";import"./Input-Eu_59Ma6.js";import"./useControlled-rZl8AVCP.js";import"./Button-CAWJVUn8.js";import"./small-cross-COEywLDf.js";import"./ActionButton-C_nQ3H7c.js";import"./Checkbox-DA1yrSSv.js";import"./useValueChanged-Db2S5zlc.js";import"./CollapsiblePanel-BFtKGiiD.js";import"./MultiColumnSortDialog-CnwPxW0w.js";import"./MenuTrigger-BxhBsMRQ.js";import"./CompositeItem-BgFRAk_V.js";import"./ToolbarRootContext-WVW4tlVJ.js";import"./getDisabledMountTransitionStyles-C25COW_R.js";import"./getPseudoElementBounds-TOe5Ul30.js";import"./chevron-down-5dq9MdCe.js";import"./index-BKDSk60q.js";import"./error-C45PaoHC.js";import"./BaseCbacBanner-D5AHSWes.js";import"./makeExternalStore-DdHqmlr6.js";import"./Tooltip-Cnup9Xz3.js";import"./PopoverPopup-DoKU-IxA.js";import"./toNumber-D0poCmW-.js";import"./useOsdkClient-CKUwzIT2.js";import"./tick-Cg56PANw.js";import"./DropdownField-Df7xFXsj.js";import"./withOsdkMetrics-BPquOBmZ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

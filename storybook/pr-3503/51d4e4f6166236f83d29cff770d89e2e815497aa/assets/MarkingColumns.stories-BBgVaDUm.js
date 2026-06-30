import{f as n,j as t}from"./iframe-iqkWJYwF.js";import{O as p}from"./object-table-fi3m28sF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtBHv-Cy.js";import"./Table-DlRIFcu9.js";import"./index-CaL-aLRX.js";import"./Dialog-CI2vxGM-.js";import"./cross-BYy9TDry.js";import"./svgIconContainer-DaCpfDZQ.js";import"./useBaseUiId-SOU0bd8-.js";import"./InternalBackdrop-4Cuiv9KT.js";import"./composite-DDaHOh2A.js";import"./index-BnaarDrq.js";import"./index-p1WXFGiz.js";import"./index--GsIhUGq.js";import"./useEventCallback-yxjZ5TAV.js";import"./SkeletonBar-CyAhnrzw.js";import"./LoadingCell-JhYb_seP.js";import"./ColumnConfigDialog-Cg_I5AEE.js";import"./DraggableList-DNuy7nIO.js";import"./search-_uaTUom-.js";import"./Input-CZqAelu1.js";import"./useControlled-BJGQw5Ht.js";import"./Button-oSNe6ser.js";import"./small-cross-DcicBBo0.js";import"./ActionButton-DJ-TFCUk.js";import"./Checkbox-DuyRoj_l.js";import"./minus-WC9qC8HN.js";import"./tick-yxhu3_f1.js";import"./useValueChanged-D7qgYORu.js";import"./caret-down-BV9je2v6.js";import"./CollapsiblePanel-DSpqDwVE.js";import"./MultiColumnSortDialog-gP5iuHUw.js";import"./MenuTrigger-Dl-RvCy3.js";import"./CompositeItem-BFCbksjM.js";import"./ToolbarRootContext-Dza7JlJS.js";import"./getDisabledMountTransitionStyles-BouDf0Op.js";import"./getPseudoElementBounds-CNd01LVE.js";import"./chevron-down-DK3cLpoN.js";import"./index-DLdll3W-.js";import"./error-CefxAjtm.js";import"./BaseCbacBanner-BN4gmrCe.js";import"./makeExternalStore-Del5paUL.js";import"./Tooltip-BK3v-Yiv.js";import"./PopoverPopup-DFIIUqcP.js";import"./toNumber-FEGI5gjM.js";import"./useOsdkClient-EPDOMjRk.js";import"./DropdownField-DI5_waQl.js";import"./withOsdkMetrics-3rdUkBZO.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};

import{f as n,j as t}from"./iframe-BjvUzf2G.js";import{O as p}from"./object-table-D_bjeG7_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChLujkjw.js";import"./Table-CNErRvuw.js";import"./index-CV0Q9dls.js";import"./Dialog-CICC-dma.js";import"./cross-BJGvmtHL.js";import"./svgIconContainer-BTyMbHu3.js";import"./useBaseUiId-BDbPswOv.js";import"./InternalBackdrop-BspcLizJ.js";import"./composite-Dw0QnQGe.js";import"./index-DkF1GDTM.js";import"./index-Dm9fU4ht.js";import"./index-4Hwrm4LE.js";import"./useEventCallback-nNO1KyCy.js";import"./SkeletonBar-DHfXQi-V.js";import"./LoadingCell-CMEkGJIT.js";import"./ColumnConfigDialog-CyI8AV0L.js";import"./DraggableList-CtND3hQF.js";import"./Input-BejOJn9A.js";import"./useControlled-BcrqOuKT.js";import"./Button-DQrgiRWU.js";import"./small-cross-BKzf_I6Q.js";import"./ActionButton-CVluJmJb.js";import"./Checkbox-Cv4viYXI.js";import"./minus-C1rQ-HqY.js";import"./useValueChanged-u5wL3ef5.js";import"./caret-down-CEel9IAR.js";import"./CollapsiblePanel-DfcaEtSo.js";import"./MultiColumnSortDialog-BPY4Hx6U.js";import"./MenuTrigger-CaN9mlDl.js";import"./CompositeItem-BERBQGWk.js";import"./ToolbarRootContext-ogdKOFIs.js";import"./getDisabledMountTransitionStyles-C1QLonNx.js";import"./getPseudoElementBounds-C3Zs4NyR.js";import"./chevron-down-09WpJW4h.js";import"./index-CvRtYV7l.js";import"./error-jQ1aYYgr.js";import"./BaseCbacBanner-vTyNau1Y.js";import"./makeExternalStore-FnGaZI7s.js";import"./Tooltip-BGo2_7vp.js";import"./PopoverPopup-GpCLf6HQ.js";import"./toNumber-3XwE11wB.js";import"./useOsdkClient-IhYIX5bE.js";import"./DropdownField-CKKTIiys.js";import"./withOsdkMetrics-Bd8w39f_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

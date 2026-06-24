import{f as n,j as t}from"./iframe-C7P3qYHN.js";import{O as p}from"./object-table-IvhOBdn0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1CkhjvG.js";import"./Table-D6wjC6iE.js";import"./index-37aIV0JA.js";import"./Dialog-DeQYpJXD.js";import"./cross-B8ycCPYt.js";import"./svgIconContainer-EnXmAwO9.js";import"./useBaseUiId-BSLzqfaq.js";import"./InternalBackdrop-C0crVemW.js";import"./composite-DfrfqFeX.js";import"./index-BMQaZdf8.js";import"./index-Dx8b78eQ.js";import"./index-SF5k9eHL.js";import"./useEventCallback-COH8O7x1.js";import"./SkeletonBar-iC_wr-vV.js";import"./LoadingCell-C0NDXzuk.js";import"./ColumnConfigDialog-DENX4pjR.js";import"./DraggableList-BFAlgbBy.js";import"./Input-Bv63tEC1.js";import"./useControlled-bklff9m-.js";import"./Button-DX4B1i5p.js";import"./small-cross-rxbiav58.js";import"./ActionButton-DKydKkEA.js";import"./Checkbox-XYS5kX6c.js";import"./minus-Do-pxtir.js";import"./useValueChanged-C0AoCoib.js";import"./caret-down-DPmcwHxr.js";import"./CollapsiblePanel-DWm1OkCW.js";import"./MultiColumnSortDialog-LJIvDugQ.js";import"./MenuTrigger-Mm1BJ6L4.js";import"./CompositeItem-BSwD1Uqh.js";import"./ToolbarRootContext-DCnHqd4Z.js";import"./getDisabledMountTransitionStyles-C2X7vkbP.js";import"./getPseudoElementBounds-DhwxdWKT.js";import"./chevron-down-CpVz0Y-B.js";import"./index-QZ7G__DE.js";import"./error-DoIke-Nc.js";import"./BaseCbacBanner-tq4Phpe2.js";import"./makeExternalStore-BAxIX9TA.js";import"./Tooltip-CLTnoYGx.js";import"./PopoverPopup-B7NUFOz1.js";import"./toNumber-Bsjr-L4w.js";import"./useOsdkClient-Bcv5rD-6.js";import"./DropdownField-BG-FZaHf.js";import"./withOsdkMetrics-BlvWOGXv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

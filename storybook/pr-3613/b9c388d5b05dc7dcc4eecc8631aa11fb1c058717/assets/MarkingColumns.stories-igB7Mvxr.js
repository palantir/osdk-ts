import{f as n,j as t}from"./iframe-wJ1oJZqA.js";import{O as p}from"./object-table-B4FZ8qhd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C30I8pJk.js";import"./Table-BFnucX0s.js";import"./index-DB1qRfpe.js";import"./Dialog-BE9fhTD7.js";import"./cross-e2e69Kyv.js";import"./svgIconContainer-DD4FpJIf.js";import"./useBaseUiId-S-CMCZtV.js";import"./InternalBackdrop-BurZfuhq.js";import"./composite-XwUNt90R.js";import"./index-C75sNCoG.js";import"./index-BROZzCM3.js";import"./index-CetP0d77.js";import"./useEventCallback-BwPcNqRi.js";import"./SkeletonBar-B4FE2omc.js";import"./LoadingCell-Bi80EBWp.js";import"./ColumnConfigDialog-D-bZf5Wb.js";import"./DraggableList-B9NFchwv.js";import"./search-DmdxLeyc.js";import"./Input-CIeOccrG.js";import"./useControlled-VcYjGvBB.js";import"./Button-1A6yP1PQ.js";import"./small-cross-CjVJe3p9.js";import"./ActionButton-sLDb2cpN.js";import"./Checkbox-DxmCJC1c.js";import"./minus-KkACW5qW.js";import"./tick-yLCUwrdZ.js";import"./useValueChanged-CiWjsMKX.js";import"./caret-down-3OzOALAM.js";import"./CollapsiblePanel-COCdOu73.js";import"./MultiColumnSortDialog-D7Yy65tF.js";import"./MenuTrigger-CDHjFbLo.js";import"./CompositeItem-vwgOgvIi.js";import"./ToolbarRootContext-vb405_LS.js";import"./getDisabledMountTransitionStyles-BQidQsdI.js";import"./getPseudoElementBounds-D-ZCfX9o.js";import"./chevron-down-CZUcXW02.js";import"./index-cHdQdNDC.js";import"./error-Dnt6Czwz.js";import"./BaseCbacBanner-BO0aLfYj.js";import"./makeExternalStore-BdovgaQH.js";import"./Tooltip-DU0x3QKG.js";import"./PopoverPopup-B67F9VAr.js";import"./toNumber-DbVBEAY8.js";import"./useOsdkClient-tJum4_lb.js";import"./DropdownField-5ldzCyeT.js";import"./withOsdkMetrics-dZNoEcyz.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

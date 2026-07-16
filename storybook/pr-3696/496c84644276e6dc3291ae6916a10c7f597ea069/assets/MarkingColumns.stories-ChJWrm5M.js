import{f as n,j as t}from"./iframe-BrNUdAJB.js";import{O as p}from"./object-table-CRZl0us5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTmFEwj1.js";import"./Table-BClDU5ME.js";import"./index-ClxT7YU8.js";import"./Dialog-DK-Lx55u.js";import"./cross-D-1UO6cK.js";import"./svgIconContainer-QCCLAHhT.js";import"./useBaseUiId-B7bo3rkW.js";import"./InternalBackdrop-BEgpa5VI.js";import"./composite-BqOHdNLc.js";import"./index-p7P79wue.js";import"./index-DfQ_Asrk.js";import"./index-Do8udpFO.js";import"./useEventCallback-CqMlTSrI.js";import"./SkeletonBar-PrZbAiqV.js";import"./LoadingCell-C5qNyqj4.js";import"./ColumnConfigDialog-aIbG5oNo.js";import"./DraggableList-DByg14HI.js";import"./search-H3XEzbZe.js";import"./Input-DGYBHAiJ.js";import"./useControlled-D44LS_W_.js";import"./Button-BgucdCIm.js";import"./small-cross-BFf1jECu.js";import"./ActionButton-CjsIdt5M.js";import"./Checkbox-B3eeFqjg.js";import"./useValueChanged-a9N9PA0c.js";import"./CollapsiblePanel-BBcT0m7M.js";import"./MultiColumnSortDialog-BrZiehZV.js";import"./MenuTrigger-rOE8Sw5_.js";import"./CompositeItem-3hiN0sUn.js";import"./ToolbarRootContext-CpIkUIlF.js";import"./getDisabledMountTransitionStyles-3w-Ifc49.js";import"./getPseudoElementBounds-DeIotu_m.js";import"./chevron-down-DEH2Uss5.js";import"./index-Bbjz2YJF.js";import"./error-sge2T3L6.js";import"./BaseCbacBanner-CraNTaQp.js";import"./makeExternalStore-CUfVEJNr.js";import"./Tooltip-DuEWGD1X.js";import"./PopoverPopup-DCT7Y3ys.js";import"./toNumber-CDkSeTm3.js";import"./useOsdkClient-BEcqcP7n.js";import"./tick-DI97tbFf.js";import"./DropdownField-6RBcDZuk.js";import"./withOsdkMetrics-BX-_Emcs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

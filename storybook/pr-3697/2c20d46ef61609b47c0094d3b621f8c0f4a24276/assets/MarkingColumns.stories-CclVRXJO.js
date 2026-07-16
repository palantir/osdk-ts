import{f as n,j as t}from"./iframe-DUpgw0Vd.js";import{O as p}from"./object-table-B2JoYmxQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4IfNc0vd.js";import"./Table-GwotrPE3.js";import"./index-CmRCXIqy.js";import"./Dialog-BBqstiIB.js";import"./cross-DetTaMvY.js";import"./svgIconContainer-DfmYtqq2.js";import"./useBaseUiId-CHJKWKze.js";import"./InternalBackdrop-DgasbHfg.js";import"./composite-BdvAgWju.js";import"./index-Dz8zX7ks.js";import"./index-BJYssAoC.js";import"./index-C-UCGtqY.js";import"./useEventCallback-Cpven4cZ.js";import"./SkeletonBar-Chb2Fo-g.js";import"./LoadingCell-D4gL1rjY.js";import"./ColumnConfigDialog-BlpBJKsU.js";import"./DraggableList-DKcSqo-7.js";import"./search-BkGzh2w4.js";import"./Input-ysEfgJNw.js";import"./useControlled-BGlyML6J.js";import"./Button-DE1qFbH-.js";import"./small-cross-Bgjyjwvh.js";import"./ActionButton-nwKC9UX8.js";import"./Checkbox-C1bYBrLQ.js";import"./useValueChanged-AIEksMRG.js";import"./CollapsiblePanel-AOAs2fER.js";import"./MultiColumnSortDialog-Cg9ioTk-.js";import"./MenuTrigger-CzsGUQRB.js";import"./CompositeItem-HjuNkhWe.js";import"./ToolbarRootContext-D_4yVG0k.js";import"./getDisabledMountTransitionStyles-opoMt3BW.js";import"./getPseudoElementBounds-Cx7PBgq9.js";import"./chevron-down-DDWFgZI5.js";import"./index-BfXKVP_t.js";import"./error-CKdaIVtA.js";import"./BaseCbacBanner-ffmrvrfa.js";import"./makeExternalStore-CExakVHU.js";import"./Tooltip-C8S_FqOh.js";import"./PopoverPopup-BHW5hsqz.js";import"./toNumber-DtC30hm9.js";import"./useOsdkClient-8mZgnNZG.js";import"./tick-BYvrlrhV.js";import"./DropdownField-ODfxjiyM.js";import"./withOsdkMetrics-CPnuI3vU.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

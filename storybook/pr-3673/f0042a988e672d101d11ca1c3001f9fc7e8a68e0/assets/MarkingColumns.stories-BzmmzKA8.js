import{f as n,j as t}from"./iframe-BXHWXLEF.js";import{O as p}from"./object-table-ExAP2dNl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5KxonLm.js";import"./Table-CW2K1kwO.js";import"./index-1Njgrlla.js";import"./Dialog-D4YGBZaC.js";import"./cross-DiZjPuK5.js";import"./svgIconContainer-DdbxJ_6v.js";import"./useBaseUiId-BA85S74j.js";import"./InternalBackdrop-RZzkRzlW.js";import"./composite-C0dkp7Bv.js";import"./index-DgVWkujh.js";import"./index-B1VIg0wc.js";import"./index-gRrLS_h8.js";import"./useEventCallback-BzIG76OP.js";import"./SkeletonBar-CMgf4HUA.js";import"./LoadingCell-D6-QLYAZ.js";import"./ColumnConfigDialog-BdQSFozo.js";import"./DraggableList-CE6WtsxC.js";import"./search-DZ9sQeP3.js";import"./Input-BlnpxosN.js";import"./useControlled-zuGGnib8.js";import"./Button-BdzvhYpU.js";import"./small-cross-C8REs1_0.js";import"./ActionButton-CqhLLLli.js";import"./Checkbox-CqFRGupA.js";import"./useValueChanged-Bqc3a99Z.js";import"./CollapsiblePanel-BLc6hbqC.js";import"./MultiColumnSortDialog-biomTCey.js";import"./MenuTrigger-DWkwaQzw.js";import"./CompositeItem-xEz2Dkd0.js";import"./ToolbarRootContext-CCmNWFIx.js";import"./getDisabledMountTransitionStyles-DoMzGsSG.js";import"./getPseudoElementBounds-DBjYqk3-.js";import"./chevron-down-DWlA7VyD.js";import"./index-CciezQub.js";import"./error-DpoSEAzj.js";import"./BaseCbacBanner-BJPz2NUr.js";import"./makeExternalStore-CEIovkt3.js";import"./Tooltip-DLd3X7ej.js";import"./PopoverPopup-BRdHMqlD.js";import"./toNumber-FanlPo3j.js";import"./useOsdkClient-CAndLebo.js";import"./tick-B79OUCkC.js";import"./DropdownField-BgIx1anP.js";import"./withOsdkMetrics-BZDDUBEu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

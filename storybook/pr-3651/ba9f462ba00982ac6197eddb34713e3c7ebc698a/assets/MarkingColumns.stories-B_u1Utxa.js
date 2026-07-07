import{f as n,j as t}from"./iframe-ChzRP_PG.js";import{O as p}from"./object-table-9jSq0lTQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BY8T86v_.js";import"./Table-1H3i_ucU.js";import"./index-B47von1n.js";import"./Dialog-jGn8GaEZ.js";import"./cross-BRhKDmms.js";import"./svgIconContainer-COgTYdBs.js";import"./useBaseUiId-CfZ4GhDt.js";import"./InternalBackdrop-C7trBeMH.js";import"./composite-BnmWIAYG.js";import"./index-Ccn-hEdM.js";import"./index-C2zHuJ2V.js";import"./index-1wjlU9-6.js";import"./useEventCallback-CUUxh5Jn.js";import"./SkeletonBar-DlXUQlI2.js";import"./LoadingCell-D9B1KNOI.js";import"./ColumnConfigDialog-i-TmDuTF.js";import"./DraggableList-CXaZ5qlt.js";import"./search-eGelwxV8.js";import"./Input-DJIKe_uT.js";import"./useControlled-BsSki-l6.js";import"./Button-iJkQhw47.js";import"./small-cross-BZfq27_W.js";import"./ActionButton-Bt4IezM3.js";import"./Checkbox-Ce6MTQdf.js";import"./useValueChanged-DG3J_jpB.js";import"./CollapsiblePanel-DEyzLnGS.js";import"./MultiColumnSortDialog-DQO6VMFx.js";import"./MenuTrigger-D7GqRTOS.js";import"./CompositeItem-DnUU1iS-.js";import"./ToolbarRootContext-Bt3g8dZ6.js";import"./getDisabledMountTransitionStyles-BcyS8nIA.js";import"./getPseudoElementBounds-BOvExhUn.js";import"./chevron-down-CTRK-m5O.js";import"./index-DBwXrdpF.js";import"./error-CUVOC1L9.js";import"./BaseCbacBanner-CRVC6k2W.js";import"./makeExternalStore-DxtNI3-p.js";import"./Tooltip-DWQItAoS.js";import"./PopoverPopup-BQALRE0-.js";import"./toNumber-EI7JgeoZ.js";import"./useOsdkClient-k7cJmt3O.js";import"./tick-DQXp8v--.js";import"./DropdownField-DI73TTOe.js";import"./withOsdkMetrics-D9h9tKkS.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-BUYLyZP4.js";import{O as p}from"./object-table-Dgagpcdo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfxS5EEE.js";import"./Table-Ck0afhL9.js";import"./index-TOGfLO60.js";import"./Dialog-CmY80bbx.js";import"./cross-Phnt9VWY.js";import"./svgIconContainer-C8uFt1vs.js";import"./useBaseUiId-BxFYu5yZ.js";import"./InternalBackdrop-DtQlgxru.js";import"./composite-CweMoood.js";import"./index-BLoZC7zp.js";import"./index-RS2rsans.js";import"./index-C9AYPMY1.js";import"./useEventCallback-9c5fBcoH.js";import"./SkeletonBar-CU3EW5xx.js";import"./LoadingCell-pyH64FD4.js";import"./ColumnConfigDialog-B4tLmXjs.js";import"./DraggableList-CHdJLUXf.js";import"./Input-kMNYpXbv.js";import"./useControlled-CkJswszX.js";import"./Button-honTZ6Mw.js";import"./small-cross-4qtj1F0R.js";import"./ActionButton-BeanqsYg.js";import"./Checkbox-Dd5fpNSn.js";import"./minus-eMMf0peO.js";import"./useValueChanged-DS076DBS.js";import"./caret-down-DwfBAhj_.js";import"./CollapsiblePanel-CYJPjpKw.js";import"./MultiColumnSortDialog-CtqF5MK_.js";import"./MenuTrigger-Cby6IkV9.js";import"./CompositeItem-CT3Nr8h1.js";import"./ToolbarRootContext-DwuMEk8N.js";import"./getDisabledMountTransitionStyles-BtAyeiiM.js";import"./getPseudoElementBounds-CZKk7xl4.js";import"./chevron-down-Vrk5hcyk.js";import"./index-BdU2S84P.js";import"./error-ALoGG1Oy.js";import"./BaseCbacBanner-CAzK1avr.js";import"./makeExternalStore-CZchowwZ.js";import"./Tooltip-ohFepPHH.js";import"./PopoverPopup-CV3c36zT.js";import"./toNumber-DarmYl6x.js";import"./useOsdkClient-CDJBkGnW.js";import"./DropdownField-D-2knuiH.js";import"./withOsdkMetrics-DnvsFnWV.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

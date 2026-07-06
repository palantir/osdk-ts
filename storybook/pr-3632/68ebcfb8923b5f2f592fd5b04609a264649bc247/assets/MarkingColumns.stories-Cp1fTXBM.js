import{f as n,j as t}from"./iframe-BV7Th0fF.js";import{O as p}from"./object-table-B0hsqODz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cu3ZHVu2.js";import"./Table-hNnPd4Bl.js";import"./index-Br-jjK7X.js";import"./Dialog-BExJiIBk.js";import"./cross-BIdPiM-5.js";import"./svgIconContainer-CpyPhDQD.js";import"./useBaseUiId-JERyR0A6.js";import"./InternalBackdrop-DRrPdD5b.js";import"./composite-CFCU5Ynw.js";import"./index-FxS8-1eX.js";import"./index-lC9bqkZo.js";import"./index-CDuHQb9W.js";import"./useEventCallback-CxOnPIhj.js";import"./SkeletonBar-BmGoNzmi.js";import"./LoadingCell-Bz-ZACPe.js";import"./ColumnConfigDialog-CWlq7I8b.js";import"./DraggableList-BMV6R4vf.js";import"./search-BQ7KQ6Xp.js";import"./Input-7udr9lBc.js";import"./useControlled-BqzlQWkm.js";import"./Button-7xsuplQ0.js";import"./small-cross-71GKi8CB.js";import"./ActionButton-LMMegQ4C.js";import"./Checkbox-eWyOXvQQ.js";import"./useValueChanged-D2sBWKpy.js";import"./CollapsiblePanel-CGSs357p.js";import"./MultiColumnSortDialog-DxTg-eBj.js";import"./MenuTrigger--brsU60S.js";import"./CompositeItem-M7DYisS1.js";import"./ToolbarRootContext-D-6oFp8s.js";import"./getDisabledMountTransitionStyles-DHCqa2_T.js";import"./getPseudoElementBounds-CjwrFyIQ.js";import"./chevron-down-0i5T79Pd.js";import"./index-BLjCXjpg.js";import"./error-WZUfxqHG.js";import"./BaseCbacBanner-ysAbsNlW.js";import"./makeExternalStore-BQTgj8Pi.js";import"./Tooltip-vXzVzAyT.js";import"./PopoverPopup-DoPOejma.js";import"./toNumber-Cg2neHNf.js";import"./useOsdkClient-DxXbvByC.js";import"./tick-DbZb3mt0.js";import"./DropdownField-CYFObLPJ.js";import"./withOsdkMetrics-C8rxLLzf.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

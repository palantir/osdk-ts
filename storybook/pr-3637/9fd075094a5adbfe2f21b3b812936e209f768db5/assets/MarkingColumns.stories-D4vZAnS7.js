import{f as n,j as t}from"./iframe-CH4bNQkz.js";import{O as p}from"./object-table-CaDLL1lz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-08bwQHsA.js";import"./Table-TjHv1Wy1.js";import"./index-lqOrrWjd.js";import"./Dialog-Dg63Oe6I.js";import"./cross-CBF1hdJp.js";import"./svgIconContainer-CyLPlVwT.js";import"./useBaseUiId-DAC-gIXY.js";import"./InternalBackdrop-DTb8GE2-.js";import"./composite-yo22QLkj.js";import"./index-DNsCKuz5.js";import"./index-9sRS_i3b.js";import"./index-CZIwWXEE.js";import"./useEventCallback-BATbxDzv.js";import"./SkeletonBar-D617CXTH.js";import"./LoadingCell-DP9cNjhX.js";import"./ColumnConfigDialog-CFEX75di.js";import"./DraggableList-DdlYTEep.js";import"./search-BNt3jfeT.js";import"./Input-DhPlgCAv.js";import"./useControlled-BWRxzInE.js";import"./Button-zJe0SN5Z.js";import"./small-cross-BX7eyBC6.js";import"./ActionButton-NY7ebD7-.js";import"./Checkbox-DoxIs_xU.js";import"./useValueChanged-CfQe8T6-.js";import"./CollapsiblePanel-D2zGlOqq.js";import"./MultiColumnSortDialog-BF7OMOvP.js";import"./MenuTrigger-Cv-OkGqd.js";import"./CompositeItem-VlSq4xDr.js";import"./ToolbarRootContext-BpsHvzSn.js";import"./getDisabledMountTransitionStyles-BHsIr7Tb.js";import"./getPseudoElementBounds-C-wVqfyE.js";import"./chevron-down-s5JdkgG2.js";import"./index-CxjrvYi1.js";import"./error-BEfnAN-c.js";import"./BaseCbacBanner-B99cJBPI.js";import"./makeExternalStore-BB1nN1HC.js";import"./Tooltip-BW5ePmyk.js";import"./PopoverPopup-D3aWK0eU.js";import"./toNumber-CnJ4ZDfE.js";import"./useOsdkClient-BOYvcjoU.js";import"./tick-CNjndnF5.js";import"./DropdownField-BmGU5DBo.js";import"./withOsdkMetrics-C32SCAiK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

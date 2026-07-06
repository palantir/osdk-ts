import{f as n,j as t}from"./iframe-Uj1mp38m.js";import{O as p}from"./object-table-tgokQUSE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSqn5y6A.js";import"./Table-CjFzyOkD.js";import"./index-BHk0TP8m.js";import"./Dialog-DUPjsBn8.js";import"./cross-Dosy3bkn.js";import"./svgIconContainer-DytKrQTL.js";import"./useBaseUiId-DCffWhkR.js";import"./InternalBackdrop-DN2UCOEL.js";import"./composite-BeZ0xZol.js";import"./index-CItR5Z3S.js";import"./index-CbsB4Pba.js";import"./index-DsnzPfzX.js";import"./useEventCallback-BnEISw_-.js";import"./SkeletonBar-DiOHHJsN.js";import"./LoadingCell-B2LzfQod.js";import"./ColumnConfigDialog-xiF0b97t.js";import"./DraggableList-K6LU-JyY.js";import"./search-CM1fnS7G.js";import"./Input-BXvcZIHQ.js";import"./useControlled-DmdXr2zx.js";import"./Button-Cprf-AF-.js";import"./small-cross-yy8Q2Fg7.js";import"./ActionButton-DnwdA-Qe.js";import"./Checkbox-CD1f6qyz.js";import"./useValueChanged-Bnpf7xdI.js";import"./CollapsiblePanel-CNYNe1vr.js";import"./MultiColumnSortDialog-DZHzoBVQ.js";import"./MenuTrigger-C36IhzWc.js";import"./CompositeItem-ZKnOOnR6.js";import"./ToolbarRootContext-DbrB9g4j.js";import"./getDisabledMountTransitionStyles-BXGVc3lR.js";import"./getPseudoElementBounds-Dq7wGdu4.js";import"./chevron-down-C4LEllXz.js";import"./index-CSkmIX8m.js";import"./error-Db-oMMpD.js";import"./BaseCbacBanner-CKMghVN3.js";import"./makeExternalStore-CnbOevEA.js";import"./Tooltip-DB7WeAVz.js";import"./PopoverPopup-Dv2YJI-y.js";import"./toNumber-DDBELf3V.js";import"./useOsdkClient-C6tm_DgV.js";import"./tick-p1ebo5JF.js";import"./DropdownField-CzdXx0YB.js";import"./withOsdkMetrics-Ap7Nh5n5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

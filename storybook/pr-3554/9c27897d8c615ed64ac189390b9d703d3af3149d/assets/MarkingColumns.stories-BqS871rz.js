import{f as n,j as t}from"./iframe-DgRWURIN.js";import{O as p}from"./object-table-BEi-k5Ys.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-IpEDQFmi.js";import"./Table-C-1BHEX-.js";import"./index-Vb1ULZ8L.js";import"./Dialog-lMLC_a0j.js";import"./cross-BJMNYJ2C.js";import"./svgIconContainer-CzC7EOV6.js";import"./useBaseUiId-0NkCIExB.js";import"./InternalBackdrop-ria6xw--.js";import"./composite-B_K6iJHg.js";import"./index-DwPO5rm_.js";import"./index-DVFUwbrI.js";import"./index-i3YNBJDk.js";import"./useEventCallback-CtJjK7KW.js";import"./SkeletonBar-CY26rfwE.js";import"./LoadingCell-0GEq1V8P.js";import"./ColumnConfigDialog-DAseNjgk.js";import"./DraggableList-BIbX17uO.js";import"./Input-DCqvxjkL.js";import"./useControlled-BSIJHXUv.js";import"./Button-B3EIEY2G.js";import"./small-cross-DeDXSvCI.js";import"./ActionButton-EOOrmqWG.js";import"./Checkbox-BF8cEOjo.js";import"./minus-DSmDAAnM.js";import"./useValueChanged-b4jLxIww.js";import"./caret-down-D1SN8Sq5.js";import"./CollapsiblePanel-B4vZKzeG.js";import"./MultiColumnSortDialog-W9A08hh0.js";import"./MenuTrigger-DklcoZrd.js";import"./CompositeItem-BqFb59Pw.js";import"./ToolbarRootContext-C3qrF21_.js";import"./getDisabledMountTransitionStyles-BBq88bKm.js";import"./getPseudoElementBounds-CjERo64e.js";import"./chevron-down-DHLoYz_f.js";import"./index-CG09zLwJ.js";import"./error-BInEq3Ok.js";import"./BaseCbacBanner-C4n5f4wi.js";import"./makeExternalStore-jT2gj--9.js";import"./Tooltip-Ba9Jqq7L.js";import"./PopoverPopup-EplE7Ihy.js";import"./toNumber-Cyl-LQBc.js";import"./useOsdkClient-cVNU7KBc.js";import"./DropdownField-D3vleURI.js";import"./withOsdkMetrics-Db-tQd-Y.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{f as n,j as t}from"./iframe-DQr8FaLZ.js";import{O as p}from"./object-table-BTcQ_vfs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs2QajlQ.js";import"./Table-C6-9QlKd.js";import"./index-DW3oaSvd.js";import"./Dialog-C6GxV-A0.js";import"./cross-o_llmjF7.js";import"./svgIconContainer-B_zgM9A6.js";import"./useBaseUiId-CXbO1gJp.js";import"./InternalBackdrop-DdYM4ANw.js";import"./composite-4hoTkEwo.js";import"./index-CI0cIfYk.js";import"./index-Bix70Ik8.js";import"./index-DF-d9Ddc.js";import"./useEventCallback-D3GS0LNf.js";import"./SkeletonBar-BGc6_lWW.js";import"./LoadingCell-ClirrRET.js";import"./ColumnConfigDialog-COQYpvW1.js";import"./DraggableList-DzJc3Kkp.js";import"./search-qIWQBQhq.js";import"./Input-BWDsHnZ9.js";import"./useControlled-1wq4hn2G.js";import"./Button-BrpUhIDF.js";import"./small-cross-CzsyDv9p.js";import"./ActionButton-BuD32CrD.js";import"./Checkbox-Cctunab8.js";import"./useValueChanged-BqlJBLJZ.js";import"./CollapsiblePanel-Cbyceaon.js";import"./MultiColumnSortDialog-CJ6l92mm.js";import"./MenuTrigger-CZCSo9oL.js";import"./CompositeItem-UfOcdBmP.js";import"./ToolbarRootContext-qRJmAPYx.js";import"./getDisabledMountTransitionStyles-DjAnxhnz.js";import"./getPseudoElementBounds-Dr2TC3q1.js";import"./chevron-down-DcZ9ohaK.js";import"./index-Co-hoRNJ.js";import"./error-BNHngFhs.js";import"./BaseCbacBanner-BHlnqEYT.js";import"./makeExternalStore-C3Tf7i_H.js";import"./Tooltip-DRn5kPep.js";import"./PopoverPopup-CnsT9l5E.js";import"./toNumber-Bee1pvl_.js";import"./useOsdkClient--SiuGSgw.js";import"./tick-CTgFuk9N.js";import"./DropdownField-CItyaD00.js";import"./withOsdkMetrics-Y1-k--zP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

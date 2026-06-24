import{f as n,j as t}from"./iframe-ixgxclAz.js";import{O as p}from"./object-table-DwRNgLwe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Z951sbD6.js";import"./Table-CXEuNdCw.js";import"./index-UyUN1S4E.js";import"./Dialog-CkNpCgZN.js";import"./cross-GtXHTvmp.js";import"./svgIconContainer-BOv2CB61.js";import"./useBaseUiId-nhn87M1r.js";import"./InternalBackdrop-DW5BUiqX.js";import"./composite-BRIcUnXO.js";import"./index-CS29jJMs.js";import"./index-BHHhajZ6.js";import"./index-DDOjjptx.js";import"./useEventCallback-BWWsCgWt.js";import"./SkeletonBar-CnEpWdLp.js";import"./LoadingCell-DSRZsBjK.js";import"./ColumnConfigDialog-BaZUk8e3.js";import"./DraggableList-CaYVbDpT.js";import"./Input-zfsfMpNJ.js";import"./useControlled-B9swiPlX.js";import"./Button-DOGb6e3d.js";import"./small-cross-BAXH6SHZ.js";import"./ActionButton-DX6cDoRV.js";import"./Checkbox-DwFpquUR.js";import"./minus-BJ0fyIWq.js";import"./useValueChanged-D3UpZ1tb.js";import"./caret-down-CvZBYf5J.js";import"./CollapsiblePanel-BQPRJS6W.js";import"./MultiColumnSortDialog-BuD6DATh.js";import"./MenuTrigger-Dt519uU8.js";import"./CompositeItem-8E6-DpIg.js";import"./ToolbarRootContext-BFnOrHF8.js";import"./getDisabledMountTransitionStyles-9DoVyZ5C.js";import"./getPseudoElementBounds-B9U77Qac.js";import"./chevron-down-ChU-Cy9S.js";import"./index-Dskgre7P.js";import"./error-DA8LRrsD.js";import"./BaseCbacBanner-CFZxu2ZC.js";import"./makeExternalStore-BVNkXZVK.js";import"./Tooltip-CEr2-Hy8.js";import"./PopoverPopup-DW_8ibCM.js";import"./toNumber-YZHIjKsk.js";import"./useOsdkClient-BlHdSG01.js";import"./DropdownField-B2KGrbU2.js";import"./withOsdkMetrics-CRiIiauM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

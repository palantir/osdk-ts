import{f as n,j as t}from"./iframe-Dd-K4pwY.js";import{O as p}from"./object-table-Do2evtaN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fhwpa5Ho.js";import"./Table-DsvAGFEa.js";import"./index-BpEnXjPU.js";import"./Dialog-D9d1IjWf.js";import"./cross-L46FX1Ei.js";import"./svgIconContainer-JffADWRI.js";import"./useBaseUiId-DaQVicju.js";import"./InternalBackdrop-BoyeL_hV.js";import"./composite-BmhWX_Sm.js";import"./index-C7MMIJPy.js";import"./index-D1Y6rR7L.js";import"./index-jmJKBKgl.js";import"./useEventCallback-DJmiJXKz.js";import"./SkeletonBar-Dpfux73x.js";import"./LoadingCell-CZGDj_pt.js";import"./ColumnConfigDialog-CVDlMxtX.js";import"./DraggableList-DejeY7XZ.js";import"./search-CfZxHBL7.js";import"./Input-Cbx3IDEJ.js";import"./useControlled-C6qH-o74.js";import"./Button-B9H9p6U9.js";import"./small-cross-CO0f8Jka.js";import"./ActionButton-CYM0MTNy.js";import"./Checkbox-DGED6Cgh.js";import"./minus-RYPZaA1m.js";import"./tick-CYR2-bQN.js";import"./useValueChanged-DuaV1TOn.js";import"./caret-down-DkjOD5YB.js";import"./CollapsiblePanel-msXccf2x.js";import"./MultiColumnSortDialog-C75BIxZ4.js";import"./MenuTrigger-DuM7jfug.js";import"./CompositeItem-DNlDnFzk.js";import"./ToolbarRootContext-Iy7UTqWM.js";import"./getDisabledMountTransitionStyles-w5EBkQHP.js";import"./getPseudoElementBounds-mja79wJ6.js";import"./chevron-down-Hq26_DTF.js";import"./index-BNhYMObG.js";import"./error-D9HAyCVO.js";import"./BaseCbacBanner-C82ze3j6.js";import"./makeExternalStore-DFSIRYxq.js";import"./Tooltip-DLztDdPl.js";import"./PopoverPopup-C1Ab2xFC.js";import"./toNumber-BaX8lKZ_.js";import"./useOsdkClient-BVHZyr7q.js";import"./DropdownField-C_8P48xv.js";import"./withOsdkMetrics-CmoSxlM0.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};

import{f as n,j as t}from"./iframe-DjWEGpk8.js";import{O as p}from"./object-table-CK0r24am.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAHRqZH1.js";import"./Table-CcCpU1C3.js";import"./index-B0J2oloL.js";import"./Dialog-B_ZVAzFm.js";import"./cross-1GRRH7fD.js";import"./svgIconContainer-ChJBE8wb.js";import"./useBaseUiId-C6DI0XE1.js";import"./InternalBackdrop-TPQ4DYdg.js";import"./composite-BULlram9.js";import"./index-CTG58gzT.js";import"./index-BujzDHnP.js";import"./index-B2JfD5Eq.js";import"./useEventCallback-DG5SLZly.js";import"./SkeletonBar-Bwir2c9H.js";import"./LoadingCell-DhPSYJzJ.js";import"./ColumnConfigDialog-P5O6Uu9P.js";import"./DraggableList-tLLCQD4h.js";import"./search-BkB5KxBe.js";import"./Input-NTx547BW.js";import"./useControlled-KCs2l9tZ.js";import"./Button-27VpsVpI.js";import"./small-cross-BxE8T7aC.js";import"./ActionButton-Wri30LzD.js";import"./Checkbox-DMUOoXPY.js";import"./useValueChanged-DWt7NM8O.js";import"./CollapsiblePanel-NxLV9Exc.js";import"./MultiColumnSortDialog-CCcWZfI_.js";import"./MenuTrigger-_OyWXqrS.js";import"./CompositeItem-B4cf-cNw.js";import"./ToolbarRootContext-DxpLqVDl.js";import"./getDisabledMountTransitionStyles-BDophGwk.js";import"./getPseudoElementBounds-DrzygsE5.js";import"./chevron-down-Cd8NUspS.js";import"./index-D_5VaQZ7.js";import"./error-w3xuhRXw.js";import"./BaseCbacBanner-CQbE029y.js";import"./makeExternalStore-4k5CuekG.js";import"./Tooltip-D5UJ_UDX.js";import"./PopoverPopup-DM98L0VJ.js";import"./toNumber-DclsDTen.js";import"./useOsdkClient-Bfqcc5ue.js";import"./tick-ByhdScPl.js";import"./DropdownField-CEwgpgOK.js";import"./withOsdkMetrics-B5E9_Z7n.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

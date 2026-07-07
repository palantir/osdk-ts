import{f as n,j as t}from"./iframe-C2AJFBo2.js";import{O as p}from"./object-table-D2dPuVsT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkUZE9vK.js";import"./Table-CiP9TO4o.js";import"./index-CPsgarJX.js";import"./Dialog-CGUvWJ1Y.js";import"./cross-B9FhxkxH.js";import"./svgIconContainer-DFIs2Voo.js";import"./useBaseUiId-Bmlvzb22.js";import"./InternalBackdrop-CpWTXVpg.js";import"./composite-Cl6RsgmQ.js";import"./index-Bdl9M0YN.js";import"./index-ddE8E_A0.js";import"./index-D9_vzIsR.js";import"./useEventCallback-COU0p-QD.js";import"./SkeletonBar-3VL5Ew7c.js";import"./LoadingCell-DFg4Vocn.js";import"./ColumnConfigDialog-CyxytpBU.js";import"./DraggableList-H8K5vjqt.js";import"./search-QLAZUXpO.js";import"./Input-C8La3VvL.js";import"./useControlled-CmJBDZr3.js";import"./Button-C_QuoIqW.js";import"./small-cross-oOV8c4lW.js";import"./ActionButton-CVB6-j2M.js";import"./Checkbox-ButmvH2u.js";import"./useValueChanged-BQ32AdHL.js";import"./CollapsiblePanel-iNOOu0Mx.js";import"./MultiColumnSortDialog-CzTkt4gd.js";import"./MenuTrigger-DS1_UJBl.js";import"./CompositeItem-DOF0WKCw.js";import"./ToolbarRootContext-fahny_0S.js";import"./getDisabledMountTransitionStyles-B9ETO8dv.js";import"./getPseudoElementBounds-Bg101iYS.js";import"./chevron-down-Qwuzhzrm.js";import"./index-CTmfxuFD.js";import"./error-1eRd1AgG.js";import"./BaseCbacBanner-HFooiwv7.js";import"./makeExternalStore-D3WVl0jq.js";import"./Tooltip-BDxmzREo.js";import"./PopoverPopup-B3VAYxhl.js";import"./toNumber-CG-FoKL8.js";import"./useOsdkClient-CUBKj47e.js";import"./tick-C7fUO5JO.js";import"./DropdownField-DnuU2_hS.js";import"./withOsdkMetrics-C-U8kpML.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

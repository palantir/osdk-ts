import{f as n,j as t}from"./iframe-D7J8vumD.js";import{O as p}from"./object-table-CpKthw77.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoI2b-NY.js";import"./Table-CXKnF-E2.js";import"./index-QBifOzzz.js";import"./Dialog-DBTJtSSO.js";import"./cross-B2gz64XV.js";import"./svgIconContainer-DP4Tdjl6.js";import"./useBaseUiId-C50RoOZc.js";import"./InternalBackdrop-xKLq0SGe.js";import"./composite-BGDn0_gf.js";import"./index-Cknec7q6.js";import"./index-BeuKTTLq.js";import"./index-D54_XBsy.js";import"./useEventCallback-DxLErEB8.js";import"./SkeletonBar-DU0N3iZH.js";import"./LoadingCell-wRiZtYuL.js";import"./ColumnConfigDialog-7di5LnED.js";import"./DraggableList-CeTgsnZr.js";import"./search-B7AI5VYb.js";import"./Input-BjK5t-V3.js";import"./useControlled-BHmaFYpg.js";import"./Button-DSmwpg33.js";import"./small-cross-s86btn0Y.js";import"./ActionButton-LmuV9UFu.js";import"./Checkbox-BOLYjcHT.js";import"./useValueChanged-CcRzqgdV.js";import"./CollapsiblePanel-DZG_x_Z_.js";import"./MultiColumnSortDialog-e04rDpoZ.js";import"./MenuTrigger-CQmia2Mi.js";import"./CompositeItem-B4MmY3We.js";import"./ToolbarRootContext-Cwh4PfWk.js";import"./getDisabledMountTransitionStyles-CwmWMk42.js";import"./getPseudoElementBounds-ypB9OXmm.js";import"./chevron-down-DXW5sn_g.js";import"./index-CI_n1iiV.js";import"./error-BIJvNoxf.js";import"./BaseCbacBanner-C8ZhKuIn.js";import"./makeExternalStore-WCk7IxaN.js";import"./Tooltip-DPoJO-Q4.js";import"./PopoverPopup-CihfWm12.js";import"./toNumber-BW6DW27W.js";import"./useOsdkClient-BfSoSRfE.js";import"./tick-B0K_qclC.js";import"./DropdownField--6sRVTkh.js";import"./withOsdkMetrics-C9qNS83F.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
